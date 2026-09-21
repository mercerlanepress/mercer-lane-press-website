---
title: "Save Outlook Attachments to SharePoint Without Creating a Mess"
description: "A practical Power Automate pattern for saving Outlook email attachments to SharePoint, filtering unwanted files, handling duplicate names, and testing the result."
published: 2026-09-21
summary: "Start with one controlled mailbox and one test library. Prove that the correct attachment content reaches SharePoint before adding filename rules, routing, and notifications."
order: 2
related:
  - what-is-worth-automating
  - forms-to-sharepoint-request-tracker
  - diagnose-failed-power-automate-flow
---

Saving email attachments automatically sounds simple:

**email arrives → attachment → SharePoint file**

The difficult part is not adding the actions. It is deciding exactly which messages and attachments count, what should happen when a filename already exists, and how the flow behaves on the second run.

## Start with a controlled test

Use:

- a controlled Outlook mailbox or folder;
- a test SharePoint document library or folder;
- a simple test message with one obvious attachment.

Keep the first version deliberately small.

The purpose of the first build is to prove that the attachment content can be retrieved and written to SharePoint correctly.

## The basic flow

A common structure is:

1. Trigger when a new email arrives.
2. Check whether the message has attachments.
3. Work through the attachment collection.
4. Create the file in SharePoint using the attachment name and content.
5. Open the created file and confirm that it is the expected document.

The attachment collection matters because one message may contain more than one attachment.

That is why Power Automate may create an **Apply to each** loop even when your test email contains only one file.

## Test the actual file content

Do not stop at a green run.

Open the file that SharePoint created.

A successful test means:

- the expected attachment exists;
- it opens;
- it contains the expected content;
- no unintended file was created.

If the flow creates a file with the right name but the file is empty or corrupt, inspect the trigger and action outputs to confirm that the action received usable attachment content rather than only attachment metadata.

## Filter attachments before you store them

Real mailboxes contain things you may not want to save:

- inline signature images;
- logos;
- repeated small graphics;
- unsupported file types;
- attachments that belong to a different business process.

Define the rule in plain language first.

Examples:

- save PDF attachments only;
- save files whose names begin with an agreed project prefix;
- save attachments from a controlled folder or sender;
- ignore known inline-image patterns.

Then implement the simplest condition that represents the real rule.

Avoid adding a large expression before you are certain what the business condition is.

## Decide what duplicate filenames mean

A destination may already contain a file with the same name.

That can happen because:

- the same email is processed again;
- two people send a file with a generic name;
- the flow is rerun after a partial failure;
- different business items happen to use the same filename.

Do not accidentally invent the duplicate rule while building.

Decide whether the process should:

- reject the duplicate for review;
- add a stable business reference to the filename;
- route to a separate location;
- deliberately overwrite an existing file where that is the agreed rule.

Adding a timestamp to every filename makes names unique, but it can also hide duplicate processing instead of solving it.

A stable request or business reference is usually more useful where one exists.

## Route after the core path works

Once the basic save action is proven, you can add routing.

A stronger routing design uses a controlled value such as:

- request type;
- project code;
- category;
- department;
- another maintained routing key.

For a small number of routes, a condition or switch may be enough.

For many routes, keep the mapping in a maintained SharePoint list rather than burying dozens of destinations inside nested conditions.

Always have a visible route for unknown values.

## Confirm receipt only after storage succeeds

A confirmation message should represent the business state.

If the process promises that a document has been received and recorded, send the confirmation **after** the required storage or tracking step succeeds.

Otherwise the flow can tell somebody that their file has been received even though the required business action failed.

For multiple attachments, also decide whether the rule is:

- one confirmation for the message;
- one confirmation for each file;
- no confirmation unless every required file succeeds.

## A representative test set

Before live use, test at least:

- one wanted attachment;
- several wanted attachments;
- one wanted and one unwanted attachment;
- a message with no qualifying attachment;
- a duplicate filename;
- a rerun of a previously processed message where that can occur.

Inspect both the run history and the SharePoint result.

## Common failure points

### The flow never fires

Check the trigger folder, mailbox, connection, and trigger conditions.

### The file name is correct but content is wrong

Inspect the action input. Confirm that the Create file action receives the actual attachment content.

### Unwanted signature images are stored

Improve the filtering rule before the Create file action.

### Files go to the wrong folder

Inspect the routing value before the branch or lookup.

### A rerun creates another business record

The file naming rule is not the same thing as a duplicate-processing rule. Use stable process state or a destination check where the business consequence matters.

## Maintenance

When the flow is relied on by other people, record:

- the source mailbox or folder;
- the destination library;
- the routing rules;
- the duplicate rule;
- the connection identity;
- the owner;
- how failures are noticed.

The attachment action is only one part of a reliable document-handling process.

For the same record-identity principles in a request process, read [Forms to SharePoint request tracking](/power-automate/forms-to-sharepoint-request-tracker/).
