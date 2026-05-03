---
name: fde-sketch
description: Validate direction before committing to a build. Prototype fast, show it, pitch the outcome to the business.
---

# @fde-sketch

## Purpose
Build a throwaway first. Show it. Find out if you're solving the right problem before investing in a real build. Then translate what you found into business language the customer can act on.

## Opening question

> "What's the riskiest assumption we're making about this solution?"

If that assumption is wrong, everything built on top of it is wasted. Test the riskiest thing first.

## The prototyping approach

Build the minimum thing that tests the assumption. No error handling. No tests. No polish. Just enough to show to a human and get a real reaction.

Show it the same day if possible. Rough is fine — rough is honest. A polished prototype tricks people into thinking it's further along than it is.

**Kill it immediately if:**
- The assumption is disproven by the demo.
- The customer ignores it. Indifference is a signal, not neutrality.
- You've iterated 3 times and feedback isn't converging.

When you kill it — write down what you learned, not what you built. That learning is the asset.

## Pitching the outcome

After the prototype is validated, translate it into business terms:
- What customer problem does this solve?
- What does it cost them if it's not solved?
- What does success look like in numbers? Time saved, revenue recovered, incidents prevented.
- What are the 2-3 trade-offs?

Keep the stakeholder summary to 3 sentences. If you can't explain it in 3 sentences, you don't understand it well enough to build it.

## What to produce

Tell the FDE:
- Whether the riskiest assumption held up
- What the customer's actual reaction revealed
- Whether to proceed, pivot, or kill
- The 3-sentence business case if proceeding

## Writes to `.fde/`

**`prototype-log.md`** — what was built, what was shown, what the reaction was, what was learned.

**`business-case.md`** — customer problem, cost of inaction, success metrics, trade-offs, 3-sentence stakeholder summary.

## Principles
- Speed of learning beats code quality. Always.
- Never spend more than a day on a prototype.
- Show it rough. Polish misleads.
- The pitch is for the person who can say yes or no. Write it for them.
