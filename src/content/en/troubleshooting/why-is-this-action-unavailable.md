---
title: Why is this action unavailable?
description: The button is not greyed out — it is not there. Four reasons why.
order: 20
keywords: [missing button, cannot see, hidden, no option, unavailable, greyed out, disabled]
related:
  - getting-started/understanding-permissions
  - troubleshooting/why-cant-i-save-this-form
---

A colleague describes a button you cannot find. There are four reasons, and they
are easy to tell apart.

## 1. You do not have the permission

By far the most common.

The application **hides** what you cannot use rather than disabling it. A missing
menu item or a missing button is almost always a permission you have not been
granted, and it will not appear if you reload.

| What is missing | The permission behind it |
|---|---|
| A whole section of the sidebar | `read` on that module |
| **New** / **Create** | `create` |
| **Edit** | `update` |
| **Deactivate** | `deactivate` |
| **Activate** / **Cancel** / **Record return** / **Extend** on a borrowing | The matching borrowing permission — each is separate |
| **Record a change** on a unit | `perm:asset-unit:record-history` |
| The vendor field on the asset form | `perm:vendor:read` |
| The Borrowings or Transactions tab on a unit | `perm:borrowing:read` / `perm:transaction:read` |

Ask your administrator "which role would give me this?". See
[Understanding permissions](/getting-started/understanding-permissions).

## 2. The record's state does not allow it

The action exists and you may have permission, but it makes no sense for this
record right now. The application only offers what the record can actually do.

| Action missing | Because |
|---|---|
| **Activate** on a borrowing | It is not a draft any more |
| **Cancel** on a borrowing | Only drafts can be cancelled |
| **Record return** | Only active or overdue loans can be returned |
| Editing a borrowing's header or units | Only drafts can be edited |
| Any edit on a transaction | Transactions are permanent — there is no edit action for anyone |
| A lifecycle state in the dropdown | It is not reachable from the unit's current state |

See [Statuses reference](/reference/statuses) for what each state allows.

## 3. The action does not exist

Some things are simply not features. If you are looking for one of these, no
permission will produce it:

- **Editing or deleting a transaction** — permanent by design
- **Deleting an asset, unit or location** — deactivate instead
- **Changing your own password** — an administrator sets it
- **Reopening a returned or cancelled borrowing** — create a new one
- **Editing a floor-plan area's shape** — delete and redraw it
- **Setting a unit's department from the unit screen** — displayed but not
  editable there
- **Exporting from a list screen** — exports live on reports

## 4. You are on the wrong screen

Very often the action exists one level away, because it belongs to a different
kind of record.

| You want to | It is on |
|---|---|
| Change a location or condition | The **unit's** History tab, not the asset |
| Add units | The asset's **Units** tab |
| Register an asset from a purchase | The **contract line item**, not the asset screen |
| Attach a file | The asset's **Attachments** tab |
| Edit attribute values | The **Attribute values** tab, not the edit form |
| Export | A **report**, not a list |

If you are looking for a location, condition, loan or history and cannot find it,
you are almost certainly on the asset page when you want the unit page. See
[Asset vs Asset Unit](/concepts/asset-vs-asset-unit).

## Related articles

- [Understanding permissions](/getting-started/understanding-permissions)
- [Why can't I save this form?](/troubleshooting/why-cant-i-save-this-form)
- [Known limitations](/troubleshooting/known-limitations)
