---
title: "Power Automate: Save Outlook Attachments to SharePoint"
description: "Use Power Automate to save Outlook email attachments to SharePoint with controlled filenames, duplicate handling and a simple audit trail."
published: 2026-09-21
summary: "Start with one controlled mailbox and one test library. Prove that the correct attachment content reaches SharePoint before adding filename rules, routing, and notifications."
order: 2
related:
  - what-is-worth-automating
  - forms-to-sharepoint-request-tracker
  - diagnose-failed-power-automate-flow
---

## How to save Outlook attachments to SharePoint automatically

**Use an Outlook email trigger, loop through the attachments you want to keep, retrieve each attachment's content, then pass its name and content to SharePoint's Create file action.** Test with one harmless document before adding routing or confirmations.

This guide saves the attached files. Saving the whole email is a different task: Outlook's **Export email (V2)** action exports an EML message. Decide which record you need before building the flow.

## Start with a controlled test

Use a test Outlook folder, an existing SharePoint document library and a message with one obvious attachment. Confirm that your connection can read the mailbox and write to the destination.

For a shared mailbox, select the matching shared-mailbox trigger and check the connection's access. Do not assume that a flow built for your personal inbox will read a shared mailbox unchanged.

## Map the trigger, attachment and SharePoint fields

One approach uses **When a new email arrives (V3)** with **Include Attachments** set to **No**, followed by **Get Attachment (V2)** inside the attachment loop. Microsoft recommends this pattern when downloading attachments in the trigger causes timeouts.

| Flow step | What to select or pass |
| --- | --- |
| Outlook trigger | The folder you are monitoring; for a shared mailbox, use the corresponding shared-mailbox trigger. |
| Apply to each | The email's attachment collection. Put the qualifying-file condition inside this loop. |
| Get Attachment (V2) | The email's Message Id and the current attachment's Attachment Id. Supply the original mailbox address when retrieving from a shared mailbox. |
| SharePoint Create file | Your Site Address and Folder Path in an existing library; the attachment's name as File Name and its retrieved content as File Content. |

Check the current [Office 365 Outlook connector reference](https://learn.microsoft.com/en-us/connectors/office365connector/) and [SharePoint connector reference](https://learn.microsoft.com/en-us/connectors/sharepointonline/) for field names and limitations. The designer may label dynamic values differently; choose them by their source and meaning.

Do not put an attachment ID, filename or metadata object into **File Content**. If you already retrieve content through a different supported pattern, inspect the output before adding a redundant download action.

## Worked example: keep the PDF, skip the signature

Suppose a fictional test message contains `JOB-104-quote.pdf` and `signature.png`. The agreed rule is to keep PDF quotes with a `JOB-` prefix in a test Quotes folder.

1. Send the harmless test message to the monitored folder.
2. In the attachment loop, check each attachment against the agreed filename and file-type rule.
3. Retrieve and create the qualifying PDF; skip the signature image.
4. Open the resulting PDF in SharePoint and compare it with the source.
5. Repeat with two qualifying PDFs and check that both are saved.

The expected result for the first message is **one usable PDF and no signature image**. A filename rule selects candidates; it does not validate the contents of an untrusted file.

Next, send another message with the same PDF name. Use the duplicate rule below to decide the result before enabling the flow for normal mail.

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

Check the trigger folder, mailbox, connection, and trigger conditions. Then use the [failed-flow run-history guide](/power-automate/diagnose-failed-power-automate-flow/) to distinguish a missing trigger run from an action failure.

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

## Continue with the process you need

If files belong to tracked requests, use [Forms to SharePoint request tracking](/power-automate/forms-to-sharepoint-request-tracker/) to connect storage with record identity and status. If the save action fails, start with [diagnosing a failed Power Automate flow](/power-automate/diagnose-failed-power-automate-flow/) before changing several settings.

For the wider sequence of building, testing, troubleshooting and handing over office flows, [explore Automate the Office](/books/automate-the-office/).

Connector references checked on 20 October 2026. Recheck them for the version and environment you use.
