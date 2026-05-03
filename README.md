# FDEOS

![demo](media/demo.gif)

> **Your AI coding agent already knows how to write code. FDEOS teaches it how to handle a real engagement — the kind where you don't know the codebase, the customer can't articulate the real problem, and you have to ship anyway.**

---

## The Problem

You're dropped into a customer project. The codebase is old, undocumented, and partially broken. The stakeholder says "fix the payment module," but you sense that's not the real issue. You don't know the codebase, who to trust, or where the skeletons are buried.

Without FDEOS, you figure it out alone. Weeks of trial and error. Wrong assumptions. Fingers crossed on deploy day.

---

## How it works

Invoke `@fde`. Tell it what's happening. It asks one question if it needs clarity, then gives direction like a 30-year veteran who has seen this exact situation before.

You don't pick a skill. You don't read a methodology. You just describe your situation and get told what to do next.

Everything gets written to a `.fde/` directory — trust profile, real problem, codebase map, decisions, risks, delivery record. Sessions end, context survives. Another FDE picks it up and is operational in minutes.

---

## See it in action

```
$ claude
> @fde "I'm starting at Meridian Bank. Payments are failing. First meeting in an hour."

Before you write any code, ask what workaround they've been using.
Look for a manual spreadsheet or a nightly script. That's the real spec.

> They've been updating a reconciliation spreadsheet every night for two years.

The real need is automated reconciliation, not a timeout fix.
Build a throwaway that mimics the spreadsheet and show it today.
Note: the spreadsheet contains transaction data — treat it as sensitive.
```

No code written. The real problem surfaced in 3 minutes.

---

## Quick Start

```bash
# Claude Code
/plugin marketplace add suboss87/fde-marketplace
/plugin install fde-os@suboss87/fde-marketplace

# Cursor
/add-plugin fde-os

# Any agent
npx skills add suboss87/fde-os
```

All platforms: [docs/install.md](docs/install.md)

---

## Skills

You don't need to know these. `@fde` routes to the right one based on what you tell it.

| Skill | When it activates |
|-------|------------------|
| `@fde` | Any moment. Tell your story. |
| `@fde-land` | New engagement. First 48 hours. |
| `@fde-audit` | Taking over mid-engagement or brownfield parachute. |
| `@fde-discover` | Finding the real problem and mapping the terrain. |
| `@fde-sketch` | Validate direction before committing to a build. |
| `@fde-build` | Safe implementation in any codebase, legacy or new. |
| `@fde-rescue` | Production fire. Something's broken and it can't wait. |
| `@fde-ship` | Deploy safely with canary and tested rollback. |
| `@fde-close` | Wrap up, encode what was learned, hand off cleanly. |
| `@fde-dashboard` | Generate a status view across all your active engagements. |

Full reference: [docs/skills-reference.md](docs/skills-reference.md)

---

## Who this is for

- **Engineers dropped into messy enterprise projects** — "fix this legacy system" with no docs and no context
- **Independent consultants and agencies** — run engagements end-to-end without a team behind you
- **Technical founders** — ship into regulated, brownfield, or high-stakes environments
- **Anyone leading an AI or software transformation** — from a $10K gig to a $50M programme

Works for any industry. Any size of engagement. Any stage — start, middle, or crisis.

---

## Enterprise patterns

Drop these into `.claude/skills/` alongside FDEOS for regulated industries.

| Pattern | Adds |
|---------|------|
| `healthcare-fde` | HIPAA: PHI handling, audit trails, encryption |
| `fintech-fde` | PCI-DSS: transaction integrity, fraud detection, idempotency |
| `gov-fde` | FedRAMP: security boundaries, ATO awareness, data sovereignty |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT
