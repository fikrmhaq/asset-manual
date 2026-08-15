import { AlertTriangle, Ban, Info, Lightbulb, OctagonAlert, Wrench } from 'lucide-react';

import { cn } from '@/lib/cn';
import { useTranslate } from '@/i18n/language';

/**
 * The five callout kinds, written in Markdown as GitHub-style alerts:
 *
 *   > [!TIP]
 *   > You can press Ctrl-K to jump straight to search.
 *
 * Content therefore stays PURE MARKDOWN — no MDX, no custom directive syntax, no
 * component imports in a `.md` file. It renders as a sensible blockquote in any
 * other Markdown viewer (an editor preview, a diff on a code host), which is
 * exactly what you want from source text a non-developer may one day edit.
 *
 * `LIMITATION` is the one non-standard kind, and it earns its place: this manual
 * documents a real system with real gaps, and "the application cannot currently
 * do this" is a different promise to the reader than "be careful".
 */

const KINDS = {
  note: { icon: Info, tone: 'note' },
  tip: { icon: Lightbulb, tone: 'tip' },
  important: { icon: OctagonAlert, tone: 'important' },
  warning: { icon: AlertTriangle, tone: 'warning' },
  caution: { icon: Ban, tone: 'danger' },
  limitation: { icon: Wrench, tone: 'note' },
};

const TONES = {
  note: 'border-l-note-border bg-note-surface text-note-foreground',
  tip: 'border-l-tip-border bg-tip-surface text-tip-foreground',
  important: 'border-l-important-border bg-important-surface text-important-foreground',
  warning: 'border-l-warning-border bg-warning-surface text-warning-foreground',
  danger: 'border-l-danger-border bg-danger-surface text-danger-foreground',
};

export function Callout({ kind = 'note', title, children }) {
  const t = useTranslate();
  const spec = KINDS[kind] ?? KINDS.note;
  const IconComponent = spec.icon;
  const label = title ?? t(`callout.${kind}`);

  return (
    /*
     * `role="note"` rather than `role="alert"`: an alert interrupts a screen
     * reader mid-sentence, which is right for a live validation failure and
     * quite wrong for a paragraph of printed advice.
     */
    <aside
      role="note"
      aria-label={label}
      className={cn(
        'my-5 rounded-r-md border border-l-4 border-border px-4 py-3 text-[0.9375rem]',
        TONES[spec.tone]
      )}
    >
      <p className="mb-1 flex items-center gap-2 font-semibold">
        <IconComponent aria-hidden="true" className="h-4 w-4 shrink-0" />
        {label}
      </p>
      <div className="space-y-2 text-foreground/90 [&_a]:underline [&_a]:underline-offset-2 [&_code]:text-[0.875em]">
        {children}
      </div>
    </aside>
  );
}
