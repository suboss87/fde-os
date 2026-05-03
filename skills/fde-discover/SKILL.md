---
name: fde-discover
description: Find the real problem and map the terrain. The brief is a hypothesis. This skill finds out what's actually true.
---

# @fde-discover

## Purpose
The brief is almost never the real problem. This skill finds what's actually broken, what the team is working around, and what the codebase looks like before anyone touches it.

## Opening question

> "What workaround is the team using right now to deal with this?"

This is the most powerful question in the FDE toolkit. Shadow spreadsheets, nightly scripts, manual steps, copy-paste processes — these are the real spec. The workaround tells you what the system can't do that people need it to do.

## What to listen for

**The shadow process:** any manual step that happens regularly because the system doesn't handle it. That's the real requirement.

**The hesitation:** when someone says "well, there's also this thing we do..." — that's where the real problem is.

**Codebase signals:** highest churn files, most TODOs, modules everyone avoids, test coverage below 20%.

**The honest answer:** ask "what does your team actually think of this system?" The informal answer is more useful than the official one.

## Mapping the terrain

Run a methodical codebase scan:
1. Language, framework, build system.
2. Module map — what does what.
3. Hotspots — highest churn, most complex, least tested. Mark these "handle with care."
4. Data flow — where data comes in, how it moves, where it goes.
5. Test landscape — what's covered, what's not, what's a lie.

Never load the full codebase into context. Scan at the module level, go deep only on hotspots.

## What to produce

Tell the FDE:
- What the real problem appears to be, with evidence
- Where the shadow process is and what it tells you
- The 3 highest-risk areas of the codebase
- What to not touch without characterisation tests first

One concrete paragraph on each. No padding.

## Writes to `.fde/`

**`reality.md`** — the real problem vs the stated brief. Evidence for each claim.

**`terrain.md`** — codebase map: modules, hotspots, data flow, test gaps. Updated as you learn more.

## Principles
- The brief is a hypothesis until evidence confirms it.
- Never modify code before the terrain map exists.
- The workaround is always more honest than the requirements doc.
- Token efficiency: scan wide, go deep only on hotspots.
