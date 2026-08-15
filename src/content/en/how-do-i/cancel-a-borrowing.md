---
title: How do I cancel a borrowing?
description: Abandon a draft loan that is not going ahead.
order: 270
task: true
permissions:
  - borrowing:cancel
keywords: [cancel, batal, abandon, discard, delete borrowing, not going ahead]
related:
  - borrowing/borrowing-statuses
  - how-do-i/create-a-borrowing
---

## What this does

Closes a `state:borrowing/DRAFT` borrowing that is not going ahead — the borrower
changed their mind, or the record was created by mistake.

## Only drafts can be cancelled

Cancelling is available on drafts and nothing else. Once a borrowing has been
activated the items are physically out, and the way to close it is to
[record the return](/how-do-i/return-a-borrowing).

## Steps

1. Open **Operations › Borrowings** and select the draft.
2. Select **Cancel**.
3. Confirm.

## What happens next?

- The borrowing becomes `state:borrowing/CANCELLED` and is closed permanently.
- **No unit changes state.** A draft never held its units, so there is nothing to
  release. The confirmation dialog says this explicitly.
- The record remains visible in the list and in reports, showing that a loan was
  planned and did not happen.

> [!CAUTION]
> A cancelled draft cannot be reopened. If the loan happens after all, create a
> new borrowing.

## Cancel or just leave it?

A draft left alone holds nothing and blocks nothing — the units remain available,
and another borrowing can take them. Cancelling is about keeping the list
readable, not about releasing anything.

Cancel drafts you know are dead, so the list shows only loans that might actually
happen.

## Related articles

- [Borrowing statuses](/borrowing/borrowing-statuses)
- [How do I create a borrowing?](/how-do-i/create-a-borrowing)
