---
name: fde-debug
description: Systematic debugging for engagements. Reproduce first, isolate second, fix third. Never guess what changed — find it.
---

# @fde-debug

## Purpose
Debugging on an engagement is different from debugging your own code. You don't have full context, you don't know the history, and the pressure to just fix it is high. That pressure is the enemy. The engineers who guess-and-check under pressure cause the second incident. This skill enforces the right sequence.

## Reads from .fde/
- `context.md` — always
- `terrain.md` — codebase map, known fragile zones
- `chaos-log.md` — if this is a recurring issue, the pattern will be here

## Opening question

> "Can you reproduce it right now, consistently?"

If the answer is no, that's the first problem to solve — not the bug itself. An intermittent bug you can't reproduce is a hypothesis, not a problem statement.

## The sequence — never skip steps

### 1. Reproduce
Get a consistent reproduction case before looking at any code. If you can't reproduce it, instrument first — add logging, not fixes. An unreproducible bug that gets "fixed" will be back.

### 2. Isolate to the smallest failing case
Strip away everything that isn't the failure. If the bug is in a payment flow, does it happen with a single hard-coded test transaction? Smallest failing case means smallest context needed — and smallest blast radius when you fix it.

### 3. Check what changed
Before reading any code, answer: what changed in the last 2 hours, 24 hours, last deploy? This single question solves 70% of production bugs. Check `chaos-log.md` first — if this has happened before, the cause is probably the same.

Don't read the codebase like a book. Write a script that answers a specific question: "what files were modified in the last deploy?" One execution, one answer. That's the code-first analysis approach — don't read 50 files to find one changed line.

### 4. Form one hypothesis
Not three. One. The most specific, most testable explanation for the failure. State it explicitly before doing anything:

> "My hypothesis is X. If I'm right, then changing Y will fix it. If I'm wrong, the symptom will persist."

A hypothesis that can't be falsified is not a hypothesis.

### 5. Fix the hypothesis, not the symptom
The failure mode that surfaces is rarely the root cause. A 500 error is a symptom. An NPE is a symptom. The root cause is upstream. Fix upstream. If you patch the symptom, you'll be back here in a week.

### 6. Verify the fix holds
After fixing: does the reproduction case pass? Does anything adjacent break? Run the smallest viable test suite — not the full suite if it takes 45 minutes, but the tests covering the changed code plus the downstream callers.

## Write what you found

After every debugging session, log in `chaos-log.md`:
- What failed and when
- What actually caused it (not the symptom — the root cause)
- What changed to fix it
- Whether this could happen again and where

This is not optional. The next FDE who hits this system needs to know.

## Writes to .fde/
**`chaos-log.md`** — root cause, fix applied, recurrence risk.

## Principles
- Reproduce before you touch anything. Always.
- What changed is the first question, not the last.
- One hypothesis. Test it. Don't hold three simultaneously.
- Fix the root cause. Patching symptoms creates the next incident.
- Write it down. Debugging knowledge that isn't logged is lost the moment you leave.
