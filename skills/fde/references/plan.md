# plan — sequence the work

**Enter when:** scope is understood and the work needs breaking down — a slice, a phase, or the whole delivery.

**Read first:** `reality.md`, `success.md`, `terrain.md`, `stakeholders.md`. Load `business-case.md` if sketch produced one. Not the full folder.

An FDE plan is not a sprint backlog. The technical sequence is the easy part. The hard part is when to show progress, who approves the next phase, and where trust is thin enough that two silent weeks read as failure. A technically correct plan that ignores engagement politics fails on schedule.

## Method (you do this work)

**0. Lock scope first.** Read `success.md`. If out-of-scope is undefined, define it now with the FDE — a plan on undefined scope accumulates silent commitments.

**1. Work backwards from success.** What's the last thing that must be true before done? And before that? That's the dependency chain — not a wish list.

**2. Front-load the fragile.** Check `terrain.md` hotspots. Risky modules go early — fail fast, not in week three.

**3. Slice vertically.** Each task delivers something visible and testable end to end ("user submits form, sees it saved"), never a horizontal layer ("build the database layer").

**4. Size to 30–90 minutes, PR-sized.** Longer = two tasks. Each task implementable, testable, reviewable without a thousand-line diff.

**5. AI components get explicit eval tasks.** "Output validated on 50 real production examples," "fallback tested under model unavailability," "inputs/outputs logging to <destination>" — these are pre-conditions of shipping, in the plan before build starts.

**6. Stakeholder touchpoints every 2–3 tasks.** "Show progress to <name from stakeholders.md>." Not ceremony: a customer who sees small wins stays bought in; silence gets filled with doubt.

**Acceptance criteria gate:** no task moves to build without written happy-path AND unhappy-path criteria. Can't write them = the task isn't understood; the open question goes to the customer **before** the task starts. Vague criteria surface later as scope creep and rework.

## Artifact

The plan goes to **`decisions.md`** — always. Build reads the plan from `decisions.md`; anywhere else and the build starts blind.

```markdown
Task N: <outcome, not activity>
Delivers: <what someone can see/test>
Accepts: <happy path> / <unhappy path>
Touches: <files/systems — blast radius declared upfront>
Risk: <what could go wrong + fallback>
Verify: <specific check>
```

## Checkpoint

Walk the FDE through: sequence + why this order, where the fragile work sits, where the touchpoints land, the acceptance gate on task 1. One question: "Which stakeholder sees the first visible slice, and when?"

## When the plan changes mid-engagement

Never quietly update tasks. Name the reset: update `reality.md` and `success.md`, one paragraph in `decisions.md` — what changed, why, new sequence. An undocumented reset looks like drift; a documented one looks like the FDE caught something important.

## Principles

- Plan from success backwards, not from today forwards.
- Fragile zones early. Fail fast.
- Every 2–3 tasks, a stakeholder touchpoint. Trust decays without visibility.
- No written acceptance criteria, no build.
