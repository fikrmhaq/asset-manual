---
title: How do I view units in a location?
description: List what is in a room, a building or a whole site.
order: 170
task: true
permissions:
  - location:read
keywords: [what is in, contents, inventory, stocktake, room contents, isi ruangan]
related:
  - locations/units-in-a-location
  - concepts/location
---

## Steps

1. Open **Locations** in the sidebar.
2. Find the location. Use the **tree view** to browse the structure, or the list
   view to search by name.
3. Select the location.
4. Open the **Units** tab.
5. Choose the scope:
   - **Including inside** — everything here and in every location nested within.
   - **Here only** — only units recorded at exactly this location.

## Reading the results

Each row shows the unit, the asset it belongs to, its current location, lifecycle
state and condition.

The **Location** column matters when you are using *Including inside*: the rows
come from many different places, and this is what tells you which. Rows are also
tagged to show whether the unit is *here* or *inside* something further in.

Selecting a row opens the unit.

## If the list is empty

For a building or floor, switch to **Including inside** first. Nothing is
usually recorded against a building itself — its contents live in its rooms.

If both scopes are empty, then nothing has been recorded there. Either the
location is genuinely unused, or units that should be there have never had a
location recorded. A unit with no location at all appears in the **By location**
report under *No location recorded*.

## Doing a stocktake

1. Open the building or site.
2. Set the scope to **Including inside**.
3. Work through the list against what you can actually see.
4. For anything in the wrong place,
   [record the move](/how-do-i/move-an-asset-unit); for anything damaged,
   [record the condition](/how-do-i/change-a-unit-condition).

> [!TIP]
> The **By location** report covers the same ground for the whole organization at
> once, and can be exported. See [How do I run a report?](/how-do-i/run-a-report).

## Related articles

- [Viewing what is in a location](/locations/units-in-a-location)
- [How do I move an asset unit?](/how-do-i/move-an-asset-unit)
