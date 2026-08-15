---
title: How do I view audit history?
description: Find out who changed a record, and what they changed.
order: 370
task: true
permissions:
  - audit-log:read
keywords: [audit, who changed, trail, investigate, accountability, log, when changed]
related:
  - concepts/audit-log
  - how-do-i/view-unit-history
---

## What this does

Finds entries in the [audit log](/concepts/audit-log) — the automatic record of
who changed which record, and when.

Use it to answer "who did this?". For "where was this item in March?", use the
unit's own [history](/how-do-i/view-unit-history) instead.

## Steps

1. Open **Reports & Audit › Audit log**.
2. Narrow the list with the filters.
3. Select an entry to see exactly what changed.

## Filters

| Filter | What it takes |
|---|---|
| Entity type | The kind of record — `Asset`, `Borrowing`, `Contract`… |
| Entity ID | The exact identifier of one record |
| Actor | Who made the change |
| Action | Created, Updated, Deleted, Status changed |
| Date range | A start date, an end date, or both |

> [!NOTE]
> Entity types are the application's internal record names and are **not
> translated** — they read the same in both languages, because they are what the
> filter matches on.

## Investigating one record

The most focused search is entity type plus entity ID. To get the ID of the
record you are looking at, take it from the address bar of that record's page —
it is the long identifier at the end.

Filter by that ID and you get everything that has ever happened to that one
record, in order.

## Reading an entry

Opening an entry shows:

- **When** it happened, and **who** did it
- **What** changed — the affected fields, with their values before and after
- The **IP address** the change came from

Only fields that actually changed are listed. An entry showing nothing under
values means the change did not alter any tracked field.

## "System" as the actor

Some entries have **System** where a person's name would be. Those are changes
made by the application itself rather than by a user — the clearest example being
the overnight sweep that marks borrowings overdue. It is a real value, not a
missing one.

## Nothing here can be changed

There is no edit and no delete on the audit log, for anyone. Entries are
permanent.

## A note on scope

> [!IMPORTANT]
> Unlike everything else, the audit log is **not limited to your institution** —
> it covers all of them, and the screen says so. Anyone with
> `perm:audit-log:read` can see changes to records they could not otherwise view.
> It is a permission worth granting sparingly.

## Related articles

- [Audit log](/concepts/audit-log)
- [How do I view unit history?](/how-do-i/view-unit-history)
