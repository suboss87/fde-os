# FDEOS

FDEOS is a skills plugin for AI coding agents that teaches them how to run a forward deployed engineering engagement — not just write code.

A Forward Deployed Engineer is the person sent into a customer's environment to solve what their team couldn't. You inherit an undocumented codebase, stakeholders who can't agree on what done looks like, and a deadline that doesn't move. FDEOS gives your AI agent the judgment to operate in that environment.

---

## Install

### Claude Code

```bash
git clone https://github.com/suboss87/fde-os.git
mkdir -p ~/.claude/skills
cp -r fde-os/skills/* ~/.claude/skills/
```

Copy the CLAUDE.md template into your project:

```bash
cp fde-os/CLAUDE.md.template /path/to/your-project/CLAUDE.md
```

Open Claude Code in your project and type:

```
@fde
```

Tell it what's happening. That's the entire interface.

### Cursor / Windsurf / other agents

Same process — copy the `skills/` directory to wherever your agent loads skills from. Copy `CLAUDE.md.template` to your project's system prompt file.

---

## How it works

You invoke `@fde` and describe your situation in plain language. FDEOS routes silently to the right skill. You never pick a skill yourself.

It opens with one question — or none if the situation is clear — then gives you specific, actionable direction. Like a 30-year veteran sitting next to you who has seen this exact situation before.

Everything gets written to `.fde/` in your project — trust profile, real problem, codebase map, decisions, risks, delivery record. When a session ends, context survives. Another FDE can pick it up and be operational in minutes.

**A typical engagement looks like this:**

1. **Land** — `@fde "I'm starting at Acme Corp. Payments are broken. First meeting in an hour."` FDEOS asks the one question that matters before you write any code.

2. **Discover** — As you learn more, `@fde` surfaces the real problem. The stated problem is rarely the real one.

3. **Plan** — Before building, `@fde-plan` breaks work into atomic tasks sequenced by risk. Adds stakeholder check-ins every few tasks.

4. **Build** — `@fde-build` enforces characterisation tests before touching legacy code, blast radius analysis before every change, and a confirmed rollback path before every deploy.

5. **Review** — `@fde-review` checks two things in order: did you build what was agreed, then is it safe to ship.

6. **Ship** — `@fde-ship` runs a pre-flight checklist, deploys to canary first, and verifies rollback before going full traffic.

7. **Close** — `@fde-close` captures what was learned, extracts reusable patterns, and produces a handoff document the team can actually use.

At any point: `@fde-rescue` for production fires, `@fde-debug` for systematic debugging.

---

## Skills

You don't invoke these directly. `@fde` routes to the right one based on what you tell it.

**Engagement phase**

| Skill | What it does |
|-------|-------------|
| `@fde` | Entry point. Tell your story. |
| `@fde-land` | First 48 hours. Builds trust, maps stakeholders, defines success before any work starts. |
| `@fde-audit` | Taking over mid-engagement. Separates what's real from what's assumed. |
| `@fde-discover` | Finds the real problem. Maps the codebase. Surfaces shadow processes and workarounds. |
| `@fde-sketch` | Builds a throwaway to validate direction. Pitches the outcome in business terms. |
| `@fde-build` | Safe implementation. Characterisation tests, Strangler Fig, blast radius analysis. |
| `@fde-rescue` | Production fire. Stabilise first, understand second, fix third. |
| `@fde-ship` | Deploy safely. Pre-flight checklist, canary, verified rollback. |
| `@fde-close` | Wrap up. Retrospective, pattern extraction, clean handoff. |

**Execution quality**

| Skill | What it does |
|-------|-------------|
| `@fde-plan` | Break work into atomic tasks before building. Sequence by risk, not preference. |
| `@fde-review` | Two-stage code review — did we build what we agreed, then is it safe to ship. |
| `@fde-debug` | Systematic debugging. Reproduce first, isolate second, fix third. Never guess. |

**Visibility**

| Skill | What it does |
|-------|-------------|
| `@fde-dashboard` | Generates a static HTML status view across all active engagements. |

---

## For regulated industries

Three overlays are included in the install. They activate automatically when `@fde` detects the engagement context — you don't invoke them directly.

| Overlay | What it adds |
|---------|-------------|
| `healthcare-fde` | HIPAA: PHI handling, audit trails, break-glass access, AI policy in clinical environments |
| `fintech-fde` | PCI-DSS: transaction integrity, idempotency, fraud signals, regulatory reporting |
| `gov-fde` | FedRAMP: ATO process, data sovereignty, security controls, clearance requirements |

---

## The .fde/ directory

Every skill reads from and writes to `.fde/` in your project root. This is the engagement brain.

```
.fde/
  context.md       — current state, loaded at every session start
  brief.md         — what they said the problem is
  success.md       — agreed definition of done
  trust-profile.md — sacred data, AI policy, approval chain
  stakeholders.md  — who matters, who's resistant, who's your champion
  reality.md       — what the real problem actually is
  terrain.md       — codebase map, hotspots, data flow, test gaps
  decisions.md     — every significant choice and why
  risks.md         — live risk register
  delivery.md      — what shipped and running value log
  chaos-log.md     — incident records with root cause
  handoff.md       — operational knowledge for the team taking over
  patterns.md      — reusable patterns extracted
```

Add `.fde/` to your `.gitignore`. It contains sensitive customer information.

---

## Philosophy

- **The stated problem is a hypothesis.** Treat it as one until discovery confirms it.
- **Sacred data never enters AI context.** Identify it on day one. Tag it. Protect it.
- **Stabilise before you diagnose.** Under pressure, the instinct to fix fast causes the second incident.
- **The handoff is part of the job.** If the team can't sustain what you built, you didn't finish.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
