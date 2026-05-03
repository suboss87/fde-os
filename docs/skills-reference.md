# FDEOS Skills Reference

All 10 skills. You don't need to invoke these directly — `@fde` routes to the right one based on your situation.

---

## Skills

| Skill | What it does |
|-------|-------------|
| `@fde` | Entry point. Tell your story, get direction. Reads `.fde/` context automatically. |
| `@fde-land` | First 48 hours. Builds trust, reads the environment, maps stakeholders, defines success. |
| `@fde-audit` | Mid-engagement takeover. Separates what's real from what's assumed. |
| `@fde-discover` | Finds the real problem. Maps the codebase. Looks for shadow processes and workarounds. |
| `@fde-sketch` | Builds a throwaway to validate direction. Pitches the outcome in business terms. |
| `@fde-build` | Safe implementation. Characterisation tests, Strangler Fig, blast radius analysis. |
| `@fde-rescue` | Production crisis. Stabilise first, understand second, fix third. |
| `@fde-ship` | Deploy safely. Pre-flight checklist, canary, verified rollback. |
| `@fde-close` | End of engagement. Retrospective, pattern extraction, customer handoff. |
| `@fde-dashboard` | Generates a static HTML dashboard from all `.fde/` data across projects. |

---

## The .fde/ directory

Every skill reads from and writes to `.fde/` in the project root. This is the engagement brain.

```
.fde/
  context.md         — current engagement state (auto-updated)
  brief.md           — what we were told
  success.md         — agreed definition of done
  trust-profile.md   — sacred data, fears, AI policy, approval chain
  stakeholders.md    — who matters, who's resistant, who's the champion
  reality.md         — what the real problem actually is
  terrain.md         — codebase map, hotspots, data flow, test gaps
  audit.md           — mid-engagement state (if joining in progress)
  prototype-log.md   — what was built, shown, and learned
  business-case.md   — customer problem, success metrics, trade-offs
  decisions.md       — every significant choice and why
  risks.md           — live risk register
  delivery.md        — what shipped and running value log
  chaos-log.md       — incident records
  handoff.md         — operational knowledge for the team taking over
  patterns.md        — reusable patterns extracted
```

`.fde/` must be in `.gitignore`. It contains sensitive customer information.

---

## Enterprise patterns

| Pattern | Adds |
|---------|------|
| `healthcare-fde` | HIPAA: PHI handling, audit trails, encryption |
| `fintech-fde` | PCI-DSS: transaction integrity, fraud detection, idempotency |
| `gov-fde` | FedRAMP: security boundaries, ATO awareness, data sovereignty |

---

## Three engagement speeds

`@fde` adapts to how long you have:

- **Sprint** (1-2 days): land, discover, sketch, ship. Move fast, minimal ceremony.
- **Standard** (1-4 weeks): full sequence at a measured pace.
- **Programme** (months): full sequence with stakeholder management, pattern extraction, formal handoff.

---

See [FDE-METHODOLOGY.md](../FDE-METHODOLOGY.md) for the principles behind each skill.
