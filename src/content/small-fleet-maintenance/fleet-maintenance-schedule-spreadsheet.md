---
title: "Fleet Maintenance Schedule Spreadsheet: What to Track for Each Vehicle"
description: "Structure a small-fleet maintenance spreadsheet around vehicle records, source-backed rules, date and mileage triggers, data freshness, and visible due-status logic."
published: 2026-10-06
summary: "Build the spreadsheet as connected tables, then make missing data, dual triggers, due-soon windows, and formula logic visible and testable."
order: 2
related: ["small-fleet-maintenance-system", "fleet-defect-repair-workflow", "small-fleet-maintenance-30-day-plan"]
---
A fleet maintenance spreadsheet is useful only if its statuses can be trusted. The goal is not to create the largest workbook. It is to make the next required action visible without hiding missing data or moving the due point every time mileage changes.

## Start with separate record types

For a small fleet, a strong workbook can use separate tables for:

- **VEHICLES** - one row per vehicle;
- **MILEAGE** - one row per accepted reading;
- **MAINTENANCE RULES** - one row per vehicle and maintenance requirement;
- **DEFECTS / ACTIONS** - one row per reported issue or controlled action;
- **SERVICE HISTORY** - one row per completed service or repair event;
- **DOWNTIME** - one row per downtime event;
- **SETTINGS** - controlled lists, warning windows, and internal definitions;
- **AUDIT / EXCEPTIONS** - data-integrity failures and action queues;
- **DASHBOARD** - calculated views, not manually retyped summaries.

Avoid one worksheet per vehicle if you want to filter or compare the fleet as a whole.

## Build the vehicle register first

The vehicle register is the key that other tables use. Useful fields include:

- Unit ID;
- active / spare / out-of-service / disposal status;
- year, make, model, VIN, and registration;
- powertrain or fuel type where relevant;
- current odometer and its reading date;
- current assignment or base if useful;
- maintenance-source reference and source status;
- document-folder reference.

A current mileage value without the reading date is incomplete. The system needs to know whether the input is fresh enough to support a maintenance decision.

## Keep maintenance rules in long form

A vehicle can have several recurring rules. Put each requirement on its own row rather than spreading dozens of service items across one vehicle row.

A maintenance-rule record can include:

- Rule ID and Unit ID;
- maintenance item;
- source type and reference;
- source status;
- trigger type: mileage, time, hours, event, condition, or combination;
- interval or trigger value copied from the adopted source;
- last supported completion baseline;
- next mileage and/or date due;
- internal due-soon warning window;
- owner;
- current status.

If the source uses both mileage **and** time, keep both triggers. Do not convert a dual-trigger rule into the one that is easiest to calculate.

## Calculate next due from the baseline, not today's mileage

For a mileage interval, the planning logic is conceptually:

**Next mileage due = last supported completion mileage + source interval**

For a time interval:

**Next date due = last supported completion date + source interval**

Do not calculate the next due mileage as current mileage plus interval. That creates a moving target that advances whenever the odometer is updated.

The current mileage is used to measure how close the vehicle is to the fixed next-due point.

## Make the status hierarchy explicit

A practical order is:

1. **DATA ISSUE** - a required source, baseline, or current input is missing or untrustworthy.
2. **OVERDUE** - a verified trigger has been reached or passed without recorded completion.
3. **DUE SOON** - the item is inside the fleet's administrative warning window.
4. **BOOKED** - an appointment or action exists, while the underlying due state remains visible.
5. **CURRENT** - the verified rule is outside the warning window and required inputs are current.

The due-soon window is a management setting that gives time to act. It does not change the maintenance requirement itself.

## Treat stale mileage as an exception

Mileage-based scheduling fails when the latest reading is too old for the vehicle's rate of use.

Store the reading date and calculate data age. Set an internal freshness standard appropriate to the vehicle's usage and the sensitivity of its maintenance triggers. When the data is stale, show **DATA ISSUE** or another explicit exception rather than estimating a reassuring current mileage.

Estimates can help plan workshop capacity. They should not replace the actual reading used to decide whether a verified trigger has been reached.

## Use helper columns instead of one giant formula

Keep important logic inspectable. Helper columns can show:

- Current Mileage;
- Reading Date;
- Next Mileage Due;
- Miles Remaining;
- Next Date Due;
- Days Remaining;
- Data Age;
- Mileage Status;
- Date Status;
- Overall Status.

This makes dual-trigger rules easier to audit and helps explain why the overall row is urgent.

## Test the edge cases before relying on the workbook

At minimum, test:

- exactly on the due mileage and due date;
- one unit before and after the trigger;
- mileage overdue while date is current, and vice versa;
- missing mileage or reading date;
- stale mileage;
- an inactive vehicle;
- a rule that is not verified;
- completed work entered early or late;
- adding rows without breaking formulas;
- abnormal or corrected odometer readings.

Protect calculated cells while leaving genuine inputs usable, and keep filtering and sorting available where staff need them.

For the wider workflow, read [how to build the small fleet maintenance system](/small-fleet-maintenance/small-fleet-maintenance-system/) and [how to control defects and repairs](/small-fleet-maintenance/fleet-defect-repair-workflow/).

> **Scope:** The spreadsheet should record maintenance requirements from the source adopted for each vehicle. It should not invent generic service intervals or make mechanical or regulatory judgments.
