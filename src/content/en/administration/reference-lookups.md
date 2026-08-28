---
title: Reference lookups
description: The small configurable lists behind contracts, transactions and attributes.
order: 10
keywords:
  - lookup
  - reference data
  - measurement unit
  - contract type
  - funding source
  - transaction type
  - account code
  - master data
related:
  - how-do-i/manage-reference-data
  - concepts/category
  - administration/inventory-code-format
---

**Lookups** is one screen with six tabs, holding the short lists the rest of the
application chooses from. Five you maintain; one you cannot.

Find it under **Organization › Lookups**.

## The six lists

| Tab | Used by | Editable |
|---|---|---|
| **Categories** | Grouping above classifications | No — maintained outside the application |
| **Measurement units** | Number attributes that measure something | Yes |
| **Contract types** | Contracts | Yes |
| **Funding sources** | Contracts | Yes |
| **Transaction types** | Transactions | Yes |
| **Account codes** | Contracts | Yes |

## What an entry holds

Measurement units, contract types and transaction types need only a **name**.

Account codes also have a **code** — up to 12 characters, and **permanent** once
created, because it is the entry's identity rather than a label on it. Choose it
carefully; the name can be corrected later, the code cannot.

Funding sources have a **code** too, but a different kind of one — see below.

## Funding source codes

A funding source carries a short business abbreviation of up to eight characters,
alongside its name. `Dana Bos` is called `BOS`.

It exists because the code can end up **inside an inventory code**, where a
hundred-character display name cannot go. See
[Inventory code format](/administration/inventory-code-format).

> [!IMPORTANT]
> **The code is not derived from the name, and the application will not guess
> it.** Shortening `Dana Bos` mechanically gives `DANA_BOS`, which is not what
> anyone calls it — and once a code has been used inside an inventory code it is
> permanent. So the application asks rather than inventing.

Funding sources created before this field existed have **no code**. They are
flagged **No code yet** in the list, because a funding source without one cannot
be used by an inventory code format that includes it: registering a unit against
a contract with that funding source is **refused** until the code is set.

To set one: find the row, select **Edit**, enter the abbreviation your
institution actually uses, and save.

## Correcting an entry

Select **Edit** on any row of the five editable lists. Names can be corrected on
all of them, and the funding source code can be set or changed here too.

An account code's own **code** is the exception — it is the entry's identity, so
the edit form offers only the name.

## Why keep these lists short

Every one of these appears as a dropdown somewhere. A list of forty transaction
types is a list nobody reads to the end, and the result is inconsistent
recording — two people choosing different types for the same event.

> [!TIP]
> Before adding an entry, check whether an existing one covers the case. It is
> much easier to add a type later than to reconcile two overlapping ones after a
> year of use.

## Creating entries without leaving the form

Three of these can be created from where they are needed, so a missing entry does
not interrupt what you were doing:

- **Supplier**, **contract type** and **funding source** from the contract form
- **Measurement unit** from the attribute definition form

Each asks only for the minimum, and the entry can be completed later on its own
screen.

## Deleting entries

These lists are genuinely deleted, not deactivated — but the deletion is
**refused while any record still references the entry**. If it is refused, some
contract or transaction is still using it; find and change those first, or leave
the entry in place.

## A note on long lists

> [!LIMITATION]
> Selection lists throughout the application load at most 100 entries. That is
> comfortably more than these lists should ever hold, but it is worth knowing if
> one of them grows unusually large — an entry beyond the hundredth may not be
> offered. It is another reason to keep the lists tight.

## Categories

The Categories tab is read-only and says so. Categories are reference data
maintained outside this application. See [Category](/concepts/category).

## Related articles

- [How do I manage reference data?](/how-do-i/manage-reference-data)
- [Category](/concepts/category)
