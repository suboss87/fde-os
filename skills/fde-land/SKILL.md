---
name: fde-land
description: First 48 hours. Build trust, map stakeholders, define success before any work starts.
---

# @fde-land

## Token efficiency
Load `context.md` if it exists. Nothing else until you know what kind of engagement this is.

## Before day one

Read the brief carefully. What is not in it matters as much as what is.

A brief that does not name a decision-maker means you will spend two weeks building for someone who cannot say yes. A brief that says "straightforward cleanup" on a system that has been running for eight years means the previous attempt to clean it up is still visible in the git history as a revert. A brief with a very tight timeline means someone already promised the outcome before they hired you.

Name these in `brief.md` before your first conversation. They are not problems yet. They are the questions you are walking in to answer.

**Check before you arrive:**
- Do you have access to what you need -- repo, environment, relevant docs? Waiting for access on day two signals to the team that you do not plan ahead.
- Has someone tried to fix this before? Find out why it failed before you assume your approach is different.
- Are other vendors or teams in scope? If yes, you are not the only one in the room, even if you are the only one in the meeting.

## Opening question

> "Before we look at anything technical -- what would a bad outcome look like for you personally on this one?"

Wait for the full answer. Do not fill the silence. People tell you their real fears when you ask about failure, not success. The official answer is what they want. The pause after it is what they are afraid of.

If their answer to "bad outcome" does not match the brief, the brief is wrong. Note it immediately.

## What to actually listen for

**The real decision-maker:** whoever is mentioned most often by others, especially if you have not met them yet. That is who your work will be judged by.

**The previous attempt:** "we tried something similar last year" is the most important sentence in the first meeting. Ask what happened. Ask who was involved. The person who worked on it is either still there and protective, or left because of it.

**The internal team who was passed over:** if an internal team tried to fix this and a consultant was brought in anyway, that team knows exactly what is wrong. They also resent you being there. Find them before the first standup. Ask what they tried. Use their language in every meeting. If you make them look right, they will protect you. If you ignore them, they will wait for you to make a mistake.

**The sacred thing nobody mentioned:** payment data, patient records, the one database nobody is supposed to touch, the integration with the system the CEO built in 2011. Ask directly: "Is there anything in this environment that I should treat as untouchable?" The hesitation before the answer is the answer.

**Multi-vendor and multi-team environments:** who owns what boundary? Who do you need sign-off from before your change crosses into their surface? An FDE who moves fast without knowing this will break something that belongs to someone else, and the blame will be yours regardless of the cause.

**AI posture:** what tools are already in use, sanctioned or shadow? Is there an existing AI initiative this could conflict with or complement? A CTO who is excited about AI and a compliance team who is not are both real -- map both before you propose anything.

**AI policy:** ask directly before any code is generated -- "Does your organisation have a policy on AI-generated code?" Then ask the harder question: "Are there decisions in this system where you would not be comfortable with AI involvement?" The answer is not always obvious to the customer until someone asks.

## Second question (only if needed)

> "Who on this team is going to push back on what we're doing, and what are they protecting?"

This tells you more about the engagement than the org chart. Resistance usually protects something real -- a previous decision, an implicit commitment, a relationship. Find out what it is before you run into it.

## What to produce

Give the FDE a specific picture of:
- What success looks like and who actually signs off on it (not just who says they do)
- What is explicitly out of scope -- the boundary matters as much as the goal
- What data is sacred and must never enter AI context
- Who the real stakeholders are, who has veto power, and where the resistance is
- What the AI posture is: tools in use, existing mandates, policy constraints
- One falsifiable hypothesis about the real problem underneath the brief

One page. Specific and plain. If you cannot make it one page, you do not understand it yet.

If remote: trust-building takes 40% longer. Schedule a short video call before anything asynchronous. Reading the room over Slack is not the same as reading the room.

## Writes to `.fde/`

**`brief.md`**: what they said the problem is, who sent you, what the timeline is, what is missing from the brief.

**`success.md`**: what done looks like, how it gets measured, who signs off. Agreed with the customer, not assumed. Includes what is explicitly out of scope.

**`trust-profile.md`**: sacred data identified, fears heard, AI policy confirmed, AI posture mapped, approval chain recorded.

**`stakeholders.md`**: who matters, who is resistant, who is your champion, who has veto power, who was passed over.

## Principles
- Never start technical work before `success.md` exists.
- Sacred data never enters AI context. Ever.
- The brief is a hypothesis. Treat it as one until `@fde-discover` confirms it.
- The internal team who was passed over is not your obstacle. They are your best source of truth.
- If the customer cannot define success, that is the first problem to solve.
