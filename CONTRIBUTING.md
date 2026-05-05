# Contributing to FDEOS

FDEOS is a living operating model. Every contribution makes it better for every engineer who gets sent into a client environment with no map and a deadline.

## Wall of Fame

Every merged contribution adds your name to the README. If you've been embedded at a client site and learned something the hard way, this is the place to put it.

## What to Contribute

### New skill

A skill encodes a specific process that experienced FDEs follow. If you have lived through something FDEOS doesn't cover, write the skill.

1. Create a directory: `skills/your-skill-name/`
2. Add `SKILL.md` with YAML frontmatter (`name`, `description`) and sections for Purpose, Opening question, Protocol, and Writes to `.fde/`
3. Keep it under 500 lines
4. Test with at least one AI agent (Claude Code, Cursor, etc.)
5. Open a PR describing the situation this skill handles

### New domain overlay

If you work in a regulated industry and know what an AI agent should and should not do there, write the overlay.

1. Create `skills/your-domain-fde/SKILL.md`
2. Follow the same format: frontmatter, Purpose, what to do, what to never do, writes to `.fde/`
3. Include specific compliance requirements, not generic advice

### Improve an existing skill

Open an issue describing the gap. One line: "In situation X, the skill does Y but should do Z." Then a PR.

## Skill Format

```markdown
---
name: skill-name
description: One sentence. What it does and when to use it.
---

## Purpose
What this skill is for and why it matters.

## Opening question
The one question the FDE should ask. Or "No question needed if..." 

## Protocol
Numbered steps. Specific. Actionable. Not generic.

## Writes to .fde/
Which files it creates or updates and what goes in them.

## Principles
The rules that cannot be broken.
```

## What does not belong

- Generic "best practices" that apply everywhere
- Advice that requires no judgment
- Anything you would tell a junior developer in week one

FDEOS encodes what the 30-year veteran knows that the documentation does not say. If a skilled engineer would say "obviously" to your contribution, it probably belongs in a different repo.

## License

MIT. Contributions are licensed under MIT.
