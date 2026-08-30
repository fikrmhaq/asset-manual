---
title: Understanding the Dashboard
description: The cards on the home screen, who sees which ones, and where each figure leads.
order: 40
keywords: [dashboard, home, summary, overview, statistics, counts, beranda, assessment, coverage]
related:
  - getting-started/finding-your-way-around
  - concepts/monthly-assessment
  - reports/the-reports
---

The Dashboard is the first screen after signing in. It is a summary, not a
workspace — nothing is edited here, and every figure links into the report that
produced it.

Everything it shows is limited to what you are allowed to see. If your roles are
scoped to one institution, these are your institution's numbers. If you are a
**department head**, these are your departments' numbers — not the institution's.

## The Dashboard is a set of cards, not one page

Each card needs its own permission, and you see only the cards you can open. A
card you cannot open is **absent**, not greyed out — the application does not
show you a panel it cannot fill.

| Card | Who sees it |
|---|---|
| **Monthly assessment coverage** | Anyone with `perm:asset-unit:read` |
| **Assessment activity** | Anyone with `perm:asset-unit:read` |
| **Units by location and condition** | Anyone with `perm:asset-unit:read` |
| **Units with no department** | Institution-wide roles only |
| **Assets, units, loans and the charts** | Anyone with `perm:report:read` |

> [!NOTE]
> A **department head** holds `perm:asset-unit:read` but not `perm:report:read`,
> so they get the first three cards and not the institution totals. Before the
> assessment feature existed the whole Dashboard needed `perm:report:read`, which
> meant department heads had no home screen at all. That is no longer the case.

## Monthly assessment coverage

One row per department, for the month you choose.

| Column | What it means |
|---|---|
| **Coverage** | How many of the department's units have been assessed this month, as a bar, a count and a percentage |
| **Not assessed** | The units still outstanding — click the number to list them |
| **Last activity** | When the department last recorded anything |

Coverage counts **distinct asset units**, not entries. Assessing the same unit
three times is one unit covered, not three. See
[Monthly assessment](/concepts/monthly-assessment).

Two rows deliberately show no percentage:

- **No person in charge** — the department has nobody assigned, so there is
  nobody to have done the work. The counts are still shown, but the thing to fix
  is the vacancy, not the coverage.
- **No units** — there is nothing to assess. This reads *No units* rather than
  0%, because 0% would describe a problem that does not exist.

If some units were assessed by someone outside the department, a line underneath
says so. Those do not count towards coverage, and the note exists so a shortfall
is explainable rather than mysterious.

## Assessment activity

Who recorded assessments, and how much.

**Entries** and **Units** are separate columns on purpose. Someone who recorded
the same unit three times has three entries and one unit — and only the second
number has anything to do with coverage. A contributor who was not the
department's person in charge is marked as such.

## Units by location and condition

Where the units are, crossed with what state they are in — the question you
actually ask before a repair round: *which room holds the damaged items?*

The **Show** toggle switches between counting units at each location exactly, and
including everything inside it. Rolled up, a unit in a room is also counted in its
building, so the rows overlap by design; the total underneath counts each unit
once regardless.

Every number in the grid is a link to the units behind it.

## Units with no department

Units nobody is responsible for. No assessment can be expected of them, because
there is no department to expect it from — so the fix is to assign them, not to
assess them. Department heads do not see this card, since they cannot open any of
the units in it.

## The institution figures

Below the assessment cards, if you hold `perm:report:read`:

| Figure | What it counts |
|---|---|
| **Assets** | Every asset record, with the number still active underneath |
| **Asset units** | Every individual physical item across all of those assets |
| **Loans out** | Borrowings currently holding units |
| **Past due** | Loans still holding units after their expected return date |

The gap between **Assets** and **Asset units** is normal. One asset record can
stand for a hundred physical items.

> [!TIP]
> **Past due** is the one figure worth checking daily. It is the only number on
> this screen representing something needing action rather than something already
> recorded.

Two charts follow: **Units by lifecycle state** and **Units by condition**. Units
with no condition recorded are counted as *Not recorded* — usually a unit that was
registered but never brought into service. Each chart links to its full report.

## If the Dashboard looks empty

- **The registry genuinely has nothing in it yet.** Start with
  [How do I create an asset?](/how-do-i/create-an-asset).
- **Your departments have no units.** Every department shows *No units*. Ask an
  institution administrator to assign units to your department.
- **You hold neither permission.** The Dashboard is not in your navigation at
  all — the application does not show you a screen you cannot fill.

## Related articles

- [Monthly assessment](/concepts/monthly-assessment)
- [How do I check assessment progress?](/how-do-i/check-assessment-progress)
- [Finding your way around](/getting-started/finding-your-way-around)
- [Understanding permissions](/getting-started/understanding-permissions)
- [The reports](/reports/the-reports)
