---
title: "How to Write Maintenance Work Requests Someone Can Actually Plan"
description: "A practical work-request standard for small maintenance teams: record the asset, observed condition, consequence, timing, and reporter without turning guesses into diagnoses."
published: 2026-09-24
summary: "Improve the front end of the maintenance backlog by asking for observable facts, consequence, timing, and a useful contact instead of vague requests such as “check pump” or “urgent.”"
order: 1
related:
  - maintenance-ready-backlog-checklist
  - 30-day-reactive-to-controlled-maintenance-reset
  - weekly-maintenance-capacity
---

A maintenance planner cannot prepare work that has never been described clearly.

Short requests such as “motor issue,” “check pump,” or “fix leak ASAP” may point to real problems, but they make the next person rediscover information that was available when the request was raised.

For a small team, that creates avoidable work at exactly the point where planning time is already scarce.

The goal is not a long form.

The goal is a request that another person can understand well enough to **triage and plan**.

## The five pieces of a useful maintenance request

A strong request normally answers five questions.

### 1. Where is it?

Identify the asset and the useful location within the asset or process.

“Packing line” may be too broad if the line contains several machines.

Use the asset number, equipment name, line, location, or component area that lets the next person find the condition without another search.

### 2. What was observed?

Describe the symptom before the diagnosis.

Useful observations include:

- a new noise;
- a leak;
- an alarm;
- abnormal temperature;
- intermittent stopping;
- physical damage;
- excessive movement or play;
- failure to start;
- poor movement; or
- a change from normal operation.

This distinction matters.

If an operator observes noise and writes “bearing failed,” the work order may begin with an assumption that has not been confirmed.

A better request records the evidence first.

For example:

**Weak:** “Bearing failing.”

**Better:** “New high-pitched noise from the drive end of Conveyor C14 motor while running. First noticed on the afternoon shift. No production loss at present.”

Maintenance can now decide what needs to be inspected without pretending the failure mode is already known.

### 3. What is the consequence?

The same physical condition can have very different priority depending on what it is doing to the operation.

Record what is actually known.

Questions can include:

- Is production stopped?
- Is output reduced?
- Is quality affected?
- Is redundancy lost?
- Is the condition getting worse?
- Is the equipment still operating?
- Is there a possible immediate safety or environmental concern that needs escalation through the site's approved process?

The request should describe consequence.

The agreed maintenance and operations process should assign priority.

### 4. When does it happen?

Timing often gives the planner or technician useful diagnostic context.

Record whether the condition is:

- constant;
- only at startup;
- only under load;
- intermittent;
- linked to a particular product or operating state;
- becoming more frequent; or
- first observed at a known time.

“Filler stops” is more useful when it becomes:

“Filler 2 stopped three times during the morning shift with alarm A17. Operators reset it each time. It is currently running.”

That is still not a diagnosis.

It is a much better starting point.

### 5. Who knows more?

Record the reporter or another useful contact when practical.

The person who saw the problem may know:

- what changed immediately before it appeared;
- whether it has happened before;
- what the machine was doing;
- whether the condition is worsening; or
- what temporary action has already been taken.

A planner looking at the request tomorrow should know whom to ask.

## A simple request sentence

A practical structure is:

**[Asset/location] is showing [observed condition] during [operating condition/timing], causing or risking [known consequence]. [Reporter] can provide further information.**

Not every request needs every clause.

The structure exists to improve information, not to force awkward writing.

## “ASAP” is not a priority

Words such as:

- ASAP;
- urgent;
- priority;
- needs doing today; and
- production critical

express a desire for action.

They do not create a consistent priority method.

If every requester sets priority independently, the priority field quickly stops helping.

A better sequence is:

1. record the observed condition;
2. record the known consequence;
3. apply the site's agreed priority rules; and
4. record enough rationale that somebody reading the job later understands the decision.

A small-team four-level model can distinguish:

- **P1 - Emergency:** immediate response or escalation is required because waiting would create an unacceptable consequence;
- **P2 - Urgent:** near-term action is important, but the condition does not justify dropping everything immediately;
- **P3 - Routine:** legitimate corrective work that can move through normal planning and scheduling; and
- **P4 - Opportunity / Improvement:** worthwhile work that depends on spare capacity, bundling, shutdown access, or a future improvement window.

The exact response times have to be set locally.

The labels are useful only when they create real choices.

## Use the break-in test

When somebody wants a job treated as the highest priority, ask:

**Would we stop or displace already scheduled work to respond to this?**

If the answer is no, it probably is not an emergency.

This does not make the work unimportant.

It separates importance from immediate schedule displacement.

For disagreements, three questions help:

1. What happens if we do nothing today?
2. What happens if we wait until the next normal scheduling opportunity?
3. Which scheduled work are we prepared to delay instead?

The third question makes the trade-off visible.

## Do not ask requesters for information they cannot know

A large mandatory form can create the appearance of control while collecting weak data.

An operator may know:

- what happened;
- where;
- when;
- what the visible consequence is; and
- who saw it.

They may not know:

- the failure mechanism;
- required trade;
- repair method;
- parts;
- labor estimate;
- cause code; or
- planning depth.

Maintenance planning should add those later.

A useful work-management sequence is:

**Request → Triage → Planning → Readiness → Scheduling**

Each stage adds the information needed for the next decision.

## Photographs help when they have context

A photograph can be useful for:

- physical damage;
- leaks;
- corrosion;
- display alarms;
- loose guards;
- damaged cabling;
- component identification; or
- awkward access.

But the image still needs context.

Record the asset, location, date when relevant, and what the photograph is intended to show.

A close-up of a damaged bracket is much less useful when nobody can tell which machine it belongs to.

## Set a clarification threshold

Do not spend twenty minutes trying to plan a four-word request.

Ask:

**Can I understand what was observed, where it occurred, and why it matters?**

If not, clarify it before detailed planning.

That small front-end discipline can prevent:

- wasted site visits;
- wrong trade allocation;
- duplicate diagnosis;
- incorrect parts orders;
- distorted priority; and
- frustrated technicians.

Once the request is clear, the next question is whether the job is actually executable. The [maintenance Ready Gate](/maintenance-planning/maintenance-ready-backlog-checklist/) separates a valid work request from work that is prepared well enough to schedule.

If the whole front end of the system is currently reactive, use the [30-day reactive-to-controlled reset](/maintenance-planning/30-day-reactive-to-controlled-maintenance-reset/) to rebuild capture, priority, backlog states, readiness, and weekly scheduling in stages.
