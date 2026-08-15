---
title: Statuses reference
description: Every status value in the application, what it means, and what you can do in it.
order: 10
keywords: [status, state, values, enum, reference, lifecycle, condition, borrowing, meaning]
related:
  - concepts/lifecycle-state
  - concepts/condition
  - borrowing/borrowing-statuses
---

Every status value the application shows, in one place. Each is listed with both
its label and the stored value you will meet in reports, exports, audit entries
and error messages.

## Asset unit lifecycle state

Where a physical item is in its working life. See
[Lifecycle state](/concepts/lifecycle-state).

| Status | You can | You cannot | Next |
|---|---|---|---|
| `state:REGISTERED` | Record its first condition and location | Borrow it; it has no location or condition yet | In use |
| `state:lifecycle/ACTIVE` | Borrow it, move it, store it, send it for repair, dispose of it | — | In storage, On loan, Under maintenance, Disposed, Deactivated |
| `state:IN_STORAGE` | Bring it back into use, or dispose of it | Borrow it directly — bring it into use first | In use, Disposed, Deactivated |
| `state:BORROWED` | Record the loan's return | Change it by hand; add it to another loan | In use, when the loan is returned |
| `state:UNDER_MAINTENANCE` | Return it to use, or dispose of it | Borrow it | In use, Disposed |
| `state:DISPOSED` | Read it | Change it — permanent | — |
| `state:DEACTIVATED` | Read it | Change it — permanent | — |

## Condition

The physical state of an item. Any value can follow any other — a repair moves a
unit back up. See [Condition](/concepts/condition).

| Condition | Suggested meaning |
|---|---|
| `state:GOOD` | Works as intended, normal wear at most |
| `state:FAIR` | Works, with visible wear or minor faults |
| `state:POOR` | Works badly, or needs attention soon |
| `state:DAMAGED` | Broken in a specific way; repair plausible |
| `state:UNSERVICEABLE` | Beyond economic repair |

A unit may also have **no condition recorded**, which reports count separately.
It is not the same as `state:GOOD`.

## Borrowing status

The state of a loan. See [Borrowing statuses](/borrowing/borrowing-statuses).

| Status | You can | You cannot | Next |
|---|---|---|---|
| `state:borrowing/DRAFT` | Edit everything, add and remove units, activate, cancel | Activate with no units on it | Active, Cancelled |
| `state:borrowing/ACTIVE` | Record the return, extend | Edit the header or change which units it covers | Returned, Overdue |
| `state:borrowing/OVERDUE` | Record the return, extend | Edit anything | Returned |
| `state:borrowing/RETURNED` | Read it | Reopen it — permanent | — |
| `state:borrowing/CANCELLED` | Read it | Reopen it — permanent | — |

`state:borrowing/OVERDUE` is set by the application overnight, never by hand.

## Record status

Whether a record is in current use. Applies to institutions, departments, users,
assets, units, locations, attribute definitions, suppliers, contracts and
vendors. See [Active and inactive](/concepts/active-and-inactive).

| Status | Meaning |
|---|---|
| Active | In current use, and offered for new work |
| Inactive | Withdrawn. History and existing references kept; not offered for new work |

## Attribute types and scopes

See [Attributes](/concepts/attributes).

| Type | Accepts |
|---|---|
| Text | Free text |
| Number | A number, optionally with a measurement unit |
| Yes or no | A checkbox |
| Date | A date |
| Selection | Free text in practice — no option list is stored |
| Reference | A pointer to another record |

| Scope | Describes |
|---|---|
| Asset | The kind of thing. One value shared by every unit |
| Asset unit | One physical item. A value per unit |

## Audit actions

See [Audit log](/concepts/audit-log).

| Action | Meaning |
|---|---|
| Created | A record was added |
| Updated | Field values changed |
| Deleted | A record was removed |
| Status changed | A record was activated, deactivated, or moved between states |

## Related articles

- [Lifecycle state](/concepts/lifecycle-state)
- [Borrowing statuses](/borrowing/borrowing-statuses)
- [Glossary](/reference/glossary)
