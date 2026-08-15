---
title: How do I view an asset?
description: Open an asset and read its four tabs.
order: 50
task: true
permissions:
  - asset:read
keywords: [view, open, look at, details, tabs, inspect, asset record]
related:
  - how-do-i/search-for-an-asset
  - concepts/asset-vs-asset-unit
  - how-do-i/view-an-asset-unit
---

## Steps

1. Open **Assets** in the sidebar.
2. Find the asset — see [How do I search for an asset?](/how-do-i/search-for-an-asset).
3. Select its name.

## What the four tabs show

### Overview

The master record: name, classification (with its code), institution, vendor and
description.

It also shows the **procurement line** — the contract number, linking through to
the contract, when the asset came from one. When it did not, it says *No
procurement record* explicitly.

### Units

The individual physical items. Each row shows the unit's current location,
condition, lifecycle state and whether the record is active.

This is where you go for anything about a specific item. Selecting a row opens
[the unit's own page](/how-do-i/view-an-asset-unit).

An empty Units tab means the asset has been registered but nothing physical has
been received yet.

### Attribute values

The extra fields configured for this asset's classification, at asset scope. If
the classification has none configured, the tab says so — that is normal.

Unit-scoped attributes are **not** here; they are on each unit. See
[Attributes](/concepts/attributes).

### Attachments

Files attached to the asset: invoices, delivery notes, photographs, manuals. PDF,
JPG, PNG, DOCX and XLSX, up to 10 MB each.

> [!NOTE]
> Each tab loads its own information. If one tab is empty or missing while the
> others work, that usually means you do not have permission for that particular
> thing — attachments have their own permission, separate from assets.

## Editing from here

The **Edit** action opens the asset form. Note what is *not* editable: the
procurement line, and the units themselves (which are managed from the Units
tab). See [How do I edit an asset?](/how-do-i/edit-an-asset).

## Related articles

- [How do I view an asset unit?](/how-do-i/view-an-asset-unit)
- [Asset vs Asset Unit](/concepts/asset-vs-asset-unit)
