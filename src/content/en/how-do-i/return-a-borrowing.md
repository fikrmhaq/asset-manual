---
title: How do I return a borrowing?
description: Record that borrowed items have come back.
order: 250
task: true
permissions:
  - borrowing:return
keywords: [return, kembali, give back, check in, close loan, returned]
related:
  - concepts/borrowing
  - borrowing/borrowing-statuses
  - how-do-i/extend-a-borrowing
---

## What this does

Closes a loan and puts its units back into service. Every unit still out moves
from `state:BORROWED` back to `state:lifecycle/ACTIVE`.

## Before you begin

- The borrowing must be `state:borrowing/ACTIVE` or `state:borrowing/OVERDUE`.
  Both can be returned; being overdue changes nothing about how you do it.
- Know the date the items actually came back, if it was not today.

> [!IMPORTANT]
> A borrowing is returned **as a whole**. You cannot return three of five units —
> recording the return brings back everything on the loan. If items genuinely
> come back separately, they needed separate borrowings.

## Steps

1. Open **Operations › Borrowings**.
2. Find the loan. The **Overdue** filter narrows the list to those past due.
3. Select it.
4. Select **Record return**.
5. Set the **Actual return date**. It defaults to today.
6. Add a **Note** if anything is worth recording — damage, a missing accessory, a
   late excuse.
7. Select **Record return**.

## Field reference

| Field | Required | Description |
|---|---|---|
| Actual return date | Yes | Defaults to today. Must be on or after the borrow date |
| Note | No | Free text |

## What happens next?

- The borrowing becomes `state:borrowing/RETURNED` and is closed permanently.
- Every unit still marked as on loan moves back to `state:lifecycle/ACTIVE`.
- The record keeps its **original dates** — borrow date, expected return, and the
  actual return you just recorded — and they are never altered afterwards.

> [!CAUTION]
> This cannot be undone. A returned borrowing cannot be reopened.

## If something came back damaged

The return note records *that* it happened. To record it against the item itself,
[change the unit's condition](/how-do-i/change-a-unit-condition) afterwards —
the borrowing records the loan, the unit records its own state.

## Related articles

- [Borrowing statuses](/borrowing/borrowing-statuses)
- [How do I extend a borrowing?](/how-do-i/extend-a-borrowing)
