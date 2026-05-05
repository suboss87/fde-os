---
name: fde-ship
description: Deploy to production safely. Pre-flight checklist, canary deploy, verified rollback. No surprises.
---

# @fde-ship

## Token efficiency
Load `context.md` and `delivery.md` only. Load `trust-profile.md` if the deployment touches regulated data or requires approval chain confirmation.

## Purpose
Shipping is the moment everything either lands or blows up. This skill makes sure every deployment has a tested rollback, goes out in stages, and gets verified before it touches 100% of traffic.

## Opening

> "Is the rollback tested and confirmed? Not planned, tested."

If the answer is no, that's the first thing to fix.

## Pre-flight checklist

Work through this before any deployment:

- All tests pass.
- No hardcoded secrets or credentials.
- Database migrations are reversible.
- Rollback procedure is documented and has been tested.
- Monitoring alerts are configured and someone is watching.
- The team knows a deploy is happening.
- Not a Friday unless it's a genuine emergency with someone on call.

Don't proceed until every item is confirmed. Not assumed, confirmed.

## Deployment sequence

Canary first. 1 to 5% of traffic for at least 10 minutes. Watch error rates, latency, and the business metric this change affects.

If anything looks wrong, roll back immediately. Don't investigate during the canary. Roll back, investigate safely, redeploy when confident.

Expand in stages. 5% confirmed stable, go to 25%. 25% stable, go to 100%.

## Programme-level rollout -- for transformation engagements

A canary deploy covers one service going to one environment. A transformation rollout covers an AI programme going to an enterprise. These are different problems.

For programme-scale deployments, the sequence is not canary → 25% → 100%. It is:

**Pilot** -- one team, one use case, controlled conditions. The goal is not to prove it works technically. It is to prove it works with real users in a real environment. Define success metrics before the pilot starts. If you define them after, you will fit the metrics to the result.

**Limited release** -- three to five teams, real production load, monitored closely. The goal is to find the failure modes that the pilot did not surface. There will always be failure modes the pilot did not surface. The limited release is where you find them before they affect everyone.

**Broad release** -- available to all qualifying teams with self-serve onboarding. The goal is adoption without your involvement. If teams need you to get started, the onboarding is not finished. Fix that before broad release.

**Enterprise standard** -- part of how the organisation works, not a special programme. The goal is that the FDE is no longer needed for this use case. This is the end state.

The FDE who goes straight from pilot to enterprise standard will have a high-profile failure at scale. The FDE who sequences deliberately will have a programme that builds confidence at each step and survives the inevitable political scrutiny that comes when something goes wrong.

## After shipping

Run smoke tests against production. Verify the business metric moved in the right direction.

**Define the pulse before you close the deploy:**

A deployment without a defined pulse check is a deployment you will only hear about again when something breaks. Before you close the laptop, write three things into `delivery.md`:

1. **The metric**: what number tells you this is working? Not "error rate is low" -- "p99 latency on the payment endpoint is below 800ms" or "document processing success rate is above 94%."

2. **The frequency**: how often do you check it? Daily for the first week. Weekly after that. Monthly once stable.

3. **The threshold**: what number triggers an incident response? Write the exact value. If it drops below this number, someone acts. If nobody knows the threshold, nobody acts until it is too late.

For AI components specifically: define what "normal" output looks like before you leave. If the model starts drifting -- producing outputs that are technically valid but subtly wrong -- nobody will notice until a human complains. The pulse check for an AI component is not just latency and error rate. It is output quality on a sample of real production inputs, checked weekly.

Write the pulse definition in `delivery.md` alongside the deployment record. The person who inherits this system needs to know what to watch, not just what was built.

## Writes to `.fde/`

**`delivery.md`**: deployment record updated -- what shipped, when, what it delivers in business terms, and how to roll back.

## Principles
- A deployment without a tested rollback is reckless.
- Roll back on any anomaly during canary. Investigate safely.
- Never deploy on Friday unless it's critical and someone is on call.
- Verify the business metric, not just the technical metric.
