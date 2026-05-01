# Implementation Plan: FDEOS Launch Completion

## Overview

FDEOS v1.0.0 is live on GitHub. CI is green. All 17 SKILL.md files have valid frontmatter. The remaining work is purely presentation: making the repo *feel* like a real FDE tool in action, not a code library. Three tasks remain before calling this fully shipped.

## Current State (Verified)

- ✅ All 14 skills + 3 patterns — valid YAML frontmatter, `## Purpose`, Iron Rules, under 500 lines
- ✅ CI passing (3/3 runs green on `main`)
- ✅ Marketplace README command correct (`suboss87/fde-marketplace`)
- ✅ README rewritten to superpowers pattern (clean, no credits, no manifesto)
- ✅ Demo GIF exists (`media/demo.gif`) — but uses `echo` commands, not real skill output

## What Still Needs Doing

---

### Phase 1: Show the Real FDE Experience

#### Task 1: Add "See it in action" scenario block to README

**Description:** Insert a short, textual scenario immediately after the intro tagline — before Quick Start. Shows a real engagement moment: customer says X, FDE invokes `@fde-observe`, agent responds with actual coaching. No GIF needed. Pure text. Makes the value visceral in 30 seconds of reading.

**Acceptance criteria:**
- [ ] Scenario uses a real enterprise situation (payments failing, legacy codebase)
- [ ] Shows actual `@fde-observe` or `@fde-master` invocation and the agent's coaching response
- [ ] Reads like a transcript, not a feature description
- [ ] Fits in 15-20 lines — punchy, not a story

**Verification:**
- [ ] README renders correctly on GitHub (check markdown preview)
- [ ] Scenario section sits between tagline and Quick Start

**Dependencies:** None

**Files touched:**
- `README.md`

**Estimated scope:** XS

---

#### Task 2: Rebuild demo GIF with real skill output

**Description:** Replace the current `scripts/demo.tape` (which uses `echo` to fake terminal output) with a script that shows real `@fde-master` invocation and actual FDEOS skill output flowing. The current GIF is detectable as fake — `echo` commands with no real agent response. A real session showing the coaching voice of the agent is far more compelling.

**Acceptance criteria:**
- [ ] `demo.tape` drives a real terminal interaction, not scripted `echo` lines
- [ ] Shows at minimum: invocation → trust phase coaching → observe phase output → prototype prompt
- [ ] GIF runtime under 60 seconds
- [ ] Regenerated `media/demo.gif` committed

**Verification:**
- [ ] GIF plays correctly in GitHub README preview
- [ ] No visible `echo '...'` commands in the recording

**Dependencies:** Task 1 (scenario block informs what the GIF should demonstrate)

**Files touched:**
- `scripts/demo.tape`
- `media/demo.gif`

**Estimated scope:** S

---

### Checkpoint: After Tasks 1–2
- [ ] README reads like a real product, not a code library
- [ ] First 90 seconds of the GIF demonstrates real FDE coaching behavior
- [ ] Push to `main`, CI green

---

### Phase 2: Formal Release

#### Task 3: Create v1.0.0 GitHub Release

**Description:** Tag `v1.0.0` and publish a GitHub Release with a short changelog. This signals production-readiness, enables starred-repo notifications, and gives the marketplace listing a stable reference point.

**Acceptance criteria:**
- [ ] Tag `v1.0.0` created from current `main`
- [ ] Release notes include: what FDEOS is (one line), skills list (brief), install commands
- [ ] Release published (not draft)

**Verification:**
- [ ] `gh release view v1.0.0` returns the release
- [ ] Release visible at `github.com/suboss87/fde-os/releases`

**Dependencies:** Tasks 1–2 (release after presentation is final)

**Files touched:** None (GitHub metadata only)

**Estimated scope:** XS

---

### Checkpoint: Complete
- [ ] All three tasks done
- [ ] CI green on `main`
- [ ] GitHub Release published
- [ ] Repo presents as a mature, field-authentic product

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Demo GIF requires VHS installed | Medium | Can ship Task 1 independently; GIF is enhancement not blocker |
| Scenario block feels too long | Low | Keep under 20 lines; cut ruthlessly |
| Release tag conflicts with existing commit | Low | Check `git tag` before creating |

## Open Questions

- Should the scenario block use a fictional company name or keep it generic ("a customer")?
- Does VHS need to be installed locally to regenerate the GIF, or can we use a CI action?
