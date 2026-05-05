# Installing FDEOS

## Claude Code

```
/plugin install --marketplace github:suboss87/fde-os fdeos
```

That's it. Claude Code installs the plugin directly from GitHub.

Then in your project:

```bash
echo ".fde/" >> .gitignore
```

For project-level FDEOS configuration (optional):

```bash
find ~/.claude/plugins/cache -path "*/fdeos*/CLAUDE.md.template" | head -1 | xargs -I{} cp {} ./CLAUDE.md
```

Open Claude Code in your project and type `@fde` to start.

---

## Cursor / Windsurf / other agents

```bash
npx fdeos@latest
```

The installer copies all skills to the correct directory for your agent automatically.

---

## Keeping FDEOS updated

**Claude Code:**
```
/plugin update fdeos
```

**Other agents:**
```bash
npx fdeos@latest
```

---

## What gets installed

```
skills/
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
```

---

## Manual install

```bash
git clone https://github.com/suboss87/fde-os.git
mkdir -p ~/.claude/skills
cp -r fde-os/skills/* ~/.claude/skills/
cp fde-os/CLAUDE.md.template ./CLAUDE.md
echo ".fde/" >> .gitignore
```
