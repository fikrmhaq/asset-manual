---
title: Working with transactions
description: What transactions are for, choosing types, and viewing what has been recorded.
order: 10
keywords: [transaction, transaksi, type, history, read-only, list, filter, view]
related:
  - concepts/transaction
  - how-do-i/record-a-transaction
---

A [transaction](/concepts/transaction) is a permanent record that something
happened to one or more units on a particular date. This page covers using them
day to day.

## Deciding what deserves a transaction

The application does not prescribe this. Your organization defines its own
transaction types, so what gets recorded is entirely your decision.

Useful things to record are events that are **true of specific items**, happened
**at a point in time**, and that someone might need to prove later:

- A delivery being received and signed for
- A handover between departments
- A write-off or disposal being formally approved
- Equipment being sent for external servicing

Things that do **not** need a transaction:

- A unit moving room — that is a
  [history entry](/how-do-i/move-an-asset-unit)
- A unit being lent — that is a [borrowing](/concepts/borrowing)
- A change of condition — that is a history entry too

> [!TIP]
> If you find yourself recording a transaction for every move, you are probably
> duplicating what unit history already records more precisely. Transactions are
> for events with paperwork behind them.

## Transaction types

Types are yours to define, under **Lookups → Transaction types**. Keep the list
short: a type nobody can distinguish from another type will be used
inconsistently, and the transaction list filter is only as useful as the
distinctions in it.

Each type has a code and a name. See
[Reference lookups](/administration/reference-lookups).

## Finding transactions

The **Transactions** list filters by:

| Filter | |
|---|---|
| Type | Which kind of event |
| Institution | Which institution recorded it |
| Contract | Transactions naming a particular contract |
| Date range | A start date, an end date, or both |

## Reading a transaction

The detail page shows the header — date, type, supplier, contract, description —
and the units it was recorded against.

> [!NOTE]
> The affected-units list shows each unit's **current** lifecycle state, not the
> state it was in when the transaction was recorded. The page says so. For what
> was true at the time, open the unit and read its
> [history](/concepts/history).

## Per-unit history

Every unit's **Transactions** tab lists everything recorded against it, which is
usually the more useful direction of travel: not "what did this transaction
cover?" but "what has happened to this item?".

## Read-only, permanently

There is no edit action and no delete action, for any transaction, for any user.
See [Transaction](/concepts/transaction) for why, and what to do about a mistake.

## Related articles

- [Transaction](/concepts/transaction)
- [How do I record a transaction?](/how-do-i/record-a-transaction)
