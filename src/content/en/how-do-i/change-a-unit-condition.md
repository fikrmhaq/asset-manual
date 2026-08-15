---
title: How do I change a unit's condition?
description: Record that an item is now in better or worse shape than before.
order: 120
task: true
permissions:
  - asset-unit:record-history
keywords: [condition, damaged, broken, repaired, worn, assess, kondisi, rusak]
related:
  - how-do-i/record-a-change-to-a-unit
  - concepts/condition
---

## What this does

Records a new assessment of a physical item's [condition](/concepts/condition).
Every assessment is kept, so the unit's history shows how something deteriorated —
or recovered — and when.

Like moving, this is a
[change recorded on the unit](/how-do-i/record-a-change-to-a-unit): set the
condition and leave the other fields alone.

## Steps

1. Open the asset, then the **Units** tab, then the unit.
2. Open the **History** tab and select **Record a change**.
3. Set **Condition** to the new assessment.
4. Leave **Location** empty and **Lifecycle state** on *Unchanged*, unless those
   changed too.
5. Write a **Description** — what you found, and why the assessment changed.
6. Select **Record**.

## The five values

`state:GOOD`, `state:FAIR`, `state:POOR`, `state:DAMAGED`,
`state:UNSERVICEABLE`. There is no fixed meaning enforced by the application, so
consistency comes from your organization agreeing what each one means — see
[Condition](/concepts/condition) for a workable convention.

Condition can move in **any** direction. A repaired item goes from
`state:DAMAGED` back to `state:GOOD`, and nothing prevents it.

## Condition is not lifecycle state

An item can be damaged and still in use, or in perfect condition and sitting in
storage. If the item has also stopped being usable, change the
[lifecycle state](/concepts/lifecycle-state) in the same entry:

| What happened | Condition | Lifecycle state |
|---|---|---|
| Dropped, still works | `state:DAMAGED` | unchanged |
| Sent for repair | `state:DAMAGED` | `state:UNDER_MAINTENANCE` |
| Came back repaired | `state:GOOD` | `state:lifecycle/ACTIVE` |
| Beyond repair, written off | `state:UNSERVICEABLE` | `state:DISPOSED` |

> [!IMPORTANT]
> `state:DISPOSED` is permanent. A unit that has been disposed of cannot change
> state again. Set it only when the item really has gone.

## Related articles

- [How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit)
- [Condition](/concepts/condition)
- [How do I change a unit's lifecycle state?](/how-do-i/change-a-unit-lifecycle-state)
