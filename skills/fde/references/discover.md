# discover — find the real problem, map the terrain

**Enter when:** the brief feels wrong, the real problem is unclear, shadow processes are suspected, or any phase found that the map is missing.

**Read first:** `context.md`, `brief.md`. Load `terrain.md` if it exists — extend it, never regenerate from scratch.

## Frame the decision first

Before any scanning, write one sentence at the top of your working notes:

> "What will the sponsor do differently because of this discovery?"

If you can't name the decision this informs (descope? rescope? pick use case A over B? touch module X first?), you're collecting trivia, not discovering. Every output of this phase is aimed at that decision.

## Method — part 1: the codebase (you do this work)

Run these scans yourself. Do not load the full codebase into context — scan wide, read deep only on hotspots.

**1. Stack and age.** Language, framework, build system, date of last major upgrade:
```bash
git log --reverse --format="%ad" --date=short | head -1   # repo birth
git log -1 --format="%ad" --date=short                     # last commit
```

**2. Churn heat — the modules everyone touches but fears:**
```bash
git log --since="90 days ago" --name-only --pretty=format: | sort | uniq -c | sort -rn | head -20
```
The highest-churn file in a legacy codebase is the one everyone is afraid to refactor but cannot avoid touching. Cross-reference with complexity (file size, nesting) and mark "handle with care."

**3. Test gaps — what's covered, what's a lie:**
```bash
find . -path ./node_modules -prune -o -name "*test*" -print | head -30
```
Map test files against the churn list. A high-churn module with no test neighbors is a load-bearing wall with no insurance. Spot-read the tests that do exist: tests that pass but assert nothing are worse than no tests — note them.

**4. The "temporary" archaeology** (repeat `--include` per extension — brace globs silently match nothing):
```bash
grep -rnE "HACK|FIXME|XXX|temporary|for now|remove this|workaround" \
  --include="*.js" --include="*.ts" --include="*.py" --include="*.java" \
  --include="*.go" --include="*.rb" --include="*.cs" --include="*.php" . | head -30
```
Temporary code in production is permanent code with an excuse. Each hit is a candidate for "what was never built properly."

**5. AI components — they fail silently:**
```bash
grep -rlnE "openai|anthropic|llm|prompt|embedding|vector|inference" \
  --include="*.js" --include="*.ts" --include="*.py" --include="*.java" \
  --include="*.go" . | head -20
```
Flag every one. AI components don't fail like regular code — they degrade as the world changes. Each needs: model version, fallback path (or note its absence), observability (or note its absence).

**6. Data flow.** Where data enters, how it moves, where it stops. Entry points first: routes, queues, cron, file drops.

## Method — part 2: the humans (you coach, the FDE asks)

The real spec is what people **do** when the system fails — not what the slide deck says. Arm the FDE with these, in their own words:

- **"How is the team coping today without the fix?"** — the workaround is the honest requirements doc.
- **Find the spreadsheet.** Almost always there. Whoever maintains it is the best interview in the building.
- **The hesitation.** When someone says "well, there's also this other thing we do…" — stop them, ask them to finish. The main story is what they're comfortable explaining; the hesitation is the real problem.
- **"Which part of the codebase do you least want to touch?"** The answer is unanimous and it's the load-bearing wall. Check it against your churn scan — when the human answer and the churn data agree, that's your first map landmark.
- **Shadow AI.** Someone pasting data into ChatGPT to cope = a real unmet need + an uncontrolled data risk. Note both.

## When scope is a transformation, not a single problem

Score every candidate use case before anything gets prototyped:

| Dimension | Question | 1–5 |
|---|---|---|
| Business value | What does it cost them unsolved? | |
| Complexity | How hard to build safely? (5 = hardest) | |
| Data readiness | Available, clean, sufficient volume today? | |

**Score = (Value × Data readiness) / Complexity.** Highest score gets prototyped first (hand to `sketch`). A 5-value/1-complexity/5-readiness case scores 25; a 5-value/5-complexity/2-readiness case scores 2 — they look identical on a whiteboard. Never let a technically interesting use case override the score.

## Artifact (this IS the memory — write it as you work)

**`reality.md`** — the readout the FDE takes into the sponsor meeting:
```markdown
# Reality (actual problem)
**Decision this informs:** <one line>
**Confirmed:** <real problem> (evidence: <workaround/data/quote, source, day>)
**Stated brief was wrong/right because:** <delta, with evidence>
**Implication for build:** <thin-slice direction>
**Validated with:** <who, when>
```

**`terrain.md`** — the map every later phase loads:
```markdown
# Terrain
**Stack:** <lang/framework/build, age>
**Hotspots (handle with care):** <file — churn n/90d — tests: none/weak/ok — why it matters>
**AI components:** <file — model — fallback? — observability?>
**Data flow:** <entry → transform → store → exit>
**Test landscape:** <covered / gaps / lies>
**Unknowns:** <named explicitly — an honest gap beats a confident guess>
```

Every line carries its evidence. `(churn: 47/90d)` `(ops lead, Day 5)` `(stated, unverified)`.

## Checkpoint (before any build)

Present to the FDE, four things, one paragraph each — no padding:
1. The real problem, with the two strongest pieces of evidence.
2. The top 3 risk areas of the codebase, one line of why each.
3. What must not be touched without characterisation tests.
4. The recommendation: confirm brief / descope / rescope — and the decision it puts in front of the sponsor.

If discovery revealed the problem is 3× the brief: the FDE tells the customer **before** telling themselves it's manageable. Lead with evidence, offer three paths (descope / rescope / pause-and-plan), confirm any reset in writing — update `success.md` and `brief.md` before continuing.

## If you've formed three wrong reads

Stop. Don't form a fourth hypothesis. Three disproven reads means the brief is actively misleading — usually the person who briefed doesn't know, or knows and can't say. Change method: stop analysing the system, ask three people separately "if you had to bet on what's actually wrong here, what would you say?" The thing they all hesitate before saying is the real problem.

## Principles

- The brief is a hypothesis until evidence confirms it.
- The workaround is more honest than the requirements document.
- Churn data + the human's "don't touch that" pointing at the same module = the map is true.
- Never modify code before the terrain map exists.
- Scan wide, read deep only on hotspots.
