# FDEOS Reference — one skill, fifteen phase methods

v3 ships **one skill**: `@fde` ([skills/fde/SKILL.md](../skills/fde/SKILL.md)). You describe the situation; it routes to a phase and follows that phase's method from [skills/fde/references/](../skills/fde/references/). Engagement memory lives in `~/fde-engagements/<name>/.fde/` (one folder per customer).

Each reference is a **method, not advice**: the work the agent does, the artifact it writes, and the checkpoint with the human FDE.

---

## Engagement phases

| Phase | Enter when | Method highlights | Writes |
|-------|-----------|-------------------|--------|
| [land](../skills/fde/references/land.md) | New customer, first meeting | Interrogates the brief for what's missing; coaches the sponsor conversation; maps stakeholders and sacred data | `brief.md` `success.md` `stakeholders.md` `trust-profile.md` |
| [discover](../skills/fde/references/discover.md) | Brief feels wrong, real problem unclear | Runs churn/test-gap/"temporary"-archaeology/AI-component scans; hunts the workaround; scores use cases | `reality.md` `terrain.md` |
| [audit](../skills/fde/references/audit.md) | Taking over half-done work | Reads everything, tests every "this works" claim, finds tribal-knowledge holes via git authorship | `audit.md` `terrain.md` `reality.md` `context.md` |
| [sketch](../skills/fde/references/sketch.md) | Direction needs validating | Prototypes the killer assumption same-day; kill criteria; 3-sentence business case | `prototype-log.md` `business-case.md` |
| [rescue](../skills/fde/references/rescue.md) | Production fire, trust fire, or wrong-brief mid-build | Stabilise → named unknowns → minimum safe change; quiet-stakeholder protocol; three-path reset | `chaos-log.md` `risks.md` `decisions.md` |
| [close](../skills/fde/references/close.md) | Engagement ending | Retrospective with receipts; pattern extraction; the 2am handoff | `retrospectives/` `patterns.md` `handoff.md` |

## Execution phases

| Phase | Enter when | Method highlights | Writes |
|-------|-----------|-------------------|--------|
| [plan](../skills/fde/references/plan.md) | Scope clear, needs sequencing | Backwards from success; fragile first; PR-sized tasks; acceptance-criteria gate; touchpoints every 2–3 tasks | `decisions.md` |
| [build](../skills/fde/references/build.md) | Agreed slice ready | Blast radius declared; characterisation tests on legacy; Strangler Fig; fallback before AI feature; cleanup pass | `decisions.md` `risks.md` `delivery.md` |
| [review](../skills/fde/references/review.md) | Change needs a merge gate | Stage 1 scope vs `decisions.md`, then 5-dimension safety; review-fix loop until clean | `decisions.md` |
| [debug](../skills/fde/references/debug.md) | Broken, not down | Reproduce → isolate → "what changed?" → one falsifiable hypothesis → root cause | `chaos-log.md` |
| [ship](../skills/fde/references/ship.md) | Ready to deploy | Pre-flight incl. CAB; canary with rollback-on-anomaly; pulse defined before closing the laptop | `delivery.md` |

## The daily verbs (every day, not once per engagement)

| Verb | Enter when | Method highlights | Writes |
|------|-----------|-------------------|--------|
| [debrief](../skills/fde/references/debrief.md) | Just out of any meeting, raw notes in hand | Five-bucket extraction (decisions, actions, signals, risks, questions); verbatim quotes; signals move on evidence only | `decisions.md` `stakeholders.md` `risks.md` `context.md` |
| [status](../skills/fde/references/status.md) | Weekly sponsor update due | Value in their units; bad news first; explicit ask; one page; FDE sends, never the agent | `delivery.md` |
| [demo-prep](../skills/fde/references/demo-prep.md) | Demo or exec walkthrough coming | The one outcome + the one number; live only what ran clean twice; hard-question sheet; fallback plan | `delivery.md` `context.md` |

## Visibility

| Phase | Enter when | Method highlights | Writes |
|-------|-----------|-------------------|--------|
| [dashboard](../skills/fde/references/dashboard.md) | "Where am I across everything?" | `fde status` heuristic triage first; reads every `~/fde-engagements/*/.fde/` separately; trust signal per customer | `fde-dashboard.html` |

## The `fde` CLI (deterministic core — works without AI)

`scan` recon · `resume [--init <name>]` memory + zero-ceremony bootstrap · `log <type> <text>` structured appends · `receipts <term>` agreements with dates · `capture` session snapshot · `status` portfolio triage. The skill calls these for mechanics; the AI does interpretation and judgment.

## Regulated overlays (activate alongside any phase)

| Overlay | Signal | Adds |
|---------|--------|------|
| [healthcare](../skills/fde/references/healthcare.md) | PHI, HIPAA, EHR, clinical | PHI scoping, BAA/AI policy, audit trails, break-glass, Safe Harbor |
| [fintech](../skills/fde/references/fintech.md) | Payments, PCI-DSS, money | Cardholder scoping, idempotency, atomicity, reconciliation, explainability |
| [gov](../skills/fde/references/gov.md) | FedRAMP, ATO, CUI | Classification-first, ATO timeline, FedRAMP gates (incl. AI tools), NIST controls |

---

## The memory contract (what makes it a second brain)

1. On entry the agent reads `context.md` — nothing else until the phase needs it.
2. **Deliverable = memory:** every phase's output IS a `.fde/` file; nothing is maintained by hand.
3. Every claim carries evidence: `(ops lead, Day 5)` · `(churn: 47/90d)` · `(stated, unverified)`.
4. On exit the agent appends where-we-left-off to `context.md`; the `session-stop` hook backstops it deterministically.
5. One customer, one folder. Never merged.

v2's 16 standalone skills are preserved in [archive/skills/](../archive/skills/).
