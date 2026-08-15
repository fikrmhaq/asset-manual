---
title: How do I register an asset directly?
description: Put something on the registry that did not come from a procurement contract.
order: 15
task: true
permissions:
  - asset:create
keywords: [donated, donation, gift, self-built, migrated, no contract, hibah, direct]
related:
  - how-do-i/create-an-asset
  - how-do-i/register-an-asset-from-a-contract
  - concepts/asset
---

## What this does

Registers an [asset](/concepts/asset) with no procurement record behind it.

Not everything is bought. Items are donated, built in-house, transferred from
another body, or simply predate the register. All of them belong on the registry,
and none of them has a contract.

> [!NOTE]
> An asset with no contract is a **documented, normal case** — not missing data.
> Its Overview tab says "No procurement record" rather than leaving a field
> blank, so nobody later mistakes it for an incomplete entry.

## Before you begin

Decide whether this really is the right path. If the item came from a contract
that exists in the system, use
[Register an asset from a contract](/how-do-i/register-an-asset-from-a-contract)
instead — it makes the link for you, and the link cannot be added afterwards.

> [!IMPORTANT]
> An asset's procurement line is set **once**, at creation. There is no field for
> it on the asset form and no way to attach a contract to an asset later. If the
> asset should be traceable to a contract, register it from the contract.

## Steps

The procedure is the standard asset form:
[How do I create an asset?](/how-do-i/create-an-asset).

Complete it as normal. There is nothing extra to fill in and nothing to switch
off — an asset created this way simply has no contract attached.

## Recording where it came from

Since there is no contract to point at, record the provenance where a reader will
find it:

- Put it in the asset's **Description** — "Donated by the alumni association,
  March 2026".
- Attach the paperwork on the **Attachments** tab: a donation letter, a transfer
  note, a photograph.
- If your organization tracks such events formally, record a
  [transaction](/concepts/transaction) against the units once they exist, using a
  transaction type of your own.

## What happens next?

Exactly as for any other asset:

1. [Add asset units](/how-do-i/add-an-asset-unit) — one per physical item.
2. [Record each unit's first condition and location](/how-do-i/record-a-change-to-a-unit).

## Related articles

- [How do I create an asset?](/how-do-i/create-an-asset)
- [Asset](/concepts/asset)
