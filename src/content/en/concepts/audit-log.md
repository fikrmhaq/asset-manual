---
title: Audit log
description: The read-only record of who changed what, and how it differs from unit history.
order: 200
keywords: [audit, log, trail, who changed, accountability, history, tracking, read-only]
related:
  - concepts/history
  - how-do-i/view-audit-history
---

The **audit log** records changes made to important records: what was changed,
by whom, and when. It is written by the application automatically — nobody
decides to create an audit entry.

## Read-only, permanently

> [!IMPORTANT]
> Audit entries can never be edited or deleted, by anyone, including
> administrators. There is no action menu on the audit screen and no permission
> that would allow one. That is the entire point: a trail you can amend proves
> nothing.

## What an entry holds

| | |
|---|---|
| When | The moment of the change |
| Actor | The user who made it, or **System** for changes made by the application itself |
| Action | Created, Updated, Deleted or Status changed |
| Entity | The kind of record, and which one |
| Before / after | The field values that changed |
| Request details | The IP address the change came from |

Opening an entry shows the changed fields side by side, before and after. Fields
that did not change are not listed.

## "System" as an actor

Some changes have no person behind them. The clearest example is the overnight
sweep that marks overdue borrowings: nobody pressed a button, so the actor is
recorded as **System**. That is a real value, not a missing one.

## Audit log or unit history?

The two are easy to confuse and answer different questions.

| | [Unit history](/concepts/history) | Audit log |
|---|---|---|
| Subject | One physical item | Any record in the application |
| Records | Where it was, its condition and state | Which fields on a record changed |
| Written by | You, deliberately | The application, automatically |
| Answers | "Where was this in March?" | "Who changed this, and when?" |
| Reader | Anyone operating the system | Someone investigating |

Moving a unit writes both: a history entry describing the move, and an audit
entry recording that the record changed.

## Scope

> [!NOTE]
> Unlike almost everything else, the audit log is **not limited to your
> institution** — it covers all of them, and the screen says so. Access is
> therefore controlled entirely by the `perm:audit-log:read` permission, which is
> worth granting sparingly.

## Finding an entry

Filters: entity type, entity id, actor, action, and a date range. Entity types
are the application's own record names — `Asset`, `Borrowing`, `Contract` — and
are not translated, because they are what the filter matches on.

See [How do I view audit history?](/how-do-i/view-audit-history).

## Related articles

- [History](/concepts/history)
- [How do I view audit history?](/how-do-i/view-audit-history)
