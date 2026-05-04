---
name: gov-fde
description: FDEOS overlay for government and public sector engagements. FedRAMP, ATO process, data sovereignty, security controls, and working within classified or restricted environments.
---

# gov-fde

## Purpose
Government engagements operate under constraints that exist nowhere else: statutory authority, multi-year procurement cycles, security clearance requirements, and data classification regimes that can make a single mishandled file a federal offence. The pace is slower by design. The stakes for getting the security posture wrong are higher than any commercial engagement.

Load this alongside the core FDEOS skills for any engagement with federal, state, or local government agencies, or contractors operating under government contracts.

## Activate when you hear
- Federal agency, department, military, intelligence community
- FedRAMP, FISMA, NIST 800-53, CMMC, ITAR
- ATO (Authority to Operate), SSP (System Security Plan)
- CUI (Controlled Unclassified Information), classified data
- Government contractor handling government data

## Data classification — the first and most important conversation

Before anything else:

> "What is the classification level of the data this system handles? And is there a System Security Plan I should read before we start?"

Classification levels (federal):
- **Unclassified** — no special handling required
- **CUI** — Controlled Unclassified Information, requires handling per NIST 800-171
- **Secret / Top Secret** — requires personnel clearances, air-gapped systems, strict need-to-know

If the engagement involves CUI or above, the handling requirements constrain everything: which tools you can use, where code can be written, whether AI assistance is permitted at all, and who can see what.

Tag the classification context in `trust-profile.md` under `<private>` markers immediately.

## ATO — the engagement constraint no one warns you about

An Authority to Operate is the government's formal approval that a system is secure enough to operate. Without an ATO, the system cannot go live in most federal environments. ATOs take months to years to obtain. If the engagement involves a new system or a major change to an existing system, ask:

> "What's the ATO status? Is this system already operating under an ATO, or does this work require a new one?"

If the answer is "we need a new ATO," the delivery timeline just changed significantly. An ATO requires a complete Security Assessment Report, a Plan of Action and Milestones (POA&M), and Continuous Monitoring setup. Plan the engagement accordingly.

If an existing ATO is in place, any significant architectural change may require re-assessment. Changes that trigger re-assessment include: new external connections, changes to authentication mechanisms, new data stores, changes to the boundary of the system.

## FedRAMP for cloud services

If the engagement uses cloud services, those services must be FedRAMP-authorised for federal use. Using a non-FedRAMP cloud service with federal data is a compliance violation.

Before recommending or using any cloud service:
- Verify it appears in the FedRAMP Marketplace at fedramp.gov/marketplace
- Verify the authorisation level matches the data classification
- Note that some services are FedRAMP-authorised at Moderate but not High

This applies to AI services too. Most commercial AI APIs are not FedRAMP-authorised. If the engagement involves federal data, the AI tools you use — including the assistant you're using now — may need to be FedRAMP-authorised. Check `trust-profile.md` for the AI policy before proceeding.

## Data sovereignty and residency

Government data often has strict residency requirements — it cannot leave specific geographic boundaries. For federal data, this typically means US-only data centres. For state and local governments, requirements vary by jurisdiction.

When building or reviewing cloud architecture:
- Verify data stays within the required geographic boundary
- Verify backups and disaster recovery replicas also stay within boundary
- Verify third-party integrations don't route data outside the boundary

## Security controls baseline

Government systems follow NIST 800-53 security controls. The baseline depends on impact level (Low, Moderate, High). For any system handling CUI or above, the Moderate baseline applies at minimum — 325+ controls.

You don't need to implement all controls in an engagement. You need to know which controls are in scope and which ones your changes affect. Ask for the SSP. If one doesn't exist, that's a critical finding.

Key controls that commonly affect development work:
- **AC-2** — Account management: who has access, how it's provisioned and de-provisioned
- **AU-2** — Audit events: what must be logged, and what format
- **CM-7** — Least functionality: systems should run only what's necessary
- **SI-10** — Input validation: all input from untrusted sources must be validated

## Working under clearance requirements

If the work involves classified systems or classified data, you may not be cleared to work directly on those systems. Don't assume. Ask:

> "Does this work require a security clearance, and if so, at what level?"

If clearance is required and not held, the engagement scope needs to adjust. There are always unclassified components that can be worked on. Be clear about the boundary.

## Procurement and contracting constraints

Government procurement is slow by design. Changes to scope often require contract modifications. New tools or vendors may require procurement approval that takes months. When planning:

- Identify any tool or service additions early — procurement timelines affect delivery
- Know who has contracting authority for changes to scope
- Government contracting officers (COs) and contracting officer representatives (CORs) are the approvers, not the program manager

## Writes to .fde/
**`trust-profile.md`** — data classification level, ATO status, AI policy, clearance requirements, FedRAMP cloud constraints.
**`risks.md`** — ATO gaps, FedRAMP violations, data residency risks, control baseline gaps.

## Principles
- Classification level first, everything else second. The classification determines what tools, processes, and people are in scope.
- ATO timelines affect delivery timelines. Surface them in week one, not week ten.
- FedRAMP is a gate, not a formality. Non-authorised cloud services with federal data is a violation.
- If the SSP doesn't exist, that's the first finding. A system without a security plan can't get an ATO.
- AI tools may be prohibited or restricted. Confirm the policy before writing a single AI-assisted line.
