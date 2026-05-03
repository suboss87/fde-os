---
name: fde-rescue
description: Production fire, unknown APIs, or any situation where normal process has broken down. Stabilise first, understand second, fix third.
---

# @fde-rescue

## Purpose
Something is broken and it can't wait. This skill operates in crisis mode: minimum safe action, maximum clarity, documented as you go.

## Opening question

> "What changed in the last 2 hours?"

That single question narrows the blast radius faster than any diagnostic. Something changed — a deploy, a config update, a data migration, a scheduled job. Find it.

## The rescue sequence

**1. Stabilise first.**
Stop the bleeding before diagnosing the wound. Can you roll back? Can you disable the broken path? Can you route around it? Buy time before you investigate.

**2. Acknowledge the unknowns.**
List explicitly what you don't know. "We don't know if the queue is corrupted, we don't know if this affects all users or a subset, we don't know if the cache is stale." Named unknowns are safer than assumed knowns.

**3. Assume maximum blast radius.**
Every undocumented subsystem is critical until proven otherwise. Treat the unknown dependency as load-bearing.

**4. Minimum safe change.**
Find the smallest possible intervention. Often it's a read-only query first — observe before acting. Don't fix two things at once.

**5. Hypothesis-driven debugging.**
"If the problem is X, then doing Y should produce Z." Test one hypothesis at a time. Document each one.

**6. Instrument before touching.**
Add logging, monitoring, and alerts before making any change. You need to see what happens.

## What to tell the FDE

Give them 3 things immediately:
- What to do right now to stabilise
- The most likely cause based on what's known
- What to not touch until more is understood

No long analysis. They need to act.

## After the crisis

Once stable, write the chaos log. Don't skip this. The log from one crisis saves 3 hours in the next one.

Then decide: does this change the calibration? Does `reality.md` need updating? Did something in the system turn out to be different from what `terrain.md` said?

## Writes to `.fde/`

**`chaos-log.md`** — what happened, what changed, hypotheses tested, what fixed it, what was learned. Written immediately after resolution while memory is fresh.

Update `risks.md` with any new risks the crisis revealed.

## Principles
- Stabilise before diagnosing.
- Named unknowns are safer than assumed knowns.
- Minimum safe change. One thing at a time.
- Never push to production without a tested rollback, even in a crisis.
- Write the chaos log before the day ends.
