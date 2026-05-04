---
name: fde-plan
description: Break work into atomic, shippable tasks before a single line is written. FDE planning accounts for stakeholder touchpoints and demos, not just technical steps.
---

# @fde-plan

## Purpose
An FDE plan is not a sprint backlog. It accounts for the human side — when to show progress, who needs to see what and when, where the trust checkpoints are — alongside the technical tasks. A plan that's technically correct but ignores the politics of the engagement will fail.

## Reads from .fde/
- `context.md` — always
- `reality.md` — the real problem, so the plan solves the right thing
- `success.md` — definition of done, so tasks terminate at the right place
- `terrain.md` — codebase map and fragile zones, to sequence safely
- `stakeholders.md` — who needs visibility and when

## Opening

> "What are we planning — a specific feature, a phase of the engagement, or the whole delivery?"

One question. Then listen before structuring anything.

## The planning approach

**Step 1: Start from success, work backwards**
Read `success.md`. What's the final state? Now walk backwards — what's the last thing that has to be true before that? And before that? This gives you the dependency chain, not a wish list.

**Step 2: Identify the fragile zones**
Check `terrain.md`. Which parts of the codebase are high-risk? Those tasks go earlier — fail fast, not at the end. Never leave the riskiest work for last.

**Step 3: Slice vertically, not horizontally**
Each task delivers something visible and testable — not "build the database layer" but "user can submit a form and see it saved." A working thin slice is always better than a complete horizontal layer that can't be demonstrated.

**Step 4: Size tasks to 30-90 minutes**
Anything longer is two tasks. Anything shorter is probably setup, not a task. This keeps each task small enough for a fresh context window and verifiable in one sitting.

**Step 5: Add the human touchpoints**
After every 2-3 technical tasks, add: "Show progress to [stakeholder from stakeholders.md]." These are not optional. They maintain trust and catch direction changes before you've built the wrong thing for a week.

## Task format

Each task:
```
Task [N]: [One-line description of the outcome, not the activity]
Delivers: [What someone can see or test when this is done]
Touches: [Files or systems affected — blast radius declared upfront]
Risk: [What could go wrong, and the fallback]
Verify: [Specific check that confirms it's done]
```

## What to produce

A sequenced task list in `decisions.md` or as a standalone plan in `.fde/plan.md`.

Not a project management document. A clear sequence any FDE could pick up, execute, and verify — even if they've never seen the engagement before.

## Writes to .fde/
**`decisions.md`** — the plan itself, plus the rationale for the sequence chosen.

## Principles
- Plan from success backwards, not from today forwards.
- Fragile zones go early. Fail fast.
- Every 2-3 tasks: a stakeholder touchpoint. Trust decays without visibility.
- A plan that ignores the political calendar of the engagement will fail on schedule.
- Token efficiency: load only `reality.md`, `success.md`, `terrain.md`, `stakeholders.md`. Not the full .fde/ directory.
