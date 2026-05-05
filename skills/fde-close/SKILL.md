---
name: fde-close
description: End of engagement. Wrap up, encode what was learned, hand off to the customer team so they can maintain what was built.
---

# @fde-close

## Purpose
The engagement doesn't end at ship. It ends when the customer team can maintain what was built without calling you. This skill captures everything learned, encodes reusable patterns, and leaves the customer genuinely self-sufficient.

## Opening question

> "When you hand this over, what's the thing you're most worried the team won't know how to handle?"

That answer shapes the entire handoff document.

## Three things to produce

**1. The retrospective.**
What went well, what was harder than expected, what would you do differently. Blame-free. Specific. Useful for the next engagement.

Key questions to work through:
- Did the real problem match the brief?
- Were there trust moments that mattered?
- What did we learn about the codebase that wasn't in `terrain.md`?
- What risk almost became a real problem?
- If AI components were built or integrated: did they behave as expected in production? What failure modes appeared that the prototype did not reveal? Is the team equipped to maintain them?

**2. The pattern.**
If something happened in this engagement that will happen again, a compliance approach, a migration pattern, a stakeholder dynamic, encode it. Write it as a skill or a note others can use.

"If you do it twice, encode it."

**3. The handoff document.**
Written for the person who takes over. Not technical documentation, operational knowledge. The 3 things that will break and how to fix them. The person who holds the tribal knowledge. The monitoring alerts and what they mean. The deployment process in plain language.

If AI components were built: include the model version in use, what "normal" output looks like so the team can recognise drift, what the fallback behaviour is, who owns retraining if the model degrades, and how to disable the AI path without taking down the whole feature. Without this, the team will turn it off the first time it misbehaves, and it will stay off.

## What to tell the FDE

A direct assessment:
- Whether the engagement achieved what `success.md` defined
- The 2-3 most important lessons
- Whether the pattern is worth encoding for others
- Whether the handoff is complete or there are gaps

## Writes to `.fde/`

**`retrospectives/[date]-[engagement].md`**: decisions, mistakes, surprises, lessons.

**`patterns.md`**: reusable patterns extracted from this engagement.

**`handoff.md`**: operational knowledge for whoever maintains this: what breaks, who knows what, how to deploy, how to roll back.

## Principles
- The engagement isn't done until the customer can operate without you.
- The retrospective is an investment in the next engagement, not a post-mortem.
- Encode what repeated. Don't let the same lesson be learned twice.
- A good handoff document is written for the person who'll be woken up at 2am.
