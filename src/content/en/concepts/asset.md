---
title: Asset
description: The master record for a kind of thing your organization owns.
order: 20
keywords: [asset, master record, type, model, registry, aset]
related:
  - concepts/asset-vs-asset-unit
  - concepts/asset-unit
  - how-do-i/create-an-asset
---

An **asset** is the master record for a *kind* of thing. Not a particular
laptop — the model of laptop. Not the chair in room 12 — the kind of chair.

## Why it exists

Some facts are true of everything in a batch: what kind of thing it is, who
manufactured it, which institution owns it, what it was bought under. Recording
those once, on the asset, means they cannot drift apart across twelve identical
items.

Everything that can differ between individual items — where it is, what state it
is in, who has it — lives on the [asset unit](/concepts/asset-unit) instead.

## What an asset holds

| Field | Notes |
|---|---|
| Name | What the thing is called. Required. |
| Classification | What kind of thing it is, from a fixed reference hierarchy. Required, and only the most specific level can be chosen. |
| Institution | Which institution owns it. Defaults to yours. |
| Vendor | The manufacturer or brand. Optional. |
| Description | Free text. Optional. |
| Contract | The procurement contract it was bought under, if any. Optional, and editable — see [How do I edit an asset?](/how-do-i/edit-an-asset). |
| Attribute values | Extra fields configured for its classification. |
| Attachments | Files: invoices, photographs, manuals. |

## What an asset does not have

An asset has **no location, no condition, no lifecycle state and no history**.
Those questions have no single answer for a kind of thing — twelve laptops are in
twelve places. They belong to units.

An asset also cannot be borrowed or put on a transaction. Both act on physical
items.

## An asset with no units

Allowed, and meaningful: it records something registered but not yet physically
received. The Units tab says so rather than treating it as an error.

## Two ways an asset gets created

- **From a contract line** — the usual path. See
  [How do I register an asset from a contract?](/how-do-i/register-an-asset-from-a-contract).
- **Directly** — for donated, self-built or migrated items with no procurement
  behind them. See [How do I register an asset directly?](/how-do-i/register-an-asset-directly).

An asset with no contract behind it is a documented, normal case — not missing
data.

## Deactivating rather than deleting

Assets are never deleted. Deactivating one keeps its record, its units and its
history, and stops it being offered for new work. See
[Active and inactive](/concepts/active-and-inactive).

## Related articles

- [Asset vs Asset Unit](/concepts/asset-vs-asset-unit)
- [Asset Unit](/concepts/asset-unit)
- [Classification](/concepts/classification)
