---
name: fde-engineering
description: End-to-end agentic engineering on client engagements. Small tasks, source-first context, build, cleanup, review-fix loop, verify. Use when shipping code solo on an FDE project.
---

# @fde-engineering

## Purpose

FDEOS is an operating system for one engineer running an engagement end to end. This skill is the **execution layer**: how you build, clean up, review, and verify on the client site without a team behind you.

Engagement judgment lives in land, discover, and rescue. **This skill is how you ship at staff-engineer rigor once scope is clear.**

Talk like a tech lead pair-programming — status in plain English ("here's what I changed, what I ran, what's still risky"), not a compliance checklist.

## Token efficiency

Load `context.md`, `decisions.md`, and `success.md`. Load `terrain.md` only when touching code. Load `trust-profile.md` when regulated data or AI policy applies.

## When to use

- You are implementing a feature, fix, or integration on a client codebase.
- You need a repeatable loop: small change → verify → cleanup → review → ship.
- You are solo and cannot afford thousand-line PRs or vibe-coded mess.

Do not use for a one-line typo in your own repo with no engagement context.

## The FDE agentic loop

Always in this order:

1. **Confirm scope in writing.** Read `success.md` and the relevant slice in `decisions.md`. If the task is not in the plan, run `@fde-plan` or name scope creep before coding.

2. **Keep the unit small.** One feature, one fix, one reviewable PR. If the plan item is bigger than ~90 minutes of focused work, split it in `decisions.md` before starting.

3. **Search before creating.** Read existing code in the area you will touch. Do not add parallel helpers when one service already exists.

4. **Source-first for external packages.** If integrating an SDK, framework, or vendor API, search local reference source or official repo before guessing names. Document paths used in `decisions.md`.

5. **Build the minimal working path.** Thin vertical slice the customer can see. No opportunistic refactors.

6. **Verify with evidence.** Run tests, typechecks, or the smallest script that proves the change. State what ran and what did not.

7. **Cleanup pass after it works.** Run the structure cleanup rules in `@fde-build` (dedupe mechanics into services, same behavior).

8. **Review-fix loop.** Run `@fde-review`. Fix only real findings. Re-run tests. Repeat until clean or blocked on a human decision.

9. **Log and deliver.** Update `decisions.md`, `delivery.md`, and `risks.md`. Stakeholder-visible progress beats invisible perfection.

## Source code as context (client integrations)

When the agent hallucinates APIs or docs are stale:

1. Add vendor/SDK source under a stable path, e.g. `reference/repos/github.com/org/project`.
2. In `CLAUDE.md` or project memory: *When using X, search `reference/repos/...` first. Do not guess API names.*
3. Before implementing, record in `decisions.md` which source files informed the design.

Never paste entire repos into chat. Search on disk.

## Craft rules (surgical, verifiable)

- State assumptions before coding. If uncertain, ask once, then proceed.
- Minimum code for the agreed scope. No speculative abstractions.
- Touch only what the task requires. Match existing style.
- Transform tasks into verifiable checks: *"Add validation"* → tests for invalid inputs, then implementation.
- Every changed line should trace to the agreed task in `decisions.md`.

## Security on client sites

- Do not install packages less than 14 days old without explicit customer approval.
- Never paste secrets, credentials, or PHI into prompts.
- When a supply-chain issue trends, grep the client repo for affected packages.
- Confirm `trust-profile.md` AI and data policy before sending customer data to external models.

## Engagement-specific guardrails

- **Stakeholder cadence:** After every 2–3 completed tasks, something visible exists or you send a one-paragraph update. Solo does not mean silent.
- **PR size:** If diff stat is hundreds of files or thousands of lines, stop and split before review.
- **Regulated work:** Human sign-off on AI-generated code where `trust-profile.md` requires it.

## Routes to other skills

| Situation | Skill |
|-----------|--------|
| No terrain map yet | `@fde-discover` |
| No plan in `decisions.md` | `@fde-plan` |
| Legacy / fragile code | `@fde-build` |
| Review feedback or pre-ship check | `@fde-review` |
| Production or trust crisis | `@fde-rescue` |
| Deploy | `@fde-ship` |

## Writes to `.fde/`

**`decisions.md`:** task split, reference sources used, verification commands run, review outcomes.

**`delivery.md`:** what shipped and business-visible value.

**`risks.md`:** new technical or delivery risks found during implementation.

## Principles

- The FDE owns the outcome; the agent does mechanical work under tight loops.
- Small diffs, objective verification, no thousand-line hope PRs.
- Working code still gets a cleanup pass before review.
- Launch visible slices early; perfect private branches do not earn trust on site.
