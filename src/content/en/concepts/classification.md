---
title: Classification
description: The fixed reference hierarchy every asset and location is filed under.
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

## Read-only, on purpose

You cannot add, edit or remove classifications. This is external reference data,
maintained outside the application, and the whole point of it is that it means
the same thing everywhere. You can browse and search it under **Classifications**
in the sidebar.

Each entry has a twelve-character code and a name. The code is what makes an
entry unambiguous, and it appears alongside the name in most places.

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
