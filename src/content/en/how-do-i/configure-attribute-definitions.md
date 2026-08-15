---
title: How do I configure attribute definitions?
description: Add extra fields to a classification, at asset or unit level.
order: 330
task: true
permissions:
  - attribute-definition:create
keywords: [attribute, custom field, extra field, serial number, definition, atribut, configure]
related:
  - concepts/attributes
  - concepts/classification
---

## What this does

Adds an extra field to every asset — or every unit — filed under a particular
[classification](/concepts/classification). See
[Attributes](/concepts/attributes) for the concept.

## Before you begin

Two decisions that **cannot be undone**, so make them deliberately:

1. **Which classification.** The field appears only for records filed under it.
2. **Which scope.** Does it describe the kind of thing, or one physical item?

> [!CAUTION]
> Classification and scope are **permanent** once the definition exists. Neither
> can be changed afterwards, because values already recorded against the
> definition would become meaningless. If you get one wrong, deactivate the
> definition and create a replacement.

The scope test: *could two identical items legitimately have different values?*

| Answer | Scope | Examples |
|---|---|---|
| No — it is true of the model | **Asset** | Screen size, processor, seating capacity |
| Yes — it differs per item | **Asset unit** | Serial number, asset tag, registration |

## Steps

1. Open **Organization › Attribute definitions**.
2. Select **New definition**.
3. Choose the **Classification**.
4. Enter the **Name** of the field.
5. Choose the **Type**.
6. Choose the **Scope** — Asset or Asset unit.
7. Tick **Required** if a value must always be given.
8. For a Number type, tick **Carries a measurement unit** and choose the unit if
   the value is a measurement.
9. Add a **Description** to explain what should be entered.
10. Save.

## Field reference

| Field | Required | Description |
|---|---|---|
| Classification | Yes | Permanent. Which records get this field |
| Name | Yes | The field label people will see |
| Type | Yes | Text, Number, Yes or no, Date, Selection, Reference |
| Scope | Yes | Permanent. Asset or Asset unit |
| Required | No | Whether a value must be provided |
| Carries a measurement unit | No | **Number types only** |
| Measurement unit | No | Chosen when the above is ticked. Can be created from here |
| Description | No | Up to 500 characters. Guidance for whoever fills it in |

## Types

Only a **Number** attribute can carry a measurement unit; the form refuses the
combination for any other type.

> [!LIMITATION]
> A **Selection** attribute has nowhere to store its list of allowed options, so
> it behaves as free text — anything typed is accepted. Both this form and the
> value form say so where it applies. If you need consistent values, put the
> permitted options in the **Description** and check them by eye; the application
> will not enforce them.

## What happens next?

The field appears immediately on the **Attribute values** tab of every asset — or
unit — filed under that classification. Existing records get it too, empty until
someone fills it in.

## Editing and deactivating

Name, type, required, measurement unit and description can all be changed later.
Classification and scope cannot.

Definitions are deactivated rather than deleted: values already recorded are
kept, and the field stops appearing on new records.

## Related articles

- [Attributes](/concepts/attributes)
- [Classification](/concepts/classification)
