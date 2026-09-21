---
title: "Process Excel Rows in Power Automate Without Duplicating the Work"
description: "A practical pattern for processing Excel table rows in Power Automate with stable row keys, source state, destination checks, pagination awareness, and safe reruns."
published: 2026-09-21
summary: "Use a real Excel table, a stable row identity, explicit source process state, and a destination uniqueness check. Mark the source complete only after the required business action succeeds."
order: 4
related:
  - forms-to-sharepoint-request-tracker
  - overdue-reminders-power-automate
  - diagnose-failed-power-automate-flow
---

Excel is often where office processes begin.

It is also where duplicate processing becomes easy to create if a flow treats row position, visible filters, or a simple Yes/No flag as the whole control system.

A safer design separates four questions:

1. Which rows are eligible?
2. What uniquely identifies each row?
3. Has the business action already happened?
4. When is it safe to mark the source complete?

## Start with a real Excel table

Power Automate's Excel actions work with table data, not an arbitrary visible range.

Before building:

- format the source range as a table;
- give the table a meaningful name;
- keep the workbook in a supported OneDrive for Business or SharePoint location;
- use stable column names;
- decide which column is the unique business key.

A visible filter in Excel is not the same thing as a filter applied by the flow.

The automation needs its own retrieval rule.

## Use a stable row identity

Do not rely on row position.

Rows can be sorted, inserted, moved, or deleted.

Use a stable identifier such as:

- RequestID;
- ExternalID;
- another controlled unique key.

The key should not change because a descriptive field changes.

## Retrieve only eligible rows where practical

Suppose the table includes a Processed column.

You may retrieve rows where Processed is not Yes.

That reduces unnecessary work, but it is only the first layer of duplicate control.

Why?

Because a prior run might have created the downstream business record successfully and then failed before Excel was updated.

The next run would see Processed = No and try the business action again.

## Add a destination check

Before creating the downstream result, check whether that stable key already exists in the destination.

For example, if each Excel RequestID should produce one SharePoint item:

1. retrieve eligible Excel rows;
2. for the current RequestID, query SharePoint for a matching ExternalID;
3. if no destination exists, create it;
4. if one destination exists, reuse it and continue any unfinished downstream work;
5. if more than one exists, stop and flag a duplicate-data problem;
6. only after all required work succeeds, update Excel to Processed = Yes.

This makes a partial failure recoverable.

## Why a Processed flag alone is insufficient

Consider this sequence:

1. Flow reads row REQ-1001.
2. SharePoint item is created.
3. Excel Update a row fails.
4. The flow ends as Failed.
5. Source still says Processed = No.

On the next run, a design that trusts only the source flag creates another SharePoint item.

A safer design checks the destination first, finds the existing ExternalID, and continues from the remaining work.

## Mark completion last

The source completion flag should mean:

**all required business actions for this row have succeeded**

Do not set Processed = Yes before the final required action.

If there are several downstream steps, define exactly what complete means before building.

You may also record a ProcessedDate or another useful audit field after completion.

## Understand row count and pagination

Do not assume that a successful List rows action proves every row was returned.

The Excel Online (Business) connector may apply default limits that require pagination or another retrieval design for larger tables.

For a test workbook, write down the expected row count.

Then verify the action actually returned that count before trusting downstream processing.

Connector limits can change, so confirm current behaviour in the Microsoft documentation and your own environment.

## Be careful with concurrency

Parallel row processing can improve speed when iterations are truly independent.

It can also create problems when several iterations:

- update the same workbook;
- increment a shared counter;
- depend on a common destination state;
- can create the same downstream record.

Correctness comes before throughput.

## Representative tests

Before live use, test:

- four known eligible rows and confirm exactly four are returned;
- a row with missing required data;
- more rows than the connector's default page size to prove pagination where volume requires it;
- a row whose destination record already exists;
- a controlled failure after destination creation but before source completion;
- rerun after that partial failure;
- a duplicate destination case where more than one match exists.

The rerun should complete without duplicating the business action.

## Common mistakes

### Relying on the workbook's visible filter

Use the flow's actual retrieval/filter rule.

### Treating row position as identity

Use a stable key.

### Marking the source complete too early

Write source completion only after the business result is complete.

### Updating the wrong row

Use the same stable key for the update action.

### Ignoring multiple destination matches

A supposedly unique key returning several records is a data problem. Do not choose one arbitrarily.

## Maintenance

Record:

- workbook and table name;
- key column;
- eligibility rule;
- destination uniqueness rule;
- completion fields;
- expected volume;
- pagination settings where relevant;
- connection owner;
- what happens on rerun.

Once Excel drives a business process, workbook structure becomes operational infrastructure.

For a scheduled flow built on similar state rules, see [overdue reminders in Power Automate](/power-automate/overdue-reminders-power-automate/).
