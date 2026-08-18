---
title: Roles and permissions
description: How access is granted, what system-wide means, and why role names differ everywhere.
order: 180
keywords: [role, peran, permission, izin, access, system-wide, scope, admin, grant]
related:
  - getting-started/understanding-permissions
  - how-do-i/create-a-role
  - reference/permission-reference
---

Access is granted in two steps: permissions go into roles, and roles go onto
users.

```mermaid
flowchart LR
  P["Permissions<br/>asset:create, borrowing:return, …"] --> R["Role<br/>a named set"]
  R --> U["User"]
```

Nobody holds a permission directly. That indirection is what makes access
manageable: change the role, and everyone holding it changes with it.

## Permissions

A permission names one action on one kind of record, written `resource:action`:
`perm:asset:read`, `perm:contract:create`, `perm:borrowing:return`.

There are **104**, grouped by module — Organization, Reference, Asset Core,
Procurement, Operations, Reports, Audit. The full list is in
[Permission reference](/reference/permission-reference), and the role screen
presents them as a grouped checklist rather than a flat list.

The actions in use are:

| Action | Meaning |
|---|---|
| `read` | View |
| `create` | Add a new one |
| `update` | Change an existing one |
| `deactivate` | Deactivate and reactivate |
| `delete` | Permanently remove (only where deletion exists at all) |
| Named actions | Specific operations: `activate`, `cancel`, `return`, `extend`, `record-history` |

The named actions are why borrowing has seven permissions rather than four:
authorising someone to *create* a loan is not the same as authorising them to
*return* one.

## Roles

A role is a name and a set of permissions. Your organization creates its own —
there is no fixed catalogue of job titles, and a role called "Storekeeper" on one
installation may not exist on another.

Exactly one role exists out of the box: **System Admin**, system-wide, holding
every permission. It has no special powers built into the application; it can do
everything because it has been *granted* everything, visible on its own
permissions tab like any other role.

## System-wide roles

A role can be marked **system-wide**. This lifts the institution boundary from
the permissions that role carries — a system-wide role sees every institution's
records.

> [!IMPORTANT]
> System-wide grants nothing on its own. It only removes the scope restriction
> from permissions the role already has. A system-wide role with no permissions
> can still do nothing.

Some permissions only make sense system-wide, and the role screen marks them
**Requires a system-wide role**: creating and editing institutions and roles, and
changing what a role grants. Turning system-wide off is refused while any of
those are granted.

*Reading* roles is not among them. An institution administrator can see the roles
available to them and what each one grants — otherwise they would be handing out
access without knowing what it is.

## Assigning roles to users

A user holds any number of roles, and their effective permissions are everything
those roles carry between them. Removing every role leaves an account that can
sign in and do nothing.

Role changes take effect immediately — a user does not need to sign out and back
in.

## Letting an institution manage its own users

Roles are always written centrally: only a system-wide administrator creates
them, edits them, or changes what they grant. But an institution can be given the
ability to **hand out** roles that already exist, so it can register its own staff
without asking you every time.

A role marked **institution-assignable** is one an institution administrator may
give to users in their own institution. Roles are not assignable by default; each
one has to be turned on deliberately.

The usual arrangement:

1. You create the institution.
2. You create the roles its staff will need, and mark those institution-assignable.
3. You create the institution's first administrator and assign them a role
   carrying user management.
4. From then on that administrator registers their own users and gives them the
   assignable roles, without needing you.

> [!WARNING]
> **Marking a role assignable is a privilege grant, not a convenience setting.**
>
> Whoever creates a user account also sets its password, which means they can
> sign in as it. So any role an administrator can assign is a role they can give
> *themselves*, simply by creating an account, assigning the role, and logging in
> as that account.
>
> Read the assignable list as: "every institution administrator effectively has
> these permissions." If that is not what you intend for a particular role, leave
> it off.

A system-wide role can never be made assignable. The system refuses the
combination outright — handing an institution administrator a role that escapes
their own institution would defeat the boundary entirely.

Institution administrators do not see the Roles screen. They meet roles only in
the picker when assigning one to a user, which lists exactly what they are
allowed to give.

## Deleting a role

Roles are the one organizational record that is genuinely deleted rather than
deactivated. The deletion is refused while any user still holds the role, so
remove it from users first.

## Related articles

- [Understanding permissions](/getting-started/understanding-permissions)
- [How do I create a role?](/how-do-i/create-a-role)
- [Permission reference](/reference/permission-reference)
