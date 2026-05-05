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

## Principles
- Characterisation tests before modification. Every single time.
- Blast radius declared before every change.
- Rollback path confirmed before every deploy. "We can always revert" is not a rollback path.
- Scope creep is a decision, not a request. Name it as one.
- Build the fallback before the AI feature. Always.
