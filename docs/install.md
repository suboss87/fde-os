# Installing FDEOS

## Claude Code

The only install method that works today is manual. Two commands, then you're running.

```bash
# 1. Clone the repo
git clone https://github.com/suboss87/fde-os.git

# 2. Copy skills to your Claude Code global skills directory
mkdir -p ~/.claude/skills
cp -r fde-os/skills/* ~/.claude/skills/
```

Then in your project, copy the CLAUDE.md template:

```bash
cp fde-os/CLAUDE.md.template /path/to/your-project/CLAUDE.md
```

Open Claude Code in your project directory and type:

```
@fde
```

Tell it what's happening. That's it.

---

## Cursor / Windsurf / other agents

Same process — copy the skills directory to wherever your agent loads skills from. Check your agent's documentation for the skills directory path.

For any agent that reads a CLAUDE.md or system prompt file, copy `CLAUDE.md.template` to that location.

---

## Enterprise overlays (healthcare, fintech, government)

The enterprise overlays are included in the skills directory. They activate automatically when `@fde` detects the relevant context — no separate install needed.

If you want to load them permanently for a specific engagement:

```bash
# Example: healthcare engagement
cp fde-os/skills/healthcare-fde/SKILL.md /path/to/your-project/.claude/skills/
```

---

## Keeping FDEOS updated

```bash
cd fde-os
git pull
cp -r skills/* ~/.claude/skills/
```

---

## What gets installed

```
~/.claude/skills/
  fde/              — entry point, routes to everything
  fde-land/         — first 48 hours
  fde-audit/        — mid-engagement takeover
  fde-discover/     — find the real problem
  fde-sketch/       — prototype and pitch
  fde-build/        — safe implementation
  fde-rescue/       — production crisis
  fde-ship/         — deploy safely
  fde-close/        — wrap up and hand off
  fde-plan/         — task breakdown
  fde-review/       — code review
  fde-debug/        — systematic debugging
  fde-dashboard/    — status across engagements
  healthcare-fde/   — HIPAA overlay
  fintech-fde/      — PCI-DSS overlay
  gov-fde/          — FedRAMP overlay
```

Your project's `CLAUDE.md` tells Claude Code to load these skills at the start of every session.
