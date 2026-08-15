---
title: How do I move an asset unit?
description: Record that a physical item is now somewhere else.
order: 110
task: true
permissions:
  - asset-unit:record-history
keywords:
  - move asset
  - move laptop
  - relocate
  - change location
  - transfer
  - moved room
  - pindah
related:
  - how-do-i/record-a-change-to-a-unit
  - concepts/location
  - how-do-i/create-a-location
---

## What this does

Records that a physical item is now in a different [location](/concepts/location).

Moving is not a separate action in this application — it is a
[change recorded on the unit](/how-do-i/record-a-change-to-a-unit), alongside
condition and lifecycle state. To move something and change nothing else, fill in
the location and leave the other two alone.

## Before you begin

- The destination location must already exist. If it does not,
  [create it first](/how-do-i/create-a-location).
- Have a sentence ready for the description. It is required.

## Steps

1. Open the asset, then the **Units** tab, then the unit.
2. Open the **History** tab and select **Record a change**.
3. Set **Location** to where the item now is. Search by name, or open a location
   to browse what is inside it.
4. Leave **Condition** and **Lifecycle state** on *Unchanged*.
5. Write a **Description** — where it moved from and why.
6. Select **Record**.

> [!TIP]
> If the item was moved *because* something happened to it — it went for repair,
> or came back damaged — record the condition and lifecycle state in the same
> entry rather than making two. That is what the combined form is for.

## Choosing the destination

The location picker offers two ways to work:

- **Search** by name, if you know what the place is called.
- **Browse**, opening a location to see what is inside it, one level at a time.

Browsing is the more reliable of the two when several rooms share a name. Two
rooms called "Lab 2" look identical in a search result; opening the building
first makes clear which is which.

## What happens next?

The unit's current location updates immediately, and the move is added to its
history with the date. The old location keeps the unit in *its* history — you can
still see what was in a room last year.

If the new location or anything above it has a
[floor plan](/concepts/floor-plan), the unit's Overview tab now offers links to
those plans.

## Moving several units at once

There is no bulk move. Each unit is recorded individually, because each one is a
separate physical fact — and in practice a batch that genuinely moved together
usually needs the same short description, which makes the repetition quick.

## Related articles

- [How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit)
- [Location](/concepts/location)
- [Viewing what is in a location](/locations/units-in-a-location)
