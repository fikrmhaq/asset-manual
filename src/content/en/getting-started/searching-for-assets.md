---
title: Searching and filtering
description: The search box in the top bar, the filters on each list, and how to find one physical item.
order: 50
keywords: [search, find, filter, lookup, locate, cari, missing, cannot find]
related:
  - how-do-i/search-for-an-asset
  - concepts/asset-vs-asset-unit
---

There are two ways to find things: the search box in the top bar, and the filter
bar on each list screen. They do different jobs.

## The search box in the top bar

The box at the top of every screen searches **assets by name and description**.
It is a shortcut into the asset list, not a search across the whole application.

Press `Ctrl` + `K` (or `⌘` + `K` on a Mac) to jump to it from anywhere, type, and
press Enter. You land on the asset list already filtered by what you typed.

What it does **not** search:

- Asset units, borrowings, contracts, suppliers, locations or users
- Attribute values such as serial numbers
- Anything in the audit log

For those, open the relevant screen and use its own filters.

> [!NOTE]
> The search box only appears if you can view assets (`perm:asset:read`). If it
> is missing from your top bar, that is why.

## Filters on a list

Every list screen has a filter bar whose controls match what that list can
actually be narrowed by. Filters are remembered in the page address, so you can
bookmark a filtered view or send it to a colleague, and the browser's Back button
returns you to the previous set.

The asset list offers seven:

| Filter | What it narrows by |
|---|---|
| Search | Asset name or description |
| Classification | The classification the asset is registered under |
| Location | Where its units currently are |
| Vendor | The manufacturer or brand |
| Contract | The procurement contract it traces back to |
| Condition | The recorded condition of its units |
| Status | Active or inactive asset records |

The Vendor and Contract filters only appear if you are allowed to view vendors
and contracts respectively.

> [!NOTE]
> The Condition filter lists the stored values — `GOOD`, `FAIR`, `POOR`,
> `DAMAGED`, `UNSERVICEABLE` — rather than the friendlier labels used elsewhere
> in the application. They mean exactly what they look like; see
> [Condition](/concepts/condition).

## Finding one physical item

This is the question people most often get stuck on, and the answer follows from
[Asset vs Asset Unit](/concepts/asset-vs-asset-unit): individual items are
reached **through their asset**.

1. Find the asset — "Dell Latitude 5420".
2. Open it, then open the **Units** tab.
3. Pick the unit from the list, using its description, location or condition to
   tell it apart from its siblings.

> [!LIMITATION]
> There is no screen that lists every asset unit in the organization, and no way
> to search for a unit directly by serial number or asset tag. Everywhere the
> application asks you to choose a unit — adding one to a borrowing or a
> transaction — you find it by choosing its asset first. Recording a
> distinguishing **description** on each unit when you create it makes this much
> easier later.

## Finding where something is

To answer "what is in Room 204?", work from the location rather than the asset:
open **Locations**, find the room, and use its **Units** tab. See
[Viewing what is in a location](/locations/units-in-a-location).

## Related articles

- [How do I search for an asset?](/how-do-i/search-for-an-asset)
- [Asset vs Asset Unit](/concepts/asset-vs-asset-unit)
