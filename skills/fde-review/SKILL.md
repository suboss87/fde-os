---
name: fde-review
description: Two-stage code review: did we build what was agreed, then is it safe to ship.
---

# @fde-review

## Purpose
Code review on an engagement is not the same as code review at a product company. You're often in a codebase you don't own, deploying to systems you can't fully see, with a customer who can't afford a bad release. This skill reviews through that lens.

## Reads from .fde/
- `context.md`: always
- `decisions.md`: what was agreed and why
- `trust-profile.md`: AI code policy, sacred data, what must never change
- `terrain.md`: blast radius context, fragile zones

## Two stages: always in this order

### Stage 1: Did we build what we agreed?
Check the change against `decisions.md`. Not against what seems right, against what was explicitly decided.

- Does this match the agreed scope?
- Are any sacred systems from `trust-profile.md` touched?
- Is any sensitive data now in scope that wasn't before?
- Does it handle the rollback path defined before building started?

If Stage 1 fails, stop. Don't proceed to quality review on code that doesn't match the agreement.

### Stage 2: Is it safe to live with?
Five dimensions. Be specific, not "this could be better" but "line 47 will fail under concurrent writes because there's no lock."

**Correctness**: Does it do what it says? Edge cases handled? Error paths traced?

**Blast radius**: What breaks if this fails at 2am? Which systems downstream are affected? Is the failure mode loud (errors surface immediately) or silent (data corruption over time)?

**Security**: Input validation at boundaries. No secrets in logs. No new attack surface. Check `trust-profile.md` for what's classified as sensitive in this environment.

**Rollback**: Can this be reverted in under 5 minutes? Is the rollback documented? If the answer is "we'd have to do a data migration to roll back," that's a blocker.

**AI policy**: Check `trust-profile.md`. Some modules in this environment may require human review of AI-generated code, or prohibit it in certain areas. If this change touches those areas, flag it before it ships.

**AI components**: If this change includes AI-generated output in a user-facing or decision-making path, check: does it have a fallback when the model fails? Are inputs and outputs logged? Are outputs bounded so a model hallucination cannot cause a downstream catastrophe? In regulated environments, can a human explain why the AI made a specific decision? Explainability is a compliance requirement in fintech and healthcare, not a preference.

## What to produce

A clear verdict for each stage:

**Stage 1:** Pass / Blocked (with specific reason)
**Stage 2:** Pass / Concerns (with line-specific notes)

No padding. If it's fine, say it's fine. If something needs fixing, say exactly what and why, not just that it could be improved.

Log the review outcome in `decisions.md`: what was reviewed, what was flagged, what was resolved.

## Principles
- Stage 1 before Stage 2. Always. Wrong scope reviewed well is still wrong scope.
- Be specific. Vague concerns waste everyone's time.
- Rollback path is not optional. If it doesn't exist, that's the first finding.
- AI-generated code in regulated environments needs human sign-off. Know the policy before you review.
