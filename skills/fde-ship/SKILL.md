---
name: fde-ship
description: Deploy to production with enterprise-grade rigour. Pre-flight checklist, canary deployment, verified rollback, post-deploy smoke tests.
---

# FDE Ship – Production Pilot

## Purpose
Every deployment carries consequences. This skill ensures safety proportional to enterprise risk.

## When Activated
- When a feature is production-ready.
- User says "deploy", "ship", "go live".

## Pilot's Checklist
### Pre-flight
- All tests pass.
- No hardcoded secrets.
- Database migrations are reversible.
- Rollback plan exists and is TESTED.
- Monitoring alerts configured.

### Deployment
- Canary to 1–5% traffic for 10+ minutes.
- Monitor errors, latency, business metrics.
- If anomaly → ROLLBACK IMMEDIATELY.

### Post-deploy
- Smoke tests against production.
- Verify business metric.
- Generate deployment record.

## Iron Rules
- **Never deploy on Friday (unless critical, and someone is on call).**
- **A deployment without a tested rollback is a resume-generating event.**
