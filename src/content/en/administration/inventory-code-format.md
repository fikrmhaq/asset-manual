---
title: Inventory code format
description: Designing the shape of your institution's inventory codes, and what each choice costs you at registration.
order: 20
permissions:
  - inventory-code-format:read
  - inventory-code-format:update
keywords:
  - inventory code
  - nomor inventaris
  - format
  - numbering
  - code format
  - sequence
  - number composition
  - separator
related:
  - asset-units/identifying-units
  - administration/reference-lookups
  - how-do-i/add-an-asset-unit
---

Every asset unit gets an **inventory code** when it is registered — the number
that goes on its label. This screen decides what that number looks like for your
institution.

Find it under **Organization › Inventory code format**. If you administer more
than one institution, it is also a tab on each institution's own page.

## What a format is

A row of chips. Each chip is either a **value** the application fills in, or a
**separator** you choose between them. The default is:

```text
Institution code  -  Registration year  -  Sequence     →  ALM-1-2026-00042
```

You rearrange the chips, add and remove values, and pick the separators. A live
preview above the Save button shows what a code would look like — built from
example values, so no number is used up by looking at it.

You never type a field name or an expression. The values on offer are a fixed
list, which is the whole reason this screen is safe to hand to an administrator.

## The values you can use

| Value | Comes from | Always available? |
|---|---|---|
| **Institution code** | The owning institution | Yes |
| **Registration year** | The year the unit is registered, four digits | Yes |
| **Registration year (2-digit)** | The same year, two digits | Yes |
| **Classification code** | The asset's classification, twelve digits | Yes |
| **Classification label** | The classification's name, made safe for a code | Yes |
| **Department code** | The department the unit is assigned to | **No** |
| **Funding source code** | The funding source on the asset's contract | **No** |
| **Number composition** | Typed by whoever registers the unit | **No** |
| **Sequence** | Counted up by the application | Yes |

"Always available" is the important column, and [Values that are not always
there](#values-that-are-not-always-there) explains why.

## Separators

Four characters are offered: `-`, `_`, `.` and `/`.

Nothing else is, and that is deliberate rather than an oversight. The code
travels inside a web address every time someone scans a label, and a character
that cannot survive that trip would produce stickers that do not work — which
you would only discover after they were on the equipment.

> [!TIP]
> `/` is there for institutional numbering written the way correspondence is
> numbered — `027/1234/BID.1/2026`. Use it if that is the convention your office
> already keeps on paper. Codes that already exist are untouched.

## Every code needs something that varies

A format must contain a **Sequence**, a **Number composition**, or both. The
builder will not let you remove the last one, and says why if you try.

The reason is arithmetic: everything else in a format is shared by whole groups
of units. Twelve laptops registered this year, in one institution, under one
classification, all render the same text. Without something that varies, all
twelve would get the same code.

### Sequence — counted for you

The application allocates the number, five digits, and it always sits at the end.
It restarts whenever the text in front of it changes: put the year in your format
and numbering restarts each January; leave it out and the count runs on forever.

Nobody types anything, and two people registering at the same moment cannot
collide.

### Number composition — typed by the registrar

Use this when your institution already maintains its numbering somewhere else — a
register, a spreadsheet, a ledger — and the number in that book is the number that
must go on the label.

Whoever registers a unit types the value. The application stores exactly what
they typed and never adjusts, increments or interprets it: `001-02-03` has
internal meaning the application does not understand, so guessing at the next one
would be worse than useless.

> [!IMPORTANT]
> A format with a **Number composition and no Sequence** means every unit needs
> its own typed value, including every unit of a procurement batch. Registering
> forty units from one contract line means supplying forty values, and no two may
> repeat. The builder warns about this the moment you remove the Sequence.
>
> Keeping both is the middle path: one typed value covers a whole batch, and the
> Sequence tells the units within it apart.

## Values that are not always there

Three values can be missing at the moment a unit is registered:

| Value | Missing when |
|---|---|
| **Department code** | The unit is not assigned to a department |
| **Funding source code** | The asset has no contract, the contract names no funding source, or that funding source has no code |
| **Number composition** | Nobody typed one |

When a format needs one of these and it is not there, **registration is
refused**. The message names what is missing.

The application does not leave the segment out and it does not substitute a
blank. Either would produce a code like `ALM--2026-00042` — permanent, printed,
and wrong. Refusing is the only outcome that does not put a bad number on a
sticker.

> [!WARNING]
> Adding one of these values to your format makes it a **requirement for every
> future registration**. Choosing **Department code** means nobody can register a
> unit without assigning a department first. The builder warns you at the moment
> you add the chip; it is a legitimate choice, just not one to discover later.

### Funding source codes are the usual trip-up

**Funding source code** is the one that catches people, because the code it needs
is not the funding source's name. `Dana Bos` is called `BOS`, and no rule turns
one into the other — so the application does not try. Funding sources that
predate this feature have no code at all until an administrator assigns one.

If registration is refused for a missing funding source code, go to
**Organization › Lookups › Funding sources**, find the row flagged **No code
yet**, and set its code. See [Reference lookups](/administration/reference-lookups).

## Changing a format later

Changing the format affects **only units registered afterwards**. Codes already
issued keep exactly the characters they were given, and so do the labels carrying
them.

This is not a limitation to work around — it is the point. A code identifies a
unit; it does not describe the unit's current state. If a re-designed format
rewrote old codes, every sticker already on a cabinet would become wrong at once,
and there is no way to recall a sticker.

The practical consequence: after a format change your institution runs two shapes
side by side until the older units are retired. That is expected, and both are
equally valid.

> [!NOTE]
> The same applies to editing your institution's own **code**. Rename `ALM-1` to
> `ALM-2` and codes already issued still read `ALM-1-…`; only units registered
> afterwards take the new one.

## Length

A code cannot exceed 64 characters, and the builder checks the **worst case**
when you save rather than waiting for a registration to fail.

If your format could ever produce something too long, it is refused now, with the
number it would reach — which is a problem you can act on, unlike one that
surfaces years later on a registration somebody urgently needs to complete.

**Classification label** is elastic: it takes whatever room the rest of the
format leaves, and the builder tells you how much of the classification catalogue
fits inside that room. A format may use it at most once.

## Who can change it

Two separate permissions, `perm:inventory-code-format:read` and
`perm:inventory-code-format:update`. They are deliberately not part of
`perm:institution:update`: designing your own institution's numbering is a
reasonable thing for an institution administrator to do, and it does not require
the ability to administer institutions in general.

Without the update permission the screen renders read-only — the chips are
visible, the controls are not.

## Related articles

- [Telling units apart](/asset-units/identifying-units)
- [Reference lookups](/administration/reference-lookups)
- [How do I add an asset unit?](/how-do-i/add-an-asset-unit)
