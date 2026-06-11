# FDEOS

**The second brain for Forward Deployed Engineers — your AI coding agent does the engagement legwork, and the memory writes itself.**

You are the human FDE on site: meetings, judgment, owning what ships. FDEOS turns your **AI coding agent** (e.g. Claude Code) into the other half of the job: it digs the real problem out of the repo with evidence, maps the terrain, sequences the work, guards the ship — and records all of it per customer, so tomorrow starts where today ended. You never re-paste context. You never maintain notes.

Enter at any point: day one, mid-project takeover, or mid-fire. Type **`@fde`**, say what's happening, and it routes itself.

Built from 100+ embeds (enterprise, startup, regulated, rescue), mostly solo on site.

— [Subash Natarajan](https://github.com/suboss87)

---

## Who does what

| Role | Who | What they do |
|------|-----|----------------|
| **You (the FDE)** | **Human** on the engagement | Stakeholder meetings, calls, judgment, sign-off, typing `@fde`, owning what ships |
| **AI coding agent** | **Software** on your laptop (e.g. Claude Code) — **not** a human colleague | Loads the `@fde` skill, runs the phase methods, writes code and `.fde/` artifacts |
| **`@fde`** | **One skill** inside the AI agent | Hears your situation, routes to the right phase, does that phase's work |

**In this repo, “agent” always means the AI coding agent, never a person** (not the client's team, not a forward-deployed human peer).

```text
  YOU (human FDE)                    AI CODING AGENT (software)
  meetings, judgment        @fde      one skill + phase methods
        │                 ─────►      .fde/ memory (self-writing)
        │                                   │
        └──────────────►  client workspace (code, VPN, tickets)
```

---

## The flip — Without FDEOS vs with FDEOS

Old way: you feed the tool — re-paste context, maintain notes, read advice, do the work yourself anyway.

FDEOS v3: **the tool works for you.**

| | **Without FDEOS** | **With FDEOS** |
|---|-------------------|----------------|
| **Memory** | Re-paste context every session; notes rot by day 3 | `.fde/` writes itself — the deliverable IS the memory, a session-end hook backstops it |
| **Discovery** | Agent treats the brief as the task | Agent scans churn, test gaps, and "temporary" code; hands you *the real problem with evidence* |
| **Multiple customers** | Details blur between clients | One folder per customer, auto-loaded per workspace, never merged |
| **The output** | Advice you already knew | An artifact you carry into the sponsor meeting |
| **Risk** | Right code, wrong problem | Alignment before big builds |

FDEOS does **not** get you access, approvals, or compliance sign-off. It structures how **you (human)** and your **AI coding agent** run the embed.

---

## Quickstart

1. Install the plugin + copy skills and hooks ([below](#installation))
2. `node bin/install.js init my-engagement` (from your repo clone)
3. Point the agent at it: `FDEOS_ENGAGEMENT=~/fde-engagements/my-engagement/.fde`
4. Open your workspace (repo, VPN, tickets — whatever access you already have)
5. In the AI chat: `@fde I'm on site. First stakeholder meeting tomorrow. Brief says fix the payments API.`

Deeper paths: [docs/install.md](docs/install.md) · Example arc: [examples/acme-payments/](examples/acme-payments/)

---

## How it works

**One skill, fifteen methods, one memory.**

You type `@fde` and describe what's happening. The agent reads `context.md` from your private engagement folder — where you left off — then routes to the phase that matches your situation and **follows that phase's method** from its reference file. Every phase ends by writing its artifact into `.fde/`:

- discover ends with `reality.md` (real problem + evidence) and `terrain.md` (hotspots, test gaps, AI components — from actual `git log` churn analysis, not vibes)
- plan ends with PR-sized tasks in `decisions.md`, fragile work first, stakeholder touchpoints every 2–3 tasks
- build logs choices to `decisions.md` and value to `delivery.md` as it goes
- rescue ends with a `chaos-log.md` entry written while memory is fresh

Producing the work and writing the memory are **one action** — there is nothing to maintain. At session end, a hook appends a deterministic "where we left off" to `context.md` as a backstop. Next session loads it automatically.

| Layer | Where it lives | Who touches it |
|-------|----------------|----------------|
| **Skill + references** | Your machine: `~/.claude/skills/fde/` | AI loads them; you install once |
| **Engagement memory** | `~/fde-engagements/<name>/.fde/` | AI reads/writes; you own the folder |
| **Code & delivery** | Client workspace you already use | You + AI; FDEOS never installs on client servers by default |

Entry skill: [skills/fde/SKILL.md](skills/fde/SKILL.md) · Phase methods: [skills/fde/references/](skills/fde/references/)

---

## Who this is for

| You are… | FDEOS helps when… |
|----------|-------------------|
| **New to embed work** | You get a method per phase, not just encouragement — and a clear first week before touching production |
| **Senior operator, solo on site** | The agent is your second brain: memory + grunt work, while you keep your head in the room |
| **Multi-client consultant** | One `.fde/` per customer, auto-loaded, never cross-contaminated, one dashboard across all |

**Requirements:** an AI coding agent that loads skills (Claude Code is what I use daily — [install](#installation)).

**Not for:** teams who only need generic coding help in one repo, with no client politics, memory, or embed lifecycle.

---

## Installation

### Claude Code

```text
/plugin marketplace add suboss87/fde-os
/plugin install fdeos@fdeos
```

Copy the skill and hooks to disk (once per machine):

```bash
git clone https://github.com/suboss87/fde-os.git
cd fde-os && node bin/install.js
```

**Per engagement (one per customer):**

```bash
node bin/install.js init <engagement-name>
```

Tell the AI where this engagement's memory lives — in `~/.claude/FDEOS-CLAUDE.md` or your shell:

```text
FDEOS_ENGAGEMENT=~/fde-engagements/<engagement-name>/.fde
```

Full matrix: [docs/install.md](docs/install.md)

---

## The basic workflow

You only ever type **`@fde`**. It hears your situation and runs the matching phase method:

1. **land** — first 48 hours: interrogate the brief for what's missing, map stakeholders, define success before code.
2. **discover** — scan the repo (churn, test gaps, "temporary" archaeology, AI components) + hunt the workaround; produce the real problem with evidence.
3. **plan** — work backwards from success; fragile zones first; PR-sized tasks with acceptance criteria.
4. **build** — blast radius declared, characterisation tests on legacy, fallback before the AI feature.
5. **review** — scope first (did we build what was agreed), then safety. Loop until clean.
6. **ship** — pre-flight, canary, tested rollback, pulse defined before the laptop closes.
7. **close** — retrospective, pattern extraction, the 2am handoff document.

**Also routes to:** `audit` (taking over half-done work) · `rescue` (production fire OR quiet-stakeholder trust fire OR wrong-brief-mid-build) · `sketch` (prototype to kill or confirm a direction) · `debug` (systematic, never guessing) · `dashboard` (status across every customer).

**Regulated overlays** activate on signal, alongside any phase: healthcare (PHI/HIPAA), fintech (PCI/idempotency/atomicity), government (FedRAMP/ATO/CUI). Operational guardrails, not legal advice.

Sample filled files (fictional): [examples/acme-payments/](examples/acme-payments/)

---

## What's inside

```
skills/fde/
  SKILL.md            the router: voice, memory contract, routing table
  references/
    land.md  discover.md  audit.md  plan.md  build.md  review.md
    debug.md  rescue.md  ship.md  sketch.md  close.md  dashboard.md
    healthcare.md  fintech.md  gov.md
hooks/
  session-start       loads context.md into every session (read side)
  session-stop        appends "where we left off" at session end (write side)
  pre-compact         preserves engagement state across compactions
templates/.fde/       the 10 core memory files an init creates
```

Each reference is a **method** — the work to do, the artifact it writes, the checkpoint with you — not a pep talk. Full reference: [docs/skills-reference.md](docs/skills-reference.md)

---

## Engagement memory (`.fde/`)

Default: `~/fde-engagements/<name>/.fde/` via `FDEOS_ENGAGEMENT`. **Private to you**; the AI reads/writes; client infra does not host this by default.

| File | Role | Written by |
|------|------|-----------|
| `context.md` | Where you are; loaded first every session | every phase + session-stop hook |
| `brief.md` | What they said — hypothesis until discover | land |
| `success.md` | Done, measured, signed-off by whom | land |
| `reality.md` | The real problem, with evidence | discover / audit |
| `terrain.md` | Codebase map: hotspots, test gaps, AI components | discover / audit |
| `stakeholders.md` | Champions, resistance, trust signals | land, updated continuously |
| `trust-profile.md` | Sacred data, AI policy, approval chain (sensitive) | land + overlays |
| `decisions.md` | The plan + every significant choice and why | plan / build / review / rescue |
| `risks.md` | Live risk register | all phases |
| `delivery.md` | What shipped, business value, rollback, pulse | build / ship |

Phase-specific artifacts (`audit.md`, `chaos-log.md`, `prototype-log.md`, `business-case.md`, `handoff.md`, `patterns.md`, `retrospectives/`) are created by their phases on demand — formats live in the reference files.

Every claim carries its evidence: `(ops lead, Day 5)` · `(churn: 47/90d)` · `(stated, unverified)`.

Do not commit client-identifying content to shared git. Sensitive data is tagged `<private>` and never enters AI context.

Schema: [docs/schema.md](docs/schema.md) · Day-to-day: [docs/USAGE.md](docs/USAGE.md)

---

## Principles

- **The artifact is the memory** — producing work and recording it are one action; nothing is maintained by hand
- **Trust before production** — you earn the right to touch their systems
- **Brief is a hypothesis** — discover before the AI builds the wrong thing
- **Evidence on every claim** — these files get defended in front of skeptical clients
- **Map before moving** — unknown terrain gets characterisation tests, not drive-by refactors
- **Thin slices** — ship learning, not theatre
- **One customer, one folder** — context never bleeds between clients

Full methodology: [FDE-METHODOLOGY.md](FDE-METHODOLOGY.md)

---

## Updating

```bash
cd fde-os && git pull && node bin/install.js
```

Plugin updates follow Claude Code marketplace refresh. Re-run `init` only for **new** engagements — existing `~/fde-engagements/` folders are preserved. v2 users: the 16 old skills now live in [archive/](archive/); `@fde` covers everything they did.

---

## Contributing

Maintained by **Subash Natarajan**. Feedback via [Issues](https://github.com/suboss87/fde-os/issues) — see [CONTRIBUTING.md](CONTRIBUTING.md).

[ATTRIBUTION.md](ATTRIBUTION.md) · [SECURITY.md](SECURITY.md) · [Repo layout](docs/REPO_LAYOUT.md) · MIT
