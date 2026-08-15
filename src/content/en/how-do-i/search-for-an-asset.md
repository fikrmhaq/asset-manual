---
title: How do I search for an asset?
description: Find an asset by name, classification, location, vendor, contract, condition or status.
order: 70
task: true
permissions:
  - asset:read
keywords: [search, find, filter, locate, missing, lookup, cari aset]
related:
  - getting-started/searching-for-assets
  - how-do-i/view-an-asset
---

## The quick way

Type into the search box at the top of any screen and press Enter. Press
`Ctrl` + `K` (or `⌘` + `K`) to jump to it from anywhere.

It searches asset **names and descriptions**, and drops you on the asset list
already filtered.

## The precise way

Open **Assets** and use the filter bar. Filters combine — set several to narrow
further.

| Filter | Finds assets by |
|---|---|
| Search | Words in the name or description |
| Classification | The classification they are registered under |
| Location | Where their units currently are |
| Vendor | The manufacturer or brand |
| Contract | The procurement contract they trace back to |
| Condition | The recorded condition of their units |
| Status | Whether the asset record is active or inactive |

Vendor and Contract only appear if you can view those records.

Selecting a classification opens the picker; use **Clear classification** to
remove it again.

> [!TIP]
> The filters are kept in the page address. Bookmark a filtered view you use
> often, or paste the address to a colleague and they will see the same list.

## What search does not cover

- **Asset units.** There is no way to search for an individual item, by serial
  number or otherwise. Find its asset, then open the **Units** tab.
- **Attribute values.** Serial numbers and other attributes are not searchable.
- **Other records.** Contracts, suppliers, locations, borrowings and users each
  have their own filters on their own screens.

## If you cannot find something that should exist

Work through these in order:

1. **Clear the filters.** A leftover classification or status filter is the usual
   cause.
2. **Check the Status filter.** A deactivated asset is hidden unless you ask for
   inactive records.
3. **Consider institution scope.** If the asset belongs to another institution
   and your roles are scoped to yours, it will not appear at all. See
   [Understanding permissions](/getting-started/understanding-permissions).
4. **Try a shorter search term.** The search matches text within the name and
   description, so a shorter fragment matches more.

## Related articles

- [Searching and filtering](/getting-started/searching-for-assets)
- [How do I view an asset?](/how-do-i/view-an-asset)
