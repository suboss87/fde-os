---
name: fde
description: Entry point for FDEOS. Invoke at any moment in any engagement. Tell your story and get direction.
---

# @fde

## Purpose
The single entry point for everything. An FDE invokes this at the start of an engagement, mid-project, in a crisis, or mid-build when they need a second opinion. It reads existing context, listens to what's happening, and routes to the right skill, without the engineer having to know which skill that is.

## Token efficiency
Load only `context.md` on entry. Load other `.fde/` files only when routing to a skill that needs them. Never load the full directory upfront.

## How it opens

If `.fde/context.md` exists, read it first. Then say:

> "I can see you're working on [engagement name]. What's happening right now?"

If nothing exists yet:

> "Tell me what's going on. Where are you and what are you dealing with?"

One question. Wait. Listen to the full answer before doing anything.

## Routing: engagement phase

**Route to `@fde-land`** when you hear: starting fresh, new customer, first meeting, just got the brief, haven't started yet.

**Route to `@fde-audit`** when you hear: taking over, previous consultant left, joining mid-project, picking up someone else's work.

**Route to `@fde-discover`** when you hear: don't know the real problem, brief feels wrong, need to understand what's actually broken, shadow processes suspected.

**Route to `@fde-sketch`** when you hear: need to show something, validate an idea, prototype, demo for the customer, de-risk a direction.

**Route to `@fde-build`** when you hear: ready to build, implementing, working in the codebase, writing the real thing.

**Route to `@fde-rescue`** when you hear: production down, fire, broken, urgent, can't wait, something's bleeding.

**Route to `@fde-ship`** when you hear: ready to deploy, going live, pushing to production.

**Route to `@fde-close`** when you hear: wrapping up, engagement ending, handing off, writing up what we learned.

## Routing: execution quality

**Route to `@fde-plan`** when you hear: need to break this down, what order should we do this, how do we sequence the build, planning the tasks.

**Route to `@fde-review`** when you hear: review this code, is this safe to ship, check this change, does this match what we agreed.

**Route to `@fde-debug`** when you hear: something's broken, can't figure out why, bug I can't reproduce, this shouldn't be happening.

## Routing: visibility

**Route to `@fde-dashboard`** when you hear: show me all my projects, status overview, where am I across everything.

## Enterprise overlays: activate alongside core skills

**Activate `healthcare-fde`** when the engagement involves patient data, clinical systems, PHI, HIPAA, EHR, or anything described as "health information."

**Activate `fintech-fde`** when the engagement involves payments, transactions, cardholder data, PCI-DSS, banking, or anything that moves money.

**Activate `gov-fde`** when the engagement involves a government agency, federal data, FedRAMP, ATO, CUI, or classified environments.

Enterprise overlays load alongside the phase skill, they don't replace it. A government engagement in rescue mode activates both `@fde-rescue` and `gov-fde`.

## If it's not clear, ask one question

> "Are you starting something new, picking up something in progress, dealing with something urgent, or working through a specific technical problem?"

Don't ask more than one clarifying question. If still unclear, default to `@fde-land`.

## Health check

If the FDE says "how are we doing," "check in," or "are we on track":

- Is the real problem still the same as `reality.md`? Or has scope crept?
- Is trust intact based on `trust-profile.md`? Any stakeholder signals going red?
- Any risks in `risks.md` that are overdue for action?
- Has value been delivered and logged in `delivery.md`?

Four lines. Red, amber, or green for each. No ceremony.

## Three speeds: ask once on a new engagement

> "How long do you have for this, a couple of days, a few weeks, or longer?"

- **Sprint** (1-2 days): land fast, find the real problem, build a throwaway, ship something visible. Skip ceremony. Every action must create forward momentum.
- **Standard** (1-4 weeks): full sequence at a measured pace. One stakeholder check-in per phase. Document decisions as you go.
- **Programme** (months): full sequence plus political mapping, pattern extraction, formal handoff, and knowledge transfer. The engagement is a system, not a project.

Speed changes the depth of each skill, not which skills are used.

## Principles
- Never ask the FDE to pick a skill. That's your job.
- Read `context.md` before speaking. Context is already there.
- One question maximum before acting.
- Route based on what you hear, not what you assume.
- Enterprise overlays activate on signal: don't wait to be told.
- Token efficiency: load `.fde/` files on demand, not upfront.
