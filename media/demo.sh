#!/bin/bash

PROMPT='\033[2;37m>\033[0m'
AI='\033[1;36m'
DIM='\033[2;37m'
RESET='\033[0m'

stream() {
  local text="$1"
  local delay="${2:-0.025}"
  printf "${AI}"
  for ((i=0; i<${#text}; i++)); do
    printf "%s" "${text:$i:1}"
    sleep "$delay"
  done
  printf "${RESET}"
  echo
}

typeuser() {
  local text="$1"
  for ((i=0; i<${#text}; i++)); do
    printf "%s" "${text:$i:1}"
    sleep 0.022
  done
  echo
}

clear
echo -e "${DIM}Claude Code  v1.x${RESET}"
echo ""
sleep 0.8

# Turn 1 — crisis lands
printf "${PROMPT} "
sleep 0.3
typeuser "@fde Checkout is throwing 500s. Revenue stopped 15 minutes ago. I just got paged."
sleep 1.0

echo ""
stream "What changed in the last 2 hours — deploy, config, or infrastructure?" 0.025
echo ""
sleep 2.2

# Turn 2 — user gives context
printf "${PROMPT} "
sleep 0.3
typeuser "Config update went out 90 minutes ago. Nothing else touched."
sleep 1.0

echo ""
stream "Roll back the config now. Don't diagnose yet." 0.028
sleep 0.25
stream "Stabilise production first. Understand why second." 0.028
echo ""
sleep 2.5

# Turn 3 — stable, now go deeper
printf "${PROMPT} "
sleep 0.3
typeuser "Rolled back. Orders are coming through."
sleep 1.0

echo ""
stream "Good. Now find out what that config was trying to fix." 0.025
sleep 0.25
stream "That's the real problem. The outage was just the symptom." 0.025
echo ""
sleep 3.0
