---
title: How do I create a supplier?
description: Add a party you execute procurement contracts with.
order: 210
task: true
permissions:
  - supplier:create
keywords: [supplier, penyedia, vendor company, seller, procurement, add supplier]
related:
  - concepts/vendor-vs-supplier
  - how-do-i/create-a-contract
---

## What this does

Adds a **supplier** — the party a procurement [contract](/concepts/contract) is
executed with.

> [!IMPORTANT]
> A supplier is not a [vendor](/concepts/vendor-vs-supplier). The supplier is who
> you bought from; the vendor is who manufactured it. You buy Dell laptops (the
> vendor) from a local IT company (the supplier).

## Steps

1. Open **Procurement › Suppliers** in the sidebar.
2. Select **New supplier**.
3. Enter the **Name**.
4. Add **Contact information** and **Address** if you have them.
5. Select **Create**.

## Field reference

| Field | Required | Description |
|---|---|---|
| Name | Yes | Up to 255 characters |
| Contact information | No | Free text — phone, email, contact person |
| Address | No | Free text |

## Creating one without leaving the contract form

If you are part-way through recording a contract and the supplier does not exist
yet, the contract form has a **Create supplier** action beside the supplier
field. It asks only for a name; the rest can be filled in later on the supplier's
own page.

## What happens next?

The supplier can be chosen on contracts. Its own page lists the contracts
executed with it, which answers "what have we bought from this company?".

## Deactivating

Suppliers are deactivated rather than deleted. Contracts already naming one keep
it; the supplier stops being offered on new contracts. See
[Active and inactive](/concepts/active-and-inactive).

## Related articles

- [Vendor vs Supplier](/concepts/vendor-vs-supplier)
- [How do I create a contract?](/how-do-i/create-a-contract)
