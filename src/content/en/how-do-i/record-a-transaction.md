---
title: How do I record a transaction?
description: Record a permanent event affecting one or more units.
order: 280
task: true
permissions:
  - transaction:create
keywords: [transaction, transaksi, record event, handover, permanent, log event]
related:
  - concepts/transaction
  - transactions/recording-transactions
---

## What this does

Records that something happened to one or more
[asset units](/concepts/asset-unit) on a given date, under a transaction type
your organization has defined.

> [!CAUTION]
> A transaction **cannot be edited or deleted once saved**. There is no edit
> button anywhere. Check everything before you save.

## Before you begin

- The **transaction type** must exist. Types are maintained under
  **Lookups → Transaction types**; see
  [Reference lookups](/administration/reference-lookups).
- Know **which units** are affected. They are found through their assets.
- Decide whether supplier and contract apply — see below.

## Steps

1. Open **Operations › Transactions**.
2. Select **New transaction**.
3. Set the **Transaction date**.
4. Choose the **Type**.
5. Under **Affected units**, select **Add units to this transaction** and choose
   each unit by finding its asset first. Add a note against any individual unit
   if useful.
6. Fill in **Supplier** and **Contract** only if this is a procurement-related
   event.
7. Add a **Description**.
8. Check everything, then save.

## Field reference

| Field | Required | Description |
|---|---|---|
| Transaction date | Yes | When the event happened |
| Type | Yes | From your organization's list of transaction types |
| Affected units | Yes | At least one, at most 500. No unit twice |
| Description | No | Free text, up to 5,000 characters |
| Supplier | No | Only for procurement-originated transactions |
| Contract | No | Only for procurement-originated transactions |
| Institution | No | Defaults to yours |

## About supplier and contract

Both fields are shown for **every** transaction type, with a hint saying they are
for procurement-originated transactions.

> [!NOTE]
> The application does not know which of your transaction types are
> procurement-related — nothing on a type marks it as such — so it cannot hide
> the fields for the ones that are not, and it does not guess. Fill them in for a
> delivery or a handover from a supplier; leave them empty otherwise.

## Units can be in any state

Unlike a [borrowing](/concepts/borrowing), a transaction places no requirement on
a unit's lifecycle state. Something can happen to a unit that is in storage,
under maintenance or already disposed of, and recording it is legitimate.

## What happens next?

- The transaction is saved and becomes **read-only immediately**.
- It appears on the Transactions list, and on the **Transactions** tab of every
  unit named on it.

If you record one wrongly, the remedy is a corrective transaction that explains
the correction. The original stands.

## Related articles

- [Transaction](/concepts/transaction)
- [Recording transactions](/transactions/recording-transactions)
