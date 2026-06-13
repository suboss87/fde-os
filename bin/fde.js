#!/usr/bin/env node
/**
 * fde — the deterministic core of FDEOS.
 * Real tool, no AI required: recon, memory ops, portfolio status.
 * The @fde skill calls these for mechanics and adds judgment on top.
 *
 * Security note: every execSync below runs a FIXED constant command
 * (git introspection only). User input never reaches a shell — file
 * writes go through fs, and search terms through an escaped RegExp.
 *
 *   fde scan                day-1 recon of the cwd repo (facts, no opinions)
 *   fde resume              find this workspace's engagement, print context
 *   fde resume --init <n>   create + bind an engagement for this workspace
 *   fde log <type> <text>   structured append (decision|risk|delivery|contact)
 *   fde receipts <term>     "what did we agree?" — search memory with dates
 *   fde capture             session-end snapshot → context.md (hooks use this)
 *   fde status              portfolio across ~/fde-engagements (red/amber/green)
 */
const fs = require('fs')
const path = require('path')
const os = require('os')
const { execSync } = require('child_process')

const HOME = os.homedir()
const ENGAGEMENTS_ROOT = path.join(HOME, 'fde-engagements')
const REGISTRY = path.join(ENGAGEMENTS_ROOT, '.registry')
const CODE_EXT = ['.js', '.ts', '.tsx', '.jsx', '.py', '.java', '.go', '.rb', '.cs', '.php']
const CONF_EXT = CODE_EXT.concat(['.env', '.yaml', '.yml', '.json'])

// constant-command runner — never receives user input
function sh(cmd, cwd) {
  try {
    return execSync(cmd, { cwd: cwd || process.cwd(), stdio: ['ignore', 'pipe', 'ignore'], timeout: 15000 }).toString().trim()
  } catch (_) { return '' }
}

function slugify(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'engagement'
}

// Walk the repo collecting candidate files. Hard caps keep scan fast on monorepos.
function walk(dir, exts, cap) {
  const out = []
  const skip = new Set(['node_modules', '.git', 'dist', 'build', 'vendor', '.next', 'target', '__pycache__'])
  ;(function rec(d) {
    if (out.length >= cap) return
    let entries
    try { entries = fs.readdirSync(d, { withFileTypes: true }) } catch (_) { return }
    for (const e of entries) {
      if (out.length >= cap) return
      if (e.name.startsWith('.') && e.name !== '.env') continue
      const p = path.join(d, e.name)
      if (e.isDirectory()) { if (!skip.has(e.name)) rec(p) }
      else if (exts.includes(path.extname(e.name)) || e.name === '.env') {
        try { if (fs.statSync(p).size <= 1024 * 1024) out.push(p) } catch (_) {}
      }
    }
  })(dir)
  return out
}

function grepFiles(files, regex, cap) {
  const hits = []
  for (const f of files) {
    if (hits.length >= cap) break
    let text
    try { text = fs.readFileSync(f, 'utf8') } catch (_) { continue }
    const lines = text.split('\n')
    for (let i = 0; i < lines.length && hits.length < cap; i++) {
      if (regex.test(lines[i])) hits.push({ file: path.relative(process.cwd(), f), line: i + 1, text: lines[i].trim().slice(0, 120) })
    }
  }
  return hits
}

// ---------- engagement resolution (zero-ceremony order) ----------

function readRegistry() {
  try {
    return fs.readFileSync(REGISTRY, 'utf8').split('\n').filter(Boolean).map(l => {
      const i = l.lastIndexOf(' ')
      return { workspace: l.slice(0, i), slug: l.slice(i + 1) }
    })
  } catch (_) { return [] }
}

function resolveEngagement() {
  // 1) explicit env (back-compat)
  const env = (process.env.FDEOS_ENGAGEMENT || '').replace(/^~/, HOME).trim()
  if (env && fs.existsSync(env)) return env
  // 2) workspace registry binding (written by resume --init)
  const cwd = process.cwd()
  const reg = readRegistry().find(r => r.workspace === cwd)
  if (reg) {
    const p = path.join(ENGAGEMENTS_ROOT, reg.slug, '.fde')
    if (fs.existsSync(p)) return p
  }
  // 3) global pointer file
  try {
    const ptr = fs.readFileSync(path.join(HOME, '.claude', 'FDEOS-CLAUDE.md'), 'utf8')
    const m = ptr.match(/^FDEOS_ENGAGEMENT=(.+)$/m)
    if (m) {
      const p = m[1].trim().replace(/^~/, HOME)
      if (fs.existsSync(p)) return p
    }
  } catch (_) {}
  // 4) workspace dir name matches an engagement slug
  const guess = path.join(ENGAGEMENTS_ROOT, slugify(path.basename(cwd)), '.fde')
  if (fs.existsSync(guess)) return guess
  // 5) in-repo .fde (engagement-approved only)
  if (fs.existsSync(path.join(cwd, '.fde'))) return path.join(cwd, '.fde')
  return null
}

