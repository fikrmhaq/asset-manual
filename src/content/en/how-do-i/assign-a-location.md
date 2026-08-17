---
title: How do I assign a location?
description: Record where a physical unit is, and bring it into service.
order: 30
task: true
permissions:
  - asset-unit:record-history
keywords: [location, move, room, place, where, relocate, transfer]
related:
  - concepts/asset-vs-asset-unit
  - troubleshooting/why-cant-i-save-this-form
---

## What is this?

A unit's location, condition and lifecycle state are recorded together, as one
entry on its history timeline. Moving a unit and re-assessing its condition are
the same action, because they are the same fact about the same moment.

This is also how a brand-new unit enters service.

## Before you begin

- The location must already exist. If it does not, create it first under
  **Locations**.
- For a unit that has never had anything recorded, you need **both** a condition
  and a location.
- Have a short sentence ready describing why the unit is moving. It is required —
  see the warning below.

## Steps

1. Open **Assets**, select the asset, then open the **Units** tab.
2. Select the unit.
3. Open the **History** tab.
4. Select **Record a change**.
5. Choose the **Location**. Search for it by name, or open a location to see what
   is inside it.
6. Choose a **Condition** if it has changed.
7. Choose a **Lifecycle state** if it has changed — for a unit entering service
   for the first time, set it to *In use*.
8. Write a **Description** of the change.
9. Select **Record**.

![The Record a state change dialog](/screenshots/asset-units/record-a-change.gif)

## Field reference

| Field | Required | Notes |
|---|---|---|
| Condition | On the first entry | Otherwise carries forward unchanged. |
| Location | On the first entry | Otherwise carries forward unchanged. |
| Lifecycle state | No | Only transitions the application allows are accepted. |
| Description | **Yes** | See the warning below. |

> [!WARNING]
> **Description is required**, even though the form does not mark it as such and
> its hint says blank fields carry forward. That applies to the other three
> fields, not to this one — the save is refused without a description. Write a
> real sentence: it is what the timeline shows afterwards.

## What happens next?

- The unit's **current location** and **current condition** update immediately.
- A new entry appears at the top of the History tab, and the previous entry is
  closed off with an end date, so the timeline says where the unit was and for
  how long.
- If the location or any location above it has a floor plan, the unit's Overview
  tab now offers a trail of plan links showing the way in.

## Related tasks

- [How do I add an asset unit?](/how-do-i/add-an-asset-unit)
- [Why can't I save this form?](/troubleshooting/why-cant-i-save-this-form)
