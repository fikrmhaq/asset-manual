---
title: The reports
description: What each report answers, which filters it offers, and the two different exports.
order: 10
keywords: [report, laporan, inventory, status, classification, organization, location, condition, borrowings, traceability]
related:
  - how-do-i/run-a-report
  - how-do-i/export-data
---

Reports are read-only views over the registry. Every one of them respects your
organization scope: if your roles are limited to one institution, these are its
numbers.

Find them under **Reports & Audit › Reports**. Most need `perm:report:read`.

**Inventory (per unit)** is the exception: it needs `perm:asset-unit:read`,
because its rows are asset units rather than institution-wide totals. That is
deliberate, and it is what lets a **department head see their own departments'
inventory** — they will find the Reports section holding that one report and no
others. See [Roles and permissions](/concepts/roles-and-permissions#pic-scoped-roles-and-why-a-permission-can-be-ignored).

> [!NOTE]
> If someone cannot see a report you granted them, check whether their role is
> **PIC-scoped**. `perm:report:read` has no effect on such a role — the role
> screen marks it "Not effective for a PIC-scoped role".

## Which report answers which question

| Report | Answers |
|---|---|
| **Inventory** | What do we own? Every asset, with how many units are registered against it |
| **Inventory (per unit)** | Which items do we own? One row per physical item, with its own inventory code, department, location and condition |
| **Status** | How many units are in each lifecycle state, with the active/inactive asset split |
| **By classification** | What kinds of thing do we own, and how many of each |
| **By organization** | Which institution owns what, and which department is responsible |
| **By location** | Where is everything — including units with no location recorded |
| **By condition** | What state is our estate in |
| **Borrowings** | What is out on loan, what has been returned, and what is overdue |
| **Procurement traceability** | Which assets trace back to a contract, and how many of their units carry the line item |

## Two shapes of report

**Row reports** — Inventory, Inventory (per unit), Borrowings, Procurement
traceability — are paged
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

There are **two different exports**, and the difference matters.

Most reports have **Export CSV**, which writes the rows currently on screen — for
a paged report, this page only. Read
[How do I export data?](/how-do-i/export-data) before relying on it; what it
exports is narrower than most people assume.

**Inventory (per unit)** has **Export workbook** instead. That one is built by
the server and covers **every row matching your filters**, not just the page —
and it is a spreadsheet, not a CSV, laid out like the inventory sheet an
institution already keeps by hand: two title rows, the merged header, and a
photograph in the FOTO column wherever a unit or its asset has one.

> [!TIP]
> This is the one to print. Set your filters first — department, classification,
> condition — and the sheet comes out already narrowed to what you are counting.

> [!NOTE]
> A very large export is refused rather than cut short, with a message telling
> you which filter to narrow. A sheet that stopped halfway without saying so
> would be worse than no sheet, because you would only find out after acting on
> it.

### The second tab: PERAWATAN

The workbook has **two sheets**. `INVENTARIS` is the inventory list. `PERAWATAN`
is the maintenance tracker — the same items in the same order, with a block for
each of the **last twelve months** showing:

- **B / RR / RB** — what condition the item was in at the end of that month
- **Pindah** — whether it moved that month
- **keterangan** — anything recorded about it that month

> [!IMPORTANT]
> **This sheet is built from what people record, and nothing else.** It comes
> from the condition and location history on each unit — the entries created by
> **Record a change**. A unit nobody has assessed appears in the list with every
> month blank.
>
> A blank month is not an error and it does not mean "fine". It means nothing was
> recorded. If the sheet comes out mostly empty, that is an accurate picture of
> the recording, not a fault in the report.

Three details worth knowing:

- **Three condition columns, not two.** The inventory sheet has to squeeze five
  recorded conditions into Baik and Rusak; this one has `RR` and `RB` as well, so
  a badly damaged item is distinguishable from a lightly damaged one.
- **Arriving somewhere is not moving.** A unit's first location does not tick
  **Pindah** — only a later change of location does. A borrowing is not a move
  either; the item is out on loan, not rehoused.
- **Notes are what a person wrote.** Entries the application generates itself,
  such as the history it writes when a borrowing is activated, are left out. A
  maintenance column full of borrowing traffic would bury the real notes.

### About the photographs

A photograph is attached to an **asset** or to an individual **unit**. Where only
the asset has one, every unit of that asset shows the same picture — which is
honest, but it does mean four laptops look identical on the sheet. Attach a
photograph to the unit itself where telling them apart matters.

Only JPEG and PNG attachments are used. A PDF attached to an asset is not a
photograph and is left out.

## Related articles

- [How do I run a report?](/how-do-i/run-a-report)
- [How do I export data?](/how-do-i/export-data)
