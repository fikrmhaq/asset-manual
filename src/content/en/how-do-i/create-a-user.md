---
title: How do I create a user?
description: Add an account that can sign in, and give it the roles it needs.
order: 300
task: true
permissions:
  - user:create
  - user-role:create
keywords: [user, pengguna, account, add user, staff, new account, password]
related:
  - how-do-i/create-a-role
  - concepts/roles-and-permissions
---

## What this does

Creates an account that can sign in. An account with no roles can sign in and do
nothing, so creating a user is really two jobs: the account, then its roles.

## Before you begin

- Decide which **roles** the person needs. If the right role does not exist yet,
  [create it first](/how-do-i/create-a-role).
- Decide their **institution**. This bounds what they can see, unless one of
  their roles is system-wide.
- Have an initial password ready — at least 12 characters. You will need to give
  it to them by some means outside this application.

> [!IMPORTANT]
> There is no password reset and no way for a user to change their own password.
> The password you set here is the one they will keep. See the limitation below.

## Steps

### 1. Create the account

1. Open **Organization › Users**.
2. Select **New user**.
3. Fill in the fields below.
4. Select **Create**.

### 2. Assign roles

1. Open the new user and go to the **Roles** tab.
2. Choose a role and select **Assign role**.
3. Repeat for each role they need.

## Field reference

| Field | Required | Description |
|---|---|---|
| Username | Yes | Up to 25 characters. **Permanent** — it identifies the account in the audit trail |
| Password | Yes | At least 12 characters |
| First name | Yes | Up to 150 characters |
| Last name | Yes | Up to 150 characters |
| Contact information | No | Up to 500 characters |
| Institution | No | Bounds what they can see, unless a role is system-wide |

> [!IMPORTANT]
> The **username cannot be changed** after creation. It is what identifies the
> account in the audit log, and letting it change would break that trail. Names
> and contact details can be corrected freely.

## What happens next?

The user can sign in immediately with the password you set. Their navigation is
built from the roles you assigned — with none, they will see a message saying no
modules are available.

Role changes take effect at once; the user does not need to sign out and in
again.

## Passwords

> [!LIMITATION]
> The application has no password change and no password reset. A user cannot
> change their own password, and there is no "forgot password" link on the
> sign-in screen. If someone forgets theirs, an administrator must set a new one
> and pass it on.
>
> Practically: use a good initial password, deliver it securely, and expect to
> repeat that occasionally.

## Deactivating a user

Users are deactivated rather than deleted. Deactivating **signs them out
immediately** and stops them signing in again; reactivating restores access with
their existing password.

## Related articles

- [How do I create a role?](/how-do-i/create-a-role)
- [Roles and permissions](/concepts/roles-and-permissions)
