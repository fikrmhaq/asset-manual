---
title: Borrowing
description: A loan of one or more units to someone, tracked from draft to return.
order: 150
keywords: [borrowing, peminjaman, loan, lend, borrow, return, overdue, due date]
related:
  - borrowing/borrowing-statuses
  - how-do-i/create-a-borrowing
  - how-do-i/return-a-borrowing
---

A **borrowing** is a record of one or more [asset units](/concepts/asset-unit)
being lent to someone, with a date they are due back.

## A borrowing is one event

This is the key idea. A borrowing covering five units is **one record**, not
five. It is created, activated and returned as a whole.

Individual units on a borrowing have no status of their own — the borrowing's
status covers all of them. You cannot return three of five units; returning the
borrowing returns everything on it.

> [!NOTE]
> If you genuinely need to hand items back separately, create separate borrowings
> for them.

## What a borrowing records

| Field | Required | Notes |
|---|---|---|
| Borrower | Yes | Who has the items |
| Borrower contact | Yes | How to reach them while the items are out |
| Borrow date | Yes | When the loan starts |
| Expected return | Yes | Must be on or after the borrow date |
| Responsible person | No | The staff member accountable for the loan |
| Institution | No | Defaults to yours |
| Description | No | Free text |

Both borrower fields are required: a name with no way to reach the person does
not identify who holds the item.

## The five statuses

`state:borrowing/DRAFT` → `state:borrowing/ACTIVE` → `state:borrowing/RETURNED`,
with `state:borrowing/OVERDUE` and `state:borrowing/CANCELLED` as the other
outcomes. What each one allows is set out in
[Borrowing statuses](/borrowing/borrowing-statuses).

The short version: a borrowing starts as a draft, you add units to it, you
activate it, and later you record the return.

## What activation does to the units

Activating a borrowing moves every unit on it to `state:BORROWED`. Recording the
return moves them back to `state:lifecycle/ACTIVE`.

You never set those states by hand. The borrowing does it, and both sides are
written together — a unit is never left marked as on loan by a borrowing that
failed to start.

A unit must be in use (`state:lifecycle/ACTIVE`) to be borrowed. A unit still
`state:REGISTERED`, in storage, or under maintenance cannot go out until it is
brought into use first.

## One unit, one loan

A unit already out on another **active or overdue** borrowing cannot be added to
a second one. Two *drafts* may name the same unit — nothing is committed until
activation, and whichever activates first takes it.

## What a borrowing is not

It is not a booking or reservation system. There is no calendar, no future
availability check, and nothing prevents you creating drafts that conflict. The
first one activated wins.

## Related articles

- [Borrowing statuses](/borrowing/borrowing-statuses)
- [How do I create a borrowing?](/how-do-i/create-a-borrowing)
- [Lifecycle state](/concepts/lifecycle-state)
