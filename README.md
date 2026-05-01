# FDEOS

![demo](media/demo.gif)

> **Your AI coding agent already knows how to write code. FDEOS teaches it how to handle a real engagement — the kind where you don't know the codebase, the customer can't articulate the real problem, and you have to ship anyway.**

---

## The Problem

You're dropped into a customer project. The codebase is old, undocumented, and partially broken. The stakeholder says "fix the payment module," but you sense that's not the real issue. You don't know the codebase, who to trust, or where the skeletons are buried.

Without FDEOS, you learn the hard way — weeks of trial and error, wrong assumptions, and fingers crossed on deploy day.

---

## How it works

It starts from the moment you fire up your coding agent. Your agent doesn't let you jump into code. Instead, it guides you through the same discipline a veteran Forward Deployed Engineer uses:

1. **Trust first** — identify sacred data, acknowledge fears, earn permission before touching systems
2. **Observe before building** — look for shadow spreadsheets and manual workarounds; that's the real spec
3. **Prototype to validate** — build a throwaway in hours, show it, get feedback, iterate
4. **Ship safely** — characterisation tests, Strangler Fig for legacy, canary deploy, tested rollback
5. **Extract the pattern** — after shipping, encode what you learned so the next engagement starts smarter

Your agent becomes a coach — asking the right questions before every decision, catching risks you'd miss. You make the calls. FDEOS makes sure you don't miss a step.

---

## Who this is for

- **Engineers dropped into messy enterprise projects** — "fix this legacy system" with no docs and no context
- **Independent consultants and one-person agencies** — run engagements end-to-end without a team behind you
- **Technical founders** — ship into regulated, brownfield, or high-stakes environments without a dedicated ops team
- **Anyone leading an AI or software transformation** — the playbook scales from a $10K gig to a $50M programme

---

## See it in action

```
$ claude
> @fde-master "I'm starting at Meridian Bank. Payments are failing. First meeting in an hour."

# FDEOS: Before you write any code, ask what workaround they've been using.
# Look for a manual spreadsheet or a nightly script. That's the real spec.

> They've been updating a reconciliation spreadsheet every night for two years.

# FDEOS: The real need is automated reconciliation, not a timeout fix.
# Build a throwaway that mimics that spreadsheet and show it today.
# fde-trust: The spreadsheet contains transaction data — treat it as sensitive.
```

No code written. The real problem surfaced. The spreadsheet nobody mentioned in the brief is now the primary artefact.

---

## Quick Start

```bash
# Claude Code (recommended)
/plugin marketplace add suboss87/fde-marketplace
/plugin install fde-os@suboss87/fde-marketplace

# Cursor
/add-plugin fde-os

# Any agent
npx skills add suboss87/fde-os
```

Full instructions for Codex, OpenCode, Copilot CLI, Gemini CLI, and manual install: [docs/install.md](docs/install.md)

---

## Skills

FDEOS is 14 skills that fire at the right moment. You don't need to learn them all. Start with `@fde-master` — it sequences the rest.

| When you're... | Use |
|----------------|-----|
| Starting any engagement | `@fde-master` |
| Meeting a customer for the first time | `@fde-trust` |
| Figuring out what they actually need | `@fde-observe` |
| Exploring a messy problem safely | `@fde-explore` |
| Validating a direction before building | `@fde-prototype` |
| Mapping an unfamiliar codebase | `@fde-discovery` |
| Working in fragile legacy code | `@fde-brownfield` |
| Handling production fires or unknown APIs | `@fde-chaos` |
| Shipping to production with a rollback | `@fde-ship` |
| Closing out and capturing lessons | `@fde-retrospective` |

All 14 skills with full descriptions and enterprise domain patterns (healthcare, fintech, government): [docs/skills-reference.md](docs/skills-reference.md)

---

## License

MIT
