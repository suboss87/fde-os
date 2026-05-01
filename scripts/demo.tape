# scripts/demo.tape
# FDEOS – Real engagement demo
# Generate with: vhs scripts/demo.tape

Output media/demo.gif

Set FontSize 16
Set Width 1200
Set Height 800
Set Theme "Dracula"
Set TypingSpeed 20ms

# Scene 1: The problem lands
Type "ssh meridian-prod-jump"
Enter
Sleep 1s
Type "cd /opt/legacy-monorepo"
Enter
Sleep 500ms
Type "# VP Engineering: 'Payments failing ~2%. Fix the timeout bug in PaymentProcessor.'"
Enter
Sleep 2s

# Scene 2: Invoke FDEOS
Type "claude"
Enter
Sleep 1s
Type "@fde-master 'Fix payment failures at Meridian Bank'"
Enter
Sleep 2s

# Scene 3: Agent responds – Trust & Observe
Type "# FDEOS: Let's start with trust. I've read the PCI-DSS summary you provided."
Enter
Sleep 1.5s
Type "# fde-observe: Don't accept the timeout request yet. Ask what workaround they're using."
Enter
Sleep 1.5s

# Scene 4: Human asks the question
Type "# You: 'What's the workaround right now?'"
Enter
Sleep 1s
Type "# VP: 'We have a manual reconciliation spreadsheet. Two years now.'"
Enter
Sleep 2s

# Scene 5: Explore & Prototype
Type "# FDEOS: The real need is automated reconciliation. Build a throwaway first."
Enter
Sleep 1.5s
Type "# fde-explore: No tests. Replicate the spreadsheet logic. Show it this afternoon."
Enter
Sleep 2s
Type "# (3 hours later...)"
Enter
Sleep 1s
Type "# Prototype demoed. Ops: 'This is what we needed. But make it real-time.'"
Enter
Sleep 2s

# Scene 6: Calibrate & Discover
Type "# fde-calibrate: PCI-DSS Level 1 | off-limits: auth module | 6-month: 10x volume"
Enter
Sleep 2s
Type "# fde-discovery: PaymentProcessor.java — 4,200 lines, hotspot, 12% test coverage"
Enter
Sleep 2s

# Scene 7: Safe build & Ship
Type "# fde-brownfield: Characterisation tests written. Strangler Fig wrapping old code."
Enter
Sleep 2s
Type "# fde-ship: Canary 5%... error rate stable... expanding to 100%. Rollback ready. ✅"
Enter
Sleep 2s

# Scene 8: Retrospective
Type "# fde-retrospective: Pattern extracted → new 'reconciliation-guard' skill for the org."
Enter
Sleep 2s

# Scene 9: End card
Type "clear"
Enter
Sleep 500ms
Type "echo ''"
Enter
Type "echo 'FDEOS — The Operating System for Forward Deployed Engineering'"
Enter
Type "echo '14 skills. Every phase. Any AI agent.'"
Enter
Type "echo 'github.com/suboss87/fde-os'"
Enter
Sleep 4s
