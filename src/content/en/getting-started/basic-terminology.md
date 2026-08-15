---
title: Basic terminology
description: A one-page glossary of the words the application uses, with links to fuller explanations.
order: 70
keywords: [glossary, terminology, words, meaning, definitions, vocabulary, istilah]
related:
  - concepts/asset-vs-asset-unit
  - reference/glossary
---

Enough vocabulary to use the application on day one. Each term links to a fuller
explanation.

## The two that matter most

**[Asset](/concepts/asset)** — the master record for a *kind* of thing. "Dell
Latitude 5420 laptop" is one asset, however many you own.

**[Asset Unit](/concepts/asset-unit)** — one individual physical item. Twelve
laptops of that model are twelve asset units under one asset. The unit is what
has a location, a condition and a history.

> [!IMPORTANT]
> If you read only one article in this manual, read
> [Asset vs Asset Unit](/concepts/asset-vs-asset-unit). Most confusion in this
> application comes from these two being mistaken for each other.

## Describing an asset

**[Classification](/concepts/classification)** — a fixed government reference
list that says what kind of thing something is. Every asset and every location
must be classified, at the most specific level available.

**[Category](/concepts/category)** — a broader grouping above classifications.
Reference information only; you cannot edit it here.

**[Attribute](/concepts/attributes)** — an extra field configured for a
particular classification. Some describe the asset as a whole, some describe an
individual unit.

**[Vendor](/concepts/vendor-vs-supplier)** — the manufacturer or brand.

## Where things are

**[Location](/concepts/location)** — a place a unit can be: a site, a building, a
floor, a room. Locations nest inside one another.

**[Floor plan](/concepts/floor-plan)** — an image of a location with rooms drawn
onto it as shapes, each linked to the location it represents.

## The state of a unit

**[Lifecycle state](/concepts/lifecycle-state)** — where a unit is in its working
life: `state:REGISTERED`, `state:lifecycle/ACTIVE`, `state:IN_STORAGE`,
`state:BORROWED`, `state:UNDER_MAINTENANCE`, `state:DISPOSED`,
`state:DEACTIVATED`.

**[Condition](/concepts/condition)** — the physical state of a unit:
`state:GOOD`, `state:FAIR`, `state:POOR`, `state:DAMAGED`,
`state:UNSERVICEABLE`.

**[History](/concepts/history)** — the timeline of a unit's condition, location
and lifecycle state over time.

## Where things came from

**[Supplier](/concepts/vendor-vs-supplier)** — the party you signed the contract
with. Not the same as a vendor.

**[Contract](/concepts/contract)** — the procurement record.

**[Contract item](/concepts/contract-item)** — one purchased line on a contract.
Registering a line puts an asset and its units on the registry.

## Things that happen

**[Borrowing](/concepts/borrowing)** — a loan of one or more units to someone,
with an expected return date.

**[Transaction](/concepts/transaction)** — a permanent record of an event
affecting units. Cannot be edited once saved.

## Who owns and who is responsible

**[Institution](/concepts/institutions-and-departments)** — the organizational
unit that owns records. Also the boundary of what you can see.

**Department** — a flat, organization-wide list used to say which part of the
organization is responsible for a unit.

**[Role](/concepts/roles-and-permissions)** — a named set of permissions. You
hold roles, not permissions.

## Record states

**[Active / Inactive](/concepts/active-and-inactive)** — records are deactivated
rather than deleted. An inactive record keeps its history and stops being offered
for new work.

**[Audit log](/concepts/audit-log)** — a read-only record of changes to important
records. Never editable.

## Related articles

- [Asset vs Asset Unit](/concepts/asset-vs-asset-unit)
- [Glossary](/reference/glossary)
