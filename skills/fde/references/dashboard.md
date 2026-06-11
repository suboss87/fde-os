# dashboard — the portfolio view

**Enter when:** the FDE runs several customers and asks "where am I across everything?"

**Read per engagement:** `reality.md`, `brief.md`, `success.md`, `risks.md`, `decisions.md`, `delivery.md`, `stakeholders.md`. Never `terrain.md` (too large) or `trust-profile.md` (sensitive — stakeholder signals live in `stakeholders.md`).

## Method (you do this work)

1. **Find the engagements:** `~/fde-engagements/*/.fde/` (primary) · workspace `./.fde/` if present · paths the FDE names. Read each folder **separately** — never merge two customers.
2. **Per engagement, derive the card:**
   - Name, phase, week
   - Real problem (`reality.md`) vs original brief (`brief.md`)
   - Definition of success
   - Top active risk
   - Last significant action + next step
   - Value delivered so far
   - **Trust signal** — the most important row: **green** (no adverse signals) / **amber** (a stakeholder gone quiet or routing around the FDE) / **red** (escalation or explicit concern). Technical progress on a red-trust engagement is wasted until trust is addressed.
3. **Triage order:** red trust first, then overdue risks, then stalled delivery. Say which engagement gets tomorrow morning and why.
4. **Generate `fde-dashboard.html`** in the current directory: single static file, no server, no dependencies, works offline. Summary cards on top; the full reflection per engagement below (decisions made, risks caught, the arc from brief to now).

Sparse data: render what exists, pad nothing. An empty field honestly shows what hasn't been captured.

## Artifact

**`fde-dashboard.html`** — regenerated, never hand-maintained.

## Checkpoint

One paragraph to the FDE: the portfolio in red/amber/green, the single most urgent item, and what it costs to ignore it this week.

## Principles

- Read what's there; invent nothing.
- Trust signal outranks technical progress.
- One file, opens in a browser, works offline.
- Thin data is information, not a gap to fill.
