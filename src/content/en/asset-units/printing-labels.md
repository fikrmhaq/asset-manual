---
title: Printing unit labels
description: Putting a scannable label on the physical item, and what happens when someone scans it.
order: 20
keywords: [label, print, qr, qr code, sticker, scan, barcode, inventory code, nomor inventaris]
related:
  - asset-units/identifying-units
  - concepts/asset-unit
  - how-do-i/add-an-asset-unit
---

A label closes the gap between the object on the shelf and its record in the
system. Point a phone at it and you are looking at the unit.

## Printing one label

Open the unit, then **Print label** on its Overview tab. A sheet opens with the
label on it and a **Print** button that hands over to your browser's normal print
dialogue — so paper size, margins and which printer are all decided there, the
way they are for any other page.

The application shell disappears on paper. The sheet carries labels and nothing
else.

## Printing every label for an asset

Open the asset, go to the **Units** tab, then **Print all labels**. You get one
sheet with a label for every unit of that asset, two to a row, ready to cut.

This is the practical order for a delivery: register the asset with its unit
count, print the sheet once, and label the boxes as you unpack them.

## What is on a label

- The **QR code**
- Your **institution**
- The **asset name**
- The **inventory code**, in large type
- The **classification**, as both its code and its name
- The **department**, if the unit has one

## What is deliberately not on it

Not the location. Not the condition. Not whether it is on loan, and not who has
it.

Those change — often. A label is printed once and may stay on a machine for
years, and there is no way to recall it and correct it. A sticker claiming a
laptop is in Room 204 becomes a lie the first time someone carries it out, and a
confident lie is worse than no information at all.

Everything that changes is on the record the QR code opens. That is the division:
the sticker says *which unit this is*, the record says *how it is doing*.

## What happens when someone scans it

The QR code holds a web address, not the unit's details. Scanning it opens the
application at that unit.

Because it is an address, any phone camera can read it — no special app.

> [!IMPORTANT]
> Scanning does **not** bypass signing in. Someone who is not logged in lands on
> the login screen first and is taken to the unit afterwards. A label on a wall
> is readable by anyone who walks past it; the record behind it is not.

If the code belongs to a unit in another institution, the result is the same as a
code that was never issued: nothing found. The message names the code so you can
check it against the sticker in your hand.

## If a unit has no code

You will see **Not assigned** instead of a code, and no print button.

An inventory code is built from the owning institution, so a unit whose asset has
no institution has nothing to build one from. Set an institution on the asset;
units registered after that get codes. Existing ones keep their blank, because a
code that appeared later would not match anything already printed.

## Practical notes

- **Print at a size where the QR stays square and crisp.** Shrinking a label to
  fit more on a page is the usual reason scanning stops working.
- **Damage tolerance is built in.** The code carries enough redundancy to survive
  a scuffed corner, which is why the inventory code is also printed in large type
  — when the QR finally gives up, a person can still read the code and type it.
- **Reprinting is safe.** The code never changes, so a replacement label is
  identical to the one it replaces.

## Related articles

- [Telling units apart](/asset-units/identifying-units)
- [Asset unit](/concepts/asset-unit)
