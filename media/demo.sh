#!/bin/bash

PROMPT='\033[2;37m>\033[0m'
AI='\033[1;36m'
SKILL='\033[2;35m'
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

label() {
  printf "\n${SKILL}$1${RESET}\n\n"
}

clear
echo -e "${DIM}Claude Code  v1.x${RESET}"
echo ""
sleep 0.8

# --- Skill 1: LAND ---
label "[ @fde-land ]"
printf "${PROMPT} "
sleep 0.3
typeuser "@fde Day one at RetailBank. Payments are failing. CTO meeting in 30 minutes."
sleep 1.0

echo ""
stream "Before that meeting, find someone in ops." 0.028
sleep 0.3
stream "Ask them: when a payment fails, what do you actually do right now?" 0.024
echo ""
sleep 3.2

# --- Skill 2: DISCOVER ---
label "[ @fde-discover ]"
printf "${PROMPT} "
sleep 0.3
typeuser "They copy failed transactions into a spreadsheet and reprocess manually every night."
sleep 1.0

echo ""
stream "That spreadsheet is your real brief." 0.03
sleep 0.3
stream "Nobody hired you to fix the API. They need that manual process automated." 0.024
sleep 0.3
stream "Get a copy before the meeting. That is what you are actually building." 0.024
echo ""
sleep 3.2

# --- Skill 3: BUILD ---
label "[ @fde-build ]"
printf "${PROMPT} "
sleep 0.3
typeuser "CTO approved the plan. Ready to build. Codebase is 8 years old."
sleep 1.0

echo ""
stream "Before any code: write characterisation tests on the retry logic." 0.028
sleep 0.3
stream "Not to check if it is correct. To find out what it actually does." 0.024
sleep 0.3
stream "Eight-year-old code does things nobody remembers. Tests will show you." 0.024
echo ""
sleep 3.5
