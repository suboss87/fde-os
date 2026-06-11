# Installing FDEOS

FDEOS installs on **your laptop**—where **your AI coding agent** runs. Not on client servers, CI, or environments you do not own.

**Terminology:** **You** = human FDE. **Agent** = AI coding software (e.g. Claude Code), never a person. See [README § Who does what](../README.md#who-does-what).

**Read first:** [Quickstart](../README.md#quickstart) · [How it works](../README.md#how-it-works)

---

## Who needs this install

| Situation | Install |
|-----------|---------|
| Claude Code only | Marketplace plugin; run `node bin/install.js` once for hooks on disk |
| Multiple AI tools or air-gap | Git clone + `node bin/install.js` per tool |
| Convenience | `npx fdeos@latest` when npm ≥ **3.0.0** |

---

## Claude Code (recommended)

```text
/plugin marketplace add suboss87/fde-os
/plugin install fdeos@fdeos
```

Copy skills and hooks to disk:

```bash
git clone https://github.com/suboss87/fde-os.git
cd fde-os
node bin/install.js
```

---

## npm CLI

```bash
npm view fdeos version   # must be 3.0.0+ (v2.x on npm installs the old 16-skill layout)
npx fdeos@latest
```

If registry shows **1.0.0**, use git clone—old package used a different install model.

---

## Create an engagement

```bash
cd fde-os
node bin/install.js init <engagement-name>
```

Or with npm 3.0.0+: `npx fdeos@latest init <engagement-name>`

```text
~/fde-engagements/<engagement-name>/
  .fde/           ← AI reads/writes; you own it
  ENGAGEMENT.md
```

---

## Point the AI at your notes

```text
FDEOS_ENGAGEMENT=~/fde-engagements/<engagement-name>/.fde
```

| Method | When |
|--------|------|
| `~/.claude/FDEOS-CLAUDE.md` | Default (created on install) |
| Shell `export` | Quick session |
| Project `CLAUDE.md` | Only if engagement allows that file in workspace |

Open your workspace. In the **AI chat**, type `@fde`.

---

## The memory hooks

`node bin/install.js` copies three hooks to `~/.claude/hooks/` (registered automatically by the Claude Code plugin; for other tools, register per that tool's hook documentation):

| Hook | When | What it does |
|------|------|--------------|
| `fdeos-session-start` | session start | loads `context.md` so the AI starts where you left off |
| `fdeos-session-stop` | session end | appends a deterministic "where we left off" (branch, changes, updated artifacts) to `context.md` |
| `fdeos-pre-compact` | before compaction | preserves engagement state across long sessions |

Together they close the memory loop: read side + write side. You maintain nothing.

---

## Update

```bash
cd fde-os && git pull && node bin/install.js
```

Or when npm ≥ 3.0.0: `npx fdeos@latest`

---

## Usage

[USAGE.md](./USAGE.md) · [OPERATIONS.md](./OPERATIONS.md)
