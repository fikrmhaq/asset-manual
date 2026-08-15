---
title: How do I change a unit's lifecycle state?
description: Bring an item into service, put it in storage, send it for repair, or write it off.
order: 130
task: true
permissions:
  - asset-unit:record-history
keywords: [lifecycle, in use, storage, maintenance, dispose, write off, retire, activate unit]
related:
  - how-do-i/record-a-change-to-a-unit
  - concepts/lifecycle-state
---

## What this does

Changes where a unit sits in its working life — from registered to in use, into
storage, away for maintenance, or out of service entirely. See
[Lifecycle state](/concepts/lifecycle-state) for what each value means.

It is recorded through the same
[Record a change](/how-do-i/record-a-change-to-a-unit) form as location and
condition.

## Steps

1. Open the asset, then the **Units** tab, then the unit.
2. Open the **History** tab and select **Record a change**.
3. Set **Lifecycle state** to the new state.
4. Set **Condition** and **Location** too if they changed.
5. Write a **Description** explaining the change.
6. Select **Record**.

## Bringing a new unit into service

This is the most common case. A unit created a moment ago is
`state:REGISTERED` with nothing else recorded. Its first entry must set:

- **Lifecycle state** → *In use*
- **Condition** → usually `state:GOOD`
- **Location** → where the item physically is

All three in one entry, plus the description.

## Only some changes are allowed

The application enforces a fixed path, and refuses anything else with a message
naming the states you *can* reach from where the unit is now.

| From | You can go to |
|---|---|
| `state:REGISTERED` | In use |
| `state:lifecycle/ACTIVE` | In storage, On loan, Under maintenance, Disposed, Deactivated |
| `state:IN_STORAGE` | In use, Disposed, Deactivated |
| `state:BORROWED` | In use |
| `state:UNDER_MAINTENANCE` | In use, Disposed |
| `state:DISPOSED` | nothing — permanent |
| `state:DEACTIVATED` | nothing — permanent |

> [!CAUTION]
> `state:DISPOSED` and `state:DEACTIVATED` cannot be undone. A unit in either has
> reached the end of its record and will never change state again. If something
> written off genuinely returns to service, register it as a new unit.

## Two states you should not set by hand

- `state:BORROWED` is set by [activating a borrowing](/how-do-i/create-a-borrowing)
  and cleared by [recording its return](/how-do-i/return-a-borrowing). Setting it
  manually would leave a unit marked as on loan with no loan record behind it.
- `state:REGISTERED` is the state a unit is created in and cannot be returned to.

## Related articles

- [Lifecycle state](/concepts/lifecycle-state)
- [How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit)
