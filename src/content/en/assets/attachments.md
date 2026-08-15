---
title: Attaching files to an asset
description: Keep invoices, photographs and manuals with the record they belong to.
order: 10
keywords: [attachment, file, upload, document, invoice, photo, manual, pdf, lampiran]
related:
  - how-do-i/view-an-asset
  - concepts/asset
---

An asset's **Attachments** tab holds files belonging to that asset: the invoice,
the delivery note, a photograph, the manufacturer's manual.

## What can be attached

| | |
|---|---|
| File types | PDF, JPG, JPEG, PNG, DOCX, XLSX |
| Maximum size | 10 MB per file |
| Attached to | The [asset](/concepts/asset), not individual units |

Anything else is refused with a message naming the accepted types.

## Uploading

1. Open the asset and go to the **Attachments** tab.
2. Choose a file.
3. It uploads and appears in the list.

Requires `perm:attachment:create`.

## Attachments belong to the asset

There is no attachment tab on an asset unit. A file describes the kind of thing —
a manual covers every laptop of that model, and an invoice covers the whole
delivery.

> [!NOTE]
> If you need a photograph of one particular item, there is nowhere to put it
> against that unit. In practice people attach it to the asset and say which unit
> it shows in the file name.

## Downloading and removing

Selecting an attachment downloads it. Files always download rather than opening
in the browser, which is deliberate — uploaded files come from many sources and
are not rendered in place.

**Delete** removes a file permanently, and needs `perm:attachment:delete`.
Deleting an attachment affects nothing else on the asset.

## A separate permission

Attachments are guarded separately from assets, so a role can view an asset
without seeing its files.

> [!TIP]
> If the Attachments tab is empty or missing while the rest of the asset page
> works, you do not have `perm:attachment:read`. That is a permission question,
> not a missing file.

## What to attach, in practice

Worth attaching:

- The invoice or delivery note, so procurement evidence sits with the asset
- Warranty documents and service contracts
- The manual, especially for equipment nobody uses often
- A photograph of the model, which helps whoever is doing a stocktake

Not worth attaching:

- Anything that changes per unit — use
  [unit attributes](/concepts/attributes) instead
- Large scans that duplicate what the contract record already says

## Related articles

- [How do I view an asset?](/how-do-i/view-an-asset)
- [Asset](/concepts/asset)
