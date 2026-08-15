---
title: Understanding permissions
description: Why two people see two different applications, and how to work out what you are missing.
order: 60
keywords: [permission, access, role, cannot see, hidden, forbidden, denied, scope, institution]
related:
  - concepts/roles-and-permissions
  - troubleshooting/why-is-this-action-unavailable
---

Two people signed into the same system can see very different things. That is
by design, and it is governed by two independent mechanisms.

## Roles carry permissions

You do not hold permissions directly. You hold **roles**, and each role carries a
set of permissions. An administrator creates the roles and decides what goes in
them.

A permission names one action on one kind of record, written as
`resource:action`:

- `perm:asset:read` — view assets
- `perm:asset:create` — add a new asset
- `perm:borrowing:return` — record the return of a loan
- `perm:location:deactivate` — take a location out of use

There are 104 of them. You are never asked to think about the list; what matters
is that **every button you can see corresponds to a permission you hold**.

> [!IMPORTANT]
> The application **hides** what you cannot use rather than showing it greyed
> out. A missing menu item or a missing button is almost always a permission you
> have not been granted — not a fault, and not something that will appear if you
> reload.

## Organization scope decides which records

The second mechanism is independent of the first. Even with permission to view
assets, you only see the assets of **your own institution** — unless one of your
roles is marked **system-wide**, which lifts that boundary.

This is why a colleague may find a contract you cannot: you both have
`perm:contract:read`, but the contract belongs to another institution.

> [!NOTE]
> A record outside your institution is reported as **not found**, not as
> "forbidden". The application avoids confirming that someone else's record
> exists. So "that record could not be found" can mean either "it does not
> exist" or "it is not yours" — and from where you are standing those are the
> same thing.

A system-wide role does not grant anything by itself. It only removes the
institution boundary from the permissions that role already has.

## Working out what you are missing

When something you expect is not there, the useful question for your
administrator is **"which role would give me this?"** — not "has the record been
deleted?".

It helps to say what you were trying to do and what you could not find:

> "I can open Borrowings and see the list, but there is no **Record return**
> button on an active loan."

That names the permission almost exactly (`perm:borrowing:return`) without you
needing to know the code.

## The one role that exists out of the box

A new installation has exactly one role, **System Admin**, which is system-wide
and holds every permission. Every other role is created locally to suit how your
organization actually works — so role names differ between installations, and
this manual does not assume any of them.

For the full list of permissions, grouped by module, see
[Permission reference](/reference/permission-reference).

## Related articles

- [Roles and permissions](/concepts/roles-and-permissions)
- [Why is this action unavailable?](/troubleshooting/why-is-this-action-unavailable)
- [Institutions and departments](/concepts/institutions-and-departments)
