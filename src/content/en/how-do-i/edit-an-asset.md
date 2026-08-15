---
title: How do I edit an asset?
description: Change an asset's details, and understand what editing cannot reach.
order: 60
task: true
permissions:
  - asset:update
keywords: [edit, change, update, correct, modify, rename, reclassify]
related:
  - how-do-i/view-an-asset
  - concepts/attributes
  - concepts/active-and-inactive
---

## Steps

1. Open the asset — see [How do I view an asset?](/how-do-i/view-an-asset).
2. Select **Edit**.
3. Change what you need.
4. Select **Save changes**.

If you navigate away with unsaved changes, the application asks before discarding
them.

## What you can change

Name, classification, institution, vendor and description — the same fields the
create form offers.

> [!IMPORTANT]
> Changing the **classification** also changes which
> [attributes](/concepts/attributes) apply, because attribute definitions belong
> to a classification. Values recorded against the old classification's
> attributes stop being shown. The edit form warns you about this.

## What you cannot change here

| Not on this form | Where it lives instead |
|---|---|
| The procurement line | Set once at creation. It cannot be attached, changed or removed afterwards |
| Attribute values | The asset's **Attribute values** tab |
| Attachments | The asset's **Attachments** tab |
| The units | The **Units** tab — each unit is edited on its own page |
| Location, condition, lifecycle state | These belong to units, not assets. See [Asset vs Asset Unit](/concepts/asset-vs-asset-unit) |

## Retiring an asset

There is no delete. To take an asset out of use, **deactivate** it: the record,
its units and all their history are kept, and it stops being offered for new
work. It can be reactivated later. See
[Active and inactive](/concepts/active-and-inactive).

## Related articles

- [How do I view an asset?](/how-do-i/view-an-asset)
- [Active and inactive](/concepts/active-and-inactive)
