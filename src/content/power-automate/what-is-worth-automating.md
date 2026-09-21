---
title: "What Is Actually Worth Automating With Power Automate?"
description: "A practical way to decide whether a Microsoft 365 task is a good Power Automate candidate before you build the flow."
published: 2026-09-21
summary: "Good automation candidates are repetitive, predictable, structured enough to define, and recoverable when something goes wrong. Standardize the process before automating it."
order: 1
related:
  - save-outlook-attachments-to-sharepoint
  - forms-to-sharepoint-request-tracker
  - diagnose-failed-power-automate-flow
---

A Power Automate flow can execute a process quickly and consistently. It cannot rescue a process that nobody has actually agreed.

The useful question is therefore not:

**Can Power Automate do this?**

It is:

**Is this work defined well enough that a machine can repeat it safely?**

## Four characteristics of a good candidate

The strongest office automations are usually:

- **repetitive** — the same administrative action happens again and again;
- **predictable** — the next step can be stated as a rule;
- **structured** — the flow can reliably identify the data it needs;
- **recoverable** — a mistake can be tested and corrected without disproportionate harm.

A common mistake is to automate an inconsistent human process. If five people perform the same task five different ways, the first job is normally to agree the process rather than build five branches into a flow.

## A simple automation score

Before opening the designer, score the task from 0 to 2 on each question.

### 1. Does the task happen often?

A daily task is usually a stronger automation candidate than something performed twice a year.

Frequency alone is not enough, but repeated volume is where automation has a chance to repay the build and maintenance effort.

### 2. Are the inputs reasonably consistent?

Ask whether the required information arrives in a stable form.

Examples include:

- a Microsoft Form with known questions;
- a SharePoint list with defined columns;
- an Excel table with agreed column names;
- an Outlook mailbox or folder where the relevant messages can be identified by a reliable rule.

If the input is free-form, incomplete, or inconsistent, the flow may spend more effort guessing than doing useful work.

### 3. Is the trigger clear?

Write the start of the process as one sentence.

For example:

- when a new response is submitted;
- when a new email arrives in a defined folder;
- every weekday morning;
- when a SharePoint item reaches a particular state.

If you cannot state the trigger clearly, the automation is not ready.

### 4. Can the result be checked?

A green run only proves that Power Automate completed the configured actions.

It does **not** prove the business outcome is correct.

A stronger process has an observable success test such as:

- the expected file exists and opens;
- the intended SharePoint record was created or updated;
- the correct person received one message;
- the approval result was stored before any downstream notification;
- every qualifying Excel row was processed exactly as intended.

### 5. Can exceptions be recognized?

A useful design knows what to do when expected data is missing or unexpected data arrives.

That can mean:

- route the item to review;
- stop the flow visibly;
- leave the source state unchanged so the item can be retried;
- record a failure status.

Silently guessing is rarely a good exception strategy.

### 6. Can a mistake be recovered safely?

Ask what happens if the flow:

- runs twice;
- sends a message and then fails;
- creates a destination record and then fails before marking the source complete;
- is rerun after a connection or permission problem.

The second run is part of the design, not an afterthought.

### 7. Is the flow worth maintaining?

Every production flow creates a maintenance obligation.

Someone needs to know:

- who owns it;
- which connection identities it uses;
- what business rule it implements;
- where failures are visible;
- what changed when a connector, list, workbook, or organizational process changes.

A small task can be automatable and still not be worth the long-term overhead.

## Write three sentences before you build

A short process definition exposes ambiguity early.

Write:

1. **The process begins when...**
2. **The automation needs to...**
3. **The process is complete when...**

If those sentences are difficult to finish, the process probably needs more definition.

## Know when to leave work manual

Some work should remain manual because:

- it is rare and faster to do than to maintain a flow;
- the judgement involved is high and should not be replaced by a brittle rule;
- the required input data is unreliable;
- the work depends on security, approval, or governance controls that the proposed design cannot safely meet;
- a simpler built-in feature already solves the problem.

Automation is useful when it removes repeatable administration while preserving control and evidence.

It is not a goal by itself.

## Before you open the designer

A good pre-build checkpoint is:

- trigger defined;
- required inputs known;
- authoritative source identified;
- success test written;
- duplicate/rerun behaviour decided;
- exception path visible;
- owner and connection identities known.

If those items are clear, the first build can stay small.

Next, see how that approach applies to [saving Outlook attachments to SharePoint](/power-automate/save-outlook-attachments-to-sharepoint/) or [building a Forms-to-SharePoint request tracker](/power-automate/forms-to-sharepoint-request-tracker/).
