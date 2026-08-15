---
title: Understanding the Dashboard
description: What the four figures on the home screen count, and where each one leads.
order: 40
keywords: [dashboard, home, summary, overview, statistics, counts, beranda]
related:
  - getting-started/finding-your-way-around
  - reports/the-eight-reports
---

The Dashboard is the first screen after signing in. It is a summary, not a
workspace — nothing is edited here, and every figure is a link into the report
that produced it.

Everything it shows is limited to what you are allowed to see. If your roles are
scoped to one institution, these are your institution's numbers, not the whole
organization's.

## The four figures

| Figure | What it counts |
|---|---|
| **Assets** | Every asset record, with the number that are still active shown underneath |
| **Asset units** | Every individual physical item across all of those assets |
| **Loans out** | Borrowings currently holding units — those that are running or already past due |
| **Past due** | Loans still holding units after their expected return date |

The gap between **Assets** and **Asset units** is normal and expected. One asset
record can stand for a hundred physical items. If the two numbers are close, most
of your assets have a single unit each; if units far outnumber assets, you buy in
batches. Neither is a problem.

> [!TIP]
> **Past due** is the one figure worth checking daily. It is the only number on
> this screen that represents something needing action rather than something
> already recorded.

## The two breakdowns

Below the figures, two charts count asset units:

- **Units by lifecycle state** — how many are in use, in storage, on loan, under
  maintenance, and so on. See [Lifecycle state](/concepts/lifecycle-state).
- **Units by condition** — how many are good, fair, poor, damaged or
  unserviceable. See [Condition](/concepts/condition).

Units with no condition recorded are counted separately as *Not recorded*. That
group is worth watching: a unit with no condition has usually been registered but
never brought into service. See
[How do I record a change to an asset unit?](/how-do-i/record-a-change-to-a-unit).

Each chart has a **Full report** link to the report it summarises.

## If the Dashboard is empty

Two different reasons, with different remedies:

- **The registry genuinely has nothing in it yet.** Start with
  [How do I create an asset?](/how-do-i/create-an-asset).
- **You cannot see reports.** The Dashboard is built from report data and needs
  `perm:report:read`. Without it the Dashboard is not in your navigation at all —
  the application does not show you a screen you cannot fill.

## Related articles

- [Finding your way around](/getting-started/finding-your-way-around)
- [Understanding permissions](/getting-started/understanding-permissions)
- [The eight reports](/reports/the-eight-reports)
