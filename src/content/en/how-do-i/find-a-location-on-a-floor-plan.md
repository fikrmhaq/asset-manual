---
title: How do I find a location through a floor plan?
description: Follow the plan links from an item to the place it actually sits.
order: 200
task: true
permissions:
  - floor-plan:read
keywords: [find on map, locate, where is it, plan, visual, navigate, highlight, denah]
related:
  - concepts/floor-plan
  - how-do-i/view-an-asset-unit
---

## What this does

Uses the floor plans to answer "where do I physically walk to?" — starting from
an item and ending at a highlighted room on a picture.

## Starting from an item

1. Open the asset, then the **Units** tab, then the unit.
2. On the **Overview** tab, look at **Current location**. Beneath the location
   trail is a row of floor-plan links.
3. Select the outermost one. It opens that plan with the next step in highlighted.
4. Select the next link inward, and so on, as far as the plans go.

The row is a **trail**, not a single link: the site plan shows you which
building, the building plan shows you which floor, and so on.

## Why the trail exists

Plans are drawn for whatever level someone happened to photograph. The plan that
actually places a unit is usually one *above* it — a room is marked out on the
floor's plan, not on its own.

So the application offers every plan along the chain, each highlighting the next
step down. Nothing counts levels; the trail is as long as the plans you have
uploaded.

## What the plan tells you

Under the trail, a line of text says how precise the innermost plan is:

| It says | Meaning |
|---|---|
| This location has its own plan | The unit's location is itself drawn |
| Shown on the plan for X, where it is marked out | An area on X's plan marks the way in |
| Shown on the plan for X, which does not mark it out | X has a plan, but nothing is drawn for this location — it is somewhere inside |
| No floor plan available for this location or anything above it | Nobody has uploaded a plan for this part of the estate |

The last two are not faults. They mean a plan has not been drawn or uploaded yet,
and the written location trail is still complete and correct.

## Starting from a location

Open **Locations**, select the location, and open its **Floor plan** tab. You get
the plan with all of its areas drawn, and you can select an area to go to the
location it represents.

## Related articles

- [Floor plan](/concepts/floor-plan)
- [How do I create areas on a floor plan?](/how-do-i/create-floor-plan-areas)
