---
title: Signing in
description: How to get into the application, and what to do when you cannot.
order: 20
keywords: [login, log in, sign in, password, session, sign out, forgot]
related:
  - getting-started/finding-your-way-around
  - troubleshooting/why-cant-i-save-this-form
---

## Before you begin

You need an account. Accounts are created by an administrator — there is no
self-registration, and no way to sign up from the sign-in screen.

If you do not have one, contact your asset administrator. They will give you a
username and an initial password.

## Steps

1. Open the application address in your browser.
2. Enter your **Username**.
3. Enter your **Password**.
4. Select **Sign in**.

![The sign-in screen](/screenshots/getting-started/sign-in.png)

## Field reference

| Field | Required | Notes |
|---|---|---|
| Username | Yes | Up to 25 characters. Case-sensitive. |
| Password | Yes | Set by your administrator. |

## What happens next?

You land on the **Dashboard**, and the sidebar fills with the sections your roles
allow you to see. If your account has no roles yet, you will be able to sign in
but the navigation will say that no modules are available — that is not a fault,
it means nobody has granted you anything yet.

## Staying signed in

Your session refreshes itself quietly in the background while you work. You do
not need to sign in again every few minutes.

Two things end a session:

- Selecting **Sign out**. You will be asked to confirm.
- An administrator deactivating your account, which signs you out immediately.

> [!NOTE]
> Closing the browser does not sign you out permanently — reopening the
> application within a week will usually restore your session. Use **Sign out**
> on a shared machine.

## When you cannot sign in

> [!LIMITATION]
> There is no "forgot password" link, and you cannot change your own password
> from inside the application. Both are deliberate omissions in the current
> version: an administrator sets and resets passwords for you.

| What you see | What it means | What to do |
|---|---|---|
| Your username or password is incorrect | One of the two is wrong | Check for caps lock; the username is case-sensitive |
| Too many attempts | Repeated failures from your network were blocked | Wait a few minutes and try again |
| The server could not be reached | The application cannot reach its server | Check your connection, then contact your administrator |
| Your session has expired | You were signed out while the page was open | Sign in again; nothing you saved is lost |

## Related tasks

- [Finding your way around](/getting-started/finding-your-way-around)
