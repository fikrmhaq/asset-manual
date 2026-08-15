import { cn } from '@/lib/cn';
import { useLanguage, useTranslate } from '@/i18n/language';

/**
 * EN / ID, shown as two visible buttons — the same pattern the application's own
 * switcher uses, so the control is in a familiar shape for anyone arriving from
 * it. Two options do not justify a dropdown that costs a click to discover what
 * is inside.
 *
 * The short code is the visible label; the full language name is the accessible
 * one, because "ID" read aloud is not a language.
 */

const LANGUAGE_LABELS = { en: 'EN', id: 'ID' };

export function LanguageToggle() {
  const { language, setLanguage, languages } = useLanguage();
  const t = useTranslate();

  return (
    <div
      role="radiogroup"
      aria-label={t('language.change')}
      className="flex items-center gap-0.5 rounded-md border border-border bg-muted/50 p-0.5"
    >
      {languages.map((code) => {
        const isActive = code === language;

        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={t(`language.${code}`)}
            title={t(`language.${code}`)}
            onClick={() => setLanguage(code)}
            className={cn(
              'rounded px-2 py-1 text-xs font-semibold transition-colors',
              isActive
                ? 'bg-card text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {LANGUAGE_LABELS[code] ?? code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
