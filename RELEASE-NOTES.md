# Release Notes

## 3.0.0 (2026-06-11)

**The second-brain release.** One skill, phase methods that do work, memory that writes itself.

- **One skill instead of sixteen.** `@fde` is now the only installed skill: a router with a memory contract, dispatching to 15 phase methods in `skills/fde/references/` (progressive disclosure — phase content loads only when routed to). The old standalone skills live in `archive/skills/`.
- **Phases do work, not advice.** Each reference is METHOD → ARTIFACT → CHECKPOINT: discover runs real churn/test-gap/"temporary"-code scans; audit tests inherited claims against evidence; ship verifies the rollback was actually run. Every claim in an artifact carries its evidence source.
- **Self-writing memory.** Deliverable = memory (every phase's output IS a `.fde/` file), plus a new `fdeos-session-stop` hook (SessionEnd) that deterministically appends "where we left off" — branch, changes, updated artifacts — to `context.md`. With `session-start`, the loop is closed: nothing is maintained by hand.
- **Leaner init.** `init` creates the 10 core memory files under `~/fde-engagements/<name>/`; phase artifacts are created by their phases on demand.
- **Review kept as its own gate** (scope first, then safety, loop until clean) inside the one-skill architecture.
- **Site:** static website under `site/`, deployed by GitHub Pages workflow.
- **Migration from 2.x:** `git pull && node bin/install.js` — the installer removes the old v2 skill directories from `~/.claude/skills/` and installs the single `fde` skill. Existing `~/fde-engagements/` folders are untouched.

## 2.1.0 (2026-05-21)

- Repositioned as **engagement OS** for solo FDE end-to-end delivery (client site → production).
- New `@fde-engineering` skill: agentic build → cleanup → review-fix loop (see [ATTRIBUTION.md](./ATTRIBUTION.md)).
- Strengthened `@fde-build`, `@fde-review`, `@fde-plan`, `@fde-debug` for PR-sized work and verifiable shipping.
- `.fde/` templates + `npx fdeos init <name>` — engagement memory under `~/fde-engagements/`, not in shared infrastructure you do not control.
- **Breaking (npm 1.x → 2.1):** no auto-scaffold in workspace root; use `fdeos init` + `FDEOS_ENGAGEMENT`.
- PMF 360 review in `docs/internal/` (team only, not public README).

## 1.0.0 (2026-05-05)

Initial release of FDEOS -- 13 skills covering the full forward-deployed engagement lifecycle.

### Skills included

**Engagement phase**
- `@fde` -- entry point, routes to the right skill based on what you describe
- `@fde-land` -- first 48 hours: trust, stakeholder map, definition of success
- `@fde-audit` -- taking over mid-engagement: separate what is real from what was assumed
- `@fde-discover` -- find the real problem before writing any code
- `@fde-sketch` -- prototype fast, validate direction, pitch the outcome in business terms
- `@fde-build` -- safe implementation: characterisation tests, Strangler Fig, blast radius analysis
- `@fde-rescue` -- production fire or trust crisis: stabilise first, understand second, fix third
- `@fde-ship` -- deploy safely: pre-flight checklist, canary, verified rollback
- `@fde-close` -- wrap up: retrospective, pattern extraction, handoff the team can actually use

**Execution quality**
- `@fde-plan` -- atomic tasks sequenced by risk, stakeholder touchpoints every 2-3 tasks
- `@fde-review` -- two-stage code review: did we build what was agreed, then is it safe to ship
- `@fde-debug` -- systematic debugging: reproduce first, isolate second, fix third

**Visibility**
- `@fde-dashboard` -- static HTML status view across all active engagements

**Enterprise overlays** (activate automatically on signal)
- `healthcare-fde` -- HIPAA, PHI handling, audit trails, AI policy in clinical environments
- `fintech-fde` -- PCI-DSS, transaction integrity, idempotency, fraud signals
- `gov-fde` -- FedRAMP, ATO process, data sovereignty, clearance requirements

### What gets written to disk

Skills read/write `.fde/` at `FDEOS_ENGAGEMENT` (default `~/fde-engagements/<name>/.fde/`). Keep engagement notes private; gitignore if stored inside a shared workspace.

### Install

```
/plugin marketplace add suboss87/fde-os
/plugin install fdeos@fdeos
```
