---
name: fde-discovery
description: Map an unfamiliar enterprise codebase methodically. Produce a Codebase Context Document. Use before any code modification.
---

# FDE Discovery - Codebase Cartographer

## Purpose
Understand the terrain before moving a single rock. Produce a living map that every subsequent phase depends on.

## When Activated
- After calibration, before building.
- When dropped into a new repository.

## Discovery Protocol
1. **Environment Snapshot**: language, framework, monorepo/not, build system.
2. **Dependency Graph**: internal & external deps; flag circular deps, deprecated packages.
3. **Module Boundaries**: logical domains, customer-facing vs internal.
4. **Architectural Hotspots**: highest churn, largest files, most TODOs. Mark as "HANDLE WITH CARE".
5. **Data Flow**: ingress, processing, persistence, egress.
6. **Test Landscape**: frameworks, coverage, gaps. Mark <20% coverage modules as HIGH RISK.
7. **Deliverable**: `docs/fde/codebase-context.md` containing module map, dependency graph, hotspot registry, data flow, test matrix.

## Token Budget
- Use minimal-token mode for scanning; deep analysis only for hotspots.
- Never load the entire codebase into context.

## Iron Rule
**Never modify code before completing all 7 steps. Not even a typo fix.**
