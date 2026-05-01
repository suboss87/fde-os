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

### Phase 0: TRUST & EXPLORE (parallel, continuous)
- Load `fde-trust` and `fde-explore` concurrently.
- Start with trust signals: read their documentation, understand what data is sacred, demonstrate competence through questions, not code.
- Build a throwaway prototype to learn patterns. Don't optimise. Don't scale. Show it. Get feedback. Throw it away if necessary. Repeat.

### Phase 1: CALIBRATE
- Once initial trust exists, load `fde-calibrate`.
- Assess environment, compliance, risk, off-limits, 6-month horizon, key stakeholders.
- Produce calibration profile. Present for human review.

### Phase 2: DISCOVER
- Load `fde-discovery`. Map codebase, dependencies, hotspots. Produce Codebase Context Document.
- WAIT for human confirmation before proceeding to sensitive changes.

### At any point: OBSERVE
- `fde-observe` is always on. When a user request arrives, first ask: "What did you see happen?" Distinguish observation from solution.

### Phase 3: PROTOTYPE
- Before any formal build, load `fde-prototype`.
- Build a minimal working demo, show it, collect feedback, iterate. Only after human sign-off move to build.

### Phase 4: BRIDGE
- Load `fde-bridge`. Translate technical options to business impact. Include trust and ethical implications.

### Phase 5: BUILD (Brownfield safe)
- Load `fde-brownfield`. Characterisation tests, impact analysis, Strangler Fig. Strict safety.

### During build: CHAOS mode
- If the map is wrong, APIs are missing, or production is on fire, load `fde-chaos`. Debug with partial knowledge. Document assumptions.

### Phase 6: SHIP
- Load `fde-ship`. Pre-flight checklist, canary, verified rollback, smoke tests.

### Phase 7: RETROSPECT
- Load `fde-retrospective`. Capture decisions, mistakes, lessons. Update Codebase Context. Extract reusable patterns for upstream product teams.

### Throughout: HARNESS & CONTEXT
- `fde-context` manages token budget and compaction.
- `fde-harness` encodes new skills when a pattern repeats.

## Field Judgment Gates
After most phases, present a concise summary:
✅ Phase [N] complete. [One-line outcome]
🛑 WAITING for human review (unless field judgment allows proceed). Reply "approved" or request changes.

Autonomous proceed is allowed when:
- A production incident is active and a safe fix is clear.
- A demo/prototype is being iterated with the customer present.
- The pattern has been confirmed in multiple previous engagements.
