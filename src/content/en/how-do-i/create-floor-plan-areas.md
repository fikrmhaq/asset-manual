---
title: How do I create areas on a floor plan?
description: Draw a room onto a plan and link the shape to the location it represents.
order: 190
task: true
permissions:
  - floor-plan-area:create
keywords: [area, polygon, draw, shape, room outline, mark, denah, gambar area]
related:
  - how-do-i/upload-a-floor-plan
  - concepts/floor-plan
  - how-do-i/find-a-location-on-a-floor-plan
---

## What this does

Draws a shape on a [floor plan](/concepts/floor-plan) and links it to a location
inside the one the plan belongs to. That link is what turns the picture into
something the application can navigate.

## Before you begin

- The plan must be uploaded. See
  [How do I upload a floor plan?](/how-do-i/upload-a-floor-plan).
- The location the shape represents must already exist, and must be **inside**
  the plan's location — at any depth, but inside it.

> [!IMPORTANT]
> You cannot link an area to a location that is not within the one the plan
> depicts. Drawing a room from another building onto this floor's plan is
> refused, because a plan marking out somewhere it does not contain would mislead
> every reader afterwards.

## Steps

1. Open **Locations**, select the location, and open the **Floor plan** tab.
2. Select **Draw an area**.
3. Click the plan once for each corner of the room. The counter tells you how
   many you have placed; **at least three** are needed.
4. Choose the **Room this area represents** from the list of locations inside
   this one.
5. Select **Save area**.

The shape appears on the plan, labelled with the location it represents.

## Placing corners without a mouse

The editor also accepts corners by coordinate. Enter **Point X** and **Point Y**
as values between 0 and 1 — where `0, 0` is the top-left of the image and
`1, 1` the bottom-right — and select **Add point**.

**Undo point** removes the last corner placed, by either method.

## Shapes are proportional, not pixels

Corners are stored relative to the image rather than as pixel positions, which is
why a plan lines up correctly on a phone and on a large monitor alike.

## Changing an area

> [!LIMITATION]
> An area's shape cannot be adjusted corner by corner. To change one you delete
> the area and draw it again. In practice this matters little — rooms rarely
> change shape — but plan for a redraw rather than a nudge.

Deleting an area has no effect on the location it represented. The application
says so when it asks you to confirm.

## Working through a plan

Draw the areas in a consistent order — clockwise from the entrance, say — and
you will notice a missing room quickly. The **Areas on this plan** list beside
the image shows what has been drawn so far.

## Related articles

- [Floor plan](/concepts/floor-plan)
- [How do I find a location through a floor plan?](/how-do-i/find-a-location-on-a-floor-plan)
