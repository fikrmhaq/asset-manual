---
title: Why can't I delete this?
description: Most things are deactivated, not deleted — and the few deletions that exist are protected.
order: 30
keywords: [delete, remove, cannot delete, hapus, deactivate, refused, in use]
related:
  - concepts/active-and-inactive
  - troubleshooting/why-is-this-action-unavailable
---

Two different situations, with different answers.

## There is no Delete, only Deactivate

For most records this is deliberate: the application deactivates rather than
deletes, so that history stays readable. See
[Active and inactive](/concepts/active-and-inactive).

Records that are **deactivated, never deleted**:

institutions · departments · users · assets · asset units · locations ·
attribute definitions · suppliers · contracts · vendors

Deactivating removes the record from selection lists for new work and marks it
inactive, while keeping every existing reference intact. It can always be
reversed with **Reactivate**.

> [!TIP]
> If you deactivated something by mistake, nothing is lost. Set the **Status**
> filter to *Inactive*, find it, and reactivate it.

## Delete exists but was refused

A few things genuinely delete — and the deletion is blocked while something still
depends on the record.

| Record | Refused when |
|---|---|
| A role | Any user still holds it |
| A measurement unit, contract type, funding source, transaction type or account code | Any record still references it |

This is protection, not an obstacle. Deleting a contract type that thirty
contracts point at would leave thirty contracts describing a type that no longer
exists.

### What to do

1. **Find what still depends on it.** For a role, check each user's Roles tab.
   For a lookup entry, look for contracts or transactions using it.
2. **Detach them** — assign users a different role, or change the records to a
   different type.
3. **Delete again.**

Or simply leave the entry in place. An unused lookup entry is untidy; it is not a
problem.

## Things that delete without complaint

| Record | Note |
|---|---|
| Contract line items | Assets already registered from them are unaffected |
| Floor plans | The locations they depict are unaffected |
| Floor-plan areas | The location the area represented is unaffected |
| Attachments | The file is removed |

Each asks you to confirm, and the confirmation says what will and will not be
affected. Read it — for floor plans in particular, deleting the plan removes
every area drawn on it.

## What can never be removed

- **Transactions.** Permanent by design, for anyone.
- **Audit entries.** Permanent by design, for anyone.
- **Unit history entries.** The timeline is a record of what happened; recording
  a correcting entry is how you fix a mistake.

## Related articles

- [Active and inactive](/concepts/active-and-inactive)
- [Why is this action unavailable?](/troubleshooting/why-is-this-action-unavailable)
