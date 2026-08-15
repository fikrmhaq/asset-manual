import { ENUM_LABELS } from '@/i18n/strings';

/**
 * Which enum family a badge value belongs to.
 *
 * Content writes `state:BORROWED`, and usually the value alone is unambiguous.
 * `ACTIVE` is not — a unit in use and a borrowing that is running both store it
 * — so content may name the family explicitly: `state:borrowing/ACTIVE`.
 *
 * Search order matters only for the ambiguous values, and lifecycle comes first
 * because a bare `ACTIVE` in this manual is far more often a unit than a loan.
 */
const FAMILY_ORDER = ['lifecycle', 'condition', 'borrowing', 'status'];

export function resolveStateValue(raw) {
  const text = String(raw ?? '').trim();
  const [maybeFamily, maybeValue] = text.includes('/') ? text.split('/') : [null, text];

  const value = maybeValue.toUpperCase();
  const family =
    maybeFamily?.toLowerCase() ??
    FAMILY_ORDER.find((candidate) => ENUM_LABELS[candidate]?.[value] !== undefined);

  return { family, value };
}
