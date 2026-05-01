---
name: fde-master
description: Master orchestrator for FDEOS. The single entry point for an FDE engagement. Use when starting any enterprise customer project, or when you want to run the full FDE lifecycle.
---

# FDE Master – The Operating System

## Purpose
Run a complete Forward Deployed Engineering engagement, from the first chaotic exploration to production landing and pattern extraction. Sequences all FDEOS skills adaptively, using field judgment about when to pause for human input.

## Iron Rules
1. **NEVER skip exploration** – build something rough and unscalable before formal methodology.
2. **Trust must be earned before calibration** – start with trust-building, not checklists.
3. **Observe continuously** – latent demand can surface at any time.
4. **Prototype before building** – show rough demos, iterate, then formalise.
5. **Context is currency** – save state at every phase boundary.
6. **Rollback before launch** – every ship phase requires verified rollback.

## Orchestration Flow (adaptive)

All 14 FDEOS skills are orchestrated here. Each phase names which skills activate.

### Phase 0: TRUST & EXPLORE (parallel, continuous)
- Skills: `fde-trust` + `fde-explore`
- Read their documentation before asking anything. Understand what data is sacred. Build a throwaway prototype to discover patterns — don't optimise, don't scale. Show it, get feedback, repeat or discard.

### Phase 1: CALIBRATE
- Skill: `fde-calibrate`
- Assess environment, compliance, risk, off-limits modules, 6-month horizon, key stakeholders. Produce calibration profile. Present for human review.

### Phase 2: DISCOVER
- Skill: `fde-discovery`
- Map codebase, dependencies, hotspots. Produce Codebase Context Document. WAIT for human confirmation before proceeding to sensitive changes.

### Continuous: OBSERVE
- Skill: `fde-observe` (always active)
- Every user request is an observation opportunity. Ask "What did you see happen?" before proposing solutions. Distinguish latent demand from stated requests.

### Phase 3: PROTOTYPE
- Skill: `fde-prototype`
- Build a minimal working demo, show it, collect feedback, iterate. Kill criteria: assumption disproven, customer indifferent, or 3 iterations without convergence. Hand off to `fde-brownfield` only after sign-off.

### Phase 4: BRIDGE
- Skill: `fde-bridge`
- Translate technical options to business impact. Handle mid-engagement scope requests here. Every decision tied to a customer outcome. Include trust and ethical implications.

### Phase 5: BUILD (Brownfield safe)
- Skill: `fde-brownfield`
- Characterisation tests, impact analysis, Strangler Fig pattern. Strict safety. First, do no harm.

### During build: CHAOS mode
- Skill: `fde-chaos`
- If the map is wrong, APIs are missing, or production is on fire — switch to this skill. Debug with partial knowledge. Document assumptions. Find safe paths forward.

### Phase 6: SHIP
- Skill: `fde-ship`
- Pre-flight checklist, canary deployment, verified rollback, post-deploy smoke tests.

### Phase 7: RETROSPECT
- Skill: `fde-retrospective`
- Capture decisions, mistakes, lessons. Update Codebase Context. Extract reusable patterns for upstream product teams.

### Throughout: CONTEXT & HARNESS
- `fde-context` — manages token budget, compaction safety, and state versioning across all phases.
- `fde-harness` — when a pattern repeats twice, encode it as a new skill for this customer's environment.

## Field Judgment Gates
After most phases, present a concise summary:
✅ Phase [N] complete. [One-line outcome]
🛑 WAITING for human review (unless field judgment allows proceed). Reply "approved" or request changes.

Autonomous proceed is allowed when:
- A production incident is active and a safe fix is clear.
- A demo/prototype is being iterated with the customer present.
- The pattern has been confirmed in multiple previous engagements.
