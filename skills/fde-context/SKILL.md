---
name: fde-context
description: Treat context as an engineering surface. Active budgeting, proactive compaction saving, post-compaction verification. Cross-cutting; used by all other skills.
---

# FDE Context - Context Engineering

## Purpose
Context is the single biggest quality lever for AI agents. Manage it like a precious resource.

## When Activated
- At session start (injected via hook).
- After any compaction.
- When quality degrades.

## Context Hierarchy
1. CLAUDE.md + calibration profile (always loaded)
2. Codebase context document (per session)
3. Relevant source files (per task)
4. Error output / test results (per iteration)

## Budgeting Protocol
- Before major tasks, estimate tokens; if >80% window, split.
- Pre-compaction: serialize current state to `.claude/state/`.
- Post-compaction: reload state, verify alignment. If misaligned → HALT.

## Iron Rule
**Context loss is a CRITICAL INCIDENT. Treat it like a production outage.**
