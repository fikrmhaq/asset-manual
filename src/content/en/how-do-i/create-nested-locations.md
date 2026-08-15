---
title: How do I create nested locations?
description: Build out a site, building, floor and room structure.
order: 160
task: true
permissions:
  - location:create
keywords: [nested, hierarchy, parent, child, structure, tree, sub-location, inside]
related:
  - how-do-i/create-a-location
  - concepts/location
  - locations/units-in-a-location
---

## What this does

Builds the containment structure of your estate — which places are inside which
other places.

There is no separate "sub-location" screen. A nested location is an ordinary
location that names a parent.

## Work outside in

Create the outermost place first, then work inward. Each level names the one
above it as its parent.

```text
Main Campus              ← no parent (top-level)
└── Administration Building   ← parent: Main Campus
    └── First Floor           ← parent: Administration Building
        └── Room 204          ← parent: First Floor
            └── Cabinet A     ← parent: Room 204
```

## Steps

1. Create the top-level location, leaving **Inside another location** empty. See
   [How do I create a location?](/how-do-i/create-a-location).
2. Create the next level down, choosing the location you just made as its parent.
3. Repeat inward as far as is useful.

When choosing the parent, the picker lets you either search by name or open a
location to see what is already inside it — which is the safer option when names
repeat.

## How deep should you go?

As deep as you would actually record a unit. If your records never get more
precise than "Workshop Building", there is no point creating its rooms.

There is no limit on depth and nothing counts the levels; the structure can be
different in different parts of your estate.

## Viewing the structure

The **Locations** list has a **tree view** that shows containment directly —
expand a location to see what is inside it. The list view is better for finding
one place by name; the tree is better for understanding the shape.

Each location's own page also has an **Inside this location** section listing its
direct children.

## Rearranging later

A location's parent can be changed by editing it, with two restrictions:

- A location cannot be its own parent.
- A location cannot be moved inside one of its own descendants — you cannot put a
  building inside one of its own rooms.

Units already recorded in a location move with it, because they are recorded
against the location, not against its path.

## Related articles

- [Location](/concepts/location)
- [Viewing what is in a location](/locations/units-in-a-location)
