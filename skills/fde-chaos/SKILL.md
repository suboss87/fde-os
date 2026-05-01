---
name: fde-chaos
description: Operate when the map is wrong, the API is undocumented, or production is on fire. Debug with partial knowledge, document assumptions, find safe paths forward.
---

# FDE Chaos – Field Reliability

## Purpose
Real enterprise environments are partially unmappable. This skill enables safe action under uncertainty.

## When Activated
- When `fde-discovery` fails (missing dependencies, undocumented APIs).
- When a production incident is active.
- When you have <50% knowledge of the system you must change.

## Chaos Protocol
1. **Acknowledge Unknowns** – explicitly list what you don't know.
2. **Assume Maximum Blast Radius** – treat every undocumented subsystem as critical.
3. **Minimum Safe Change** – find the smallest possible intervention. Often a read-only query first.
4. **Hypothesis-Driven Debugging** – "If problem is X, then changing Y should cause Z." Test the hypothesis with minimal side effects.
5. **Instrument Everything** – add temporary logging, monitoring, and alerts before touching anything.
6. **Document Assumptions** – after resolution, update `docs/fde/chaos-log.md` with what you learned.

## Iron Rules
- **Never push to production without a tested rollback, even in chaos.**
- **If the situation is beyond safe autonomy, escalate to a human immediately.**
