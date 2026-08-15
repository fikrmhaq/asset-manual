---
title: How do I create a location?
description: Add a site, building, floor, room or any other place an item can be.
order: 150
task: true
permissions:
  - location:create
keywords: [create location, new location, add room, building, site, floor, lokasi baru]
related:
  - concepts/location
  - how-do-i/create-nested-locations
  - how-do-i/move-an-asset-unit
---

## What this does

Adds a place that [asset units](/concepts/asset-unit) can be recorded in.

## Before you begin

- Decide whether it sits **inside** another location. A building sits inside a
  site; a site sits inside nothing.
- Know its **classification**. Locations are classified from the same reference
  hierarchy as assets, and only the most specific level can be chosen.
- Create parents before children. You cannot place a room inside a building that
  does not exist yet.

## Steps

1. Open **Locations** in the sidebar.
2. Select **New location**.
3. Enter the **Name**.
4. Select the **Classification**.
5. For **Inside another location**, choose the parent — or leave it empty for a
   top-level location such as a site or campus.
6. Leave **Institution** on *Default to my institution*, or choose another.
7. Select **Create location**.

![The New location form](/screenshots/locations/create-location.gif)

## Field reference

| Field | Required | Description |
|---|---|---|
| Name | Yes | Up to 255 characters |
| Classification | Yes | Most specific level only |
| Inside another location | No | Empty means a top-level location |
| Institution | No | Defaults to yours |

## What happens next?

The location is created and can immediately be:

- chosen when [moving a unit](/how-do-i/move-an-asset-unit)
- given child locations of its own
- given a [floor plan](/how-do-i/upload-a-floor-plan)
- drawn as an area on the plan of a location above it

## Naming locations well

Names are what people search. Two habits help:

- **Make them unique enough to tell apart.** Three rooms called "Store" are
  indistinguishable in a search result. "Store — Workshop" is not.
- **Do not repeat the hierarchy in the name.** The application already shows the
  full trail, so "Main Campus / Admin Building / Room 204" as a *name* reads as
  "Main Campus / Admin Building / Main Campus – Admin Building – Room 204".

## Related articles

- [Location](/concepts/location)
- [How do I create nested locations?](/how-do-i/create-nested-locations)
