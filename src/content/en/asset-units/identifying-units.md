---
title: Telling units apart
description: Twelve identical laptops, twelve identical rows. How to make them distinguishable.
order: 10
keywords: [identify, serial number, asset tag, distinguish, which one, label, barcode, description]
related:
  - concepts/asset-unit
  - concepts/attributes
  - how-do-i/add-an-asset-unit
---

Units of the same asset are identical by definition. Making them tellable apart
is something you have to do deliberately, and it is much easier at creation than
six months later.

## Its inventory code

Every unit is given an **inventory code** when it is registered — something like
`ALM-1-2026-00042`. It is built from your institution's code, the year, and a
running number, and the application assigns it. You cannot choose it, and it
never changes: not when the unit moves department, not when the asset is
transferred to another institution, not even if the institution's own code is
later edited.

That permanence is the point. Once a code is printed on a sticker and that
sticker is on a machine, nothing the system does afterwards can be allowed to
make the sticker wrong.

The code appears at the top of the unit's Overview tab, and you can print it as a
label — see [Printing unit labels](/asset-units/printing-labels).

> [!NOTE]
> A unit whose asset has no owning institution shows **Not assigned** instead.
> The code is built from the institution, so there is nothing to build one from.
> Set an institution on the asset and units registered afterwards will get codes.

## The three things that distinguish a unit

### 1. Its description

The one field you are offered when creating a unit, and the one that shows up in
every picker — when adding a unit to a borrowing or a transaction, the
description is most of what you have to go on.

> [!TIP]
> Write something durable and specific. A serial number fragment, an asset tag,
> or a permanent characteristic works. Where it currently sits does not — units
> move, and a description reading "Room 204" is wrong the first time it does.

### 2. Its current location and condition

Shown on every unit list. Useful for finding an item now, useless as an
identifier over time.

### 3. Its unit-scoped attributes

The proper answer for serial numbers, asset tags and registration numbers. An
administrator configures an attribute at **unit** scope against the
classification, and each unit then gets its own value. See
[Attributes](/concepts/attributes).

This is the one that scales. It is a real field, it appears on the unit's
Attribute values tab, and it cannot be confused with anything else.

> [!IMPORTANT]
> The attribute must be configured at **Asset unit** scope, not Asset scope. At
> asset scope all twelve laptops share one serial number, which is useless — and
> scope cannot be changed after the definition exists.

## What you cannot do

> [!LIMITATION]
> Attribute values are **not searchable**. There is no way to type a serial
> number into a search box and find the unit that carries it. Apart from scanning
> a label, units are reached through their asset: find "Dell Latitude 5420", open
> the Units tab, and look down the list.
>
> This is worth knowing before you design anything around serial numbers.
> Recording them is valuable for identification once you have the unit in front
> of you; it will not help you find the unit from the number alone. The inventory
> code is the identifier that does work in reverse, because scanning its label
> goes straight to the record.

## A practical convention

For an organization registering units in batches, this works well:

1. **Print the label** and put it on the physical item. That covers finding the
   record from the object — scan it, or type the code.
2. Give every unit a **description** naming something permanent about that
   particular item.
3. Configure a **unit-scoped attribute** for the serial number, and fill it in.

The first step is the one that closes the loop between the shelf and the system.
The other two are what let you tell two units apart on screen, where there is no
sticker to look at.

## Related articles

- [Asset Unit](/concepts/asset-unit)
- [Attributes](/concepts/attributes)
- [How do I add an asset unit?](/how-do-i/add-an-asset-unit)
