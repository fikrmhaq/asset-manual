---
title: Permission reference
description: All 104 permission codes, grouped as they appear on the role screen.
order: 20
keywords: [permission, izin, codes, list, reference, access, grant, role, admin]
related:
  - concepts/roles-and-permissions
  - how-do-i/assign-permissions
---

Every permission the application defines, in the groups the role screen uses.
This page is for administrators building roles; ordinary users never need it.

Codes read `resource:action` and are identical in both languages — they are
identifiers, not labels.

## How to read the actions

| Action | Means |
|---|---|
| `read` | View. Without it, the module does not appear in the navigation at all |
| `create` | Add a new record |
| `update` | Change an existing one |
| `deactivate` | Deactivate and reactivate |
| `delete` | Permanently remove — only where deletion exists |
| Named actions | A specific operation: `activate`, `cancel`, `return`, `extend`, `record-history` |

> [!IMPORTANT]
> `read` is the foundation. A role without `read` on a module cannot see it,
> whatever else it is granted.

## System-wide only

Fourteen codes are marked below as system-wide only. They cannot be granted to an
institution-scoped role, because managing institutions, roles and role
assignments is not meaningful within a single institution. See
[Roles and permissions](/concepts/roles-and-permissions).

## Organization

| Resource | Permissions | |
|---|---|---|
| Institutions | `perm:institution:create` `perm:institution:read` `perm:institution:update` `perm:institution:deactivate` | System-wide only |
| Departments | `perm:department:create` `perm:department:read` `perm:department:update` `perm:department:deactivate` | |
| Users | `perm:user:create` `perm:user:read` `perm:user:update` `perm:user:deactivate` | |
| Roles | `perm:role:create` `perm:role:read` `perm:role:update` `perm:role:delete` | System-wide only |
| Role assignments on a user | `perm:user-role:read` `perm:user-role:create` `perm:user-role:delete` | System-wide only |
| Permissions granted to a role | `perm:role-permission:read` `perm:role-permission:update` | System-wide only |
| The permission catalogue | `perm:permission:read` | System-wide only |

## Reference

| Resource | Permissions | |
|---|---|---|
| Asset classifications | `perm:classification:read`, `create`, `update`, `delete`, `promote` | Writes only affect locally added entries |
| Categories | `perm:category:read` | Read-only data |
| Attribute definitions | `perm:attribute-definition:create` `perm:attribute-definition:read` `perm:attribute-definition:update` `perm:attribute-definition:deactivate` | |
| Measurement units | `perm:measurement-unit:create` `perm:measurement-unit:read` `perm:measurement-unit:update` `perm:measurement-unit:delete` | |
| Contract types | `perm:contract-type:create` `perm:contract-type:read` `perm:contract-type:update` `perm:contract-type:delete` | |
| Funding sources | `perm:funding-source:create` `perm:funding-source:read` `perm:funding-source:update` `perm:funding-source:delete` | |
| Transaction types | `perm:transaction-type:create` `perm:transaction-type:read` `perm:transaction-type:update` `perm:transaction-type:delete` | |
| Account codes | `perm:account-code:create` `perm:account-code:read` `perm:account-code:update` `perm:account-code:delete` | |
| Condition values | `perm:condition:read` | Read-only data |

## Asset Core

| Resource | Permissions | |
|---|---|---|
| Assets | `perm:asset:create` `perm:asset:read` `perm:asset:update` `perm:asset:deactivate` | |
| Asset units | `perm:asset-unit:create` `perm:asset-unit:read` `perm:asset-unit:update` `perm:asset-unit:deactivate` `perm:asset-unit:record-history` | |
| Attribute values | `perm:asset-attribute-value:read` `perm:asset-attribute-value:update` | Covers both assets and units |
| Locations | `perm:location:create` `perm:location:read` `perm:location:update` `perm:location:deactivate` | |
| Floor plans | `perm:floor-plan:read` `perm:floor-plan:update` `perm:floor-plan:delete` | `update` covers upload and replace |
| Floor-plan areas | `perm:floor-plan-area:create` `perm:floor-plan-area:read` `perm:floor-plan-area:update` `perm:floor-plan-area:delete` | |
| Attachments | `perm:attachment:create` `perm:attachment:read` `perm:attachment:delete` | |

## Procurement

| Resource | Permissions | |
|---|---|---|
| Suppliers | `perm:supplier:create` `perm:supplier:read` `perm:supplier:update` `perm:supplier:deactivate` | |
| Contracts | `perm:contract:create` `perm:contract:read` `perm:contract:update` `perm:contract:deactivate` | |
| Contract line items | `perm:contract-item:create` `perm:contract-item:read` `perm:contract-item:update` `perm:contract-item:delete` | |

## Operations

| Resource | Permissions | |
|---|---|---|
| Vendors | `perm:vendor:create` `perm:vendor:read` `perm:vendor:update` `perm:vendor:deactivate` | |
| Borrowings | `perm:borrowing:create` `perm:borrowing:read` `perm:borrowing:update` `perm:borrowing:activate` `perm:borrowing:cancel` `perm:borrowing:return` `perm:borrowing:extend` | |
| Units on a borrowing | `perm:borrowing-item:create` `perm:borrowing-item:read` `perm:borrowing-item:delete` | |
| Transactions | `perm:transaction:create` `perm:transaction:read` | No update or delete exists |

## Reports

| Resource | Permissions | |
|---|---|---|
| Reports | `perm:report:read` | Also required for the Dashboard |

## Audit

| Resource | Permissions | |
|---|---|---|
| Audit log | `perm:audit-log:read` | Reaches every institution |

## Notes on particular resources

- **Borrowings** carry seven permissions rather than four, because each state
  change is authorised separately. Creating a loan, starting it, cancelling it,
  returning it and extending it are five different responsibilities, and can be
  given to different people.
- **Transactions** have no `update` and no `delete`. They are permanent records,
  and no permission changes that.
- **Categories** and **condition values** are read-only reference data, so they
  have `read` and nothing else.
- **Classifications** are mostly read-only, but an institution can register its
  own entries at the most specific level. The write permissions apply only to
  those; the government hierarchy refuses them however the permission is granted.
  `perm:classification:promote` additionally needs a system-wide role, since it
  shares an entry across every institution.
- **Attachments** and **floor-plan areas** are guarded separately from the assets
  and locations they belong to, so a role can view an asset without seeing its
  files.
- **Reports** covers the Dashboard too — without `perm:report:read` there is no
  Dashboard in the navigation.
- **The audit log** has one permission, and it reaches every institution
  regardless of scope. Grant it sparingly.

## Related articles

- [Roles and permissions](/concepts/roles-and-permissions)
- [How do I assign permissions?](/how-do-i/assign-permissions)
