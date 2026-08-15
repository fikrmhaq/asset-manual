---
title: How do I create a vendor?
description: Add a manufacturer or brand that assets can be attributed to.
order: 215
task: true
permissions:
  - vendor:create
keywords: [vendor, manufacturer, brand, make, producer, add vendor]
related:
  - concepts/vendor-vs-supplier
  - how-do-i/create-an-asset
---

## What this does

Adds a **vendor** — the manufacturer or brand behind an
[asset](/concepts/asset). Dell, Toyota, the workshop that built your benches.

> [!IMPORTANT]
> A vendor is not a [supplier](/concepts/vendor-vs-supplier). The vendor made it;
> the supplier sold it to you.

Vendors live under **Operations** in the sidebar rather than Procurement, because
they describe assets rather than purchases.

## Steps

1. Open **Operations › Vendors**.
2. Select **New vendor**.
3. Enter the **Name**.
4. Add **Contact information** and **Address** if useful.
5. Select **Create**.

## Field reference

| Field | Required | Description |
|---|---|---|
| Name | Yes | Up to 255 characters |
| Contact information | No | Free text |
| Address | No | Free text |

## What happens next?

The vendor becomes selectable on the asset form, both when creating an asset
directly and when registering one from a contract line.

Its own page lists the assets attributed to it, within your organization scope —
useful for "how much Dell equipment do we own?".

## Attributing an asset to a vendor

Vendor is optional on every asset. Set it when the manufacturer matters for
warranty, servicing or reporting; leave it as *No vendor* otherwise.

The vendor field only appears on the asset form if you have permission to view
vendors.

## Deactivating

Vendors are deactivated rather than deleted. Assets already attributed to one
keep the attribution; the vendor stops being offered on new assets. Reactivating
makes it selectable again.

## Related articles

- [Vendor vs Supplier](/concepts/vendor-vs-supplier)
- [How do I create an asset?](/how-do-i/create-an-asset)
