---
name: fde-sketch
description: Validate direction before committing. Prototype fast, show it, pitch the outcome.
---

# @fde-sketch

## Token efficiency
Load `context.md` and `reality.md` only. Load `terrain.md` only if the prototype touches the existing codebase.

## Purpose
Build a throwaway first. Show it. Find out if you're solving the right problem before investing in a real build. Then translate what you found into business language the customer can act on.

## When multiple use cases are on the table

In a transformation engagement, the question is not just "what are we prototyping" but "which of the five use cases on the whiteboard do we prototype first."

Score them before picking. Three dimensions:

**Business value** -- what does it cost the business if this is not solved? Score 1-5. A use case that saves 10 hours of manual work per week is a 2. A use case that eliminates a regulatory breach risk is a 5.

**Implementation complexity** -- how hard is this to build safely and maintain? Score 1-5 (5 = hardest). A rules-based classifier on structured data is a 1. A multi-model pipeline with real-time inference on unstructured data in a regulated environment is a 5.

**Data readiness** -- is the data available, labelled, clean, and in sufficient volume today? Score 1-5 (5 = fully ready). No data or heavily PII-restricted data that cannot be used for training is a 1.

**Formula: (Value x Data readiness) / Complexity**

The use case with the highest score gets prototyped first. A score of 5 value, 1 complexity, 5 data readiness = 25. A score of 5 value, 5 complexity, 2 data readiness = 2. Those two look equally compelling on a whiteboard. The formula makes the gap visible before you commit three days to the wrong one.

This is not perfect scoring. It is a forcing function to make trade-offs explicit before spending time on the wrong prototype. Use the same model from `@fde-discover` if use case scoring was done there -- do not re-score independently.

## Opening question

> "What's the riskiest assumption we're making about this solution?"

If that assumption is wrong, everything built on top of it is wasted. Test the riskiest thing first.

## The prototyping approach

Build the minimum thing that tests the assumption. No error handling. No tests. No polish. Just enough to show to a human and get a real reaction.

Show it the same day if possible. Rough is fine, rough is honest. A polished prototype tricks people into thinking it's further along than it is.

**If the direction involves AI, test these assumptions first:**
- Is the data available, clean, and in sufficient volume? A prototype on synthetic data does not tell you how the model will behave in production.
- Does the environment allow external model calls? Regulated industries often cannot send data to third-party APIs.
- Is the latency acceptable? AI inference is slower than a database query. Test this against real user expectations, not ideal conditions.
- Is AI actually the right tool? Some problems look like AI problems but are really data quality problems or process problems. Validate this before building anything.

**Kill it immediately if:**
- The assumption is disproven by the demo.
- The customer ignores it. Indifference is a signal, not neutrality.
- You've iterated 3 times and feedback isn't converging.
- The AI approach works technically but the customer cannot explain or trust the output. Unexplainable AI in a high-stakes context is not a working solution.

When you kill it, write down what you learned, not what you built. That learning is the asset.

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

**`prototype-log.md`**: what was built, what was shown, what the reaction was, what was learned.

**`business-case.md`**: customer problem, cost of inaction, success metrics, trade-offs, 3-sentence stakeholder summary.

## Principles
- Speed of learning beats code quality. Always.
- Never spend more than a day on a prototype.
- Show it rough. Polish misleads.
- The pitch is for the person who can say yes or no. Write it for them.
