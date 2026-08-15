---
title: How do I add contract items?
description: Record what was actually purchased under a contract, line by line.
order: 230
task: true
permissions:
  - contract-item:create
keywords: [contract item, line item, purchased, quantity, price, add line, barang]
related:
  - concepts/contract-item
  - how-do-i/register-an-asset-from-a-contract
  - how-do-i/create-a-contract
---

## What this does

Records one purchased line of a [contract](/concepts/contract) — what it was, how
many, and at what price.

Line items are what you later turn into assets, so how you split them decides how
your registry is shaped. One line per *kind* of thing is usually right: "20
laptops" is one line, not twenty.

## Before you begin

The contract must exist. See
[How do I create a contract?](/how-do-i/create-a-contract).

## Steps

1. Open **Procurement › Contracts** and select the contract.
2. In the **Line items** panel, select **Add line item**.
3. Enter the **Item name**.
4. Fill in **Specification**, **Quantity**, **Unit of measure** and **Unit
   price** as they appear on the paperwork.
5. Select **Add item**.

Repeat for each line on the contract.

## Field reference

| Field | Required | Description |
|---|---|---|
| Item name | Yes | What was bought. Up to 150 characters |
| Specification | No | The detail that distinguishes it — model, size, grade |
| Quantity | No | How many were ordered. A whole number greater than zero |
| Unit of measure | No | What the quantity counts — piece, box, set |
| Unit price | No | A number, not negative |

The line total is calculated from quantity and unit price.

## Quantity is what was ordered

The quantity on a line item is a fact about the paperwork and never changes. What
actually arrived is recorded separately, as
[asset units](/concepts/asset-unit), when you register the line.

That is why the line's panel shows both numbers — ordered, and registered — and
the gap between them is your outstanding delivery.

## What happens next?

Each line item gets an **Add asset** action, which registers it onto the registry
as an asset with its units. See
[How do I register an asset from a contract?](/how-do-i/register-an-asset-from-a-contract).

Until then the line records a purchase that has not yet produced anything
trackable.

## Editing and deleting

Line items can be edited and deleted while you get the contract right. Deleting a
line does **not** remove assets already registered from it — those stay on the
registry with their procurement link intact.

## Related articles

- [Contract item](/concepts/contract-item)
- [How do I register an asset from a contract?](/how-do-i/register-an-asset-from-a-contract)
