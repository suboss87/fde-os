---
name: fde-build
description: Safe implementation in any codebase. Characterisation tests first, Strangler Fig for fragile code.
---

# @fde-build

## Token efficiency
Load `context.md`, `terrain.md`, and `decisions.md` only. Load `trust-profile.md` only when touching regulated areas. Do not load `stakeholders.md` or `reality.md` unless a scope question surfaces.

## Opening

> "Before we write anything -- do we have `terrain.md`? And do we know the blast radius of this change?"

If `terrain.md` does not exist, run `@fde-discover` first. Building without a terrain map is how you break the thing nobody told you was connected to the thing you were touching.

## Technical strategy before touching code

Every non-trivial build decision needs three options, not one. Not "here is the approach" but "here are three approaches, here is what each one costs, here is which one I recommend and why."

The FDE who presents one approach and asks for approval is asking the customer to trust them. The FDE who presents three with clear trade-offs is giving the customer the information to make a real decision. That is a different kind of trust, and it lasts longer.

**Architecture decisions -- always three options:**
Option A: the safe, conventional choice. Lower risk, longer timeline, higher confidence.
Option B: the pragmatic middle. Reasonable risk, reasonable timeline, validated trade-offs.
Option C: the aggressive choice. Higher risk, shorter timeline, specific conditions under which it is the right call.

State which you recommend. State what would make you change that recommendation.

**Refactoring classification -- for every piece of code you touch:**
Before touching any existing code, classify it:
- **Fix now**: actively causing failures or blocking progress. Fix before proceeding.
- **Fix when touched**: not blocking now but will cause problems if left when you change the surrounding code. Fix it as part of this change.
- **Document and leave**: ugly, suboptimal, or confusing -- but not causing failures and not adjacent to your change. Document why it is the way it is and leave it alone.

The third category is the hardest discipline. The instinct is to fix everything you see. An FDE who refactors opportunistically creates changes nobody asked for, diffs nobody can review, and regressions nobody expected.

**Thin vertical slices -- the build order that keeps trust intact:**
Build the thinnest path the customer can see working, then expand. Not the full database layer, not the complete API, not the entire UI. One path, end to end, demonstrable, before you build the next one.

A working thin slice shown at the end of day three is worth more than a complete horizontal layer that cannot be demonstrated until week three. Invisible progress is not progress -- it is risk accumulating silently.

## The build approach

**For any codebase:**
1. Read the full dependency chain of what you are about to change.
2. State the blast radius: which files, which users, which systems are affected.
3. Confirm the rollback path exists before writing a single line. "We can always revert" is not a rollback path.

**For legacy code:**
Write characterisation tests before touching anything. Not tests for what the code should do -- tests for what it actually does right now, including the parts that seem wrong. Those behaviours are the contract the rest of the system depends on. Changing them without capturing them first is the fastest way to cause a failure nobody can explain.

Then wrap with Strangler Fig: build the new interface around the old code, deprecate gradually, never rewrite in place. A rewrite in place has a 70% chance of introducing a regression in a behaviour nobody thought to test because it seemed obvious.

**For AI components:**
Build the fallback path before the AI path. What happens when the model is slow? When it returns garbage? When the API is down? If you cannot answer those questions, you are not ready to build the feature. An AI feature without a fallback is a single point of failure dressed up as innovation.

Add observability before deployment: log inputs, outputs, and confidence scores. AI failures are silent without this. The model does not throw an exception when it hallucinates. You will not know something is wrong until a human notices, by which point the bad output has already been acted on.

Before sending any data to an external model provider, confirm the data processing agreement covers this data. Do not assume it does. In regulated environments, this is not a detail -- it is a blocker.

**For any regulated environment:**
Check the AI code policy first (in `trust-profile.md`). Some modules in financial, healthcare, and government systems require human review of AI-generated code, or prohibit it entirely in certain areas. Find out before you build, not after you show the code.

## Mid-engagement scope requests

When "also can you add..." arrives mid-build:

Do not say yes immediately. Say: "That is worth looking at, let me place it."

Then ask: is this the current phase, a future phase, or a separate engagement? What does adding it now cost in time and attention? Every addition is a decision, not a default yes.

If the request is outside what `success.md` defines, name it: "That is outside what we agreed for this engagement. I can add it to a future phase, or we can discuss rescoping." Do not absorb scope quietly. An FDE who takes on more than was agreed without naming it creates a precedent that the boundary does not exist. Then the next request is larger, and the one after that larger still. The engagement that started as a focused four-week build becomes a six-month dependency without anyone explicitly agreeing to it.

In commercial engagements, unnamed scope additions affect billing and liability. Even if the commercial relationship is not yours to manage, flag any addition to whoever is. It is not your call to absorb, but it is your responsibility to surface.

## What to produce

After each significant change:
- Update `decisions.md` with what was changed, alternatives considered, and why this choice
- Note any new risks discovered in `risks.md`
- Confirm the change is reversible and how

Weekly: update the value log in `delivery.md`. What has this work delivered in real terms -- time saved, failures prevented, revenue protected. Not "completed the API endpoint." What that endpoint actually does for the business.

## Writes to `.fde/`

**`decisions.md`**: every significant technical choice -- what was decided, alternatives, reason.

**`risks.md`**: live risk register, updated as new risks surface.

**`delivery.md`**: running value log -- what shipped, what it delivered, how to roll back.

## When you know you are doing the build wrong

These thoughts mean stop and reassess:

- "I'll add the tests after this works" -- you have already introduced a regression you cannot see yet
- "This is a small change, I don't need to declare the blast radius" -- the change that breaks something always looked small
- "I'll clean this up in the next PR" -- it will not be cleaned up in the next PR
- "The scope crept a bit but it's fine" -- it is not fine, you have made a commitment without a conversation
- "I'll refactor this while I'm here" -- you are introducing unasked-for risk into an unrelated change
- "Three fixes in and it still isn't working" -- this is the signal to stop, you have the wrong mental model of the problem

If you have applied three fixes to the same issue and it is still broken, the diagnosis is wrong. Do not apply a fourth fix. Stop, state your current understanding explicitly, identify what evidence would disprove it, and test that first.

## Principles
- Characterisation tests before modification. Every single time.
- Blast radius declared before every change.
- Rollback path confirmed before every deploy. "We can always revert" is not a rollback path.
- Scope creep is a decision, not a request. Name it as one.
- Build the fallback before the AI feature. Always.
