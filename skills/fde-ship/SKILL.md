---
name: fde-ship
description: Deploy to production safely. Pre-flight checklist, canary deploy, verified rollback. No surprises.
---

# @fde-ship

## Purpose
Shipping is the moment everything either lands or blows up. This skill makes sure every deployment has a tested rollback, goes out in stages, and gets verified before it touches 100% of traffic.

## Opening

> "Is the rollback tested and confirmed? Not planned — tested."

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

Don't proceed until every item is confirmed. Not assumed — confirmed.

## Deployment sequence

Canary first. 1 to 5% of traffic for at least 10 minutes. Watch error rates, latency, and the business metric this change affects.

If anything looks wrong, roll back immediately. Don't investigate during the canary. Roll back, investigate safely, redeploy when confident.

Expand in stages. 5% confirmed stable, go to 25%. 25% stable, go to 100%.

## After shipping

Run smoke tests against production. Verify the business metric moved in the right direction.

Update delivery.md with what shipped, when, what it delivers, and how to roll back.

## Writes to .fde/

delivery.md — deployment record and running value log updated with this deployment's contribution.

## Principles
- A deployment without a tested rollback is reckless.
- Roll back on any anomaly during canary. Investigate safely.
- Never deploy on Friday unless it's critical and someone is on call.
- Verify the business metric, not just the technical metric.
