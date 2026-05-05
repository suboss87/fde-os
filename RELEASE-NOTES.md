# Release Notes

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

All skills read from and write to `.fde/` in your project root. Add `.fde/` to `.gitignore` -- it contains sensitive customer information and must stay local.

### Install

```
/plugin marketplace add suboss87/fde-os
/plugin install fdeos@fdeos
```
