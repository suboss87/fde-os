---
name: fde-rescue
description: Production fire or crisis. Stabilise first, understand second, fix third.
---

# @fde-rescue

## Token efficiency
Load `context.md` and `risks.md` only. Do not load terrain.md upfront -- it is too large. Pull specific module context only when you know what you are looking at.

## Opening question

> "What changed in the last 2 hours?"

That single question narrows the blast radius faster than any diagnostic. Something changed. A deploy, a config update, a data migration, a scheduled job, a certificate that expired. Find it. "Nothing changed" is never true -- it means nobody knows what changed, which is different and more dangerous.

## The rescue sequence

**1. Stabilise first.**
Stop the bleeding before diagnosing the wound. Can you roll back? Can you disable the broken path? Can you route around it? Buy time before you investigate. The instinct under pressure is to fix fast. That instinct causes the second incident.

**2. Name what you do not know.**
"We do not know if the queue is corrupted. We do not know if this affects all users or a subset. We do not know if the cache is stale." Write these down. Named unknowns are safer than assumed knowns. An unnamed assumption that turns out to be wrong takes the investigation in the wrong direction for an hour.

**3. Assume maximum blast radius.**
Every undocumented subsystem is critical until proven otherwise. The integration you do not recognise in the stack trace is load-bearing. Treat it that way until you confirm otherwise.

**4. Minimum safe change.**
Find the smallest possible intervention. Often it is a read-only query first -- observe before you act. Do not fix two things at once. If you change two things and the problem disappears, you do not know which one fixed it. That matters at 3am when it breaks again.

**5. One hypothesis at a time.**
"If the problem is X, then doing Y should produce Z." Test it. Document the result. Then move to the next hypothesis. Guessing in parallel wastes time and creates confusion about what was tried.

**6. Instrument before touching.**
Add logging before making any change. You need to see what happens. A change without observability is a change without evidence.

## What to tell the FDE immediately

Three things, nothing else:
- What to do right now to stop it getting worse
- The most likely cause based on what is known
- What must not be touched until more is understood

No analysis. No options. Three things. They need to act.

## When the crisis is trust, not code

Not all fires are technical. Sometimes the crisis is that the customer has lost confidence in the engagement. This is more dangerous than a production outage because it does not announce itself.

**Signals it is a trust fire, not a technical one:**
- A stakeholder stops responding or starts routing around you
- Meetings get shorter and decisions get deferred without explanation
- Someone asks if the timeline is still realistic, and then does not follow up
- A decision-maker you have never met starts asking questions about your work

The stakeholder who goes quiet is not losing interest. They are escalating above you. You have roughly 48 hours before someone you have never met makes a decision about your engagement. Do not wait for it to become official.

**How to respond:**
Do not push harder on delivery. That is the wrong instinct.

Stop and ask directly: "I want to make sure we are still aligned. What is your biggest concern right now?" Then listen without defending. The instinct is to explain. Resist it. Ask, then listen.

Three things that rebuild trust faster than shipping code:
1. Acknowledge the gap honestly. "We underestimated X, here is what we know now."
2. Show the recovery path in concrete steps with dates, not promises.
3. Get one quick win visible before the next conversation.

Do not hide the problem. Do not over-promise the recovery. Do not try to recover through volume of output -- more code does not fix broken confidence. The customer does not need more work, they need to believe the right work is happening.

Write what you said and what was agreed in `decisions.md` before the next day ends.

## When you discover mid-build that the brief is wrong

This is not a production fire. Nobody is paged. The system is running. But three weeks into the build you have found that the real problem is fundamentally different from what everyone agreed on at the start. This is the most politically dangerous situation in FDE work, because the customer has been watching visible progress toward the wrong thing.

Do not absorb it silently. Do not keep building in the hope the gap will close. Do not redefine the brief in your own head and carry on.

**The sequence:**

**1. Stop the current work.** Not pause -- stop. Every line you write from this point forward is building on a foundation you know is wrong. That is not progress, it is technical debt with a discovery story.

**2. Write down what you found and the evidence.** Not your interpretation. The evidence. A specific data flow you traced. A requirement nobody mentioned that the workaround has been compensating for. The database schema that tells a different story from the API contract. Evidence is what converts "I think the brief is wrong" into "here is what we found."

**3. Have the conversation before the day ends.** Do not send an email. Do not defer until the next standup. Find the decision-maker and say: "We need twenty minutes. We have found something important." The longer you wait, the more the customer infers you knew and did not say anything.

**4. Lead with evidence, not recommendations.** "Here is what we found" comes before "here is what I think we should do." Give them the evidence first and let them respond to it. A customer who reaches the conclusion themselves is a customer who owns the reset. A customer who is told what to think will push back.

**5. Offer three paths.** Descope to deliver something real within the original brief even though it is not the full solution. Rescope to address the real problem with a revised timeline and cost. Pause and plan -- take a short break from building to do proper discovery before committing to either. Never present only one path. One path is an ask for permission. Three paths is a conversation between professionals.

**6. Confirm the reset in writing before building resumes.** A verbal agreement that the brief has changed is not a reset. Update `success.md` and `reality.md` to reflect the new shared understanding. Get explicit acknowledgement. An FDE who resumes building on a verbally-agreed reset and then has the customer say "I don't remember agreeing to that" is in a position with no defence.

The FDE who surfaces a mid-build brief reset clearly and early earns more trust than the one who delivers exactly what was asked for when what was asked for was the wrong thing. Customers remember who told them the truth before it cost them money.

## After the crisis

Once stable, write the chaos log. Do not skip this. The FDE who writes the log immediately saves three hours for whoever deals with the next incident. Memory is most accurate in the 30 minutes after resolution.

Ask yourself: does this change what we thought we knew? Does `reality.md` need updating? Did something turn out to be different from what `terrain.md` said? If yes, update both now.

## Writes to `.fde/`

**`chaos-log.md`**: what happened, what changed, hypotheses tested in order, what fixed it, what was learned. Written before the day ends.

Update `risks.md` with any new risks the crisis revealed.

## Principles
- Stabilise before diagnosing. Under pressure, the instinct to fix fast causes the second incident.
- Named unknowns are safer than assumed knowns.
- Minimum safe change. One hypothesis at a time.
- Never push to production without a tested rollback, even in a crisis.
- Write the chaos log before the day ends. Memory decays fast.
- A trust fire requires the same urgency as a production fire. Respond the same day.
