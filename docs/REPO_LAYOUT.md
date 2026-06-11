# Repository layout

| Path | Purpose |
|------|---------|
| `skills/fde/` | **The one skill** — router (`SKILL.md`) + 15 phase methods (`references/`) — installed to `~/.claude/skills/` |
| `templates/.fde/` | Core memory templates for `init` (phase artifacts are created by phases on demand) |
| `examples/acme-payments/` | Fictional walkthrough with sample `.fde/` files |
| `bin/install.js` | `node bin/install.js` and `node bin/install.js init <name>` |
| `hooks/` | `fdeos-session-start` (read), `fdeos-session-stop` (write), `fdeos-pre-compact` |
| `.claude-plugin/` | Claude Code marketplace metadata |
| `archive/` | Pre-v3: the original 16 standalone skills + phase templates. Not installed. |
| `docs/` | install, USAGE, schema, OPERATIONS, REPO_LAYOUT, skills-reference |

**Install:** [install.md](./install.md) — Claude plugin + git clone is the reliable path.
