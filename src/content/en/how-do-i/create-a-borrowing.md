---
title: How do I create a borrowing?
description: Lend one or more units to someone and start the loan.
order: 240
task: true
permissions:
  - borrowing:create
  - borrowing-item:create
  - borrowing:activate
keywords: [borrow, lend, loan, pinjam, checkout, issue, take out]
related:
  - concepts/borrowing
  - borrowing/borrowing-statuses
  - how-do-i/return-a-borrowing
---

## What this does

Records that one or more [asset units](/concepts/asset-unit) have gone out on
loan, and moves those units to `state:BORROWED` for the duration.

It is a three-part job: create the record, add the units, then activate it.

## Before you begin

- Know **who** is borrowing and **how to reach them**. Both are required.
- Know **which units**, and find them through their assets.
- Every unit must currently be **in use** (`state:lifecycle/ACTIVE`). A unit
  still `state:REGISTERED`, in storage, or under maintenance cannot go out until
  it is brought into use first.
- No unit may already be out on another active or overdue loan.

## Steps

### 1. Create the record

1. Open **Operations › Borrowings**.
2. Select **New borrowing**.
3. Fill in the fields below.
4. Select **Create**.

The borrowing is created as a `state:borrowing/DRAFT`. Nothing has been lent yet.

### 2. Add the units

1. On the borrowing's page, use **Add a unit to this borrowing**.
2. Choose the unit by finding its asset first, then the unit.
3. Repeat for each item going out.

### 3. Activate it

1. Select **Activate**.
2. Confirm.

## Field reference

| Field | Required | Description |
|---|---|---|
| Borrower | Yes | Who is taking the items. Up to 255 characters |
| Borrower contact | Yes | How to reach them while the items are out |
| Borrow date | Yes | When the loan starts |
| Expected return | Yes | Must be on or after the borrow date |
| Responsible person | No | The staff member accountable for the loan |
| Institution | No | Defaults to yours |
| Description | No | Free text — purpose, conditions, anything worth recording |

Both borrower fields are required because a name with no way to reach the person
does not identify who holds the item.

## What happens next?

On activation:

- The borrowing becomes `state:borrowing/ACTIVE`.
- **Every unit on it moves to `state:BORROWED`.**
- The header and the list of units become **fixed** — neither can be changed
  afterwards.

> [!IMPORTANT]
> Add every unit **before** activating. Once active, the composition of the loan
> cannot be changed. If you missed one, create a second borrowing for it.

Later, [record the return](/how-do-i/return-a-borrowing) or
[extend the loan](/how-do-i/extend-a-borrowing). A draft you no longer need can
be [cancelled](/how-do-i/cancel-a-borrowing).

## If activation is refused

| Message | What it means |
|---|---|
| A borrowing must include at least one asset unit | Add units first |
| That asset unit is already out on another borrowing | Another active or overdue loan holds it |
| An asset unit cannot move from X to BORROWED | A unit is not in use. Bring it into use first |

## Related articles

- [Borrowing statuses](/borrowing/borrowing-statuses)
- [How do I return a borrowing?](/how-do-i/return-a-borrowing)
