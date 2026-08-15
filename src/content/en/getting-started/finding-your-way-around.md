---
title: Finding your way around
description: The sidebar, the top bar, search, and why you may not see everything.
order: 30
keywords: [navigation, sidebar, menu, search, breadcrumb, layout, language]
related:
  - getting-started/what-this-application-does
  - concepts/asset-vs-asset-unit
---

Every screen in the application uses the same frame, so once you can read one
you can read all of them.

## The sidebar

The left-hand sidebar holds six groups:

| Group | What is in it |
|---|---|
| Dashboard | A summary of the registry within your organization |
| Assets | Assets, Locations, Classifications |
| Procurement | Suppliers, Contracts |
| Operations | Vendors, Borrowings, Transactions |
| Organization | Institutions, Departments, Users, Roles, Attribute definitions, Lookups |
| Reports & Audit | Reports, Audit log |

> [!IMPORTANT]
> You will only see the groups and items your roles allow. Items you cannot use
> are **hidden, not greyed out**. If a colleague describes a menu item you cannot
> find, you almost certainly lack the permission for it — see
> [what you are allowed to do](/getting-started/finding-your-way-around#why-you-may-not-see-everything).

## The top bar

- **Breadcrumbs** show where you are and let you step back up.
- **Search assets** jumps straight into the asset list, filtered by what you
  typed. Press `Ctrl` + `K` (or `⌘` + `K`) to focus it from anywhere.
- **Language** switches the interface between English and Bahasa Indonesia.
- **Sign out** ends your session.

## The shape of a screen

Almost every screen is one of four kinds:

1. **A list** — filters along the top, a table in the middle, paging at the
   bottom, and a *Create* button if you are allowed to create one.
2. **A detail page** — a title, a status badge, the main actions, then tabs for
   the things belonging to that record.
3. **A form** — for creating or editing, with *Cancel* and *Save*.
4. **A confirmation dialog** — before anything destructive or hard to undo.

## Why you may not see everything

Two separate things decide what you can reach.

**Permissions.** Your roles carry permissions, and each one names an action on a
kind of record — `perm:asset:read` lets you view assets, `perm:asset:create`
lets you add one. No permission, no button.

**Organization scope.** Unless one of your roles is marked system-wide, you see
only the records belonging to your own institution. Records from another
institution are not hidden behind a warning; they simply are not in your lists,
and opening one directly reports that it could not be found.

> [!TIP]
> If something you expect is missing, the question to ask your administrator is
> "which role would give me this?" — not "is the record still there?".

## Language

The application is fully bilingual. Switching language changes labels, dates and
messages, but never changes data you have entered, and never changes identifiers
such as permission codes or classification codes.
