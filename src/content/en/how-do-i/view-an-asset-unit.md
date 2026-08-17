---
title: How do I view an asset unit?
description: Open one physical item and read its five tabs.
order: 90
task: true
permissions:
  - asset-unit:read
keywords: [view unit, open unit, unit details, individual item, inspect]
related:
  - how-do-i/view-an-asset
  - concepts/asset-unit
  - how-do-i/view-unit-history
---

## Steps

1. Open **Assets** and select the asset the item belongs to.
2. Open the **Units** tab.
3. Select the unit.

Units are always reached through their asset — there is no list of all units.
Use the description, location and condition columns to tell siblings apart.

## What the five tabs show

### Overview

The current state of this physical item: lifecycle state, condition, current
location, responsible department, description, and the **procurement item** it
came from — named, with a link to its contract, rather than shown as a reference
code. A unit that is not traced to a line item says so.

The location is shown as a **full trail** — site, building, floor, room — not
just the room name, so you can see where it sits. Beneath it, if any location in
that chain has a [floor plan](/concepts/floor-plan), you get a row of plan links
leading inward.

> [!NOTE]
> The **Edit** action on this tab changes the **Description** and, when the asset
> has a contract, the **Procurement item**. Condition, location and lifecycle
> state are historical facts and are changed through the History tab. The dialog
> says so.
>
> Only line items of the asset's own contract are offered — a unit cannot claim
> to have arrived on a contract its asset was not bought under.
>
> Department is displayed here but cannot currently be set from this screen.

### Attribute values

The extra fields configured for this classification at **unit** scope — serial
number, asset tag, and anything else that differs between identical items. If
none are configured, the tab says so.

### History

The timeline: condition, location and lifecycle state over time, newest first,
each with its dates and the description written at the time. This is also where
**Record a change** lives. See
[How do I view unit history?](/how-do-i/view-unit-history).

### Borrowings

Every loan this unit has been on, with borrower, dates and status. Only shown if
you can view borrowings.

### Transactions

Every transaction recorded against this unit, with date, type and description.
Only shown if you can view transactions.

## Related articles

- [Asset Unit](/concepts/asset-unit)
- [How do I view unit history?](/how-do-i/view-unit-history)
- [How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit)
