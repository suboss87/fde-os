#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const os = require('os')

const SKILLS_SRC = path.join(__dirname, '..', 'skills')
const HOOKS_SRC = path.join(__dirname, '..', 'hooks')
const CLAUDE_MD_SRC = path.join(__dirname, '..', 'CLAUDE.md.template')
const FDE_TEMPLATES_SRC = path.join(__dirname, '..', 'templates', '.fde')

const GLOBAL_SKILLS_DIR = path.join(os.homedir(), '.claude', 'skills')
const GLOBAL_HOOKS_DIR = path.join(os.homedir(), '.claude', 'hooks')
const HOOK_SCRIPTS = ['session-start', 'session-stop', 'pre-compact']
const ENGAGEMENTS_ROOT = path.join(os.homedir(), 'fde-engagements')

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function copyTemplateTree(src, dest, onlyMissing) {
  let merged = 0
  fs.mkdirSync(dest, { recursive: true })
  for (const name of fs.readdirSync(src)) {
    const srcPath = path.join(src, name)
    const destPath = path.join(dest, name)
    if (fs.statSync(srcPath).isDirectory()) {
      merged += copyTemplateTree(srcPath, destPath, onlyMissing)
    } else if (!onlyMissing || !fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath)
      if (onlyMissing) merged++
    }
  }
  return merged
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'engagement'
}

// v2 shipped 16 standalone skills; v3 is one `fde` skill + references.
// Leaving the old ones in place would route users to stale content.
const LEGACY_SKILL_DIRS = [
  'fde-land', 'fde-discover', 'fde-audit', 'fde-rescue', 'fde-sketch',
  'fde-close', 'fde-engineering', 'fde-plan', 'fde-build', 'fde-review',
  'fde-debug', 'fde-ship', 'fde-dashboard', 'healthcare-fde', 'fintech-fde',
  'gov-fde',
]

function removeLegacySkills() {
  let removed = 0
  for (const dir of LEGACY_SKILL_DIRS) {
    const p = path.join(GLOBAL_SKILLS_DIR, dir)
    if (fs.existsSync(path.join(p, 'SKILL.md'))) {
      fs.rmSync(p, { recursive: true, force: true })
      removed++
    }
  }
  return removed
}

function installSkills() {
  const removed = removeLegacySkills()
  if (removed > 0) console.log(`  Removed ${removed} v2 skill dir(s) (now covered by @fde)`)
  copyDir(SKILLS_SRC, GLOBAL_SKILLS_DIR)
  fs.mkdirSync(GLOBAL_HOOKS_DIR, { recursive: true })
  for (const name of HOOK_SCRIPTS) {
    const src = path.join(HOOKS_SRC, name)
    if (!fs.existsSync(src)) continue
    const dest = path.join(GLOBAL_HOOKS_DIR, `fdeos-${name}`)
    fs.copyFileSync(src, dest)
    try {
      fs.chmodSync(dest, '755')
    } catch (_) {}
  }
  const globalPointer = path.join(os.homedir(), '.claude', 'FDEOS-CLAUDE.md')
  if (!fs.existsSync(globalPointer)) {
    fs.copyFileSync(CLAUDE_MD_SRC, globalPointer)
  }
  fs.copyFileSync(CLAUDE_MD_SRC, path.join(os.homedir(), '.claude', 'FDEOS-CLAUDE.md.template'))
}

function cmdInit(engagementName) {
  if (!engagementName) {
    console.error('  Usage: node bin/install.js init <engagement-name>')
    console.error('  Example: node bin/install.js init retailbank-payments')
    process.exit(1)
  }
  const slug = slugify(engagementName)
  const root = path.join(ENGAGEMENTS_ROOT, slug)
  const fdeDir = path.join(root, '.fde')
  const created = !fs.existsSync(fdeDir)
  const merged = copyTemplateTree(FDE_TEMPLATES_SRC, fdeDir, !created)

  const pointer = path.join(root, 'ENGAGEMENT.md')
  if (!fs.existsSync(pointer)) {
    fs.writeFileSync(
      pointer,
      `# ${engagementName}\n\nEngagement root: \`${fdeDir}\`\n\nPoint your **AI coding agent** at this folder (not a human colleague). Add to ~/.claude/FDEOS-CLAUDE.md:\n\n\`\`\`\nFDEOS_ENGAGEMENT=${fdeDir}\n\`\`\`\n\nOpen your workspace. In the AI chat, type \`@fde\`.\n`,
    )
  }

  console.log('')
  console.log('  FDEOS engagement created (private notes on your machine)')
  console.log('')
  console.log(`  ${fdeDir}`)
  if (created) console.log('  (new)')
  else if (merged > 0) console.log(`  (${merged} missing template file(s) added)`)
  console.log('')
  console.log('  Next:')
  console.log('  1. Open your workspace for this engagement')
  console.log(`  2. Point your AI coding agent at: FDEOS_ENGAGEMENT=${fdeDir}`)
  console.log('  3. In the AI chat (not email), type: @fde and describe what is happening')
  console.log('')
}

function cmdInstall() {
  console.log('')
  console.log('  FDEOS — installs on YOUR machine only')
  console.log('')
  installSkills()
  console.log('  Skills → ~/.claude/skills/')
  console.log('  Hooks → ~/.claude/hooks/fdeos-*')
  console.log('')
  console.log('  Create an engagement (stays off customer infrastructure):')
  console.log('    node bin/install.js init <engagement-name>')
  console.log('')
  console.log('  Example:')
  console.log('    node bin/install.js init acme-payments')
  console.log('  (npm 3.0.0+: npx fdeos@latest init <engagement-name>)')
  console.log('')
  console.log('  Then open your workspace and use @fde')
  console.log('  Docs: docs/install.md')
  console.log('')
}

const arg = process.argv[2]
if (arg === 'init') {
  cmdInit(process.argv[3])
} else {
  cmdInstall()
}
