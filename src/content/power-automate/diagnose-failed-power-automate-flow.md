---
title: "How to Diagnose a Failed Power Automate Flow With Run History"
description: "A practical Power Automate troubleshooting sequence: start with the exact run, find the first failed or wrong action, inspect inputs and outputs, then change one thing and retest the business result."
published: 2026-09-21
summary: "The designer shows intent; run history shows evidence. Read the exact run from the trigger downward until you find the first action that failed or produced the wrong data."
order: 6
related:
  - save-outlook-attachments-to-sharepoint
  - forms-to-sharepoint-request-tracker
  - process-excel-rows-without-duplicates
---

When a Power Automate flow stops working, the fastest response is often not to edit it.

Open the run history first.

The designer shows what you intended to build.

The run shows what actually happened.

## Use a four-question diagnosis

Work from the trigger downward.

Ask:

1. **Did the flow run at all?**
2. **Did an action fail?**
3. **Does an action show green but produce the wrong business result?**
4. **Is every action green, but the business result is still wrong?**

Each answer sends you to a different part of the process.

## 1. The flow did not run

Start with the trigger.

Check:

- whether the trigger is enabled;
- whether the triggering event actually happened;
- trigger conditions;
- the source mailbox, folder, list, library, Form, schedule, or other input;
- the trigger connection;
- permissions;
- any change in the source process.

If there is no run, editing a downstream action cannot fix the problem.

## 2. Find the first failed action

Open the exact failed run.

Read from the trigger downward.

Do not start with the last red box just because it is visually obvious.

A downstream action may fail only because an earlier action produced the wrong value.

The first failure is usually the best place to begin.

## 3. Inspect inputs and outputs

For the action you are investigating, ask two questions.

### Inputs

**What did this action receive?**

Check:

- IDs;
- filenames;
- email addresses;
- dates;
- status values;
- dynamic content;
- expressions;
- empty or null values;
- unexpected spaces or capitalization where a comparison depends on exact text.

### Outputs

**What did this action produce?**

A connector may return several identifiers and display values that look similar.

Use the field the downstream action actually requires.

A classic example is SharePoint:

- a readable reference such as REQ-1432 helps people;
- the SharePoint item ID 1432 is the record identity an Update item action may require.

If the wrong one is mapped, Create item can succeed and the later Update item can fail.

## 4. Green actions can still be wrong

A green action only means the configured step completed.

Examples:

- a file was created, but it contains the wrong content;
- an email was sent, but to the wrong person;
- an approval completed, but the result was not stored;
- an Excel action returned some rows, but not all rows;
- a SharePoint update succeeded, but it updated the wrong record.

Always test the business result outside the run diagram.

## Read conditions, branches, and loops

If data is correct but the wrong path executed, inspect:

- the condition expression;
- the exact value used in the comparison;
- which branch Power Automate took;
- whether an Apply to each loop processed the expected collection;
- how many items were in the collection;
- whether the action should run once or once per item.

If an action is unexpectedly inside a loop, ask which earlier action produced a collection.

The loop itself may not be the root problem.

## Distinguish connection from permission

A connection answers:

**Can Power Automate authenticate as this identity?**

Permission answers:

**May that identity do the required operation on this resource?**

A connection can still exist while access to a mailbox, SharePoint site, list, library, file, Team, or other resource has changed.

When a previously working flow breaks, check what changed:

- password or authentication policy;
- account disabled or owner left;
- expired or invalid token;
- revoked administration consent;
- disabled or deleted account;
- conditional access or data-loss-prevention policy;
- SharePoint or Teams permission;
- moved or renamed resource.

## Use status codes as clues, not diagnoses

HTTP-style status information can help narrow the problem.

Authentication, authorization, resource-not-found, and server/service failures are different categories.

Do not memorize one code as the diagnosis.

Read the actual error message and the action's inputs and outputs.

## Test one change at a time

Once you have evidence for the likely cause:

1. change one value, mapping, expression, permission, or configuration;
2. run controlled test data;
3. inspect the exact business result;
4. run the negative or rerun case that originally failed.

Changing five unrelated actions can make the incident disappear without teaching you what actually fixed it.

## A 60-second troubleshooting sequence

When time is short:

1. Will the flow save? If not, check required fields, expressions, and references.
2. Does a run exist? If not, check trigger, connection, schedule, time zone, and enabled state.
3. Did an action fail? Open the run and inspect the first failed action.
4. Did the run succeed but the result is wrong? Inspect dynamic content, conditions, collections, branches, and data.
5. If it worked for months and stopped, look for changes to permissions, connections, owners, resources, policies, or source data.

## Preserve a worked failure

For important flows, document at least one real failure pattern.

A useful record includes:

- symptom;
- first failed action;
- wrong input or output;
- correct source field;
- one corrective change;
- representative retest;
- rerun result.

That turns troubleshooting knowledge into something another owner can use.

The most reliable rule is simple:

**Before changing anything, ask what evidence tells you this is the part that is wrong.**
