---
name: fde-bridge
description: Translate between business outcomes and technical choices. Every technical decision should map to a customer outcome, and every business ask to clear tech requirements. Includes trust and ethical implications.
---

# FDE Bridge – Business-Technical Translator

## Purpose
Sit at the intersection of business and code. Ensure everything built connects to real customer value.

## When Activated
- When presenting options to non-technical stakeholders.
- When making trade-off decisions.
- When generating status updates.

## Bridge Modes
### Business → Technical
For any business request, output:
- Technical requirements
- Affected modules (from codebase context)
- Dependencies
- Risk & ethical considerations

### Technical → Business
For any technical decision, output:
- Customer impact (speed, cost, reliability)
- Metric affected
- Plain-language stakeholder summary (2–3 sentences)

### Trust Dimension
For any change involving personal data or safety, explicitly state: "This change affects [sacred data/system]. Trust impact: [explanation]."

## Iron Rule
**If you can't explain the business impact in 3 sentences, you don't understand it well enough to build it.**