function templatesDir() {
  for (const c of [path.join(__dirname, '..', 'templates', '.fde'), path.join(__dirname, 'templates', '.fde')]) {
    if (fs.existsSync(c)) return c
  }
  return null
}

// ---------- commands ----------

function cmdScan() {
  const cwd = process.cwd()
  const isGit = !!sh('git rev-parse --git-dir')
  const out = []
  out.push('FDE RECON — ' + path.basename(cwd))
  out.push('local only · git + file reads · no AI, no network — nothing leaves this machine')
  out.push('='.repeat(60))

  // stack + age
  const files = walk(cwd, CONF_EXT.concat(['.md']), 5000)
  const extCount = {}
  for (const f of files) { const e = path.extname(f); extCount[e] = (extCount[e] || 0) + 1 }
  const langs = Object.entries(extCount).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([e, n]) => `${e}:${n}`).join(' ')
  const birth = isGit ? sh('git log --reverse --format=%ad --date=short').split('\n')[0] : 'n/a'
  const last = isGit ? sh('git log -1 --format=%ad --date=short') : 'n/a'
  out.push(`STACK  ${langs || 'no code files found'}   first commit: ${birth}   last: ${last}`)

  // churn × tests = the load-bearing walls
  out.push('\nHOTSPOTS (churn 90d × test coverage) — handle with care:')
  if (isGit) {
    const churn = sh("git log --since='90 days ago' --name-only --pretty=format:") || ''
    const counts = {}
    churn.split('\n').filter(Boolean).forEach(f => { counts[f] = (counts[f] || 0) + 1 })
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8)
    const testFiles = files.filter(f => /test|spec/i.test(f))
    if (top.length === 0) out.push('  (no commits in the last 90 days)')
    for (const [f, n] of top) {
      const base = path.basename(f).replace(/\.[^.]+$/, '')
      const tested = testFiles.some(t => t.includes(base))
      out.push(`  ${String(n).padStart(3)} commits/90d  ${f}  ${tested ? '' : '⚠ NO TEST NEIGHBOR'}`)
    }
  } else out.push('  (not a git repo — churn unavailable)')

  // temporary archaeology
  out.push('\n"TEMPORARY" ARCHAEOLOGY (permanent code with an excuse):')
  const codeFiles = files.filter(f => CODE_EXT.includes(path.extname(f)))
  const tmp = grepFiles(codeFiles, /HACK|FIXME|XXX|temporar|for now|remove this|remove after|workaround/i, 15)
  tmp.length ? tmp.forEach(h => out.push(`  ${h.file}:${h.line}  ${h.text}`)) : out.push('  none found')

  // AI components — they fail silently
  out.push('\nAI COMPONENTS (no exception fires when these drift):')
  const ai = grepFiles(codeFiles, /openai|anthropic|\bllm\b|gpt-|claude|embedding|vector store|inference/i, 10)
  ai.length ? ai.forEach(h => out.push(`  ${h.file}:${h.line}  ${h.text}`)) : out.push('  none found')

  // secrets (redacted)
  out.push('\nPOSSIBLE HARDCODED SECRETS (values redacted):')
  const confFiles = files.filter(f => CONF_EXT.includes(path.extname(f)) || path.basename(f) === '.env')
  const sec = grepFiles(confFiles, /(api[_-]?key|secret|password|token)\s*[:=]\s*['"][^'"]{8,}/i, 10)
    .filter(h => !/example|template|test|sample|placeholder/i.test(h.file + h.text))
  sec.length
    ? sec.forEach(h => out.push(`  ${h.file}:${h.line}  ${h.text.replace(/(['"])([^'"]{4})[^'"]+(['"])/, '$1$2…REDACTED$3')}`))
    : out.push('  none found')

  // previous attempts — the political archaeology
  out.push('\nPREVIOUS ATTEMPTS (ask who ran these, and what happened):')
  const reverts = isGit ? sh("git log --oneline -i --grep=revert --grep=rollback") : ''
  const readmeHits = grepFiles(files.filter(f => /readme/i.test(f)), /revert|rewrite|attempted|abandoned|deprecated/i, 5)
  if (reverts) reverts.split('\n').slice(0, 5).forEach(l => out.push('  git: ' + l))
  readmeHits.forEach(h => out.push(`  ${h.file}:${h.line}  ${h.text}`))
  if (!reverts && readmeHits.length === 0) out.push('  none visible')

  // test landscape
  const testCount = files.filter(f => /test|spec/i.test(f)).length
  out.push(`\nTEST LANDSCAPE  ${testCount} test file(s) across ${codeFiles.length} code files`)

  out.push('\n' + '-'.repeat(60))
  out.push("Facts only — interpretation is the FDE's (or @fde's) job.")
  console.log(out.join('\n'))
}

function cmdResume(args) {
  const initIdx = args.indexOf('--init')
  if (initIdx !== -1) {
    const name = args[initIdx + 1]
    if (!name) { console.error('usage: fde resume --init <engagement-name>'); process.exit(1) }
    const tpl = templatesDir()
    if (!tpl) { console.error('templates not found — run from the fde-os clone or reinstall'); process.exit(1) }
    const slug = slugify(name)
    const fdeDir = path.join(ENGAGEMENTS_ROOT, slug, '.fde')
    fs.mkdirSync(fdeDir, { recursive: true })
    for (const f of fs.readdirSync(tpl)) {
      const src = path.join(tpl, f); const dst = path.join(fdeDir, f)
      if (fs.statSync(src).isDirectory()) fs.mkdirSync(dst, { recursive: true })
      else if (!fs.existsSync(dst)) fs.copyFileSync(src, dst)
    }
    fs.mkdirSync(path.join(fdeDir, 'retrospectives'), { recursive: true })
    // bind THIS workspace to the engagement (zero ceremony next time)
    const line = `${process.cwd()} ${slug}\n`
    const reg = fs.existsSync(REGISTRY) ? fs.readFileSync(REGISTRY, 'utf8') : ''
    if (!reg.includes(line.trim())) fs.appendFileSync(REGISTRY, line)
    console.log(`ENGAGEMENT READY: ${fdeDir}\nbound to workspace: ${process.cwd()}`)
    return
  }
  const eng = resolveEngagement()
  if (!eng) {
    const list = fs.existsSync(ENGAGEMENTS_ROOT)
      ? fs.readdirSync(ENGAGEMENTS_ROOT).filter(d => !d.startsWith('.')).join(', ') || '(none yet)'
      : '(none yet)'
    console.log(`NO ENGAGEMENT for this workspace.\nexisting: ${list}\ncreate + bind one:  fde resume --init <client-name>`)
    process.exit(2)
  }
  console.log(`ENGAGEMENT: ${eng}\n`)
  try { console.log(fs.readFileSync(path.join(eng, 'context.md'), 'utf8')) } catch (_) { console.log('(context.md empty — new engagement)') }
}

function cmdLog(args) {
  const map = { decision: 'decisions.md', risk: 'risks.md', delivery: 'delivery.md', contact: 'stakeholders.md' }
  const type = args[0]; const text = args.slice(1).join(' ')
  if (!map[type] || !text) { console.error('usage: fde log <decision|risk|delivery|contact> <text>'); process.exit(1) }
  const eng = resolveEngagement()
  if (!eng) { console.error('no engagement — run: fde resume --init <name>'); process.exit(2) }
  const date = new Date().toISOString().slice(0, 10)
  fs.appendFileSync(path.join(eng, map[type]), `\n- [${date}] ${text}\n`)
  console.log(`logged → ${map[type]}`)
}

function cmdReceipts(args) {
  const term = args.join(' ')
  if (!term) { console.error('usage: fde receipts <search term>'); process.exit(1) }
  const eng = resolveEngagement()
  if (!eng) { console.error('no engagement — run: fde resume --init <name>'); process.exit(2) }
  const rx = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
  let found = 0
  for (const f of ['decisions.md', 'delivery.md', 'risks.md', 'stakeholders.md', 'context.md', 'success.md', 'brief.md', 'reality.md']) {
    const p = path.join(eng, f)
    if (!fs.existsSync(p)) continue
    fs.readFileSync(p, 'utf8').split('\n').forEach((l, i) => {
      if (rx.test(l)) { console.log(`${f}:${i + 1}  ${l.trim().slice(0, 160)}`); found++ }
    })
  }
  if (!found) console.log(`no record of "${term}" — if it was agreed, it was never logged. That is itself the answer.`)
}

function cmdCapture() {
  const eng = resolveEngagement()
  if (!eng) process.exit(0) // silent: capture must never break a session
  const branch = sh('git branch --show-current')
  const lastCommit = sh("git log -1 --format='%h %s'").slice(0, 100)
  // porcelain lines are "XY path" — sh() trims, so parse by first whitespace
  const changed = sh('git status --porcelain').split('\n').filter(Boolean).slice(0, 8)
    .map(l => l.trim().split(/\s+/).slice(1).join(' ')).join(' ')
  const updated = fs.readdirSync(eng).filter(f => {
    if (!f.endsWith('.md') || f === 'context.md') return false
    try { return (Date.now() - fs.statSync(path.join(eng, f)).mtimeMs) < 12 * 3600 * 1000 } catch (_) { return false }
  }).join(' ')
  if (!changed && !updated) process.exit(0) // idle session — keep memory clean
  const d = new Date()
  const stamp = `${d.toISOString().slice(0, 10)} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
  let block = `\n<!-- fdeos auto-capture -->\n## Session end — ${stamp}\n`
  if (branch) block += `- workspace: \`${branch}\` @ ${lastCommit || 'no commits yet'}\n`
  if (changed) block += `- uncommitted: ${changed}\n`
  if (updated) block += `- engagement files updated: ${updated}\n`
  try { fs.appendFileSync(path.join(eng, 'context.md'), block) } catch (_) {}
}

function cmdStatus() {
  if (!fs.existsSync(ENGAGEMENTS_ROOT)) { console.log('no engagements yet — fde resume --init <name>'); return }
  const rows = []
  for (const d of fs.readdirSync(ENGAGEMENTS_ROOT)) {
    if (d.startsWith('.')) continue
    const eng = path.join(ENGAGEMENTS_ROOT, d, '.fde')
    if (!fs.existsSync(eng)) continue
    const read = f => { try { return fs.readFileSync(path.join(eng, f), 'utf8') } catch (_) { return '' } }
    const ctx = read('context.md'); const stake = read('stakeholders.md'); const risks = read('risks.md')
    const phase = (ctx.match(/phase[:* ]+\**([a-z-]+)/i) || [])[1] || '?'
    // trust heuristic per line; legend lines listing green AND red don't count
    const sLines = stake.split('\n').filter(l => !(/green/i.test(l) && /red|amber/i.test(l)))
    const trust = sLines.some(l => /\bred\b/i.test(l)) ? 'RED'
      : sLines.some(l => /amber|gone quiet|routing around|escalat/i.test(l)) ? 'amber' : 'green'
    // first real risk row: skip headers, separators, comments
    const topRisk = (risks.split('\n').find(l => {
      const t = l.trim()
      return /^[-|]/.test(t) && t.length > 20 && !/^\|?[-\s|]+$/.test(t) &&
        !/risk\s*\|\s*status|mitigation/i.test(t) && !t.startsWith('<!--')
    }) || '').replace(/\|/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60)
    let updated = 'never'
    try {
      const days = Math.floor((Date.now() - fs.statSync(path.join(eng, 'context.md')).mtimeMs) / 86400000)
      updated = days === 0 ? 'today' : `${days}d ago`
    } catch (_) {}
    rows.push({ name: d, phase, trust, updated, topRisk })
  }
  if (!rows.length) { console.log('no engagements yet'); return }
  const order = { RED: 0, amber: 1, green: 2 }
  rows.sort((a, b) => order[a.trust] - order[b.trust])
  console.log('FDE PORTFOLIO — trust-first triage (heuristic: red > amber > green)\n')
  for (const r of rows) {
    console.log(`  [${r.trust.padEnd(5)}] ${r.name.padEnd(24)} phase:${r.phase.padEnd(10)} updated:${r.updated.padEnd(8)} ${r.topRisk}`)
  }
  console.log('\nred/amber derive from stakeholders.md signal words — verify before acting.')
}

const [cmd, ...args] = process.argv.slice(2)
switch (cmd) {
  case 'scan': cmdScan(); break
  case 'resume': cmdResume(args); break
  case 'log': cmdLog(args); break
  case 'receipts': cmdReceipts(args); break
  case 'capture': cmdCapture(); break
  case 'status': cmdStatus(); break
  default:
    console.log(`fde — deterministic core of FDEOS
  fde scan                 day-1 recon of this repo (facts, no AI)
  fde resume               load this workspace's engagement memory
  fde resume --init <name> create + bind engagement for this workspace
  fde log <type> <text>    append decision|risk|delivery|contact
  fde receipts <term>      "what did we agree?" with dates
  fde capture              session-end memory snapshot (hooks use this)
  fde status               portfolio across all engagements`)
}
