---
title: How do I assign permissions?
description: Grant a role the permissions it needs, using the grouped checklist.
order: 320
task: true
permissions:
  - role-permission:update
keywords: [permission, izin, grant, checklist, access, allow, role permissions]
related:
  - how-do-i/create-a-role
  - reference/permission-reference
  - concepts/roles-and-permissions
---

## What this does

Decides what a role can do, by ticking permissions on a checklist.

## Steps

1. Open **Organization › Roles** and select the role.
2. Open the **Permissions** tab.
3. Tick the permissions the role should have.
4. Select **Save permissions**.

The heading shows how many of the total are granted, so you can see at a glance
whether a role is narrow or broad.

## The checklist is grouped

The 104 permissions are grouped by module — Organization, Reference, Asset Core,
Procurement, Operations, Reports, Audit — because a flat list of 104 codes is
unreadable. Each group has a **Select all** control.

Codes read `resource:action`: `perm:asset:read`, `perm:borrowing:return`,
`perm:location:deactivate`. The full list is in
[Permission reference](/reference/permission-reference).

## Start with read

A role that cannot **read** something cannot act on it, and will not even see it
in the navigation. So grant `read` on everything the role should be aware of
first, then add the actions on top.

A practical order:

1. `read` on the modules the role uses.
2. `create` and `update` where the role does the work.
3. Named actions — `activate`, `return`, `extend`, `cancel`,
   `record-history` — for the specific operations it is responsible for.
4. `deactivate` and `delete` last, and sparingly.

> [!TIP]
> Granting `perm:borrowing:create` without `perm:borrowing:activate` produces a
> user who can prepare loans but not start them. That is sometimes exactly what
> you want — the separation exists so it can be used deliberately.

## Permissions that require a system-wide role

Some codes are marked **Requires a system-wide role** and cannot be granted to an
institution-scoped role: managing institutions, roles, the permission catalogue,
and assigning roles to users.

If you need them, turn on **System-wide** on the role's Details tab first. See
[How do I create a role?](/how-do-i/create-a-role).

## What happens next?

Changes take effect **immediately** for everyone holding the role. Nobody needs
to sign out and back in; a user with a page open will find the newly permitted
buttons after their next navigation, and newly removed ones stop working at once.

## Checking your work

The most reliable check is to ask someone holding the role what they can see. The
navigation is built from permissions, so a missing menu item is a missing `read`.

## Related articles

- [Permission reference](/reference/permission-reference)
- [Roles and permissions](/concepts/roles-and-permissions)
