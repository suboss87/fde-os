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

# FDE just landed — universal scenario every FDE knows
printf "${PROMPT} "
sleep 0.3
typeuser "@fde Just landed at a healthcare startup. They want to rewrite the patient portal. No handover docs. Team seems nervous."
sleep 1.0

echo ""
stream "Before anything else, one question:" 0.028
sleep 0.2
stream "What would a failed engagement look like for the person who hired you?" 0.025
echo ""
sleep 2.5

# FDE answers — the hidden compliance context surfaces
printf "${PROMPT} "
sleep 0.3
typeuser "The CTO. He's worried about data compliance. They had an audit last year."
sleep 1.0

echo ""
stream "That changes the brief." 0.03
sleep 0.3
stream "This is not a rewrite project. It is a compliance project with a portal on top." 0.025
sleep 0.3
stream "Before any code: find out what the audit found and whether it was remediated." 0.025
sleep 0.2
stream "That is your real brief." 0.03
echo ""
sleep 3.5
