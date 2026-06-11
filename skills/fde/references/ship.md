# ship — production without surprises

**Enter when:** a slice is built, reviewed, and ready to deploy.

**Read first:** `context.md`, `delivery.md`. Load `trust-profile.md` if the deploy touches regulated data or needs an approval chain.

Opening question, calm tech lead voice: **has anyone actually *run* the rollback, or is it still a slide?** If only planned, that's today's work — say so plainly.

## Method — pre-flight (you verify each, confirmed not assumed)

- All tests pass — state the command and result.
- No hardcoded secrets/credentials (repeat `--include` per extension — brace globs silently match nothing):
```bash
grep -rnE "(api[_-]?key|secret|password|token)\s*[:=]\s*['\"][^'\"]{8,}" \
  --include="*.js" --include="*.ts" --include="*.py" --include="*.env" \
  --include="*.yaml" --include="*.json" . | grep -vE "example|template|test" | head
```
- DB migrations reversible.
- Rollback documented **and tested**.
- Monitoring alerts configured, someone watching.
- Team knows the deploy is happening.
- Not a Friday unless genuine emergency with someone on call.
- **Change approval (CAB) environments:** window open, ticket approved. In banking/healthcare/gov, deploying outside an approved window is a compliance finding even when the deploy succeeds. "We didn't know there was a CAB process" is not a defence — find out before the deploy date.

## Method — the deploy

**Canary:** 1–5% of traffic, ≥10 minutes. Watch error rate, latency, and **the business metric this change affects**. Anything looks wrong → roll back immediately; investigate safely; redeploy when confident. Never investigate during the canary. Then stage up: 5% → 25% → 100%, each confirmed stable.

**Programme-scale rollout (transformations)** — different problem from one service:
1. **Pilot** — one team, one use case; success metrics defined *before* it starts (after = fitting metrics to results).
2. **Limited release** — 3–5 teams, real load; this is where the failure modes the pilot hid show up.
3. **Broad release** — self-serve onboarding; if teams still need the FDE to start, onboarding isn't finished.
4. **Enterprise standard** — the FDE is no longer needed for this use case. That's the end state.
Straight from pilot to standard = a high-profile failure at scale.

## Method — after

Smoke tests against production. Verify the business metric moved the right way. Then **define the pulse before closing the laptop** — a deploy without a pulse is one you'll hear about only when it breaks:

1. **Metric:** the number that says it's working — "p99 on payment endpoint < 800ms", not "errors low."
2. **Frequency:** daily week one, weekly after, monthly when stable.
3. **Threshold:** the exact value that triggers incident response. Nobody knows the number → nobody acts until too late.

AI components: also define what *normal output* looks like and check a weekly sample of real production outputs — drift is technically-valid-but-wrong, and no exception will fire.

## Artifact

**`delivery.md`** — deployment record: what shipped, when, what it delivers in business terms, rollback procedure, **and the pulse definition**. Written for whoever inherits the system.

## Checkpoint

Before 100%: canary clean, business metric verified, pulse written into `delivery.md`. Any item unconfirmed → the deploy waits.

## Principles

- A deployment without a tested rollback is reckless.
- Roll back on any canary anomaly; investigate safely.
- Verify the business metric, not just the technical one.
- No pulse, no done.
