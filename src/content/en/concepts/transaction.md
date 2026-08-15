---
title: Transaction
description: A permanent record of something that happened to one or more units.
order: 160
keywords: [transaction, transaksi, event, record, historical, read-only, permanent, type]
related:
  - transactions/recording-transactions
  - how-do-i/record-a-transaction
  - concepts/asset-unit
---

A **transaction** records that something happened to one or more
[asset units](/concepts/asset-unit) on a particular date. What kind of something
is up to you: your organization defines its own list of transaction types.

## Transactions are permanent

This is the defining property.

> [!IMPORTANT]
> Once saved, a transaction **cannot be edited or deleted**. There is no edit
> button anywhere in the application, and there is no way to add one. Check the
> details before saving.

That is deliberate. A transaction is a historical assertion — "on 3 March these
five units were handed over" — and a record you can quietly revise afterwards is
worth nothing as evidence.

If you record one wrongly, the remedy is to record a corrective transaction that
explains the correction, and leave the original standing.

## What a transaction records

| Field | Required | Notes |
|---|---|---|
| Transaction date | Yes | When it happened |
| Type | Yes | From your own list of transaction types |
| Affected units | Yes | At least one, up to 500 |
| Description | No | Free text |
| Supplier | No | See below |
| Contract | No | See below |
| Institution | No | Defaults to yours |

Each affected unit can carry its own note.

## Supplier and contract

Both fields are always offered, whatever type you choose.

> [!NOTE]
> Fill them in when the transaction genuinely relates to a procurement — a
> delivery, a handover from a supplier. Leave them empty otherwise. The
> application does not know which of your transaction types are
> procurement-related, so it cannot hide the fields for the ones that are not,
> and it does not guess. The form carries a hint saying they are for
> procurement-originated transactions.

## Units can be in any state

Unlike a [borrowing](/concepts/borrowing), a transaction places no requirement on
a unit's lifecycle state. A transaction records something that *happened* to a
unit, and things happen to units in storage, under maintenance and already
disposed of.

The same unit cannot appear twice on one transaction.

## Where transactions show up

- The **Transactions** list, filterable by type, institution, contract and date
- Each unit's **Transactions** tab, showing everything recorded against it

> [!NOTE]
> A transaction's detail page shows each affected unit's lifecycle state **as it
> is now**, not as it was when the transaction was recorded. The page says so.
> For the state at a point in time, use the unit's [history](/concepts/history).

## Transactions are not the audit log

A transaction is a business event you record deliberately. The
[audit log](/concepts/audit-log) is written automatically and records changes to
records rather than events in the world.

## Related articles

- [Recording transactions](/transactions/recording-transactions)
- [How do I record a transaction?](/how-do-i/record-a-transaction)
- [Audit log](/concepts/audit-log)
