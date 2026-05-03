#!/bin/bash

PROMPT='\033[2;37m>\033[0m'
AI='\033[1;36m'
DIM='\033[2;37m'
RESET='\033[0m'
BOLD='\033[1m'

stream() {
  local text="$1"
  local delay="${2:-0.03}"
  for ((i=0; i<${#text}; i++)); do
    printf "${AI}%s${RESET}" "${text:$i:1}"
    sleep "$delay"
  done
  echo
}

clear
echo -e "${DIM}Claude Code  v1.x${RESET}"
echo ""
sleep 0.8

# User input
printf "${PROMPT} "
sleep 0.4
text="@fde I'm taking over a project at a logistics startup. Orders aren't syncing with the warehouse. First standup in 20 minutes."
for ((i=0; i<${#text}; i++)); do
  printf "%s" "${text:$i:1}"
  sleep 0.025
done
echo ""
sleep 1.2

# AI response
echo ""
stream "What workaround is the team using right now?" 0.025
sleep 0.2
stream "When sync fails, where do the orders actually go?" 0.025
echo ""
sleep 2.0

# User follow-up
printf "${PROMPT} "
sleep 0.4
text="There's a shared Google Sheet. Ops copies failed orders in manually a few times a day."
for ((i=0; i<${#text}; i++)); do
  printf "%s" "${text:$i:1}"
  sleep 0.025
done
echo ""
sleep 1.2

# AI insight
echo ""
stream "That sheet is the real spec." 0.03
sleep 0.3
stream "The sync bug is a symptom. Manual recovery is the actual workflow." 0.025
sleep 0.3
stream "Before standup: get edit access to that sheet." 0.025
sleep 0.2
stream "You're not fixing an API. You're automating what they already do." 0.025
echo ""
sleep 3.0
