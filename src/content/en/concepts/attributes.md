---
title: Attributes
description: Extra fields configured per classification — and why some belong to the asset and some to the unit.
order: 60
keywords: [attribute, attribute definition, custom field, extra field, serial number, scope, atribut]
related:
  - concepts/asset-vs-asset-unit
  - concepts/classification
  - how-do-i/configure-attribute-definitions
---

The built-in fields on an asset — name, classification, vendor, description —
are the same for a laptop and a lawnmower. **Attributes** are how your
organization adds the fields that are specific to a kind of thing.

An administrator defines them; everyone else fills them in.

## Attributes belong to a classification

An attribute definition is attached to one
[classification](/concepts/classification). Assets filed under that
classification get the extra field; everything else does not.

So "Screen size" can exist for laptops without cluttering the form for chairs.

> [!NOTE]
> Change an asset's classification and you change which attributes apply. The
> edit form says so.

## Asset-scoped or unit-scoped

Every definition also declares **what it describes**, and this is the part worth
getting right.

| Scope | Describes | Fill in | Example |
|---|---|---|---|
| **Asset** | The kind of thing | Once, on the asset | Screen size, processor model, seating capacity |
| **Asset unit** | One physical item | Separately on each unit | Serial number, asset tag, registration number |

The test is simple: *could two identical items legitimately have different
values?* If yes, it is a unit attribute.

Put a serial number at asset scope and all twelve laptops share one serial
number, which is useless. Put screen size at unit scope and you type the same
number twelve times.

> [!IMPORTANT]
> Scope and classification are **permanent** once a definition exists. Neither
> can be changed afterwards, because values already recorded against the
> definition would become meaningless. Getting these two right at creation
> matters more than anything else about an attribute.

## Types

| Type | What it accepts |
|---|---|
| Text | Free text |
| Number | A number, optionally with a measurement unit |
| Yes or no | A checkbox |
| Date | A date |
| Selection | Intended for a fixed list of options |
| Reference | A pointer to another record |

Only a **Number** attribute can carry a measurement unit — "Screen size" in
inches, "Capacity" in litres. Measurement units are managed under
[Reference lookups](/administration/reference-lookups).

> [!LIMITATION]
> A **Selection** attribute has nowhere to store its list of allowed options, so
> in practice it behaves as free text: anything typed is accepted. Both the
> definition form and the value form say so where it applies. If you need
> consistent values, agree them with your colleagues and check them by eye — the
> application will not enforce them for you.

## Required attributes

A definition can be marked required. Required attributes must be filled in before
the set of values can be saved.

## Filling values in

Values are edited on their own tab, not on the create form:

- **Asset attributes** — the asset's **Attribute values** tab
- **Unit attributes** — the unit's **Attribute values** tab

Each tab shows every attribute that applies to that classification and scope, so
the tab is both the form and the record. Saving replaces the whole set at once.

If a classification has no attributes configured, the tab says so — that is
normal, not a fault.

## Deactivating a definition

Definitions are deactivated rather than deleted. Values already recorded are
kept; the field stops appearing on new records.

## Related articles

- [Asset vs Asset Unit](/concepts/asset-vs-asset-unit)
- [Classification](/concepts/classification)
- [How do I configure attribute definitions?](/how-do-i/configure-attribute-definitions)
