---
title: Known limitations
description: What the application currently cannot do, and how to work around each one.
order: 40
keywords: [limitation, cannot, missing feature, workaround, not supported, known issue]
related:
  - troubleshooting/why-is-this-action-unavailable
  - troubleshooting/why-cant-i-save-this-form
---

Things the application does not currently do. Each is listed with its practical
consequence and the way people work around it — none of them prevents you running
the system, but knowing them saves an afternoon of looking for a feature that is
not there.

## Passwords are set by an administrator

There is no password change and no password reset. A user cannot change their own
password, and the sign-in screen has no "forgot password" link.

**What to do:** when someone forgets theirs, an administrator sets a new one on
their user record and passes it on securely. Choose good initial passwords,
because they are long-lived.

## Individual units are found through their asset

There is no screen listing every asset unit, and no way to search for one
directly by serial number or asset tag. Every place that asks you to choose a
unit — a borrowing, a transaction — starts from the asset.

**What to do:** give each unit a distinguishing **description** when you create
it. It is the field that makes siblings tellable apart in every picker.

## Selection attributes accept anything

An attribute of type **Selection** has nowhere to store its list of allowed
options, so it behaves as free text.

**What to do:** put the permitted values in the attribute's **Description** so
whoever fills it in can see them, and check consistency by eye. Both the
definition form and the value form warn about this where it applies.

## Floor-plan areas are redrawn, not adjusted

An area's shape cannot be edited corner by corner. Changing a shape means
deleting the area and drawing it again.

**What to do:** budget a redraw. It matters little in practice — rooms rarely
change shape — but note that **replacing a plan image deletes every area on it**,
so a new photograph of the same floor means redrawing all of them.

## A unit's department cannot be set from the unit screen

The responsible department is shown on a unit's Overview tab, but the edit dialog
there offers only **Description**.

**What to do:** if departmental responsibility matters to your records, raise it
with whoever administers your installation.

## Extensions are not linked to the loan they continued

[Extending a borrowing](/how-do-i/extend-a-borrowing) closes the current record
and opens a new draft. Both records are correct, but nothing connects them and
neither says it is part of a chain.

**What to do:** write the connection into the new record's **Description** —
"Extension of the loan to J. Santoso originally due 10 March."

## The borrowings list has no date filter

The list filters by status, institution and overdue, but not by date.

**What to do:** use the **Borrowings report** instead, which does have a date
range. See [The eight reports](/reports/the-eight-reports).

## Exports contain only the rows on screen

**Export CSV** writes exactly what is displayed. For a paged report that means
the current page — not the whole result.

**What to do:** either use a grouped report, whose export is complete because
nothing is paged, or narrow the filters into slices and export each. See
[How do I export data?](/how-do-i/export-data).

## Selection lists load at most 100 entries

Dropdowns that choose a supplier, contract, institution, vendor or reference
entry load up to 100 rows.

**What to do:** this is comfortably more than these lists should hold, so in
practice it only bites if a list has grown unusually large. Keeping reference
lists tight is worth doing anyway. Editing a record whose current value falls
outside the loaded hundred keeps that value selectable, so nothing is silently
dropped.

## Description is required where the form does not say so

On a unit's **Record a change**, the description is required even though it is
not marked and the hint suggests blank fields carry forward.

**What to do:** always write one. It is what the history timeline shows
afterwards, so it is worth writing well rather than working around. See
[Why can't I save this form?](/troubleshooting/why-cant-i-save-this-form).

## The audit log is not limited to your institution

Everything else respects organization scope. The audit log covers every
institution, and the screen says so.

**What to do:** grant `perm:audit-log:read` sparingly, since it reveals changes
to records the holder could not otherwise see.

## Related articles

- [Why is this action unavailable?](/troubleshooting/why-is-this-action-unavailable)
- [Why can't I save this form?](/troubleshooting/why-cant-i-save-this-form)
