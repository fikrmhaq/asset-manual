---
title: How do I record a change to an asset unit?
description: The one form that records a unit's condition, location and lifecycle state together.
order: 100
task: true
permissions:
  - asset-unit:record-history
keywords:
  - record a change
  - update unit
  - state change
  - condition
  - location
  - lifecycle
  - history entry
related:
  - concepts/history
  - how-do-i/move-an-asset-unit
  - how-do-i/view-unit-history
---

## What this does

Records what is now true of one physical item: where it is, what condition it is
in, and what lifecycle state it holds. The three are recorded **together**, as a
single entry on the unit's [history](/concepts/history).

There is no separate "move" action and no separate "change condition" action.
This one form is all of them, which matches how things actually happen — a unit
goes to the workshop, so it is now in the workshop, under maintenance, and
damaged. One event, one entry.

This is also how a newly created unit enters service.

## Before you begin

- Know which unit. Units are reached through their asset.
- If you are recording a move, the [location](/concepts/location) must already
  exist.
- **Write down what you are going to say in the description.** It is required —
  see the warning below.

For a unit that has never had anything recorded, you need **both** a condition
and a location. After that, either may be left alone.

## Steps

1. Open **Assets** and select the asset.
2. Open the **Units** tab and select the unit.
3. Open the **History** tab.
4. Select **Record a change**.
5. Fill in only what has changed:
   - **Condition** — leave on *Unchanged* to keep the current one.
   - **Location** — search by name, or open a location to see what is inside it.
     Leave empty to keep the unit where it is.
   - **Lifecycle state** — leave on *Unchanged* unless the unit's working status
     has changed.
6. Write a **Description** of the change.
7. Select **Record**.

![The Record a state change dialog](/screenshots/asset-units/record-a-change.png)

## Field reference

| Field | Required | Description |
|---|---|---|
| Condition | On the first entry only | The physical state of the item. Carries forward when left unchanged |
| Location | On the first entry only | Where the item now is. Carries forward when left empty |
| Lifecycle state | No | Only transitions the application allows are accepted |
| Description | **Yes** | What changed and why. Up to 5,000 characters |

> [!WARNING]
> **Description is required.** The form does not mark it as required, and its
> hint — "Anything left blank carries forward from the current state" — applies
> to the other three fields, not to this one. Leave it empty and the save is
> refused.
>
> This is worth doing properly rather than working around: the description is
> what the timeline shows afterwards. "Moved to Room 204 after refurbishment"
> tells a colleague in six months what "updated" never will.

## What happens next?

- The unit's **current** location, condition and lifecycle state update
  immediately, and show on its Overview tab.
- A new entry appears at the top of the History tab. The previous entry is closed
  off with an end date, so the timeline records not just where the unit is but
  how long it was somewhere else.
- If the new location, or any location above it, has a
  [floor plan](/concepts/floor-plan), the Overview tab now offers a trail of plan
  links showing the way in.

## If the save is refused

| Message | What it means |
|---|---|
| A description is required | Fill in **Description** |
| A condition is required for the first history entry | This unit has none yet — set one |
| A location is required for the first history entry | This unit has none yet — set one |
| An asset unit cannot move from X to Y | The lifecycle change is not allowed. The message lists what is. See [Lifecycle state](/concepts/lifecycle-state) |

## Related articles

- [History](/concepts/history)
- [How do I move an asset unit?](/how-do-i/move-an-asset-unit)
- [How do I view unit history?](/how-do-i/view-unit-history)
