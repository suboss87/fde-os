# Installing FDEOS

## Claude Code (recommended)

```bash
/plugin marketplace add suboss87/fde-marketplace
/plugin install fde-os@suboss87/fde-marketplace
```

## Cursor

```bash
/add-plugin fde-os
```

## Any agent (one command)

```bash
npx skills add suboss87/fde-os
```

## Codex

Tell Codex: `Fetch and follow instructions from https://raw.githubusercontent.com/suboss87/fde-os/main/.codex/INSTALL.md`

## OpenCode

Tell OpenCode: `Fetch and follow instructions from https://raw.githubusercontent.com/suboss87/fde-os/main/.opencode/INSTALL.md`

## GitHub Copilot CLI

```bash
copilot plugin marketplace add suboss87/fde-marketplace
copilot plugin install fde-os@suboss87/fde-marketplace
```

## Gemini CLI

```bash
gemini extensions install https://github.com/suboss87/fde-os
```

## Manual

```bash
git clone https://github.com/suboss87/fde-os.git
cp -r fde-os/skills/ .claude/skills/
cp fde-os/CLAUDE.md.template ./CLAUDE.md
```

After installing, add this to your `CLAUDE.md` to load FDEOS on every session:

```
Skills: .claude/skills/
```

Start with `@fde-master` for any new engagement.
