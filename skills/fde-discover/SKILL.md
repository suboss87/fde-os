---
name: fde-discover
description: Find the real problem. Map the codebase. The brief is a hypothesis until evidence confirms it.
---

# @fde-discover

## Token efficiency
Load `context.md` and `brief.md` only. Load `terrain.md` if it exists -- do not regenerate it from scratch. Go deep only on hotspots, never load the full codebase into context.

## Opening question

> "What workaround is the team using right now to deal with this?"

This is the most powerful question in the FDE toolkit.

The workaround is the real spec. Shadow spreadsheets, nightly scripts, the Slack message someone sends every Monday morning, the manual copy-paste between two systems that were never integrated -- these are not inefficiencies. They are the requirements the system never implemented. The workaround tells you what the system cannot do that the business needs it to do every week.

**Find the spreadsheet.** There is almost always a spreadsheet. Someone updates it manually on a regular cadence because the system cannot produce the number the business needs. Whatever is in that spreadsheet is your actual brief. The person who maintains it has been compensating for the system's failure for years. Find them before you look at a single line of code. They know exactly what is broken. They have probably written it down somewhere nobody reads.

## What to actually listen for

**The hesitation:** when someone says "well, there's also this other thing we do..." -- stop them. Ask them to finish. That is where the real problem is. The main story is what they are comfortable explaining. The hesitation is what they have not explained to anyone before.

**Shadow AI:** if the workaround involves someone using ChatGPT or similar tools to process data, write queries, or fill gaps -- note it. It means the system is failing to meet a real need and someone found a way around it. That is both a risk (uncontrolled data leaving the building) and a signal about where structured AI could replace the workaround.

**The module everyone avoids:** ask "which part of the codebase do you least want to touch?" The answer will be unanimous. That module is the load-bearing wall. It has the most business logic and the least documentation and the tests that nobody trusts. Everything you build will touch it eventually. Map it first.

**The thing that was supposed to be temporary:** the queue that was added "just for now" in 2019. The cron job that runs at 3am because "we'll clean that up later." Temporary code in production is permanent code with an excuse. Treat it as permanent.

**The honest answer:** ask "what does your team actually think of this system?" The informal answer is more useful than the official one. If the answer is "it works well enough," you are on a green field. If it is accompanied by a specific look between two developers -- that look is your starting point.

## Mapping the terrain

Scan methodically. Do not load the full codebase into context.

1. Language, framework, build system. Age of the last major upgrade.
2. Module map -- what does what. Look for modules with no clear owner.
3. Hotspots -- highest churn files, most complex, least tested. Mark these "handle with care." The highest churn file in any legacy codebase is the one everyone is afraid to refactor but cannot avoid touching.
4. AI components: model calls, prompt files, vector stores, inference pipelines. Flag every one. AI components do not fail like regular code. They degrade silently over time as the world changes around them.
5. Data flow -- where data comes in, how it moves, where it goes, where it stops.
6. Test landscape -- what is covered, what is not, what is a lie (tests that pass but do not actually verify the behaviour they claim to test).

## When scope is a transformation, not a single problem

A startup bug fix and a bank AI transformation both need discovery. The difference is the unit of analysis.

For a single problem: map the codebase, find the real requirement, confirm or disprove the brief.

For a programme-scale transformation: the terrain is the organisation's capability landscape, not just one codebase.

**Use case scoring -- do this before prototyping anything:**

When multiple use cases are on the table (which is always true in a transformation), score each one across three dimensions:

| Dimension | Question | Score 1-5 |
|---|---|---|
| Business value | What does it cost them if this is not solved? | |
| Implementation complexity | How hard is this to build safely? | |
| Data readiness | Is the data available, clean, and in sufficient volume? | |

Plot value against complexity. The sweet spot is high value, low complexity, high data readiness. That is your first prototype. High value, high complexity is phase two. Low value anything is a future phase or a no.

Never let enthusiasm for a technically interesting use case override this scoring. The most impressive AI demo is worth nothing if the data is not there or the complexity is six months of work.

**The capability gap map -- for transformation engagements:**

Ask: "What does this organisation do today that is manual, repetitive, and rules-based?" Map each answer. These are your AI use case candidates. Then ask: "Where does the process break down?" That is where to start.

## When discovery reveals more than the brief

Sometimes the scan confirms the brief. Sometimes it reveals the problem is three times larger.

If you find this, tell the customer before you tell yourself it is manageable.

Lead with evidence: "Here is what we found" before "here is what that means." Give them options -- descope to deliver something real, rescope to address the real problem, or pause and plan. Never ask them to silently accept an outcome that is worse than what they hired you for.

The FDE who hides a scope reset to avoid a hard conversation loses the customer's trust the moment the gap becomes visible. The FDE who names it early and offers a path forward earns the relationship.

Confirm any reset in writing. Update `success.md` and `brief.md` to reflect the new shared understanding before continuing.

## What to produce

Tell the FDE specifically:
- What the real problem appears to be, with evidence from the workaround and the codebase
- Where the shadow process is and what it tells you about what was never built
- Whether AI is part of the real solution, or whether the problem is a data quality or process problem in disguise
- The 3 highest-risk areas of the codebase with a one-line reason for each
- What must not be touched without characterisation tests first

No padding. One concrete paragraph on each.

## Writes to `.fde/`

**`reality.md`**: the real problem versus the stated brief. Evidence for each claim. Updated as evidence changes.

**`terrain.md`**: codebase map -- modules, hotspots, data flow, test gaps. Updated as you learn more.

## If you have formed three wrong reads on the real problem

Stop. Do not form a fourth hypothesis.

If your first three reads on the real problem have all been disproven, the brief is actively misleading you. This is not a discovery failure. It means someone is not telling you something. The most common cause: the person who briefed you does not know the real problem either, or knows it and cannot say it directly.

Change the method. Stop analysing the system. Start asking different people. "If you had to bet on what's actually wrong here, what would you say?" Ask three people separately. The thing they all hesitate before saying is the real problem.

## When you know you are doing discovery wrong

These thoughts mean stop immediately:

- "I'll finish mapping the codebase and then work out the real problem" -- you are avoiding the uncomfortable conversation
- "The brief is probably roughly right" -- the brief is never roughly right, it is always missing the load-bearing detail
- "I don't want to challenge the customer's framing yet" -- this is the moment to challenge it, not later
- "One more week of discovery and I'll know enough" -- discovery does not end because you know enough, it ends because you have committed to a hypothesis

## Principles
- The brief is a hypothesis until evidence confirms it.
- The workaround is always more honest than the requirements document.
- Never modify code before the terrain map exists.
- The spreadsheet someone updates manually every week is the real system.
- Scan wide, go deep only on hotspots. Token efficiency is not optional.
