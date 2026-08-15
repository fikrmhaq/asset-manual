import { cn } from '@/lib/cn';
import { useLanguage } from '@/i18n/language';
import { ENUM_LABELS } from '@/i18n/strings';
import { resolveStateValue } from '@/lib/stateValue';

/**
 * Status and permission badges, written inline in Markdown as code spans:
 *
 *   The unit moves to `state:BORROWED` for the length of the loan.
 *   Requires `perm:borrowing:activate`.
 *
 * Again: pure Markdown. In any other viewer these degrade to `state:BORROWED`,
 * which still reads correctly — the prefix is the only cost, and it is what
 * makes the convention unambiguous rather than guessing at every code span.
 *
 * A bare value can be ambiguous (`ACTIVE` is both a lifecycle state and a
 * borrowing status), so content may name the family: `state:borrowing/ACTIVE`.
 */

const TONES = {
  neutral: 'border-border-strong bg-muted text-foreground',
  positive: 'border-tip-border/40 bg-tip-surface text-tip-foreground',
  info: 'border-important-border/40 bg-important-surface text-important-foreground',
  warning: 'border-warning-border/40 bg-warning-surface text-warning-foreground',
  danger: 'border-danger-border/40 bg-danger-surface text-danger-foreground',
};

/**
 * How each stored value reads as a badge.
 *
 * Meaning, not mood: `DISPOSED` is not a failure, so it is neutral, while
 * `OVERDUE` and `UNSERVICEABLE` genuinely demand attention and are not.
 */
const VALUE_TONES = {
  lifecycle: {
    REGISTERED: 'neutral',
    ACTIVE: 'positive',
    IN_STORAGE: 'info',
    BORROWED: 'info',
    UNDER_MAINTENANCE: 'warning',
    DISPOSED: 'neutral',
    DEACTIVATED: 'neutral',
  },
  condition: {
    GOOD: 'positive',
    FAIR: 'neutral',
    POOR: 'warning',
    DAMAGED: 'danger',
    UNSERVICEABLE: 'danger',
  },
  borrowing: {
    DRAFT: 'neutral',
    ACTIVE: 'positive',
    RETURNED: 'neutral',
    OVERDUE: 'danger',
    CANCELLED: 'neutral',
  },
  status: {
    ACTIVE_RECORD: 'positive',
    INACTIVE_RECORD: 'neutral',
  },
};

export function StatusBadge({ value: raw }) {
  const { language } = useLanguage();
  const { family, value } = resolveStateValue(raw);

  const label = ENUM_LABELS[family]?.[value]?.[language] ?? ENUM_LABELS[family]?.[value]?.en;
  const tone = VALUE_TONES[family]?.[value] ?? 'neutral';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 align-middle text-xs font-medium whitespace-nowrap',
        TONES[tone]
      )}
    >
      {label ?? value}
      {/*
        The STORED value alongside its label. An administrator reading a report,
        an audit entry or an error message sees the raw value, and a manual that
        only ever printed the friendly label would leave them unable to connect
        the two.
      */}
      {label ? (
        <code className="font-mono text-[0.6875rem] text-muted-foreground">{value}</code>
      ) : null}
    </span>
  );
}

/**
 * A permission code. Never translated, in either direction: `asset:create` is
 * the string an administrator types into the role checklist's filter, and it is
 * identical in both languages of the application.
 */
export function PermissionBadge({ code }) {
  return (
    <code className="inline-flex items-center rounded border border-border-strong bg-muted px-1.5 py-0.5 align-middle font-mono text-[0.8125em] whitespace-nowrap text-foreground">
      {code}
    </code>
  );
}
