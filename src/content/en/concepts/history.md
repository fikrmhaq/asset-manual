---
title: History
description: The timeline of a unit's condition, location and lifecycle state — and why they are recorded together.
order: 110
keywords: [history, riwayat, timeline, audit, changes, past, when, record a change]
related:
  - concepts/asset-unit
  - how-do-i/record-a-change-to-a-unit
  - how-do-i/view-unit-history
---

Every [asset unit](/concepts/asset-unit) keeps a **history**: a timeline of where
it was, what condition it was in, and what lifecycle state it held — with the
dates each of those was true.

It is what lets you answer "where was this in March?" rather than only "where is
it now?".

## Three facts, one entry

Condition, location and lifecycle state are recorded **together**, as a single
entry. There is no separate "move" action and no separate "change condition"
action.

That seems restrictive until you notice it matches reality: a unit usually moves
*because* something happened to it. It went for repair, so it is now in the
workshop, under maintenance, and damaged. Those are one event, and the timeline
records them as one.

## Carrying forward

When you record a change, anything you leave blank **carries forward** from the
current state. Moving a unit whose condition has not changed means filling in
only the location.

The one exception is the very first entry on a unit, which must set **both** a
condition and a location — there is nothing yet to carry forward from.

> [!WARNING]
> **Description is required on every entry**, including ones where you change
> only the location. The form does not mark it as required and its hint mentions
> carrying values forward, but the save is refused without it. Write a real
> sentence — "moved to Room 204 after refurbishment" — because the description is
> what the timeline shows afterwards.

## What the timeline shows

Newest first. Each entry carries:

- The lifecycle state and condition at that time
- The location
- The dates it was true from, and until — the current entry runs to *now*
- The description you wrote

The unit's Overview tab always shows the **current** values; the History tab
shows how it got there.

## History is not the audit log

Two different records, easily confused:

| | Unit history | [Audit log](/concepts/audit-log) |
|---|---|---|
| Records | Physical facts about one item | Changes to records across the application |
| Written by | You, deliberately | The application, automatically |
| Answers | "Where was it, and what state was it in?" | "Who changed this record, and when?" |
| Found on | The unit's History tab | The Audit log screen |

Recording a move creates a history entry *and* leaves an audit trail. They serve
different readers.

## Related articles

- [How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit)
- [How do I view unit history?](/how-do-i/view-unit-history)
- [Audit log](/concepts/audit-log)
