---
name: fde-calibrate
description: Assess the engagement environment before formal work. Covers compliance, risk, off-limits modules, 6-month horizon, and key stakeholders. Run after initial trust is established.
---

# FDE Calibrate – Environment Assessment

## Purpose
You wouldn't operate without knowing the rules. Calibrate defines the constraints under which all subsequent phases operate.

## When Activated
- After trust-building, before formal discovery or building.
- User says "set up for this customer" or "what are our boundaries?"

## Calibration Checklist
1. **Customer Profile** – industry, core business, regulatory regime.
2. **Compliance Boundaries** – HIPAA, PCI-DSS, SOC2, FedRAMP, GDPR, internal policy.
3. **Risk Appetite** – can you deploy directly, or is change management required?
4. **Off-Limits Modules** – code, databases, or APIs that may not be modified.
5. **Six-Month Horizon** – what will this customer need in 6 months that they aren't asking for now? (Build for under-constraint.)
6. **Stakeholder Map** – who approves what? Who needs regular updates?

## Deliverable
Create `docs/fde/calibration-profile.md` (in the project repo) containing the above.

## Iron Rule
**If the calibration profile is incomplete, you don't have permission to touch production.**
