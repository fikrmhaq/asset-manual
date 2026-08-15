---
title: Institutions and departments
description: Who owns records, who is responsible for items, and why the two work differently.
order: 170
keywords: [institution, instansi, department, bagian, organization, scope, ownership, responsible]
related:
  - getting-started/understanding-permissions
  - concepts/roles-and-permissions
---

Two organizational ideas that behave quite differently.

## Institution

An **institution** is an organizational unit that owns things. Assets, contracts,
locations, borrowings and users all belong to one.

It is also the **boundary of what you can see**. Unless one of your roles is
marked system-wide, you work entirely within your own institution: its assets,
its contracts, its locations. Records belonging to another institution do not
appear in your lists, and opening one directly reports that it could not be
found.

Most records default to your institution when you create them, so in a
single-institution deployment you rarely think about it.

| Field | Required | Notes |
|---|---|---|
| Name | Yes | |
| Code | Yes | A short unique identifier, used across reports |
| Address | Yes | |

## Department

A **department** says which part of the organization is responsible for an
individual [asset unit](/concepts/asset-unit).

It works differently from an institution in three ways worth knowing:

- **Flat.** Departments have no parent and no hierarchy.
- **Organization-wide.** A department does not belong to an institution; the list
  is shared.
- **Not a visibility boundary.** Departments never restrict what you can see.
  Only institutions do that.

| Field | Required | Notes |
|---|---|---|
| Code | Yes | Up to 8 characters. **Permanent** — cannot be changed once created |
| Name | Yes | Up to 75 characters. Can be changed |

> [!IMPORTANT]
> A department's code is permanent because asset units reference it. Choose it
> carefully; the name can be corrected later, the code cannot.

## Institution or department?

| Question | Answer |
|---|---|
| Who owns this asset? | Institution |
| Which team looks after this laptop? | Department |
| Why can I not see that contract? | Institution |
| Who do I chase about this broken chair? | Department |

## A caveat on assigning departments

> [!LIMITATION]
> A unit's department is shown on its Overview tab, but the edit dialog on that
> screen only offers **Description**. There is currently no way to set or change a
> unit's department from the unit screen. If departmental responsibility matters
> to your records, raise it with whoever administers your installation.

## Deactivating

Both are deactivated rather than deleted. An institution keeps its assets,
contracts and users; a department keeps the units already assigned to it. Neither
is offered for new records while inactive.

## Related articles

- [Understanding permissions](/getting-started/understanding-permissions)
- [Roles and permissions](/concepts/roles-and-permissions)
- [Active and inactive](/concepts/active-and-inactive)
