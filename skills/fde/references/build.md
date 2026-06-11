# build — safe implementation on someone else's codebase

**Enter when:** an agreed slice is ready to implement — feature, fix, integration, legacy change. Includes the review gate before merge.

**Read first:** `context.md`, `terrain.md`, `decisions.md`. Load `trust-profile.md` when touching regulated areas. No map or no plan → route to discover/plan first; say it plainly: "We're not ready to touch code until we know what's connected to this module."

## The loop (you do this work, in this order)

1. **Confirm scope in writing.** The task exists in `decisions.md` with acceptance criteria. Not there → plan first or name the scope creep.
2. **Declare blast radius.** Read the full dependency chain of what you're about to change. State: which files, which users, which systems. The change that breaks something always looked small.
3. **Confirm the rollback path exists** before writing a line. "We can always revert" is not a rollback path.
4. **Legacy code: characterisation tests first.** Tests for what the code *actually does right now* — including the parts that seem wrong; those behaviours are the contract the system depends on. Then wrap with Strangler Fig: new interface around old code, deprecate gradually, never rewrite in place.
5. **Search before creating.** Read the existing code in the area; don't add parallel helpers where a service exists. Integrating an SDK/vendor API → read real source (local `reference/repos/...` or official repo) before guessing names; record the files used in `decisions.md`. If an API looks invented, stop and search source.
6. **Build the minimal working path.** Thin vertical slice the customer can see. No opportunistic refactors. Every changed line traces to the task.
7. **Verify with evidence.** Run tests/typechecks/smallest proving script. State what ran and what didn't. "Seems right" is never evidence.
8. **Cleanup pass after it works.** Dedupe repeated mechanics into the smallest service module; behavior unchanged; re-run the same tests. If you wrote 200 lines and 50 would do, rewrite before review.
9. **Review gate (before merge):** two stages, in order — (a) **scope**: does the diff match what was agreed in `decisions.md`, nothing more? (b) **safety**: blast radius honest, tests meaningful, rollback real, secrets absent. Fix real findings, re-verify, repeat until clean or blocked on a human decision.
10. **Log and deliver.** Update the artifacts (below). Visible progress beats invisible perfection — every 2–3 tasks something shown to a stakeholder.

**Touching existing code — classify before changing:**
- **Fix now:** actively failing or blocking.
- **Fix when touched:** will bite when surrounding code changes — fix as part of this change.
- **Document and leave:** ugly but uninvolved. The hardest discipline. Opportunistic refactors create diffs nobody asked for and regressions nobody expected.

**AI components:** build the fallback path *before* the AI path (model slow? garbage? down?). Add observability before deploy: log inputs, outputs, confidence — hallucinations don't throw exceptions. Confirm the data processing agreement covers customer data before it goes to an external model; in regulated environments this is a blocker, not a detail.

**Regulated environments:** check the AI code policy in `trust-profile.md` first. Some modules require human review of AI-generated code or prohibit it. Find out before building, not after showing the code.

## Mid-build scope requests

"Also can you add…" → "That's worth looking at — let me place it." Current phase, future phase, or separate engagement? If it's outside `success.md`, name it: "Outside what we agreed; future phase or rescope conversation." Absorbed scope sets the precedent that the boundary doesn't exist — and in commercial engagements it silently moves billing and liability. Surface it to whoever owns the commercials.

## Stop signals — reassess immediately

- "I'll add tests after this works" — the regression is already in.
- "Small change, no need to declare blast radius" — famous last words.
- "I'll refactor this while I'm here" — unasked-for risk in an unrelated change.
- **Three fixes in and still broken — the diagnosis is wrong.** No fourth fix: state your current model of the problem, name the evidence that would disprove it, test that first (see `debug.md`).

## Artifact (logged as you go, not after)

- **`decisions.md`** — each significant choice: what, alternatives considered, why this one. For non-trivial architecture decisions, present three options to the FDE (safe / pragmatic / aggressive) with costs and a recommendation — three options is a real decision; one option is a request for trust.
- **`risks.md`** — new risks discovered while building.
- **`delivery.md`** — what shipped, in business terms (time saved, failures prevented), and how to roll back. This is the value log the dashboard and close read.

## Checkpoint

Before merge: the two-stage review (scope, then safety) has run clean, verification evidence is stated, and the slice is demonstrable. If `trust-profile.md` requires human sign-off on AI-generated code, that sign-off exists.

## Principles

- Characterisation tests before modification. Every time.
- Blast radius declared before every change; rollback confirmed before every deploy.
- Scope creep is a decision, not a request. Name it.
- Build the fallback before the AI feature.
- Small diffs, objective verification, no thousand-line hope PRs.
