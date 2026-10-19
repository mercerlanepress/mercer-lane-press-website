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

## Power Automate flow failed: where to start

**Open the affected flow's run history, select the relevant run, and inspect the first action that failed or received the wrong data.** Record its error and actual inputs before editing. If no run exists, investigate the trigger; if the run is successful but the result is wrong, investigate the data and logic.

| What happened? | Start here |
| --- | --- |
| The flow will not save | Read designer validation messages and check required fields and expressions. |
| No run appears | Check the environment, flow status, source event and trigger conditions. |
| A run contains a failed action | Open that action's inputs, outputs and error details. |
| The run succeeds but the result is wrong | Compare the actual values and branch or loop taken with the intended result. |

Microsoft's [cloud-flow troubleshooting guide](https://learn.microsoft.com/en-us/power-automate/troubleshoot-flow-errors) uses these distinct failure paths. They require different checks, so a generic restart or reconnection is not a diagnosis.

## How to inspect the failed run

1. Open the correct environment and the flow's details page.
2. In run history, select the run matching the incident's time and source event.
3. Expand the earliest relevant failed action. If the failure is inside a scope or loop, inspect the steps within it.
4. Note the error code and message, then compare the actual inputs with the preceding action's outputs.
5. Check whether earlier actions already created a file, sent a message or changed a record before you test again. A rerun needs a plan for work already completed.

Inputs and outputs may contain business information. Redact sensitive values before sharing screenshots or asking for outside help.


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

## Worked example: the wrong SharePoint ID

In this fictional example, **Create item** succeeds and returns item ID `1432`. A later **Update item** fails because its ID input contains the human-readable reference `REQ-1432`.

Inspect the Update item input and compare it with Create item's output. Map the numeric item ID from the appropriate preceding action, then test against a controlled record. Verify that the intended item changed. Before rerunning the original event, check whether Create item already created a record so you do not create a duplicate.

The distinction is the record's identity versus its display reference. Changing the connection or granting wider access would not correct that mapping.

## Error codes: the next question to ask

| Error clue | Check before changing the flow |
| --- | --- |
| `InvalidTemplate` or an expression error | Which expression or reference is invalid, and what value or type did it receive? |
| `401` | Is the action's connection able to authenticate? |
| `403` | Does that identity have permission for the operation, and is a policy blocking it? |
| `404` | Is the resource or identifier correct and still available? |
| `429` | Is the service throttling requests, and what retry guidance applies to that connector? |

Use the actual response alongside Microsoft's [cloud-flow error reference](https://learn.microsoft.com/en-us/power-automate/error-reference). Do not grant broader permissions or suppress a failure simply to make the run appear successful.

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


## Continue with the workflow you are repairing

For attachment and file problems, see [saving Outlook attachments to SharePoint](/power-automate/save-outlook-attachments-to-sharepoint/). For repeated rows or records, see [processing Excel rows without duplicates](/power-automate/process-excel-rows-without-duplicates/). [Automate the Office](/books/automate-the-office/) brings the individual workflows together with testing, handover and maintenance guidance.

Microsoft references checked on 19 October 2026. Interface labels and connector behaviour can change.
