---
title: How do I create a role?
description: Define a named set of permissions that users can be given.
order: 310
task: true
permissions:
  - role:create
  - role-permission:update
keywords: [role, peran, permissions, access, group, job, create role, system-wide]
related:
  - concepts/roles-and-permissions
  - how-do-i/assign-permissions
  - reference/permission-reference
---

## What this does

Creates a **role** — a named set of permissions. Users are given roles, never
individual permissions, so a role is how access is designed in this application.

## Before you begin

Work out what the role is *for* before creating it. A role should match a job
somebody actually does: "records deliveries", "runs the store", "reads reports".

Two habits keep roles manageable:

- **Name it after the job, not the person.** "Store keeper", not "Budi".
- **Prefer several small roles to one large one.** A user can hold many, and
  narrow roles combine; one broad role has to be duplicated and edited whenever
  someone needs a slightly different set.

Creating a role requires a system-wide role of your own.

## Steps

1. Open **Organization › Roles**.
2. Select **New role**.
3. Enter the **Name**.
4. Set **System-wide** only if this role must reach beyond one institution — see
   below.
5. Select **Create**.
6. Open the new role, go to the **Permissions** tab, and
   [grant its permissions](/how-do-i/assign-permissions).

## Field reference

| Field | Required | Description |
|---|---|---|
| Name | Yes | Up to 50 characters. Must be unique |
| System-wide | No | Lifts the institution boundary from this role's permissions |

## System-wide or not

Leave it off for almost every role. A role that is not system-wide is
**institution-scoped**: its holders work within their own institution, which is
what you want for the people running one site.

Turn it on when the role must see across institutions, or when it needs any of
the permissions that only make sense organization-wide: managing institutions,
managing roles, managing the permission catalogue, or assigning roles to users.

> [!IMPORTANT]
> System-wide grants nothing by itself. It only removes the institution
> restriction from permissions the role already has. A system-wide role with no
> permissions can still do nothing.

The permissions screen marks the codes that require it. Once any of them is
granted, turning system-wide back off is refused until you ungrant them.

## What happens next?

The role exists but is empty. Grant its permissions, then assign it to users from
each user's **Roles** tab.

## Deleting a role

Roles are the one organizational record that is genuinely deleted rather than
deactivated. The deletion is **refused while any user still holds the role**, so
remove it from users first.

## Related articles

- [Roles and permissions](/concepts/roles-and-permissions)
- [How do I assign permissions?](/how-do-i/assign-permissions)
