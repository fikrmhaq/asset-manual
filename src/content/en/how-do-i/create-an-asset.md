---
title: How do I create an asset?
description: Register a new master record for a kind of item.
order: 10
task: true
permissions:
  - asset:create
keywords: [new asset, register, add asset, create]
related:
  - concepts/asset-vs-asset-unit
  - how-do-i/add-an-asset-unit
  - how-do-i/register-an-asset-from-a-contract
---

## What is this?

Creating an asset puts a new master record on the registry — the record for a
*kind* of item, such as "Dell Latitude 5420 laptop". The individual physical
items are added afterwards as [asset units](/concepts/asset-vs-asset-unit).

Use this route for anything that did not come from a procurement contract:
donated items, items your organization built itself, and records brought over
from an older system. If the item **did** come from a contract, use
[Register an asset from a contract](/how-do-i/register-an-asset-from-a-contract)
instead — it fills most of this form in for you and links the asset to the
contract line automatically.

## Before you begin

Have ready:

- **A name** for the kind of item.
- **The classification** it belongs to. Classifications are a fixed reference
  hierarchy; you browse or search it and pick the most specific level.
- **The institution** that owns it, if it is not your own.
- **The vendor** — the manufacturer or brand — if you want to record one.

## Steps

1. Open **Assets** in the sidebar.
2. Select **New asset**.
3. Enter the **Name**.
4. Select the **Classification**. The picker opens; search for a term or narrow
   down one level at a time, then choose.
5. Leave **Institution** on *Default to my institution*, or pick another one.
6. Choose a **Vendor**, or leave it on *No vendor*.
7. Add a **Description** if it helps whoever reads the record next.
8. Select **Create asset**.

![The New asset form](/screenshots/assets/create-asset.png)

## Field reference

| Field | Required | Notes |
|---|---|---|
| Name | Yes | Up to 255 characters. |
| Classification | Yes | Only the most specific level can be chosen. |
| Institution | No | Defaults to your own institution. |
| Vendor | No | The manufacturer or brand. Only shown if you can view vendors. |
| Description | No | Up to 5,000 characters. |

> [!NOTE]
> There is no contract field on this form. An asset's procurement line is set
> once — either it has none, or it was created from a contract line. It cannot be
> attached afterwards.

## What happens next?

The asset is created and you land on its detail page. It has **no units yet**,
which the Units tab says explicitly: an asset with no units is a record of
something not yet received.

Next you will normally:

1. [Add asset units](/how-do-i/add-an-asset-unit) — one per physical item.
2. Fill in any **Attribute values** configured for the classification.
3. [Record where each unit is](/how-do-i/assign-a-location) and what condition it
   is in.

## Related tasks

- [How do I add an asset unit?](/how-do-i/add-an-asset-unit)
- [How do I register an asset from a contract?](/how-do-i/register-an-asset-from-a-contract)
