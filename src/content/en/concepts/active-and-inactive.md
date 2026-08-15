---
title: Active and inactive
description: Why the application deactivates records instead of deleting them.
order: 190
keywords: [active, inactive, aktif, nonaktif, delete, deactivate, reactivate, remove, archive]
related:
  - concepts/lifecycle-state
  - troubleshooting/why-cant-i-delete-this
---

Almost nothing in this application is deleted. Records are **deactivated**
instead — kept, with their history intact, and withdrawn from use.

## Why

A deleted record takes its history with it. If a supplier disappears, every
contract that named it becomes unexplainable; if a location disappears, every
unit that was once in it loses part of its story.

Deactivating keeps the past readable while stopping the record being used for
anything new.

## What deactivating does

| It does | It does not |
|---|---|
| Remove the record from selection lists for new work | Delete anything |
| Mark it inactive wherever it appears | Change records that already reference it |
| Keep every existing reference working | Hide it from reports and history |

Existing references are always preserved. Deactivating a vendor does not strip it
from the assets attributed to it; deactivating a department does not unassign the
units already assigned.

Every deactivation can be undone with **Reactivate**.

## What can be deactivated

Institutions, departments, users, assets, asset units, locations, attribute
definitions, suppliers, contracts and vendors.

Each confirmation dialog says what will actually happen — read it, because the
consequence differs. Deactivating a user, for example, signs them out
immediately and stops them signing in again.

## What is deleted properly

A few things genuinely are removed:

| Record | Note |
|---|---|
| Roles | Refused while any user still holds the role |
| The five editable reference lookups | Refused while any record still references the entry |
| Contract items | Assets already registered from them are unaffected |
| Floor plans and their areas | The locations they depict are unaffected |
| Attachments | The file is removed |

Where deletion exists, it is protected: the application refuses when something
still depends on the record. If a deletion is refused, deactivate instead, or
detach whatever still points at it.

## Active/inactive is not lifecycle state

Two ideas, both using the word "active":

- **Active / inactive** describes whether the **record** is in current use.
- **[Lifecycle state](/concepts/lifecycle-state)** describes where a **physical
  item** is in its working life.

A unit can be `state:lifecycle/ACTIVE` (in use) on a record that has been
deactivated, and the two say different things.

## Finding inactive records

Most lists have a **Status** filter, set to show everything by default. Narrow it
to *Inactive* to find what has been withdrawn.

## Related articles

- [Lifecycle state](/concepts/lifecycle-state)
- [Why can't I delete this?](/troubleshooting/why-cant-i-delete-this)
