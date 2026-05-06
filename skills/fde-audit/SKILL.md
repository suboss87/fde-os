---
name: fde-audit
description: Taking over mid-engagement. Reads what exists, separates what works from what was assumed.
---

# @fde-audit

## Token efficiency
Load `context.md` if it exists -- otherwise start cold. Do not load other `.fde/` files until the audit produces them. The point of this skill is to establish ground truth, not assume it.

## Purpose
You're not starting fresh. Someone else was here before you, or the team has been building something for weeks. Before touching anything, you need to know what's real, what's assumed, and what's load-bearing.

## Opening

> "Tell me what you know about the current state. What exists, and how much of it actually works?"

Let them talk. Don't interrupt. You're building a map of reality vs fiction.

## What to listen for

**What works vs what's assumed to work:** systems nobody has actually tested end-to-end.

**Load-bearing workarounds:** scripts, manual steps, or hacks that became critical infrastructure. Touching these without knowing breaks everything.

**What the previous person left behind:** any `.fde/` context, docs, notes, Slack history. Read it all before forming any opinion.

**The single highest risk right now:** what's the thing that, if it breaks today, stops the customer's business?

**Who knows what:** which team member holds knowledge that exists nowhere else.

## One follow-up question

> "What's the one thing I should not touch until I understand it fully?"

The answer to this question is usually the most important thing in the whole system.

## What to produce

A clear audit that tells any FDE, including one who just arrived, exactly where things stand:

- What exists and what actually works
- What was assumed vs what is confirmed
- What is load-bearing and must not be touched blindly
- The single highest risk right now
- Recommended first 3 actions

Keep it honest. Don't soften the picture.

## What to produce after the audit

Before routing to any other skill, write three files. This is not optional. Every subsequent skill in the lifecycle reads from these. An audit that does not populate them leaves the next skill operating blind.

**`audit.md`**: the full picture -- what's real, what's assumed, what's load-bearing, top risk, first 3 actions. Written for the FDE who picks this up at 2am and needs to be operational in ten minutes.

**`terrain.md`**: the codebase map as you understand it now. Modules, hotspots, AI components, data flow, test gaps. This does not need to be complete -- it needs to be honest. Mark unknowns explicitly. `fde-build` will load this file. If it is empty, the build starts blind.

**`reality.md`**: the real problem as the audit has surfaced it, versus what the stated brief says. Even if the brief is mostly accurate, state the delta. `fde-discover` and `fde-plan` both load this. If it is missing, those skills start from zero.

**`context.md`**: update with the current engagement state -- who owns what, where things stand, what the FDE walking in needs to know in the first five minutes.

## Routing after audit

Once the three files are written, route explicitly:

- If the real problem is still unclear: `@fde-discover` before anything else.
- If the real problem is clear and the brief is confirmed: `@fde-plan` to sequence the work.
- If there is an active crisis in the inherited system: `@fde-rescue` immediately.

Do not route to `@fde-build` directly from audit. Build without a plan in an inherited system is the fastest path to a second incident.

## Writes to `.fde/`

**`audit.md`**: reality vs assumption, load-bearing components, top risk, first 3 actions.

**`terrain.md`**: module map, hotspots, AI components, data flow, test gaps. Mark unknowns.

**`reality.md`**: what the audit has established as the actual problem vs the stated brief.

**`context.md`**: updated engagement state for session continuity.

## Principles
- Read everything that exists before forming any opinion.
- "It should work" is not the same as "it works." Verify.
- The most dangerous systems are the ones everyone assumes someone else understands.
- Don't start building until `audit.md`, `terrain.md`, and `reality.md` are all written.
- The previous FDE's decisions are evidence, not verdicts. Understand before judging.
