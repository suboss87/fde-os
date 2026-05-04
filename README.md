<div align="center">

# FDEOS

**Your AI coding agent knows how to write code. FDEOS teaches it how to run an engagement.**

**Works with Claude Code, Cursor, Windsurf, Cline, and any AI agent.**

[![GitHub stars](https://img.shields.io/github/stars/suboss87/fde-os?style=for-the-badge&logo=github&color=181717)](https://github.com/suboss87/fde-os/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)
[![Skills](https://img.shields.io/badge/skills-13-orange?style=for-the-badge)](docs/skills-reference.md)
[![Works with Claude Code](https://img.shields.io/badge/Claude%20Code-ready-blueviolet?style=for-the-badge&logo=anthropic&logoColor=white)](https://claude.ai/code)

<br>

```bash
git clone https://github.com/suboss87/fde-os.git
cp -r fde-os/skills/* ~/.claude/skills/
cp fde-os/CLAUDE.md.template your-project/CLAUDE.md
```

**Works at any stage — new engagement, mid-project, or crisis.**

<br>

![FDEOS in action](media/demo.gif)

<br>

*"Don't write a line of code until you know what a bad outcome looks like for the person paying."*

*"Stabilise first. Understand second. Fix third. In that order, every time."*

*"The handoff is part of the job. If the team can't sustain it, you didn't finish."*

<br>

[How it works](#how-it-works) · [Skills](#skills) · [Enterprise](#for-regulated-industries) · [Install](docs/install.md)

</div>

---

A real engagement isn't just a coding problem.

It's the first 48 hours where you don't know who to trust or what success actually means. It's building safely inside a codebase you've never seen, where the wrong move breaks production. It's a crisis at 2am where the pressure is to act fast but the right move is to stop and ask one question first. It's a code review that checks blast radius and rollback path, not just style. It's a handoff where the team has to sustain everything you built after you're gone.

FDEOS gives your agent the judgment to handle all of it — from landing to close.

---

## How it works

Invoke `@fde`. Tell it what's happening. It asks one question if it needs clarity, then tells you what to do — like a 30-year veteran sitting next to you who's seen this exact situation before.

You don't pick a skill. You don't read a playbook. You describe your situation and get told what to do next.

Everything gets written to `.fde/` — trust profile, real problem, codebase map, decisions, risks, delivery record. Sessions end, context survives. Another FDE picks it up and is operational in minutes.

Token efficiency is built in. Each skill loads only what it needs from `.fde/`. Sensitive data is tagged `<private>` and never enters AI context. The context window stays clean across a long engagement.

---

## Skills

You don't pick these. `@fde` routes to the right one based on what you tell it.

### Engagement phase

| Skill | What it does |
|-------|-------------|
| `@fde` | Entry point. Tell your story. |
| `@fde-land` | First 48 hours. Builds trust, maps stakeholders, defines success. |
| `@fde-audit` | Taking over mid-engagement. Separates what's real from what's assumed. |
| `@fde-discover` | Finds the real problem. Maps the codebase. Surfaces shadow processes. |
| `@fde-sketch` | Builds a throwaway to validate direction. Pitches it in business terms. |
| `@fde-build` | Safe implementation. Characterisation tests, Strangler Fig, blast radius. |
| `@fde-rescue` | Production fire. Stabilise first, understand second, fix third. |
| `@fde-ship` | Deploy safely. Pre-flight checklist, canary, verified rollback. |
| `@fde-close` | Wrap up. Retrospective, pattern extraction, clean handoff. |

### Execution quality

| Skill | What it does |
|-------|-------------|
| `@fde-plan` | Break work into atomic tasks before building. Sequence by risk, not by preference. |
| `@fde-review` | Two-stage code review — did we build what we agreed, then is it safe to ship. |
| `@fde-debug` | Systematic debugging. Reproduce first, isolate second, fix third. Never guess. |

### Visibility

| Skill | What it does |
|-------|-------------|
| `@fde-dashboard` | Generates a status view across all active engagements. |

---

## For regulated industries

Drop these alongside FDEOS skills. They activate automatically when `@fde` detects the engagement context.

| Overlay | What it adds |
|---------|-------------|
| `healthcare-fde` | HIPAA: PHI handling, audit trails, break-glass access, AI policy in clinical environments |
| `fintech-fde` | PCI-DSS: transaction integrity, idempotency, fraud signals, regulatory reporting |
| `gov-fde` | FedRAMP: ATO process, data sovereignty, security controls, clearance requirements |

---

## Contributing

[CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT
