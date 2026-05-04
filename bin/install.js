#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const os = require('os')

const SKILLS_SRC = path.join(__dirname, '..', 'skills')
const HOOKS_SRC = path.join(__dirname, '..', 'hooks')
const CLAUDE_MD_SRC = path.join(__dirname, '..', 'CLAUDE.md.template')

const GLOBAL_SKILLS_DIR = path.join(os.homedir(), '.claude', 'skills')

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function printBanner() {
  console.log('')
  console.log('  FDEOS')
  console.log('  The engagement operating system for Forward Deployed Engineers')
  console.log('')
}

function printSuccess() {
  console.log('  Skills installed to ~/.claude/skills/')
  console.log('')
  console.log('  Next steps:')
  console.log('')
  console.log('  1. Copy CLAUDE.md to your project:')
  console.log('     cp ~/.claude/skills/../CLAUDE.md.template ./CLAUDE.md')
  console.log('')
  console.log('  2. Open Claude Code in your project and type:')
  console.log('     @fde')
  console.log('')
  console.log('  Tell it what is happening. That is the entire interface.')
  console.log('')
}

printBanner()

try {
  copyDir(SKILLS_SRC, GLOBAL_SKILLS_DIR)

  const hooksDir = path.join(os.homedir(), '.claude', 'hooks')
  fs.mkdirSync(hooksDir, { recursive: true })
  const hookFiles = fs.readdirSync(HOOKS_SRC)
  for (const hook of hookFiles) {
    const dest = path.join(hooksDir, hook)
    fs.copyFileSync(path.join(HOOKS_SRC, hook), dest)
    try { fs.chmodSync(dest, '755') } catch (e) {}
  }

  const claudeMdDest = path.join(os.homedir(), '.claude', 'FDEOS-CLAUDE.md.template')
  fs.copyFileSync(CLAUDE_MD_SRC, claudeMdDest)

  printSuccess()
} catch (err) {
  console.error('  Install failed:', err.message)
  console.error('')
  console.error('  Manual install:')
  console.error('  git clone https://github.com/suboss87/fde-os.git')
  console.error('  mkdir -p ~/.claude/skills && cp -r fde-os/skills/* ~/.claude/skills/')
  process.exit(1)
}
