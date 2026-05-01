# Contributing to FDEOS

We welcome contributions that expand the FDE operating model.

## How to Contribute

### Add a Skill
1. Create a directory: `skills/your-skill-name/`
2. Add `SKILL.md` following the FDEOS format: YAML frontmatter (`name`, `description`), sections for Purpose, When Activated, Protocol, Iron Rules.
3. Keep the body under 500 lines.
4. Test with at least one AI agent (Claude Code, Cursor, etc.).

### Add a Domain Pattern
1. Create `patterns/domain-name/SKILL.md`.
2. Follow the same format, adding domain-specific compliance and safety rules.

### Improve an Existing Skill
Open an issue describing the gap, then a PR with the change.

## Skill Format Requirements
- YAML frontmatter with `name` and `description` (description must contain triggering condition – "Use when…").
- Body sections: Purpose, When Activated, Protocol (numbered steps), Iron Rules.
- Under 500 lines.
- Licensed under MIT.

## Wall of Fame
First-time contributors are added to the README with their Twitter/LinkedIn.
