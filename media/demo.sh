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
  printf "${SKILL}$1${RESET}\n"
}

clear
echo -e "${DIM}Claude Code  v1.x${RESET}"
echo ""
sleep 0.6

# --- Skill 1: LAND ---
label "[ @fde-land ]"
echo ""
printf "${PROMPT} "
sleep 0.3
typeuser "@fde First day at RetailBank. They want to fix the payments API. Meeting in 30 mins."
sleep 0.8

echo ""
stream "Before that meeting, one question:" 0.028
sleep 0.2
stream "What would a failed engagement look like for the person who hired you?" 0.024
echo ""
sleep 2.8

# --- Skill 2: DISCOVER ---
label "[ @fde-discover ]"
echo ""
printf "${PROMPT} "
sleep 0.3
typeuser "The CTO. He's worried about the audit next quarter. Ops team uses a spreadsheet to fix failed payments."
sleep 0.8

echo ""
stream "That spreadsheet is the real spec." 0.03
sleep 0.25
stream "The API is not broken. Manual recovery is the actual workflow." 0.024
sleep 0.25
stream "Map every column in that sheet before touching any code." 0.024
echo ""
sleep 2.8

# --- Skill 3: BUILD ---
label "[ @fde-build ]"
echo ""
printf "${PROMPT} "
sleep 0.3
typeuser "Ready to start building. Going to refactor the payment retry logic."
sleep 0.8

echo ""
stream "Two things before a single line:" 0.028
sleep 0.2
stream "Write characterisation tests for the current retry behaviour first." 0.024
sleep 0.25
stream "Then state the blast radius. Which accounts are affected if this fails?" 0.024
echo ""
sleep 3.0
