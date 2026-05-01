---
name: fintech-fde
description: Domain pattern for financial services. Adds PCI-DSS rules, transaction integrity, fraud detection patterns.
---

# Fintech FDE Pattern

## Added Rules
- **PCI-DSS**: Never store full card numbers, CVV, or PIN in plaintext. Tokenise payments.
- **Transaction Integrity**: Every financial operation must be idempotent. Log before executing.
- **Fraud Signals**: Flag unusual patterns (velocity, amount, location) for review.
- **Auditability**: All changes must leave a tamper-evident audit log.
