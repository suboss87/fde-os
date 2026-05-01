# FDEOS - The Operating System for Forward Deployed Engineering

![demo](media/demo.gif)

> **FDEOS turns any AI coding agent into a Forward Deployed Engineer, covering everything from the first customer conversation to a safe production landing.**

---

## What is this?

FDEOS is a skill pack for AI coding agents. It encodes the complete engagement craft of a Forward Deployed Engineer: how to build trust, explore messily, find the real problem, prototype fast, work safely in brownfield codebases, ship with enterprise-grade rigour, and extract patterns for the next engagement. 14 skills. One operating system. Drop it in, and your agent knows how an FDE behaves.

---

## See it in action

> **Meridian Bank. Legacy payments monorepo. 2.1M lines. Payments failing silently 2% of the time.**

The customer opens with: *"We need you to fix the payment processor."*

`@fde-observe` intercepts before any code is written:

> **Agent:** Before I look at the code, what did you *see* happen? Not the error, the behaviour.
>
> **Customer:** Transactions just... don't appear. No error. The user retries. Sometimes it goes through.
>
> **Agent:** How long has this been tracked?
>
> **Customer:** *(pulls up a spreadsheet)* We've been logging it here. Since March.
>
> **Agent:** That spreadsheet is the real spec. Can I have a copy?

`@fde-trust` activates:

> **Agent:** Before I touch anything, is this spreadsheet considered sensitive? Who else has seen it?

Three minutes in. No code written. The shadow spreadsheet nobody mentioned in the brief is now the primary artefact. That's FDEOS.

---

## Quick Start

Installation differs by platform. Claude Code and Cursor have built-in plugin marketplaces. All other platforms use a single command.

### Claude Code (recommended)
```bash
/plugin marketplace add suboss87/fde-marketplace
/plugin install fde-os@suboss87/fde-marketplace
```

### Cursor
```bash
/add-plugin fde-os
```

### Any agent (one command)
```bash
npx skills add suboss87/fde-os
```

### Codex
Tell Codex: `Fetch and follow instructions from https://raw.githubusercontent.com/suboss87/fde-os/main/.codex/INSTALL.md`

### OpenCode
Tell OpenCode: `Fetch and follow instructions from https://raw.githubusercontent.com/suboss87/fde-os/main/.opencode/INSTALL.md`

### GitHub Copilot CLI
```bash
copilot plugin marketplace add suboss87/fde-marketplace
copilot plugin install fde-os@suboss87/fde-marketplace
```

### Gemini CLI
```bash
gemini extensions install https://github.com/suboss87/fde-os
```

### Manual
```bash
git clone https://github.com/suboss87/fde-os.git
cp -r fde-os/skills/ .claude/skills/
cp fde-os/CLAUDE.md.template ./CLAUDE.md
```

---

## Skills

| Skill | What it does |
|-------|-------------|
| fde-trust | Earn permission to work: sacred data, fears, stakeholder alignment |
| fde-explore | Chaotic, unscalable first-contact exploration. Do things that don't scale. |
| fde-calibrate | Environment assessment covering compliance, risk, off-limits modules, and the 6-month horizon |
| fde-discovery | Codebase cartography: dependencies, hotspots, data flow, test landscape |
| fde-observe | Continuous latent-demand detection. Find the real need, not just the ask. |
| fde-prototype | Rapid demo-driven iteration. Build a throwaway to validate direction. |
| fde-bridge | Business-to-technical translation. Every change tied to a customer outcome. |
| fde-chaos | Operate with partial knowledge: undocumented APIs, production fires |
| fde-brownfield | Safe legacy implementation: characterisation tests, Strangler Fig pattern |
| fde-ship | Production deployment: pre-flight checklist, canary, verified rollback |
| fde-retrospective | Capture lessons, update codebase context, extract upstream patterns |
| fde-harness | Create new skills and subagents for the customer's specific environment |
| fde-context | Context budgeting, compaction safety, state versioning |
| fde-master | Orchestrator. One skill to run the full engagement (entry point). |

---

## Enterprise patterns

Ready-to-use patterns for regulated industries. Drop them into `.claude/skills/` alongside FDEOS.

| Pattern | Adds |
|---------|------|
| healthcare-fde | HIPAA: PHI handling, audit trails, encryption |
| fintech-fde | PCI-DSS: transaction integrity, fraud detection, idempotency |
| gov-fde | FedRAMP: security boundaries, ATO awareness, data sovereignty |

---

## Why this exists

Most AI coding skills focus on how to write code. FDEOS focuses on how to behave when you don't yet know what to build, when you're dropped into a legacy monorepo with partial information, nervous stakeholders, and a mandate to deliver. That's the everyday reality of Forward Deployed Engineering. This skill pack makes that reality something any AI agent can handle, and any engineer can lead.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

MIT, see [LICENSE](LICENSE).
