---
name: healthcare-fde
description: Domain pattern for healthcare. Adds HIPAA compliance rules, PHI handling, audit trail requirements. Load automatically when the project is in healthcare.
---

# Healthcare FDE Pattern

## Added Rules
- **PHI/Sacred Data**: Never log, never embed in prompts unencrypted. Use tokenised references.
- **Audit Trails**: Every data access and modification must be logged with timestamp and actor.
- **Encryption**: Data at rest and in transit must be encrypted (AES-256, TLS 1.3).
- **Minimum Necessary**: Only retrieve the minimum data required for the task.
- **Breach Protocol**: If PHI is inadvertently exposed, notify the human and isolate the exposure immediately.
