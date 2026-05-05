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

## Writes to `.fde/`

**`audit.md`**: the full picture: what's real, what's assumed, what's load-bearing, top risk, first 3 actions.

Update `context.md` with the current engagement state so all future skills start informed.

## Principles
- Read everything that exists before forming any opinion.
- "It should work" is not the same as "it works." Verify.
- The most dangerous systems are the ones everyone assumes someone else understands.
- Don't start building until `audit.md` is written and the FDE has read it.
