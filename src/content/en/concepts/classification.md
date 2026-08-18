---
title: Classification
description: The reference hierarchy every asset and location is filed under, and how to add your own entries to it.
order: 40
keywords: [classification, klasifikasi, code, hierarchy, leaf, most specific, picker]
related:
  - concepts/category
  - concepts/attributes
  - how-do-i/create-an-asset
---

A **classification** says what kind of thing something is. It comes from a fixed
government reference hierarchy that ships with the application — roughly fourteen
and a half thousand entries, arranged from broad groupings down to very specific
kinds of item.

Every [asset](/concepts/asset) and every [location](/concepts/location) must be
classified.

## Government entries are fixed

The hierarchy that ships with the application comes from outside it and cannot be
changed here. You cannot rename, move or remove any of those entries, and the
whole point of that is that they mean the same thing everywhere. You can browse
and search them under **Classifications** in the sidebar.

Each entry has a twelve-character code and a name. The code is what makes an
entry unambiguous, and it appears alongside the name in most places.

## Adding your own

Sometimes the government list has nothing that fits — a piece of equipment
specific to your institution, or a kind of room that only your building has. You
can register your own entry for those, and it then behaves like any other
classification: it shows up in the picker, it can carry attributes, and it counts
in reports.

Additions are marked **Locally added** wherever they appear, so it is always
clear which entries came with the application and which your institution
registered.

### Where an addition can go

An addition can only be placed at the **most specific level** — under an entry
whose children are the individual items rather than further groupings. The **Add
entry** button appears only when you have drilled down far enough; if you cannot
see it, keep narrowing down.

This is not an arbitrary restriction. Adding beneath a broader grouping would
turn an entry that assets are already filed under into a grouping, and every one
of those assets would become invalid.

### The code is assigned for you

You choose the name; the application assigns the twelve-character code. It is
issued from the far end of the available range so it can never clash with a code
a future government update introduces.

### Who can see it

When you add an entry you choose whether it is for **your institution only** or
for **all institutions**. An entry belonging to one institution is invisible to
the others — it does not appear in their picker, their searches or their reports.

Only a system administrator can create an entry for all institutions, or share an
existing one with everybody afterwards.

> [!WARNING]
> Sharing an entry with all institutions cannot be undone. Once other
> institutions can file assets under it, taking it back would leave those assets
> pointing at something their users cannot see.

### Renaming and removing

An entry your institution added can be **renamed** at any time. The code never
changes, so assets and locations already filed under it are unaffected — only the
label they display changes.

It can be **deleted** only while nothing uses it. If any asset, location or
attribute definition refers to it, the deletion is refused and the message says
what is holding it. Reassign those records first.

There is no way to deactivate an entry — it is either in use, or it can be
removed outright.

## Only the most specific level can be chosen

This trips people up more than anything else about classifications.

When you pick a classification, the picker will only let you select an entry that
has **nothing beneath it** — the deepest level of that branch. You can browse
through the broader levels to reach it, but you cannot file an asset under a
broad grouping.

> [!IMPORTANT]
> If the picker will not let you select the entry you are looking at, it has
> children. Keep going down until you reach one that does not.

The reason is that everything that depends on classification — which
[attributes](/concepts/attributes) apply, how reports group things — needs a
single, precise answer. A half-specified classification would make those
questions unanswerable.

## Using the picker

The classification picker appears wherever a classification is needed. It offers
two ways to work:

- **Search** by name or code, if you know roughly what you are looking for.
- **Browse** down one level at a time, if you do not.

The trail across the top shows where you are, and you can step back up it.

## What a classification decides

| It decides | How |
|---|---|
| Which attributes apply | Attribute definitions are configured per classification |
| How reports group | The **By classification** report counts assets under each one |
| What the record is | The name and code appear on the asset and in exports |

## Changing an asset's classification

You can change it by editing the asset. Be aware that it also changes **which
attributes apply** — attribute definitions belong to a classification, so a
different classification means a different set of extra fields.

## Classifying a location

Locations are classified too, from the same hierarchy and with the same
most-specific-level rule. A location's classification is set when it is created
and is shown afterwards as a fixed detail.

## Related articles

- [Category](/concepts/category)
- [Attributes](/concepts/attributes)
- [How do I create an asset?](/how-do-i/create-an-asset)
