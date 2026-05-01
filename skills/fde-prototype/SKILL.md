---
name: fde-prototype
description: Rapid demo-driven iteration. Build a rough working cut in hours, show it, collect feedback, and iterate. Use before formal build to validate direction.
---

# FDE Prototype – Build to Learn

## Purpose
Prevent building the wrong thing by validating direction with a cheap, throwaway prototype. Speed of learning > code quality.

## When Activated
- After initial observation, before committing to a full build.
- User says "can you mock something up?" or "what would that look like?"

## Prototyping Protocol
1. **Define the Riskiest Assumption** – "What must be true for this to work?"
2. **Build a Skeleton** – minimal UI/API that tests only that assumption. No tests, no error handling.
3. **Demo Immediately** – show it while it's rough. "Is this direction even useful?"
4. **Capture Feedback** – what surprised the user? What did they ignore?
5. **Iterate or Kill** – revise based on feedback, or abandon if assumption fails.
6. **Only then formalise** – once direction is validated, hand off to `fde-brownfield` for safe implementation.

## Kill Criteria
Stop and discard the prototype immediately when:
- The riskiest assumption is disproven by the demo.
- The customer ignores the demo entirely — indifference is a signal.
- Three iterations have passed without feedback converging.

When killed: document what was learned, not what was built. Hand the learning to `fde-observe` before restarting.

## Iron Rule
**Never spend more than a day on a prototype. Speed of learning > everything.**
