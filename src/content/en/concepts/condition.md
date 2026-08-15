---
title: Condition
description: The physical state of an individual item, and how to use the five values consistently.
order: 100
keywords: [condition, kondisi, good, fair, poor, damaged, unserviceable, state, broken]
related:
  - concepts/lifecycle-state
  - concepts/history
  - how-do-i/change-a-unit-condition
---

**Condition** records the physical state of an [asset
unit](/concepts/asset-unit) — how worn or damaged the object actually is. It is
independent of [lifecycle state](/concepts/lifecycle-state), which records
whether the item is in service.

A damaged laptop can still be in use. A pristine one can sit in storage. The two
fields answer different questions.

## The five values

| Value | Suggested meaning |
|---|---|
| `state:GOOD` | Works as intended. Normal wear at most |
| `state:FAIR` | Works, with visible wear or minor faults that do not stop use |
| `state:POOR` | Works badly, or needs attention soon |
| `state:DAMAGED` | Broken in a specific way. Repair is plausible |
| `state:UNSERVICEABLE` | Beyond economic repair. Cannot be used |

> [!NOTE]
> The application does not define these five beyond their names, and it does not
> enforce any relationship between them and anything else. The meanings above are
> a reasonable convention — agree one with your colleagues and apply it
> consistently, because the **By condition** report is only as useful as the
> agreement behind it.

## Condition can move in any direction

Unlike lifecycle state, there is no fixed path. A unit can go from `state:POOR`
back to `state:GOOD` after a repair, and nothing prevents it. That is correct:
repairs happen.

## "Not recorded" is a real answer

A newly created unit has **no condition at all**, and reports count those
separately as *Not recorded*. It is not the same as `state:GOOD`, and it should
not be left that way — a unit with no condition has been registered but never
brought into service.

The first history entry on a unit must set a condition and a location; after
that, either may be left alone and carries forward unchanged.

## Recording a condition

Through **Record a change** on the unit's History tab. Because condition,
location and lifecycle state are recorded together, re-assessing a unit while
moving it is one action, not two. See
[How do I change a unit's condition?](/how-do-i/change-a-unit-condition).

Every assessment is kept on the unit's [history](/concepts/history), so you can
see how something deteriorated and when.

## Where condition shows up

- On the unit, as its current condition
- On the asset's **Units** tab, per unit
- As a filter on the asset list — which lists the stored values (`GOOD`, `FAIR`,
  …) rather than the friendlier labels
- On the Dashboard, as the **Units by condition** breakdown
- In the **By condition** report

## Related articles

- [Lifecycle state](/concepts/lifecycle-state)
- [History](/concepts/history)
- [Statuses reference](/reference/statuses)
