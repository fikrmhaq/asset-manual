---
title: The eight reports
description: What each report answers, and which filters it offers.
order: 10
keywords: [report, laporan, inventory, status, classification, organization, location, condition, borrowings, traceability]
related:
  - how-do-i/run-a-report
  - how-do-i/export-data
---

Reports are read-only views over the registry. Every one of them respects your
organization scope: if your roles are limited to one institution, these are its
numbers.

Find them under **Reports & Audit › Reports**. All eight need
`perm:report:read`.

## Which report answers which question

| Report | Answers |
|---|---|
| **Inventory** | What do we own? Every asset, with how many units are registered against it |
| **Status** | How many units are in each lifecycle state, with the active/inactive asset split |
| **By classification** | What kinds of thing do we own, and how many of each |
| **By organization** | Which institution owns what, and which department is responsible |
| **By location** | Where is everything — including units with no location recorded |
| **By condition** | What state is our estate in |
| **Borrowings** | What is out on loan, what has been returned, and what is overdue |
| **Procurement traceability** | Which assets trace back to a contract, and how many of their units carry the line item |

## Two shapes of report

**Row reports** — Inventory, Borrowings, Procurement traceability — are paged
tables you can sort and filter, one row per record.

**Grouped reports** — Status, By classification, By organization, By location, By
condition — are complete breakdowns with totals. They are not paged: you see the
whole picture at once, with a simple bar chart alongside the table.

## Filters

Each report offers only the filters it can actually answer:

| Report | Filters |
|---|---|
| Inventory | Search, classification, institution, status |
| Status, By classification, By condition | Classification, institution, status |
| By organization, By location | Institution, status |
| Borrowings | Institution, status, overdue only, date range |
| Procurement traceability | Institution, contract, supplier, traced to a contract |

> [!NOTE]
> The **Borrowings report** has the date-range filter that the Borrowings *list*
> does not. If you need to find loans by date, this is the place.

## Reading the numbers

Grouped reports show totals above the breakdown, and the totals include the
categories people usually forget:

- **Without a location** — units with nothing recorded at all
- **Condition not recorded** — units never assessed
- **Unassigned** — units with no responsible department

These are the useful numbers. A large "condition not recorded" figure means units
have been registered and never brought into service.

## Exporting

Every report has an **Export CSV** action. Read
[How do I export data?](/how-do-i/export-data) before relying on it — what it
exports is narrower than most people assume.

## Related articles

- [How do I run a report?](/how-do-i/run-a-report)
- [How do I export data?](/how-do-i/export-data)
