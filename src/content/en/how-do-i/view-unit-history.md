---
title: How do I view unit history?
description: Read the timeline of where an item has been and what state it was in.
order: 140
task: true
permissions:
  - asset-unit:read
keywords: [history, timeline, past, when, previous location, riwayat, track, trace]
related:
  - concepts/history
  - how-do-i/record-a-change-to-a-unit
  - how-do-i/view-audit-history
---

## Steps

1. Open **Assets** and select the asset.
2. Open the **Units** tab and select the unit.
3. Open the **History** tab.

## Reading the timeline

Entries are listed newest first. Each one shows:

- The **lifecycle state** and **condition** as at that time, as badges
- The **location**, as a full trail
- The **dates** it was true from and until — the current entry runs to *now*
- The **description** written when the change was recorded

Because each entry closes when the next begins, the timeline answers "where was
this in March?" and not merely "where is it now?".

## An empty history

A unit with no history has been registered but never brought into service. The
tab says as much: recording a condition and location is what puts a unit into
service. See
[How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit).

## What history does not tell you

| Question | Where to look |
|---|---|
| Who made this change? | The [audit log](/how-do-i/view-audit-history) |
| Who borrowed this item? | The unit's **Borrowings** tab |
| What events were recorded against it? | The unit's **Transactions** tab |
| Where are the other units of this asset? | The asset's **Units** tab |

Unit history records **physical facts about the item**. Who typed them in, and
when, is the audit log's job.

## Related articles

- [History](/concepts/history)
- [Audit log](/concepts/audit-log)
