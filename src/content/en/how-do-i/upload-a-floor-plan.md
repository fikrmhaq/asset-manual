---
title: How do I upload a floor plan?
description: Attach a plan image to a location so its rooms can be drawn on.
order: 180
task: true
permissions:
  - floor-plan:update
keywords: [floor plan, denah, upload, image, map, plan, drawing, layout]
related:
  - concepts/floor-plan
  - how-do-i/create-floor-plan-areas
---

## What this does

Attaches an image to a [location](/concepts/location) — a floor plan, a site map,
a room layout. Once uploaded, you can draw the locations inside it onto the
picture. See [Floor plan](/concepts/floor-plan).

## Before you begin

- The location must already exist.
- Have the image ready as a **JPEG or PNG**, up to **10 MB**. PDFs and SVGs are
  not accepted — the editor draws on a bitmap.
- Choose the right location for it. A plan of a floor belongs to that floor, not
  to the building.

> [!TIP]
> Crop the image to the plan itself before uploading. Large margins waste screen
> space and make the shapes you draw smaller and harder to place.

## Steps

1. Open **Locations** and select the location.
2. Open the **Floor plan** tab.
3. Select **Upload floor plan**.
4. Choose the image file.

The plan appears at its natural proportions, ready for areas to be drawn on it.

![A location's Floor plan tab after upload](/screenshots/floor-plans/uploaded-plan.gif)

## What happens next?

The plan on its own shows nothing about your locations — it is just a picture
until you mark rooms on it. See
[How do I create areas on a floor plan?](/how-do-i/create-floor-plan-areas).

Once areas exist, units in those locations gain a link from their own page
leading to this plan.

## Replacing a plan

**Replace floor plan** uploads a new image over the existing one.

> [!WARNING]
> Replacing the image **deletes every area drawn on the old one**. The shapes
> were positioned against the old picture and would not line up with a new one.
> If you are replacing a plan, expect to redraw its areas.

## Removing a plan

**Remove floor plan** deletes the image and its areas. The locations they
represented are completely unaffected — the plan is a picture of the hierarchy,
not the hierarchy itself. The application asks you to confirm.

## Related articles

- [Floor plan](/concepts/floor-plan)
- [How do I create areas on a floor plan?](/how-do-i/create-floor-plan-areas)
