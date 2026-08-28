---
title: How do I add an asset unit?
description: Add an individual physical item to an existing asset.
order: 20
task: true
permissions:
  - asset-unit:create
keywords: [unit, add unit, physical item, individual, copy]
related:
  - concepts/asset-vs-asset-unit
  - how-do-i/assign-a-location
---

## What is this?

An asset unit is one individual physical item belonging to an asset. Twelve
identical laptops are one asset and twelve units. See
[Asset vs Asset Unit](/concepts/asset-vs-asset-unit) if that distinction is new
to you.

Add units one at a time here. If the items came from a contract, you can create
the asset and all of its units in a single step instead — see
[Register an asset from a contract](/how-do-i/register-an-asset-from-a-contract).

## Before you begin

The asset must already exist. Nothing else is needed: a unit is created with
almost no information, and everything that matters about it — where it is, what
condition it is in — is recorded afterwards as history.

## Steps

1. Open **Assets** and select the asset.
2. Open the **Units** tab.
3. Select **Add unit**.
4. If a **Number composition** field is shown, enter the number. See below.
5. Optionally enter a **Description** to tell this unit apart from its siblings.
6. If the asset has a contract, optionally choose the **Procurement item** this
   unit arrived on.
7. Select **Create**.

![The Add a unit dialog](/screenshots/asset-units/add-unit.gif)

## Field reference

| Field | Required | Notes |
|---|---|---|
| Number composition | Only when shown | Part of the unit's permanent inventory code. Up to 16 characters, letters, digits, hyphen, underscore and dot. |
| Description | No | Free text. Useful for a serial number or a nickname until attributes are filled in. |
| Procurement item | No | Which line of the asset's contract this unit came from. Only shown when the asset has a contract and you can view contract items. |

## About Number composition

This field appears **only if your institution's inventory code format asks for
one**. Most institutions do not, and never see it.

Where it does appear, it is the number your institution already keeps in its own
register, and it becomes part of the unit's permanent inventory code. The
application stores exactly what you type — it never adjusts it, shortens it or
counts up from it.

> [!CAUTION]
> There is no correcting it afterwards. The code it produces is issued the moment
> the unit is created, and a code is permanent by design — editing the unit will
> not offer this field again. Check the number before selecting Create.

> [!NOTE]
> If the application says the value is already taken, another unit already
> carries the code your number would produce. Choose a different one — the
> message names this field, not the code, because this is the half you can
> change.

An administrator sets whether the field appears; see
[Inventory code format](/administration/inventory-code-format).

> [!NOTE]
> **Procurement item** is per unit, not per asset. Ten laptops on one contract
> line are ten units all pointing at that same line; a replacement that arrived
> under a different contract points somewhere else, or nowhere.
>
> Only line items belonging to the asset's own contract are offered, and the
> application refuses any other. If the list is not what you expect, check the
> asset's Contract field first.
>
> You can set this later instead — it is on the unit's own edit form.

## What happens next?

The unit appears in the Units tab with:

- Lifecycle state `state:REGISTERED`
- No condition recorded
- No location recorded

`state:REGISTERED` means "on the books, not yet in service". The unit cannot be
borrowed and will not appear in location reports until you record its first
condition and location.

> [!IMPORTANT]
> A newly created unit is not finished. Its first history entry — which must set
> both a condition and a location — is what brings it into service. See
> [How do I assign a location?](/how-do-i/assign-a-location).

## Related tasks

- [How do I assign a location?](/how-do-i/assign-a-location)
- [How do I create an asset?](/how-do-i/create-an-asset)
