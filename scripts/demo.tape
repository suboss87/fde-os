# scripts/demo.tape
# FDEOS - Single engagement exchange demo
# Generate with: vhs scripts/demo.tape

Output media/demo.gif

Set FontSize 16
Set Width 1100
Set Height 600
Set Theme "Dracula"
Set TypingSpeed 22ms

Type "$ claude"
Enter
Sleep 800ms

Type "> @fde-master \"I'm starting at Meridian Bank. Payments are failing. First meeting in an hour.\""
Enter
Sleep 2s

Type "# FDEOS: Before you write any code, ask what workaround they've been using."
Enter
Type "# Look for a manual spreadsheet or a nightly script. That's the real spec."
Enter
Sleep 2.5s

Type "> They've been updating a reconciliation spreadsheet every night for two years."
Enter
Sleep 2s

Type "# FDEOS: The real need is automated reconciliation, not a timeout fix."
Enter
Type "# Build a throwaway that mimics that spreadsheet and show it today."
Enter
Type "# fde-trust: The spreadsheet contains transaction data — treat it as sensitive."
Enter
Sleep 3s

Type "# No code written. The real problem surfaced."
Enter
Type "# The spreadsheet nobody mentioned is now the primary artefact."
Enter
Sleep 3s

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
Sleep 4s
