---
title: How do I manage reference data?
description: Add and remove the entries in the six lookup lists.
order: 340
task: true
permissions:
  - transaction-type:create
keywords: [reference data, lookup, add type, measurement unit, funding source, account code]
related:
  - administration/reference-lookups
  - how-do-i/create-a-contract
---

## What this does

Adds, edits and removes entries in the short lists the application chooses from —
measurement units, contract types, funding sources, transaction types and account
codes. See [Reference lookups](/administration/reference-lookups) for what each
one feeds.

Each list has its own permission, following the pattern
`perm:contract-type:create`, `perm:funding-source:delete` and so on.

## Steps

1. Open **Organization › Lookups**.
2. Select the tab for the list you want.
3. Select **New**, and enter the details.
4. Save.

## What each entry needs

| List | Fields |
|---|---|
| Measurement units | Name |
| Contract types | Name |
| Funding sources | Name |
| Transaction types | Code (permanent, up to 12 characters), Name |
| Account codes | Code (permanent, up to 12 characters), Name |

> [!IMPORTANT]
> Where an entry has a **code**, that code is permanent. The name can be
> corrected afterwards; the code cannot.

## Creating one mid-task

If you are recording a contract and the contract type you need does not exist,
you do not have to abandon the form. **Create contract type** sits beside the
field, and the same applies to funding sources and suppliers. Measurement units
can be created from the attribute definition form.

## Deleting an entry

1. Find the entry in its tab.
2. Select **Delete** and confirm.

The deletion is **refused if any record still references the entry**. That is
protection, not an obstacle: it means a contract or transaction still points at
it. Change those records first, or leave the entry alone.

## Categories cannot be edited

The Categories tab is read-only. Categories are maintained outside this
application and the tab says so.

## Related articles

- [Reference lookups](/administration/reference-lookups)
- [How do I create a contract?](/how-do-i/create-a-contract)
