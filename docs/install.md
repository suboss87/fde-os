# Installing FDEOS

## Claude Code

```bash
npx fdeos@latest
```

The installer copies all skills and hooks to `~/.claude/skills/` automatically.

Then add CLAUDE.md to your project:

```bash
cp ~/.claude/FDEOS-CLAUDE.md.template ./CLAUDE.md
```

Open Claude Code in your project and type `@fde` to start.

---

## Cursor / Windsurf / other agents

```bash
npx fdeos@latest
```

After running the installer, copy the skills to your agent's skills directory and `FDEOS-CLAUDE.md.template` to your project's system prompt file. Check your agent's documentation for the skills directory path.

---

## Keeping FDEOS updated

```bash
npx fdeos@latest
```

Same command installs and updates.

---

## What gets installed

```
~/.claude/skills/
  fde/              entry point, routes to everything
  fde-land/         first 48 hours
  fde-audit/        mid-engagement takeover
  fde-discover/     find the real problem
  fde-sketch/       prototype and pitch
  fde-build/        safe implementation
  fde-rescue/       production crisis
  fde-ship/         deploy safely
  fde-close/        wrap up and hand off
  fde-plan/         task breakdown
  fde-review/       code review
  fde-debug/        systematic debugging
  fde-dashboard/    status across engagements
  healthcare-fde/   HIPAA overlay
  fintech-fde/      PCI-DSS overlay
  gov-fde/          FedRAMP overlay

~/.claude/hooks/
  session-start     loads @fde and engagement context on every session
  pre-compact       preserves key state before context window resets
```

Your project's `CLAUDE.md` tells Claude Code to use these skills at the start of every session.

---

## Manual install (no npm)

```bash
git clone https://github.com/suboss87/fde-os.git
mkdir -p ~/.claude/skills
cp -r fde-os/skills/* ~/.claude/skills/
cp fde-os/CLAUDE.md.template ./CLAUDE.md
```
