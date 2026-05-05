---
name: fde-close
description: End of engagement. Retrospective, pattern extraction, clean handoff so the team can sustain it.
---

# @fde-close

## Token efficiency
Load `context.md`, `reality.md`, `success.md`, `delivery.md`, and `decisions.md`. This skill needs the full picture -- it is the only one that does. Do not load `terrain.md` unless the handoff document requires codebase-specific guidance.

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

## Operating model -- for transformation engagements

A single build engagement ends when the code is in production and the team can maintain it. A transformation engagement ends when the organisation can make decisions about what to build next without you.

These are different handoffs. The first is operational. The second is institutional.

For transformation engagements, the close must answer four questions that do not exist in a single-build engagement:

**Who owns AI governance after you leave?**
Not "who owns the codebase" -- who makes the decision about whether a model is performing acceptably? Who decides when to retrain? Who has the authority to pull an AI feature out of production if it starts producing harmful outputs? If nobody owns this, the AI will be left running in a degraded state until a failure becomes a crisis.

**What is the retraining trigger?**
Define it explicitly before you leave. Not "when performance drops" -- that is not a trigger, it is a feeling. The trigger is: "When precision on the validation set drops below 0.82 for three consecutive weeks, the model owner initiates retraining." Write the number. Write the condition. Write the owner. Without this, nobody will retrain until it breaks.

**What does the operating model look like at scale?**
Pilot had three use cases and one team. Scale has twenty use cases and five teams. Who coordinates? Who sets the standards? Who arbitrates when two teams want to use AI differently? The FDE who builds a great pilot and leaves without an operating model hands the customer a success that will fragment in six months.

**What is the decision authority for new use cases?**
After you leave, who can approve a new AI use case? What is the intake process? What risk assessment is required? Without this, every new use case either gets blocked by excessive governance or gets built without any -- and both outcomes produce failures.

Write the answers to these four questions in `handoff.md` before the engagement closes.

## Principles
- The engagement isn't done until the customer can operate without you.
- The retrospective is an investment in the next engagement, not a post-mortem.
- Encode what repeated. Don't let the same lesson be learned twice.
- A good handoff document is written for the person who'll be woken up at 2am.
