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
> number into a search box and find the unit that carries it. Units are always
> reached through their asset: find "Dell Latitude 5420", open the Units tab, and
> look down the list.
>
> This is worth knowing before you design a labelling scheme around serial
> numbers. Recording them is valuable for identification once you have the unit
> in front of you; it will not help you find the unit from the number alone.

## A practical convention

For an organization registering units in batches, this works well:

1. Give every unit a **description** carrying its physical label —
   "Asset tag AM-0412".
2. Configure a **unit-scoped attribute** for the serial number, and fill it in.
3. Put the same asset tag on the physical item.

Then the label on the object, the description in the picker, and the attribute on
the record all agree, and anyone holding the item can find its record.

## Related articles

- [Asset Unit](/concepts/asset-unit)
- [Attributes](/concepts/attributes)
- [How do I add an asset unit?](/how-do-i/add-an-asset-unit)
