---
name: healthcare-fde
description: FDEOS overlay for healthcare. HIPAA, PHI handling, audit trails, break-glass, AI policy.
---

# healthcare-fde

## Purpose
Healthcare engagements carry risks that don't exist elsewhere. A data breach involving PHI (Protected Health Information) can end an organisation's operating licence. An audit trail gap can invalidate a clinical trial. An AI model trained on patient data without proper consent can trigger federal investigation. This overlay adds the layer of judgment that healthcare environments require.

Load this alongside the core FDEOS skills for any engagement involving patient data, clinical systems, or regulated health information.

## Activate when you hear
- Patient records, EHR, EMR, clinical data
- HIPAA, HITECH, HL7, FHIR
- Healthcare provider, hospital, clinic, payer, pharma
- "We handle patient data": even informally

## PHI: the first conversation

Before any technical work, establish what PHI is in scope. Ask:

> "Walk me through what patient data this system touches, what it stores, what it transmits, and who has access."

PHI includes more than names and records. IP addresses, device identifiers, geographic data below state level, and dates (other than year) can all constitute PHI in context. When in doubt, treat it as PHI.

Tag everything identified as PHI in `trust-profile.md` under `<private>` markers. This data must never enter AI context in plaintext, not in prompts, not in test fixtures, not in log files used during development.

## AI code policy in healthcare

Many healthcare organisations prohibit AI tools from processing PHI or generating code that directly handles PHI. Ask before writing a single line:

> "Does your organisation have a policy on AI tools accessing or processing patient data? Is there a BAA (Business Associate Agreement) in place that covers the tools we're using?"

If the answer is unclear, treat it as prohibited until confirmed otherwise. The cost of asking is zero. The cost of getting it wrong is catastrophic.

## Audit trails: non-negotiable

Every action on PHI must be logged: who accessed it, what they did, when, from where. This is not a feature, it's a compliance requirement under HIPAA's Security Rule.

When reviewing or building code that touches PHI, verify:
- Access is logged with user identity, timestamp, and action
- Logs are immutable: they cannot be modified or deleted by application code
- Audit logs are stored separately from application logs
- Retention meets minimum requirements (6 years under HIPAA)

If the system lacks audit logging and you're asked to build a feature that touches PHI, build the audit trail first. It's not optional.

## Break-glass access

Clinical systems need emergency override mechanisms, a clinician must be able to access a patient record even if normal authentication fails. This is called "break-glass."

Every break-glass event must generate an alert and be reviewed. When you encounter break-glass patterns:
- Verify the override is logged with full context (who, why, when)
- Verify it triggers a review workflow, not just a log entry
- Verify it cannot be silently disabled

## Data minimisation

The principle: collect and store the minimum PHI necessary for the stated purpose. When building or reviewing features, ask: does this need to store the full record, or would an anonymised aggregate answer the same question?

If a feature can work with de-identified data, it should. De-identification under HIPAA Safe Harbor requires removing 18 specific identifiers, it's not "remove the name."

## Consent and purpose limitation

Patient data collected for one purpose cannot be used for another without consent. If the engagement involves analytics, ML training, or any secondary use of patient data, verify that consent covers it. This applies to AI model training, a model trained on patient records without explicit consent is an immediate legal exposure.

## Encryption requirements

At rest and in transit, minimum:
- TLS 1.2+ for all data in transit (1.3 preferred)
- AES-256 for data at rest
- Encryption keys managed separately from encrypted data

Check `trust-profile.md` for any organisation-specific requirements that exceed the minimums.

## Writes to .fde/
**`trust-profile.md`**: PHI scope, AI policy confirmation, consent coverage, BAA status.
**`risks.md`**: any compliance gaps identified, with severity and remediation path.

## Principles
- PHI never enters AI context in plaintext. Tag it `<private>` and handle it outside the model.
- Audit trails before features. A system that touches PHI without audit trails is already non-compliant.
- When the AI policy is unclear, treat it as prohibited. Clarify before proceeding.
- De-identification is a legal definition, not a judgment call. Know the 18 identifiers.
- Break-glass must alert, not just log. Silent overrides are a compliance failure.
