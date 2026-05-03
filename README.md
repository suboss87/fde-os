# FDEOS

Your AI coding agent knows how to write code. FDEOS teaches it how to run an engagement.

---

You're dropped into a customer project. The codebase is undocumented. The stakeholder says "fix the payment module" but that's not the real problem. You don't know who to trust, where the bodies are buried, or what done looks like.

FDEOS gives your agent the judgment to handle that.

---

## How it works

Invoke `@fde`. Tell it what's happening. It asks one question if it needs clarity, then tells you what to do — like a 30-year veteran sitting next to you who's seen this exact situation before.

You don't pick a skill. You don't read a playbook. You describe your situation and get told what to do next.

Everything gets written to `.fde/` — trust profile, real problem, codebase map, decisions, risks, delivery record. Sessions end, context survives. Another FDE picks it up and is operational in minutes.

---

## In practice

```
> @fde "I'm starting at Meridian Bank. Payments are failing. First meeting in an hour."

Before you write any code, ask what workaround they've been using.
Look for a manual spreadsheet or a nightly script. That's the real spec.

> They've been updating a reconciliation spreadsheet every night for two years.

The real need is automated reconciliation, not a timeout fix.
Build a throwaway that mimics the spreadsheet and show it today.
Note: the spreadsheet contains transaction data — treat it as sensitive.
```

No code written. Real problem found in 3 minutes.

---

## Install

```bash
# Claude Code
npx skills add suboss87/fde-os

# Cursor / Windsurf / any agent
/add-plugin fde-os
```

Full install guide: [docs/install.md](docs/install.md)

---

## Skills

You don't pick these. `@fde` routes to the right one based on what you tell it.

| Skill | What it does |
|-------|-------------|
| `@fde` | Entry point. Tell your story. |
| `@fde-land` | First 48 hours. Builds trust, maps stakeholders, defines success. |
| `@fde-audit` | Taking over mid-engagement. Separates what's real from what's assumed. |
| `@fde-discover` | Finds the real problem. Maps the codebase. Surfaces shadow processes. |
| `@fde-sketch` | Builds a throwaway to validate direction. Pitches it in business terms. |
| `@fde-build` | Safe implementation. Characterisation tests, Strangler Fig, blast radius. |
| `@fde-rescue` | Production fire. Stabilise first, understand second, fix third. |
| `@fde-ship` | Deploy safely. Pre-flight checklist, canary, verified rollback. |
| `@fde-close` | Wrap up. Retrospective, pattern extraction, clean handoff. |
| `@fde-dashboard` | Generates a status view across all active engagements. |

---

## For regulated industries

Drop these alongside FDEOS in `.claude/skills/`:

| Pattern | What it adds |
|---------|-------------|
| `healthcare-fde` | HIPAA: PHI handling, audit trails, encryption |
| `fintech-fde` | PCI-DSS: transaction integrity, fraud detection, idempotency |
| `gov-fde` | FedRAMP: security boundaries, ATO awareness, data sovereignty |

---

## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT
