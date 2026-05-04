# FDEOS Skills Reference

13 skills across three groups. You don't invoke these directly, `@fde` routes to the right one based on your situation.

---

## Engagement phase skills

| Skill | What it does |
|-------|-------------|
| `@fde` | Entry point. Tell your story, get direction. Reads `.fde/context.md` automatically. |
| `@fde-land` | First 48 hours. Builds trust, reads the environment, maps stakeholders, defines success. |
| `@fde-audit` | Mid-engagement takeover. Separates what's real from what's assumed. |
| `@fde-discover` | Finds the real problem. Maps the codebase. Surfaces shadow processes and workarounds. |
| `@fde-sketch` | Builds a throwaway to validate direction. Pitches the outcome in business terms. |
| `@fde-build` | Safe implementation. Characterisation tests, Strangler Fig, blast radius analysis. |
| `@fde-rescue` | Production crisis. Stabilise first, understand second, fix third. |
| `@fde-ship` | Deploy safely. Pre-flight checklist, canary, verified rollback. |
| `@fde-close` | End of engagement. Retrospective, pattern extraction, customer handoff. |

---

## Execution quality skills

| Skill | What it does |
|-------|-------------|
| `@fde-plan` | Breaks work into atomic, shippable tasks. Sequences by risk. Adds stakeholder touchpoints. |
| `@fde-review` | Two-stage code review: spec compliance first, then blast radius, rollback, and AI policy. |
| `@fde-debug` | Systematic debugging. Reproduce, isolate, check what changed, form one hypothesis, fix root cause. |

---

## Visibility

| Skill | What it does |
|-------|-------------|
| `@fde-dashboard` | Generates a static HTML dashboard from all `.fde/` data across projects. |

---

## Enterprise overlays

These activate alongside phase skills when the engagement context matches. They don't replace phase skills, they layer on top.

| Overlay | Adds |
|---------|------|
| `healthcare-fde` | HIPAA: PHI identification, audit trails, break-glass access, AI policy in clinical environments |
| `fintech-fde` | PCI-DSS: idempotency, transaction integrity, fraud signals, regulatory reporting |
| `gov-fde` | FedRAMP: ATO awareness, data sovereignty, security controls baseline, clearance requirements |

---

## The .fde/ directory

Every skill reads from and writes to `.fde/` in the project root. This is the engagement brain.

```
.fde/
  context.md         compact engagement state (always loaded first)
  brief.md           what we were told
  success.md         agreed definition of done
  trust-profile.md   sacred data (<private> tagged), AI policy, approval chain
  stakeholders.md    who matters, who's resistant, who's the champion
  reality.md         what the real problem actually is
  terrain.md         codebase map, hotspots, data flow, test gaps
  audit.md           mid-engagement state (if joining in progress)
  prototype-log.md   what was built, shown, and learned
  business-case.md   customer problem, success metrics, trade-offs
  decisions.md       every significant choice and why
  risks.md           live risk register
  delivery.md        what shipped and running value log
  chaos-log.md       incident records with root cause
  handoff.md         operational knowledge for the team taking over
  patterns.md        reusable patterns extracted
```

`.fde/` must be in `.gitignore`. It contains sensitive customer information.

Sensitive data is tagged `<private>` inside `.fde/` files. This content never enters AI context or subagent prompts.

---

## Token efficiency

Skills load `.fde/` files on demand, only what each skill needs. `context.md` is always loaded. Everything else loads only when a specific skill requires it. The context window stays clean across a long engagement.

---

## Three engagement speeds

`@fde` adapts to how long you have:

- **Sprint** (1-2 days): land, discover, sketch, ship. Move fast, skip ceremony, every action creates forward momentum.
- **Standard** (1-4 weeks): full sequence at a measured pace. One stakeholder check-in per phase.
- **Programme** (months): full sequence with political mapping, pattern extraction, formal handoff, and knowledge transfer.

---

See [FDE-METHODOLOGY.md](../FDE-METHODOLOGY.md) for the principles behind each skill.
