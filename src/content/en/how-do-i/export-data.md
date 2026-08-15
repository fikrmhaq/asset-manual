---
title: How do I export data?
description: Get a CSV out of a report — and understand exactly what lands in it.
order: 360
task: true
permissions:
  - report:read
keywords: [export, csv, download, spreadsheet, excel, extract, data out]
related:
  - how-do-i/run-a-report
  - reports/the-eight-reports
---

## What this does

Downloads the report you are looking at as a CSV file, which opens in any
spreadsheet application.

Exporting is available from **reports only**. The asset list, the borrowings
list and the other list screens have no export.

## Steps

1. Open a report and set its filters. See
   [How do I run a report?](/how-do-i/run-a-report).
2. For a paged report, page to the rows you want.
3. Select **Export CSV**.

## What lands in the file

> [!IMPORTANT]
> The export contains **exactly the rows shown on screen** — the same columns,
> the same filters, and for a paged report **only the current page**.
>
> It is not an export of everything the report could return. A note beside the
> button says which of the two you are getting.

This catches people out. An inventory of 400 assets shown 20 to a page exports
20 rows, not 400.

## Getting a complete export

Two approaches, depending on the report:

**Grouped reports** — Status, By classification, By organization, By location, By
condition — are not paged. Their export is genuinely complete, because everything
is already on screen.

**Row reports** — Inventory, Borrowings, Procurement traceability — are paged.
To get everything:

- Narrow the filters so the result fits one page, and export each slice
  separately — by institution, by classification, by date range; or
- Export page by page and combine the files in your spreadsheet, remembering to
  drop the repeated header rows.

> [!TIP]
> Filtering into slices is usually less work than paging, and the slices are
> often what you wanted anyway — one file per institution, or per classification.

## What the columns contain

The export carries the same columns as the table, so a CSV can never disagree
with what you saw. Where a table cell shows a name over a code, the export
carries the more useful of the two.

## Exporting an asset register

There is no single "export everything" action. The closest is the **Inventory**
report, filtered and exported in slices as above.

## Related articles

- [How do I run a report?](/how-do-i/run-a-report)
- [The eight reports](/reports/the-eight-reports)
