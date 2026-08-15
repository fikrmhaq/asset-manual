---
title: How do I create a contract?
description: Record a procurement agreement so the things bought under it can be registered.
order: 220
task: true
permissions:
  - contract:create
keywords: [contract, kontrak, procurement, purchase, agreement, new contract, funding]
related:
  - concepts/contract
  - how-do-i/add-contract-items
  - how-do-i/create-a-supplier
---

## What this does

Records a procurement agreement. The contract is the header; what was actually
bought is recorded afterwards as
[contract items](/concepts/contract-item).

## Before you begin

Have the paperwork to hand. You need at minimum a **contract number** and a
**contract date**; everything else is optional and can be added later.

If you want to record the supplier, contract type or funding source and they do
not exist yet, you can create them from within this form — no need to leave and
come back.

## Steps

1. Open **Procurement › Contracts**.
2. Select **New contract**.
3. Enter the **Contract number**. It must be unique.
4. Set the **Contract date**.
5. Fill in whichever of the remaining fields apply.
6. Select **Create contract**.

![The New contract form](/screenshots/procurement/create-contract.gif)

## Field reference

| Field | Required | Description |
|---|---|---|
| Contract number | Yes | Up to 150 characters. Must be unique |
| Contract date | Yes | The date of the agreement |
| Supplier | No | The party it was executed with. Can be created from here |
| Contract type | No | From your own list. Can be created from here |
| Funding source | No | Where the money came from. Can be created from here |
| Contract value | No | Numeric, two decimal places |
| Account code | No | From your own list |
| Institution | No | The receiving institution. Defaults to yours |
| Receiving document | No | A reference for the delivery paperwork |
| Receiving date | No | Leave empty until the goods arrive |
| Notes | No | Free text |

Contract types, funding sources and account codes are lists your organization
maintains — see [Reference lookups](/administration/reference-lookups).

## Not received yet

Leaving **Receiving date** empty shows the contract as *Not received yet*. It is
a record of fact, not a switch: you can still add line items and register assets
against a contract with no receiving date.

## What happens next?

The contract is created and you land on its page, with an empty **Line items**
panel. Nothing has been bought until you add them.

1. [Add the contract items](/how-do-i/add-contract-items) — one per purchased
   line.
2. [Register each line as an asset](/how-do-i/register-an-asset-from-a-contract)
   as the goods arrive.

## Editing later

Contracts can be edited freely. Changing the header does not disturb the line
items or the assets already traced to them — the edit form says so.

## Related articles

- [Contract](/concepts/contract)
- [How do I add contract items?](/how-do-i/add-contract-items)
