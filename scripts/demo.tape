# scripts/demo.tape
# Generate with: vhs scripts/demo.tape

Output media/demo.gif

Set FontSize 13
Set Width 1200
Set Height 680
Set Theme "Dracula"
Set TypingSpeed 18ms

Type "# Meridian Bank — legacy payments monorepo — payments failing silently 2%"
Enter
Sleep 600ms

Type "@fde-master"
Enter
Sleep 1s

Type "echo ''"
Enter
Type "echo '🤝 fde-trust activated'"
Enter
Type "echo '   Reading ops runbook... sacred data identified: transaction_id, account_ref'"
Enter
Type "echo '   Asking: What is your biggest fear about this engagement?'"
Enter
Type "echo '   Customer: We cannot afford another silent failure. March cost us \$18K.'"
Enter
Type "echo '   Trust status: ESTABLISHING — no sensitive data in context yet'"
Enter
Sleep 900ms

Type "echo ''"
Enter
Type "echo '🧪 fde-explore activated (parallel)'"
Enter
Type "echo '   Building throwaway integration: PaymentProcessor → Stripe webhook'"
Enter
Type "echo '   Finding: retry logic missing on 503 responses — not in any doc'"
Enter
Type "echo '   Hypothesis formed. Prototype ready in 40 min.'"
Enter
Sleep 900ms

Type "echo ''"
Enter
Type "echo '🎯 fde-calibrate activated'"
Enter
Type "echo '   Environment: PCI-DSS Level 1 | Risk: HIGH'"
Enter
Type "echo '   Off-limits: auth module, encryption keys'"
Enter
Type "echo '   6-month horizon: migrate to new gateway — do NOT hardcode Stripe'"
Enter
Sleep 800ms

Type "echo ''"
Enter
Type "echo '🗺️  fde-discovery activated'"
Enter
Type "echo '   Modules: 47 | Hotspot: PaymentProcessor.java (1,247 changes/yr)'"
Enter
Type "echo '   Data flow mapped. Race condition window: 80–120ms on retry'"
Enter
Type "echo '   Codebase Context Document written → .fde/context.md'"
Enter
Sleep 800ms

Type "echo ''"
Enter
Type "echo '🔍 fde-observe (continuous)'"
Enter
Type "echo '   Customer mentioned a spreadsheet. Asking...'"
Enter
Type "echo '   Found: shadow ledger tracking 847 silent failures since March'"
Enter
Type "echo '   Latent demand: real-time failure dashboard, not just a bug fix'"
Enter
Sleep 800ms

Type "echo ''"
Enter
Type "echo '⚡ fde-prototype activated'"
Enter
Type "echo '   Demo: idempotent retry with 3-attempt backoff'"
Enter
Type "echo '   Feedback: add alerting when retry threshold hit'"
Enter
Type "echo '   Iteration 2: alert added → customer sign-off received'"
Enter
Sleep 800ms

Type "echo ''"
Enter
Type "echo '🌉 fde-bridge activated'"
Enter
Type "echo '   Business impact: \$18K/month recovered | 0.02% → 0.001% failure rate'"
Enter
Type "echo '   Stakeholder summary: 3 sentences ready for Monday standup'"
Enter
Sleep 700ms

Type "echo ''"
Enter
Type "echo '🏗️  fde-brownfield activated'"
Enter
Type "echo '   Characterisation tests written for PaymentProcessor (23 cases)'"
Enter
Type "echo '   Root cause confirmed: race condition on concurrent retry'"
Enter
Type "echo '   Fix: idempotency key + distributed lock. Strangler Fig applied.'"
Enter
Sleep 800ms

Type "echo ''"
Enter
Type "echo '✈️  fde-ship activated'"
Enter
Type "echo '   Pre-flight: ✅ tests green | ✅ rollback verified | ✅ canary ready'"
Enter
Type "echo '   Canary 5% → 15 min stable → 50% → stable → 100%'"
Enter
Type "echo '   Post-deploy smoke: all payment paths confirmed ✅'"
Enter
Sleep 900ms

Type "echo ''"
Enter
Type "echo '📝 fde-retrospective activated'"
Enter
Type "echo '   Pattern extracted: idempotency-guard for all payment entry points'"
Enter
Type "echo '   fde-harness: encoding pattern as fintech-retry-guard skill'"
Enter
Type "echo '   Context saved → .fde/context.md updated for next session'"
Enter
Sleep 1200ms

Type "echo ''"
Enter
Type "echo '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'"
Enter
Type "echo 'FDEOS — The Operating System for Forward Deployed Engineering'"
Enter
Type "echo '14 skills · one complete engagement · github.com/suboss87/fde-os'"
Enter
Sleep 2500ms
