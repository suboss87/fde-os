# FDEOS Skills Reference

Full reference for all 14 skills and enterprise domain patterns.

Start with `@fde-master` — it orchestrates all other skills automatically.

---

## Core Skills

| Skill | What it does |
|-------|-------------|
| `fde-master` | Orchestrator. One skill to run the full engagement (entry point). |
| `fde-trust` | Earn permission to work: sacred data, fears, stakeholder alignment |
| `fde-explore` | Chaotic, unscalable first-contact exploration. Do things that don't scale. |
| `fde-calibrate` | Environment assessment covering compliance, risk, off-limits modules, and the 6-month horizon |
| `fde-discovery` | Codebase cartography: dependencies, hotspots, data flow, test landscape |
| `fde-observe` | Continuous latent-demand detection. Find the real need, not just the ask. |
| `fde-prototype` | Rapid demo-driven iteration. Build a throwaway to validate direction. |
| `fde-bridge` | Business-to-technical translation. Every change tied to a customer outcome. |
| `fde-chaos` | Operate with partial knowledge: undocumented APIs, production fires |
| `fde-brownfield` | Safe legacy implementation: characterisation tests, Strangler Fig pattern |
| `fde-ship` | Production deployment: pre-flight checklist, canary, verified rollback |
| `fde-retrospective` | Capture lessons, update codebase context, extract upstream patterns |
| `fde-harness` | Create new skills and subagents for the customer's specific environment |
| `fde-context` | Context budgeting, compaction safety, state versioning |

---

## Enterprise Domain Patterns

Drop these into `.claude/skills/` alongside FDEOS for regulated industries.

| Pattern | Adds |
|---------|------|
| `healthcare-fde` | HIPAA: PHI handling, audit trails, encryption |
| `fintech-fde` | PCI-DSS: transaction integrity, fraud detection, idempotency |
| `gov-fde` | FedRAMP: security boundaries, ATO awareness, data sovereignty |

---

## The Full FDE Lifecycle

FDEOS follows this flow by default. `@fde-master` runs it adaptively — phases can be shortened, reordered, or skipped based on field judgment.

```
Trust + Explore (parallel)
        |
    Calibrate
        |
    Discover
        |
    Observe (continuous throughout)
        |
    Prototype
        |
    Bridge
        |
    Build (brownfield safe)   <-- Chaos mode if needed
        |
     Ship
        |
  Retrospective + Harness
```

For the full methodology behind these phases, see [FDE-METHODOLOGY.md](../FDE-METHODOLOGY.md).
