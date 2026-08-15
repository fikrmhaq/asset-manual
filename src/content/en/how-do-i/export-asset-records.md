---
title: How do I export asset records?
description: Get your asset register out of the application.
order: 80
task: true
permissions:
  - report:read
keywords: [export assets, asset register, csv, download assets, spreadsheet, backup]
related:
  - how-do-i/export-data
  - reports/the-eight-reports
---

## The short answer

Use the **Inventory** report, not the asset list.

> [!NOTE]
> The asset list has filters, sorting and paging, but **no export**. Exporting
> lives on reports only.

## Steps

1. Open **Reports & Audit › Reports**.
2. Choose **Inventory**.
3. Set the filters — search text, classification, institution, active or
   inactive.
4. Select **Export CSV**.

The file contains one row per asset, with its classification, institution, the
number of units registered against it, and its status.

## Getting everything

Inventory is a paged report, and the export writes **only the page on screen**.
For a complete register, filter into slices — one classification at a time, or
one institution at a time — and export each. See
[How do I export data?](/how-do-i/export-data).

## Exporting units rather than assets

The Inventory report counts units per asset but does not list them individually.
For unit-level information, choose the report that groups the way you need:

| You want | Report |
|---|---|
| Units by where they are | By location |
| Units by condition | By condition |
| Units by institution and department | By organization |
| Units by lifecycle state | Status |

These four are grouped reports, so their exports are complete rather than paged.

> [!LIMITATION]
> No export lists every asset unit individually with all of its details. The
> reports above give counts grouped in various ways; a per-unit register with
> serial numbers and locations in one file is not something the application
> currently produces.

## Related articles

- [How do I export data?](/how-do-i/export-data)
- [The eight reports](/reports/the-eight-reports)
