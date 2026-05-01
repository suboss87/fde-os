# FDEOS — The Operating System for Forward Deployed Engineering

![demo](media/demo.gif)

## The human is the FDE. FDEOS is their exoskeleton.

You sit across from the customer. Your AI agent, loaded with FDEOS skills, listens. When the customer says "payments are failing," you silently invoke `@fde-observe`. Your agent whispers: *"Ask what they saw happen, not what they want built. Look for a shadow spreadsheet they're using to track failures."* You ask the question. The customer's eyes widen. They pull up a spreadsheet you'd never have known about. That's the real problem.

**You're not handing off to an agent. You're being guided by one.**

Every FDEOS skill is a coach in your ear — trust-building, chaos navigation, observation, prototype validation, safe shipping — so you operate like an FDE with 100 engagements under your belt, even if this is your first.

> *"How does a great engineer actually behave when dropped into a messy enterprise environment they've never seen before?"*
> That's the question no other repo answers. FDEOS does.

---

## Before vs After

| ❌ AI Agent Alone | ✅ AI Agent with FDEOS |
|---|---|
| Starts coding immediately, no context | Explores, builds trust, then calibrates |
| Implements whatever you ask – even if it's wrong | Observes latent demand first; asks "what problem are you really solving?" |
| Forgets after compaction | Context saved, versioned, restored |
| Breaks production, no rollback | Pre-flight checklist, canary deploy, tested rollback |
| Tech-only output, no business alignment | Business impact summaries, trust implications |
| Can't handle legacy safely | Characterisation tests, Strangler Fig, first do no harm |
| No pattern extraction | Every engagement feeds back to the product and this pack |

---

## The Full FDE Lifecycle

```
TRUST & EXPLORE → CALIBRATE → DISCOVER → OBSERVE (continuous)
                                    ↓
                            PROTOTYPE (rapid iterate)
                                    ↓
                            BRIDGE (business alignment)
                                    ↓
                    BUILD (brownfield safe) ← CHAOS mode if needed
                                    ↓
                            SHIP (canary + rollback)
                                    ↓
                            RETROSPECT (learn + extract patterns)
                                    ↓
                            HARNESS (encode new skills)
```

| Phase | Skill | What It Does |
|-------|-------|--------------|
| 🤝 Trust | @fde-trust | Earn permission to work: sacred data, fears, stakeholder alignment |
| 🧪 Explore | @fde-explore | Chaotic, unscalable first-contact: build things that don't scale to discover real patterns |
| 🎯 Calibrate | @fde-calibrate | Environment, compliance, risk, off-limits, 6-month horizon |
| 🗺️ Discover | @fde-discovery | Map codebase, hotspots, produce context doc |
| 🔍 Observe (continuous) | @fde-observe | Latent demand from workarounds, not just requests |
| ⚡ Prototype | @fde-prototype | Rapid demo-driven iteration; validate direction before formal build |
| 🌉 Bridge | @fde-bridge | Business↔technical translation, including trust/ethics |
| 🔥 Chaos | @fde-chaos | Partial knowledge, undocumented APIs, production fires |
| 🏗️ Build | @fde-brownfield | Legacy-safe implementation; characterisation tests, Strangler Fig |
| ✈️ Ship | @fde-ship | Pre-flight checklist, canary deploy, tested rollback |
| 📝 Retrospect | @fde-retrospective | Capture lessons, update context, extract upstream patterns |
| 🏭 Harness | @fde-harness | Create new skills and subagents for the customer |
| 🧠 Context | @fde-context | Token budgeting, compaction safety, state versioning |
| 💍 Master | @fde-master | One skill to orchestrate them all (entry point) |

---

## Quick Start

### Claude Code (recommended)
```bash
/plugin marketplace add suboss87/fde-marketplace
/plugin install fde-os@suboss87/fde-marketplace
```

### Cursor
```bash
/add-plugin fde-os
```

### Any Agent (one command)
```bash
npx skills add suboss87/fde-os
```

### Codex
Tell Codex: `Fetch and follow instructions from https://raw.githubusercontent.com/suboss87/fde-os/main/.codex/INSTALL.md`

### OpenCode
Tell OpenCode: `Fetch and follow instructions from https://raw.githubusercontent.com/suboss87/fde-os/main/.opencode/plugins/fde-os.js`

### GitHub Copilot CLI
```bash
copilot plugin marketplace add suboss87/fde-marketplace
copilot plugin install fde-os@suboss87/fde-marketplace
```

### Gemini CLI
```bash
gemini extensions install https://github.com/suboss87/fde-os
```

### Manual (always works)
```bash
git clone https://github.com/suboss87/fde-os.git
cp -r fde-os/skills/ .claude/skills/
cp fde-os/CLAUDE.md.template ./CLAUDE.md
```

---

## Enterprise Domain Patterns

Ready-to-use patterns for regulated industries (drop into `.claude/skills/` alongside FDEOS):

| Pattern | Adds |
|---------|------|
| `patterns/healthcare-fde/SKILL.md` | HIPAA: PHI handling, audit trails, encryption |
| `patterns/fintech-fde/SKILL.md` | PCI-DSS: transaction logging, fraud detection, idempotency |
| `patterns/gov-fde/SKILL.md` | FedRAMP: security boundaries, ATO awareness, data sovereignty |

---

## Why FDEOS Exists

Claude Code, Cursor, Codex… they're powerful but undisciplined. They jump straight to code. They forget context. They build what you ask, not what you really need. Forward Deployed Engineers at Palantir, Anthropic, and OpenAI have spent decades perfecting the field craft of enterprise delivery – trust, exploration, chaos navigation, prototype-driven learning, and safe brownfield shipping. FDEOS encodes that craft into 14 agent-executable skills, covering the complete journey from first customer whisper to production landing and pattern extraction.

No other viral repo does this. `superpowers` focuses on the build phase. `gstack` creates an internal virtual team. `agent-skills` builds production-grade web apps. `andrej-karpathy-skills` adds thinking disciplines. Only FDEOS starts before the code and extends after deployment. It's the missing operating system for anyone trying to use AI agents in real, messy, enterprise environments.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). We welcome new domain patterns, improvements to existing skills, and field stories. First-time contributors are added to the Wall of Fame.

---

## License

MIT – see [LICENSE](LICENSE).

---

## Credits

Built by FDEs, for the AI engineering community. Inspired by:

- [obra/superpowers](https://github.com/obra/superpowers) (170K ⭐)
- [garrytan/gstack](https://github.com/garrytan/gstack) (82K ⭐)
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (18K ⭐)
- [mattpocock/skills](https://github.com/mattpocock/skills) (23.5K ⭐)
- [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) (98K ⭐)
- Forward Deployed Engineers at Palantir, Anthropic, OpenAI

⭐ Star this repo to get notified when new enterprise patterns drop.
