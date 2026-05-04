---
name: fintech-fde
description: FDEOS overlay for fintech engagements. PCI-DSS, transaction integrity, idempotency, fraud detection patterns, and regulatory reporting in financial systems.
---

# fintech-fde

## Purpose
Financial systems carry a specific class of failure that other systems don't: silent money loss. A bug that corrupts data in a CMS is bad. A bug that processes a payment twice, misroutes a transfer, or silently drops a transaction can cause regulatory breaches, customer financial harm, and criminal liability. This overlay adds the layer of judgment that financial environments require.

Load this alongside the core FDEOS skills for any engagement involving payments, transactions, accounts, or regulated financial data.

## Activate when you hear
- Payments, transfers, settlements, reconciliation
- PCI-DSS, PSD2, SOX, open banking, SWIFT
- Banking, lending, insurance, trading, crypto exchange
- "We handle money": in any form

## Cardholder data: the first conversation

PCI-DSS governs how card data is handled. Before any technical work, establish scope:

> "Does this system store, process, or transmit cardholder data? And what's the current PCI-DSS compliance level?"

Cardholder data includes PAN (Primary Account Number), CVV, PIN, and expiry dates. PAN must never be stored post-authorisation unless there is an explicit business case and it's encrypted and masked in all interfaces (show only last 4 digits).

If the system is storing full PANs in logs, in analytics events, or in error messages, that is the first finding and it takes priority over everything else.

Tag all cardholder data scope in `trust-profile.md` under `<private>` markers.

## Idempotency: the most common source of silent failure

In financial systems, the same operation executed twice must produce the same result as executing it once. Network failures, retries, and user double-clicks all cause duplicate requests. Without idempotency, the result is double charges, double transfers, or phantom credits.

When reviewing or building any code that creates transactions:
- Verify there is an idempotency key on every write operation
- Verify the key is checked before processing, not after
- Verify retries use the same key, not a new one

If idempotency is missing from a payment flow, flag it before it goes to production. "We'll add it later" has caused real customer harm in every fintech that said it.

## Transaction integrity

Financial transactions must be atomic: they either fully succeed or fully fail, with no partial states. A transfer that debits Account A but fails before crediting Account B is not a technical error, it's a financial error that may require regulatory reporting.

When reviewing transaction code:
- Verify operations are wrapped in transactions at the database level
- Verify compensating transactions exist if rollback is needed
- Verify the reconciliation path: how will midnight reconciliation catch a discrepancy?

## Fraud signals to surface early

Ask in the first technical conversation:

> "What fraud signals does this system currently monitor? And what happens when a transaction is flagged?"

Common gaps that indicate immature fraud controls:
- No velocity checks (same card used 20 times in 10 minutes)
- No geographic anomaly detection
- Fraud review queue that's never actioned
- Manual override that bypasses all controls

You don't need to build fraud detection in the engagement. You need to know whether the gaps you leave create exposure.

## Regulatory reporting

Many financial jurisdictions require transaction reporting above certain thresholds (e.g., CTR in the US above $10K, SAR for suspicious activity). If the system processes transactions at that scale:

> "What regulatory reporting obligations does this system have, and is that reporting automated or manual?"

A manual reporting process that relies on someone remembering is a compliance risk. If you're building or modifying transaction processing, verify reporting isn't broken by the change.

## AI in financial systems

Many financial regulators require explainability in automated decision-making, particularly for credit decisions, fraud detection, and account actions. A model that declines a loan application must be able to explain why in human-understandable terms.

Before building or integrating any AI-driven decision in a financial system:
- Confirm the explainability requirement for this jurisdiction
- Confirm the model can satisfy a right-to-explanation request
- Confirm AI decisions are logged with the input features used

Check `trust-profile.md` for the organisation's AI policy. Some financial institutions prohibit AI from making final decisions on regulated activities.

## Writes to .fde/
**`trust-profile.md`**: cardholder data scope, PCI compliance level, AI policy, regulatory reporting obligations.
**`risks.md`**: idempotency gaps, transaction integrity issues, fraud control gaps, compliance exposures.

## Principles
- Idempotency is not optional. Every transaction write needs an idempotency key.
- Full PANs in logs is a PCI violation. Flag it immediately.
- Atomic or nothing. Partial transaction states are financial errors, not technical ones.
- Know the reconciliation path. If midnight reconciliation can't catch a discrepancy, you don't have financial integrity.
- AI decisions on regulated financial activities require explainability and audit trails. Know the requirement before you build.
