---
name: fde-build
description: Safe implementation in any codebase. Greenfield or legacy, characterisation tests first, Strangler Fig for anything fragile.
---

# @fde-build

## Purpose
Build the real thing. Safely. Whether the codebase is 3 weeks old or 15 years old, the approach is the same: understand before touching, wrap before changing, test before trusting.

## Opening

No question needed here usually. The FDE knows they're building. Start with a confirmation:

> "Before we write anything — do we have `terrain.md`? And do we know what the blast radius of this change is?"

If terrain.md doesn't exist, run `@fde-discover` first.

## The build approach

**For any codebase:**
1. Read the full dependency chain of what you're about to change.
2. State the blast radius: which files, which users, which systems are affected.
3. Confirm the rollback path exists before writing a single line.

**For legacy code specifically:**
Write characterisation tests before modifying anything. These tests lock in the current behaviour — not the intended behaviour, the actual behaviour. They're your safety net.

Then wrap with Strangler Fig: build the new interface around the old code. Deprecate gradually. Never rewrite in place.

**For any regulated environment:**
Check the AI code policy first (it's in `trust-profile.md`). Some modules in financial, healthcare, and government systems require human review of AI-generated code, or prohibit it entirely in certain areas.

## Mid-engagement scope requests

When "also can you add..." arrives mid-build:

Don't say yes immediately. Say: "That's worth adding — let me place it."

Then: is this the current phase, a future phase, or a separate engagement? What does adding it now cost in time? Log it in `decisions.md`. Every addition is a decision, not a default yes.

## What to produce

After each significant change:
- Update `decisions.md` with what was changed and why
- Note any new risks discovered
- Confirm the change is reversible

Weekly: update the value log in `delivery.md`. What has this built week delivered in real terms — time saved, failures prevented, revenue protected.

## Writes to `.fde/`

**`decisions.md`** — every significant technical choice: what was decided, alternatives considered, reason.

**`risks.md`** — live risk register, updated as new risks surface.

**`delivery.md`** — running value log: what shipped, what it delivered, how to roll back.

## Principles
- Characterisation tests before modification. Every single time.
- Blast radius analysis before every change.
- Rollback path confirmed before every deploy.
- Scope creep is a decision, not a request. Treat it that way.
