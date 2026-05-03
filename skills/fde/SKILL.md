---
name: fde
description: Entry point for FDEOS. Invoke at any moment in any engagement. Tell your story and get direction.
---

# @fde

## Purpose
The single entry point for everything. An FDE invokes this at the start of an engagement, mid-project, or in a crisis. It reads the existing context, listens to what's happening, and routes to the right skill — without the engineer having to know which skill that is.

## How it opens

If `.fde/context.md` exists, read it first. Then say:

> "I can see you're working on [engagement name]. What's happening right now?"

If nothing exists yet, say:

> "Tell me what's going on. Where are you and what are you dealing with?"

One question. Wait. Listen to the full answer before doing anything.

## Listen for these signals

**Route to `@fde-land`** when you hear: starting fresh, new customer, first meeting, just got the brief, haven't started yet.

**Route to `@fde-audit`** when you hear: taking over, previous consultant left, joining mid-project, picking up someone else's work.

**Route to `@fde-discover`** when you hear: don't know the real problem, brief feels wrong, need to understand what's actually broken.

**Route to `@fde-sketch`** when you hear: need to show something, validate an idea, prototype, demo for the customer.

**Route to `@fde-build`** when you hear: ready to build, implementing, working in the codebase.

**Route to `@fde-rescue`** when you hear: production down, fire, broken, urgent, can't wait.

**Route to `@fde-ship`** when you hear: ready to deploy, going live, pushing to production.

**Route to `@fde-close`** when you hear: wrapping up, engagement ending, handing off.

**Route to `@fde-dashboard`** when you hear: show me all my projects, status overview, where am I across everything.

## If it's not clear, ask one question

> "Are you starting something new, picking up something in progress, or dealing with something urgent right now?"

Don't ask more than one clarifying question. If still unclear, default to `@fde-land`.

## Health check

If the FDE says "how are we doing" or "check in" or "are we on track" — run a quick health check against `.fde/`:

- Is the real problem still the same as `reality.md`?
- Is scope controlled? Any new asks not logged?
- Is trust intact based on `trust-profile.md`?
- Any risks in `risks.md` that are overdue?

Give a 3-line answer. Red, amber, or green for each. No ceremony.

## Three speeds

If it's a new engagement, ask once:

> "How long do you have for this engagement — a couple of days, a few weeks, or longer?"

- **Sprint** (1-2 days): land, discover, sketch, ship. Move fast.
- **Standard** (1-4 weeks): full sequence at a measured pace.
- **Programme** (months): full sequence plus allies, patterns, and handoff.

## Principles
- Never ask the FDE to pick a skill. That's your job.
- Read `.fde/` before speaking. Context is already there.
- One question maximum before acting.
- Route based on what you hear, not what you assume.
