---
title: Why can't I save this form?
description: The refusals the application gives when saving, and what each one wants from you.
order: 10
keywords: [error, validation, cannot save, refused, conflict, required, failed]
related:
  - borrowing/borrowing-statuses
  - getting-started/finding-your-way-around
---

A refusal to save is always one of five kinds. The message tells you which,
and each kind wants something different from you.

## Something on the form is not valid

The message names the field. Fix the field and save again.

Common cases:

- A required field is empty. Required fields are marked, but a field can also
  become required because of another answer.
- A date is impossible — an expected return date before the borrow date, for
  instance. The date picker will not even offer those days.
- A value is too long. Names cap at 255 characters, descriptions at 5,000.
- A code is already taken. Institution codes, department codes and contract
  numbers must each be unique.

## The record's current state does not allow it

Nothing is wrong with what you typed; the record has moved on.

- A borrowing that is no longer a draft cannot be edited — see
  [Borrowing statuses](/borrowing/borrowing-statuses).
- An asset unit cannot jump to any state you like. It follows a fixed path, and
  a unit that has been disposed of or deactivated has reached the end of it and
  will not move again.
- A unit already out on another loan cannot be added to a second one.

The message names the states that *are* allowed from where the record is now.

## You do not have permission

> [!NOTE]
> This is rare from a form, because the application hides buttons you cannot
> use. It happens when your roles changed while the page was open. Reload the
> page; if the button is gone afterwards, the permission was removed.

## The record is outside your institution

If your roles are scoped to one institution, records belonging to another are
reported as **not found** rather than as forbidden. That is intentional — it
avoids confirming that someone else's record exists.

## The server could not be reached

Nothing was saved. Check your connection and try again; the form keeps what you
typed.

---

## Two refusals that surprise people

### "Record a change" refuses without a description

On an asset unit's **History** tab, **Record a change** lets you leave condition,
location and lifecycle state blank — anything you skip carries forward. The
**Description** field looks equally optional.

It is not. The save is refused unless you write one.

> [!WARNING]
> Always fill in **Description** when recording a change to a unit. The field is
> not marked as required on screen, but the save will not go through without it.
> A short note — "moved to Room 204 after refurbishment" — is what the history
> timeline shows later, so it is worth writing properly.

### The first history entry needs a condition *and* a location

For a unit that has never had either recorded, "carry forward" has nothing to
carry. The first entry must set both. Every entry after that may leave them
blank.
