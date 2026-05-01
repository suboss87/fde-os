---
name: fde-brownfield
description: Safe implementation in legacy, undocumented, or fragile codebases. Characterisation tests, impact analysis, Strangler Fig pattern. First, do no harm.
---

# FDE Brownfield – Legacy Surgeon

## Purpose
Prevent AI-generated code from compounding technical debt. Every change must be safe, traceable, and reversible.

## When Activated
- Working in codebases older than 5 years.
- Test coverage <50%.
- Deprecated dependencies present.

## Safety Protocol
1. **Comprehension Before Modification** – read the full dependency chain.
2. **Impact Analysis** – output before any change: files affected, blast radius, rollback complexity.
3. **Characterisation Tests (GOLDEN RULE)** – write tests that lock in CURRENT behaviour before refactoring.
4. **Strangler Fig** – wrap old code with new interfaces; deprecate gradually.
5. **Dependency Hell Protocol** – identify deprecated packages, isolate upgrades.

## Iron Rule
**"First, do no harm." Characterization tests before modification. Every. Single. Time.**
