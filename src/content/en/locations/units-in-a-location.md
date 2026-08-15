---
title: Viewing what is in a location
description: The Units tab, and the difference between "Here only" and "Including inside".
order: 20
keywords:
  - what is in this room
  - here only
  - including inside
  - scope
  - inventory
  - stocktake
  - contents
related:
  - concepts/location
  - how-do-i/view-units-in-a-location
---

Open any location and its **Units** tab answers "what is in here?". Which
depends entirely on one control.

## The three tabs on a location

| Tab | Shows |
|---|---|
| **Info** | The location's own details — name, classification, parent, status |
| **Units** | The asset units recorded here |
| **Floor plan** | The plan image and its areas, if one has been uploaded |

## Here only, or including inside

The Units tab has a scope control with two settings, and choosing the wrong one
is the single most common source of confusion about locations.

### Including inside

Everything recorded **at this location and in every location nested within it**,
at any depth.

Ask this of a building and you get its whole contents — every floor, every room,
every cabinet. This is the setting for a stocktake.

Because the results come from many places, each row's **Location** column tells
you where that unit actually is. A location badge distinguishes units that are
*here* from those that are *inside* something below.

### Here only

Only units whose location is **exactly this one**.

Ask this of a room and you get what is in that room. Ask it of a building and you
will often get nothing — because in a well-structured hierarchy, nothing is
recorded against the building itself; everything is in its rooms.

> [!TIP]
> An empty **Here only** on a building or floor almost never means "empty". It
> means the units are recorded one or more levels further in. Switch to
> **Including inside**. The empty state says exactly this.

## Which to use

| You want to | Use |
|---|---|
| Inventory a whole building or site | Including inside |
| Check one room before locking it | Here only |
| Find out why a room looks empty | Including inside, then look at the Location column |
| Confirm nothing is recorded loosely against a floor | Here only |

## Related articles

- [Location](/concepts/location)
- [How do I view units in a location?](/how-do-i/view-units-in-a-location)
- [Floor plan](/concepts/floor-plan)
