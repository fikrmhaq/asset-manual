---
title: How do I extend a borrowing?
description: Let a borrower keep the items longer, and understand what the application actually does.
order: 260
task: true
permissions:
  - borrowing:extend
keywords: [extend, renew, longer, prolong, perpanjang, new due date, extension]
related:
  - borrowing/borrowing-statuses
  - how-do-i/return-a-borrowing
---

## What this does

Continues a loan past its expected return date.

It does **not** simply change the date. Extending closes the current borrowing as
returned, and opens a **new draft** covering the same units with the new date.

## Why it works that way

Because the first loan really did run to its original date, and a record that
quietly moved the date would erase that. Keeping two records preserves what
actually happened: the item was due back on the 10th, was not returned, and the
loan was continued to the 24th.

The dialog says as much when you open it.

## Steps

1. Open the borrowing. It must be `state:borrowing/ACTIVE` or
   `state:borrowing/OVERDUE`.
2. Select **Extend**.
3. Set the **New expected return** — when the continued loan is due back.
4. Set the **Closing date for this record** — the date the original loan is
   recorded as ending.
5. Confirm.

## Field reference

| Field | Required | Description |
|---|---|---|
| New expected return | Yes | When the continued loan is due |
| Closing date for this record | Yes | The date the original borrowing closes on |

## What happens next?

Two records exist:

| Record | Status | |
|---|---|---|
| The original | `state:borrowing/RETURNED` | Closed on the date you gave, with its original borrow and expected-return dates intact |
| A new one | `state:borrowing/DRAFT` | Covering the same units, with the new expected return |

> [!IMPORTANT]
> The new borrowing is a **draft**. It is not running until you activate it —
> open it and select **Activate**, exactly as when
> [creating a borrowing](/how-do-i/create-a-borrowing). Until then the units are
> not recorded as being out on it.

## The limitation to be aware of

> [!LIMITATION]
> Nothing links the new borrowing back to the one it continued. Both records
> exist and both are correct, but you cannot click from one to the other, and
> nothing on either says "this is an extension".
>
> If the connection matters — and for a loan extended several times it usually
> does — write it into the new record's **Description**: "Extension of the loan
> to J. Santoso originally due 10 March." That is the only thing that will carry
> the link for a future reader.

## Related articles

- [Borrowing statuses](/borrowing/borrowing-statuses)
- [How do I create a borrowing?](/how-do-i/create-a-borrowing)
