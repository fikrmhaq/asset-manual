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
4. Optionally enter a **Description** to tell this unit apart from its siblings.
5. Select **Create**.

![The Add a unit dialog](/screenshots/asset-units/add-unit.png)

## Field reference

| Field | Required | Notes |
|---|---|---|
| Description | No | Free text. Useful for a serial number or a nickname until attributes are filled in. |

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
