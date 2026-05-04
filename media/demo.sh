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
stream "Don't prepare anything. Use the meeting." 0.028
sleep 0.3
stream "Open with: 'Before I look at any code, walk me through" 0.024
stream " what happens when a payment fails today.'" 0.024
sleep 0.3
stream "Let them talk. The real problem will surface in that answer." 0.024
echo ""
sleep 3.5

# --- Skill 2: DISCOVER ---
label "[ @fde-discover ]"
printf "${PROMPT} "
sleep 0.3
typeuser "They said ops reprocesses failed payments manually every night from a spreadsheet."
sleep 1.0

echo ""
stream "That spreadsheet is the real brief." 0.03
sleep 0.3
stream "Ask to see it before the meeting ends." 0.024
sleep 0.3
stream "What you build should automate that sheet, not fix the API." 0.024
echo ""
sleep 3.2

# --- Skill 3: BUILD ---
label "[ @fde-build ]"
printf "${PROMPT} "
sleep 0.3
typeuser "CTO approved. Starting on the build. Payment module is 8 years old."
sleep 1.0

echo ""
stream "Before any code: write characterisation tests on the payment module." 0.028
sleep 0.3
stream "Not to check correctness. To find out what it actually does." 0.024
sleep 0.3
stream "Eight-year-old code does things nobody remembers. Tests will show you." 0.024
echo ""
sleep 3.5
