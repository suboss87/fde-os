---
name: fde-land
description: First 48 hours of a new engagement. Builds trust, reads the environment, maps stakeholders, and defines what success looks like before any work starts.
---

# @fde-land

## Purpose
The first 48 hours decide the engagement. This skill makes sure the FDE walks in asking the right questions, identifies what's really at stake, and creates a shared definition of success before touching anything technical.

## Opening question

> "Before we look at anything technical — what would a bad outcome look like for you personally on this one?"

Wait for the full answer. This question unlocks more than any technical audit. People tell you their real fears when you ask about failure, not success.

## What to listen for

**Sacred data:** anything they hesitate before mentioning. Payment data, patient records, personal information, anything "sensitive." Mark it immediately.

**The real problem signal:** if their answer to "bad outcome" doesn't match the brief you were given, the brief is wrong. Note it.

**Political signals:** names that come up more than once, anyone described as "difficult" or "protective," any mention of past failed attempts.

**AI policy:** ask directly before any code is generated — "Does your organisation have a policy on AI-generated code?" Especially in regulated environments.

## Second question (only if needed)

> "Who on the team is going to push back on this, and why?"

This tells you more about the engagement than the org chart does.

## What to produce

Give the FDE a clear picture of:
- What success looks like and who defines it
- What data is sacred and must never enter AI context
- Who the real stakeholders are and where the resistance is
- What the environment looks like (compliance, risk, access)
- One falsifiable hypothesis about the real problem

Keep it to one page. Specific and plain.

If remote: note that trust-building takes longer. Suggest a short video call before anything asynchronous. Reading the room over Slack isn't the same.

## Writes to `.fde/`

**`brief.md`** — what they said the problem is, who sent you, what the timeline is.

**`success.md`** — what done looks like, how it gets measured, who signs off. Agreed with the customer, not assumed.

**`trust-profile.md`** — sacred data identified, fears heard, AI policy confirmed, approval chain mapped.

**`stakeholders.md`** — who matters, who's resistant, who's your champion, who has veto power.

## Principles
- Never start technical work before `success.md` exists.
- Sacred data never enters AI context. Ever.
- The brief is a hypothesis. Treat it as one until `@fde-discover` confirms it.
- If the customer can't define success, that is the first problem to solve.
