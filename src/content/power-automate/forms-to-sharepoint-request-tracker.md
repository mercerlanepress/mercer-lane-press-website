---
title: "Build a Forms-to-SharePoint Request Tracker That Can Be Recovered"
description: "A practical Microsoft Forms and SharePoint Power Automate pattern for creating tracked requests, readable references, uploaded-file handling, confirmations, and safe reruns."
published: 2026-09-21
summary: "Create the SharePoint item first, use its real item ID as the record identity, derive a readable reference from that stable ID, and update the exact item rather than searching for it again."
order: 3
related:
  - what-is-worth-automating
  - save-outlook-attachments-to-sharepoint
  - diagnose-failed-power-automate-flow
---

Microsoft Forms can collect a request. SharePoint can hold durable process state. Power Automate connects the two.

A reliable design keeps those roles separate.

The Form is the intake surface.

The SharePoint item is the operational record.

## Design the SharePoint list before mapping the Form

Create the tracker fields before building the flow.

A practical request list might include:

- Title;
- RequesterEmail;
- RequestType;
- Details;
- DueDate;
- Status;
- Owner;
- Reference;
- FormsResponseID.

Use the correct SharePoint data type for each field.

Do not push every answer into one long text field if the process later needs to filter, report, route, or update those values separately.

## The basic sequence

A strong pattern is:

1. **When a new response is submitted**
2. **Get response details**
3. **Create item in SharePoint**
4. **Capture the returned SharePoint item ID**
5. **Build a readable reference**
6. **Update that same item**
7. **Handle uploaded files if the Form includes them**
8. **Send confirmation after the required process state is reached**

The key design choice is to let the created SharePoint item become the identity anchor.

## Use the real SharePoint item ID

Suppose SharePoint creates item ID **1432**.

You might create a readable business reference such as **REQ-1432**.

Those two values serve different purposes.

- **1432** is the actual SharePoint record ID required by actions such as Update item.
- **REQ-1432** is a human-friendly reference that can appear in emails, folders, reports, and conversations.

Do not put the readable reference into an action field that expects the actual SharePoint item ID.

That mistake can make the initial Create item action succeed while Update item fails later.

## Why create first and update second?

A common temptation is to calculate the next request number before the SharePoint item exists.

That creates avoidable problems when two submissions arrive close together.

Creating the item first means SharePoint gives the process a unique record identity.

You can then derive the readable reference from that returned ID.

For ordinary internal references, this is simpler and safer than attempting to maintain your own next-number counter.

It is not a substitute for a legally controlled or formally gap-free numbering system where those requirements exist.

## Keep source response identity where it matters

Store the Microsoft Forms Response ID when duplicate investigation may be useful.

That gives you a connection back to the intake event.

If the process can be submitted more than once legitimately, the response ID is not necessarily the same thing as the business identity. Decide which identifier answers which question.

## Handle file uploads as a separate concern

When a Form includes file-upload questions, the answer is not simply a file that Create file can always use directly.

The flow may need to:

- retrieve the response details;
- work through the uploaded-file answer;
- parse the returned file metadata;
- retrieve the actual file content from the relevant OneDrive for Business or SharePoint location;
- create the operational copy in the intended library or request folder.

Do not assume the metadata object itself is the file content.

Test with a real uploaded file and open the copied result.

## Build the destination folder after the reference exists

If each request has its own folder, build the folder name from a stable reference.

Then:

1. create the SharePoint tracker item;
2. generate the readable reference;
3. create or locate the folder;
4. copy uploaded files into it;
5. record the folder link in the tracker if useful.

Decide what should happen if the folder already exists because the flow is rerun.

## Send confirmation from authoritative process state

A confirmation message should be based on the tracker, not merely on the Form submission.

That means the email can include:

- the readable request reference;
- current status;
- the exact details the process accepted;
- a link to the record where appropriate.

Send it after the required tracker state exists.

If storage or request creation fails, do not send a success message that implies the process completed.

## Test failure and rerun behaviour

A useful test set includes:

- a normal submission;
- missing optional data;
- a submission with one uploaded file;
- a submission with several files;
- a duplicate or repeat submission where relevant;
- a controlled failure after the SharePoint item is created but before downstream work finishes;
- a rerun after that partial failure.

The partial-failure test matters.

If the tracker item already exists, a rerun should not blindly create a second request unless that is explicitly the intended business rule.

## Common mistakes

### Updating by readable reference instead of item ID

Use the real SharePoint item ID for connector fields that require the record identity.

### Searching for the item again when you already have its ID

Carry the returned ID through the flow.

### Treating the Form as the durable process state

The Form collected the input. The tracker should hold operational status, owner, reference, approval state, and other process facts.

### Sending the confirmation too early

The message should reflect a state the system has actually reached.

## Handover information

Document:

- Form identity;
- SharePoint site, list, and columns;
- starting status;
- reference rule;
- file-upload handling;
- confirmation rule;
- connection identities;
- duplicate/rerun rule;
- owner and review date.

For a related pattern where Excel is the source, see [processing Excel rows without duplicates](/power-automate/process-excel-rows-without-duplicates/).
