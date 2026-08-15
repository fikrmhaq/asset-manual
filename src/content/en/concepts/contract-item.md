---
title: Contract item
description: One purchased line on a contract — and the doorway onto the asset registry.
order: 140
keywords: [contract item, line item, purchased, quantity, ordered, partial delivery, tambah aset]
related:
  - concepts/contract
  - how-do-i/add-contract-items
  - how-do-i/register-an-asset-from-a-contract
---

A **contract item** is one purchased line on a [contract](/concepts/contract):
what was bought, how many, and at what price.

It is also the doorway onto the registry. Registering a line creates the
[asset](/concepts/asset) and its [units](/concepts/asset-unit) in one step, with
the link back to the contract already made.

## What a line item holds

| Field | Required | Notes |
|---|---|---|
| Item name | Yes | What was bought. Up to 150 characters |
| Specification | No | The detail that distinguishes it |
| Quantity | No | A whole number greater than zero |
| Unit of measure | No | What the quantity counts — piece, box, set |
| Unit price | No | A number, not negative |

The total for the line is calculated from quantity and unit price.

## Ordered is not received

The **quantity** on a line item is what was *ordered*. It is a fact about the
paperwork, and the application never changes it.

What actually arrived is recorded separately, as asset units. When you register a
line, the number of units is pre-filled from the quantity ordered — and you can
reduce it.

> [!IMPORTANT]
> Registering fewer units than were ordered is normal. Partial delivery is
> expected, not an error. Register what arrived; register the rest against the
> same line item when it turns up.

This is why the line item's panel shows both numbers: the quantity ordered, and
the units actually on the registry against it. The gap between them is your
outstanding delivery.

## What a line item does not carry

A [classification](/concepts/classification). The contract paperwork does not
have one, so the application does not invent one — it asks you for it at the
moment you register the line as an asset. That is the one thing you must supply
that the line cannot.

## Editing and deleting

Line items can be edited and deleted while you are getting the contract right.
Deleting a line does not remove assets already registered from it.

## Related articles

- [Contract](/concepts/contract)
- [How do I add contract items?](/how-do-i/add-contract-items)
- [How do I register an asset from a contract?](/how-do-i/register-an-asset-from-a-contract)
