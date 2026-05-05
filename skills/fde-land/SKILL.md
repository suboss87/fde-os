---
name: fde-land
description: First 48 hours. Build trust, map stakeholders, define success before any work starts.
---

# @fde-land

## Purpose
The first 48 hours decide the engagement. This skill starts before you arrive, ensuring you walk in with the right questions, identify what is really at stake, and create a shared definition of success before touching anything technical.

## Before day one

Read the brief carefully. Note what is missing, not just what is there. A brief that is vague about timeline is a signal. A brief that names no internal champion is a signal. A brief that says "simple cleanup" for a system that has been running for 8 years is a signal.

Before you show up:
- Confirm you have access to what you need: repo, staging environment, relevant documentation. Waiting for access on day two is a trust tax.
- Check whether there have been prior attempts to fix this. If yes, find out why they failed before assuming you know the approach.
- Identify whether this engagement sits inside a larger programme with other vendors or internal teams. That context changes everything about how you land.

**Red flags before day one:**
- No clear success definition in the brief
- Timeline that leaves no room for discovery
- Mention of a previous consultant who "didn't work out"
- Multiple stakeholders listed with no named decision-maker

Name these in `brief.md`. They are not blockers, they are starting hypotheses.

## Opening question

> "Before we look at anything technical, what would a bad outcome look like for you personally on this one?"

Wait for the full answer. This question unlocks more than any technical audit. People tell you their real fears when you ask about failure, not success.

## What to listen for

**Sacred data:** anything they hesitate before mentioning. Payment data, patient records, personal information, anything "sensitive." Mark it immediately.

**The real problem signal:** if their answer to "bad outcome" doesn't match the brief you were given, the brief is wrong. Note it.

**Political signals:** names that come up more than once, anyone described as "difficult" or "protective," any mention of past failed attempts.

**Internal team dynamics:** is there an internal team who tried to fix this and was passed over? If so, that team may be resistant, protective of their territory, or quietly hoping you fail. Treat them as partners, not obstacles. Find out what they know before assuming they do not.

**Multi-vendor and multi-team environments:** if other vendors, agencies, or internal teams are in scope, map the dependencies and the politics separately. Who owns what? Who is responsible if your change breaks their surface? Who needs to approve work that crosses a boundary? These are load-bearing questions. An FDE who does not know who else is in the room will break trust without meaning to.

**AI posture:** what AI tools are already in use, sanctioned or shadow. Is there an existing AI initiative, mandate, or budget? Is leadership excited about AI or resistant to it? This shapes what you can propose and how. Map this before any technical work begins.

**AI policy:** ask directly before any code is generated, "Does your organisation have a policy on AI-generated code?" Especially in regulated environments. Then ask the harder question: "Are there decisions in this system that AI should not be making?" The answer is not always obvious to the customer until someone asks.

## Second question (only if needed)

> "Who on the team is going to push back on this, and why?"

This tells you more about the engagement than the org chart does.

## What to produce

Give the FDE a clear picture of:
- What success looks like and who defines it
- What data is sacred and must never enter AI context
- Who the real stakeholders are and where the resistance is
- What the environment looks like (compliance, risk, access)
- What the AI posture is: tools in use, appetite, any existing mandate
- One falsifiable hypothesis about the real problem

Keep it to one page. Specific and plain.

If remote: note that trust-building takes longer. Suggest a short video call before anything asynchronous. Reading the room over Slack isn't the same.

## Writes to `.fde/`

**`brief.md`**: what they said the problem is, who sent you, what the timeline is.

**`success.md`**: what done looks like, how it gets measured, who signs off. Agreed with the customer, not assumed. Include what is explicitly out of scope -- the boundary matters as much as the goal. If scope is not defined, every new request becomes an implicit commitment.

**`trust-profile.md`**: sacred data identified, fears heard, AI policy confirmed, AI posture mapped, approval chain recorded.

**`stakeholders.md`**: who matters, who's resistant, who's your champion, who has veto power.

## Principles
- Never start technical work before `success.md` exists.
- Sacred data never enters AI context. Ever.
- The brief is a hypothesis. Treat it as one until `@fde-discover` confirms it.
- If the customer can't define success, that is the first problem to solve.
