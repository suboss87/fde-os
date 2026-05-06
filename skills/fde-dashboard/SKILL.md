---
name: fde-dashboard
description: Generate a status dashboard across all active engagements from .fde/ data.
---

# @fde-dashboard

## Token efficiency
Load per engagement: `reality.md`, `brief.md`, `success.md`, `risks.md`, `decisions.md`, `delivery.md`, and `stakeholders.md`. Do not load `terrain.md` (too large) or `trust-profile.md` (contains regulated data -- sensitive). `stakeholders.md` is needed specifically for trust signal detection: it is the file where signals like "stakeholder going quiet" or "routing around the FDE" are recorded, and these are the early warning signs that matter most across a portfolio.

## Purpose
An FDE works across multiple engagements simultaneously. This skill reads all `.fde/` directories it can find and generates a single clean HTML file, a reflection board showing the full picture across every project.

## What it does

Scan for all `.fde/` directories in the current workspace and any paths the FDE specifies. Read each one. Pull the story from the files. Generate `fde-dashboard.html` in the current directory.

Open in a browser. That's it.

## What each engagement card shows

- Engagement name and customer
- Current phase and week
- The real problem (from `reality.md`) vs the original brief (from `brief.md`)
- Definition of success (from `success.md`)
- Top active risk (from `risks.md`)
- Last significant action and next step (from `decisions.md` and `delivery.md`)
- Value delivered so far (from `delivery.md` value log)
- **Trust signal** (from `stakeholders.md`): green if no adverse signals recorded, amber if a stakeholder has gone quiet or routed around the FDE, red if an escalation or explicit concern has been raised. This is the single most important row on the card. Technical progress on an engagement where trust is red is wasted until the trust issue is addressed first.

## The full reflection view

Scroll down past the summary cards to see the full journey for each engagement:
- Every key decision made
- Every risk caught
- Every pattern extracted
- The complete arc from brief to current state

This is the reflection board. Not a task manager. A mirror of the work.

## The output

A single static HTML file. No server. No login. No dependencies. Clean, minimal design. Works offline.

The FDE opens it, sees everything across all their projects in one view, and knows exactly where they are and what matters next.

## If .fde/ data is sparse

Some engagements will have more context than others. Generate what exists. Don't pad gaps. An empty field is honest, it tells the FDE what they haven't captured yet.

## Writes to

**`fde-dashboard.html`**: generated in the root of the current directory.

## Principles
- Read what's there. Don't invent what's not.
- One file, opens in a browser, works offline. No complexity.
- The dashboard reflects reality. If the data is thin, the dashboard is thin. That's useful information.
- Minimal design. The data is the content.
