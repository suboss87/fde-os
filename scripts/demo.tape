# scripts/demo.tape
# FDEOS - Multi-stage engagement demo
# Generate with: vhs scripts/demo.tape

Output media/demo.gif

Set FontSize 16
Set Width 1100
Set Height 700
Set Theme "Dracula"
Set TypingSpeed 18ms

# Entry point 1: Pre-engagement
Type "$ fdeos"
Enter
Sleep 500ms
Type "> @fde-calibrate 'Sales handoff: Global Insurance wants to modernize claims. 48 hours before first meeting.'"
Enter
Sleep 1.5s
Type "# FDEOS (fde-calibrate): Cram Solvency II and IFRS 17."
Enter
Type "# Map their org chart. Confirm repo access and staging credentials before you walk in."
Enter
Type "# Walk in with one hypothesis: 'The real problem is the actuarial model,"
Enter
Type "#   manually maintained for 9 years — not the legacy code.'"
Enter
Sleep 3s

# Entry point 2: Mid-engagement chaos
Type "> @fde-chaos 'Payment module failing in production. No staging env for the message queue.'"
Enter
Sleep 1.5s
Type "# FDEOS (fde-chaos): Acknowledge the unknown. Assume maximum blast radius."
Enter
Type "# Treat that undocumented queue as critical. Minimum safe change: test with a mock."
Enter
Type "# Document findings in chaos-log.md before proceeding."
Enter
Sleep 3s

# Entry point 3: Post-engagement pattern extraction
Type "> @fde-retrospective 'Claims automation engagement done. What do we capture for the next team?'"
Enter
Sleep 1.5s
Type "# FDEOS (fde-retrospective): Log decisions, mistakes, and surprises."
Enter
Type "# Update codebase context. Extract pattern: 'regulated-migration-guard'."
Enter
Type "# Encode via fde-harness for future jurisdiction rollouts."
Enter
Sleep 3s

# Brand end card
Type "clear"
Enter
Sleep 400ms
Type "echo ''"
Enter
Type "echo 'FDEOS - The Operating System for Forward Deployed Engineering'"
Enter
Type "echo '14 skills. Any stage. Any scale. Any AI agent.'"
Enter
Type "echo 'github.com/suboss87/fde-os'"
Enter
Sleep 5s
