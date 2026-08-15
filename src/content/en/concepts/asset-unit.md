---
title: Asset Unit
description: One individual physical item — the thing that actually has a location and a condition.
order: 30
keywords: [asset unit, unit, physical item, individual, serial, copy, unit aset]
related:
  - concepts/asset-vs-asset-unit
  - concepts/history
  - how-do-i/record-a-change-to-a-unit
---

An **asset unit** is one individual physical item. If you can point at it, walk
up to it, or carry it out of the building, it is a unit.

Every unit belongs to exactly one [asset](/concepts/asset), and an asset can have
any number of units.

## Why the application tracks them separately

Accountability is about individual objects. You cannot lend out "a model of
laptop", put it in Room 204, or record that it was dropped down the stairs. Each
of those statements is about one machine.

So the unit is what carries:

- **[Location](/concepts/location)** — where it physically is
- **[Condition](/concepts/condition)** — what state it is in
- **[Lifecycle state](/concepts/lifecycle-state)** — where it is in its working life
- **[History](/concepts/history)** — how those three changed over time
- **Borrowings** — every loan it has been on
- **Transactions** — every recorded event affecting it
- **Department** — which part of the organization is responsible for it
- **Its own attribute values** — serial number, asset tag, anything that differs between items

## What a unit inherits

A unit does not carry its own classification, vendor or institution. Those come
from its asset, and are the same for every unit under it.

## How a unit begins

A new unit starts at `state:REGISTERED` with **no condition and no location
recorded**. That is not an incomplete record — it means "on the books, not yet in
service".

It becomes usable when you record its first change, which must set both a
condition and a location. See
[How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit).

## Finding a unit

Units are reached through their asset: open the asset, then the **Units** tab.

> [!LIMITATION]
> There is no screen listing every unit in the organization, and no way to search
> for one directly by serial number or asset tag. Every place that asks you to
> pick a unit — a borrowing, a transaction — starts from the asset. Giving each
> unit a distinguishing **description** when you create it makes them much easier
> to tell apart later.

## Telling units apart

Units of the same asset look alike in a list. Three things distinguish them:

1. The **description** you gave the unit.
2. Its current **location** and **condition**.
3. Its unit-scoped **attribute values**, such as a serial number, if attributes
   have been configured for that classification.

## Related articles

- [Asset vs Asset Unit](/concepts/asset-vs-asset-unit)
- [History](/concepts/history)
- [How do I add asset units?](/how-do-i/add-an-asset-unit)
