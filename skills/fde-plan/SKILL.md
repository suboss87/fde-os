---
name: fde-plan
description: Break work into atomic tasks. Sequence by risk. Add stakeholder touchpoints every 2-3 tasks.
---

# @fde-plan

## Purpose
An FDE plan is not a sprint backlog. The technical sequence is the easy part. The hard part is knowing when to stop and show someone progress, who needs to see what before they will approve the next phase, and where the trust is thin enough that silence for two weeks will be read as failure.

A technically correct plan that ignores engagement politics will fail on schedule.

## Token efficiency
Load `reality.md`, `success.md`, `terrain.md`, `stakeholders.md` only. Load `business-case.md` if it exists -- it contains the scored use case from `@fde-sketch` that this plan should be built around. Load `decisions.md` only if re-planning an existing phase. Not the full `.fde/` directory.

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

## The acceptance criteria gate

No task moves to implementation without written acceptance criteria. Not "build the auth module" -- "a user can log in with valid credentials and receives a session token; a user with invalid credentials receives a 401 and no token is issued; a user with an expired token is redirected to login."

If you cannot write the acceptance criteria, the task is not ready. This is not a process requirement. It is a signal about your own understanding. Vague acceptance criteria means you do not know what done looks like. That ambiguity will surface during build as scope creep, as disagreements about whether something is finished, as rework.

The discipline: write the acceptance criteria before writing any code. If writing them reveals you do not know the answer to a question, that question goes to the customer before the task starts -- not during.

**Happy path and unhappy path -- both required:**
Every task needs both. Happy path: what happens when everything works. Unhappy path: what happens when it does not. An acceptance criterion that only covers the happy path is half a criterion. The failure modes are what you are actually shipping.

## Task format

Each task:
```
Task [N]: [One-line description of the outcome, not the activity]
Delivers: [What someone can see or test when this is done]
Accepts: [Happy path criteria] / [Unhappy path criteria]
Touches: [Files or systems affected, blast radius declared upfront]
Risk: [What could go wrong, and the fallback]
Verify: [Specific check that confirms it's done]
```

## What to produce

A sequenced task list written to `decisions.md`. Always `decisions.md`. `fde-build` reads from `decisions.md` to find the plan. If the plan is anywhere else, the build starts without one and will not warn about it.

Not a project management document. A clear sequence any FDE could pick up, execute, and verify, even if they have never seen the engagement before.

## When the plan changes mid-engagement

Scope resets happen. The brief was wrong. Discovery revealed something larger. A stakeholder has changed what done means.

When this happens: do not quietly update the tasks. Name the reset explicitly. Update `reality.md` and `success.md` to reflect the new shared understanding. Write a single paragraph in `decisions.md` explaining what changed, why, and what the new sequence is. Then continue.

An undocumented scope reset looks like the FDE drifted. A documented one looks like the FDE caught something important and adapted. The distinction matters when the project is reviewed by someone who was not in the room.

## Writes to .fde/
**`decisions.md`**: the plan itself, all subsequent updates, and the rationale for every sequence change.

## Principles
- Plan from success backwards, not from today forwards.
- Fragile zones go early. Fail fast.
- Every 2-3 tasks: a stakeholder touchpoint. Trust decays without visibility.
- A plan that ignores the political calendar of the engagement will fail on schedule.
- Token efficiency: load only `reality.md`, `success.md`, `terrain.md`, `stakeholders.md`. Not the full .fde/ directory.
