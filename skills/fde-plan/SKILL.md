---
name: fde-plan
description: Break work into atomic tasks. Sequence by risk. Add stakeholder touchpoints every 2-3 tasks.
---

# @fde-plan

## Purpose
An FDE plan is not a sprint backlog. The technical sequence is the easy part. The hard part is knowing when to stop and show someone progress, who needs to see what before they will approve the next phase, and where the trust is thin enough that silence for two weeks will be read as failure.

A technically correct plan that ignores engagement politics will fail on schedule.

## Token efficiency
Load `reality.md`, `success.md`, `terrain.md`, `stakeholders.md` only. Not the full `.fde/` directory. Load `decisions.md` only if re-planning an existing phase.

## Opening

> "What are we planning, a specific feature, a phase of the engagement, or the whole delivery?"

One question. Then listen before structuring anything.

Before planning begins, confirm scope is locked. Read `success.md`. If out-of-scope is not defined, define it now. A plan built on undefined scope will accumulate scope creep silently. Every task added later without a scope conversation is a commitment made without the customer's awareness.

## The planning approach

**Step 1: Start from success, work backwards**
Read `success.md`. What's the final state? Now walk backwards, what's the last thing that has to be true before that? And before that? This gives you the dependency chain, not a wish list.

**Step 2: Identify the fragile zones**
Check `terrain.md`. Which parts of the codebase are high-risk? Those tasks go earlier, fail fast, not at the end. Never leave the riskiest work for last.

**Step 3: Slice vertically, not horizontally**
Each task delivers something visible and testable, not "build the database layer" but "user can submit a form and see it saved." A working thin slice is always better than a complete horizontal layer that can't be demonstrated.

**Step 4: Size tasks to 30-90 minutes**
Anything longer is two tasks. Anything shorter is probably setup, not a task. This keeps each task small enough for a fresh context window and verifiable in one sitting.

**For AI components, name the evaluation tasks explicitly:**
"Model output validated on 50 real examples from production data" is a task. "Fallback path tested under model unavailability" is a task. "Observability confirmed: inputs and outputs logging to [destination]" is a task. These are not afterthoughts. They are pre-conditions for shipping and must appear in the plan before building starts.

**Step 5: Add the human touchpoints**
After every 2-3 technical tasks, add: "Show progress to [stakeholder from stakeholders.md]." These are not optional. They are not ceremony. An FDE who goes quiet for two weeks while building is not being efficient -- they are letting the customer fill that silence with doubt. A stakeholder who sees consistent small wins stays bought in. A stakeholder who goes three weeks without visible progress starts asking questions that derail the build.

## Task format

Each task:
```
Task [N]: [One-line description of the outcome, not the activity]
Delivers: [What someone can see or test when this is done]
Touches: [Files or systems affected, blast radius declared upfront]
Risk: [What could go wrong, and the fallback]
Verify: [Specific check that confirms it's done]
```

## What to produce

A sequenced task list in `decisions.md` or as a standalone plan in `.fde/plan.md`.

Not a project management document. A clear sequence any FDE could pick up, execute, and verify, even if they've never seen the engagement before.

## Writes to .fde/
**`decisions.md`**: the plan itself, plus the rationale for the sequence chosen.

## Principles
- Plan from success backwards, not from today forwards.
- Fragile zones go early. Fail fast.
- Every 2-3 tasks: a stakeholder touchpoint. Trust decays without visibility.
- A plan that ignores the political calendar of the engagement will fail on schedule.
- Token efficiency: load only `reality.md`, `success.md`, `terrain.md`, `stakeholders.md`. Not the full .fde/ directory.
