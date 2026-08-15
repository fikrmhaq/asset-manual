import { Monitor, Moon, Sun } from 'lucide-react';

import { cn } from '@/lib/cn';
import { useTheme } from '@/theme/theme';
import { useTranslate } from '@/i18n/language';

/**
 * Light / dark / system as a three-way segmented control rather than a cycling
 * button. All three states are visible at once, so a reader can see which one is
 * active — a single icon that cycles never tells you what pressing it will do,
 * and "system" is impossible to represent that way at all.
 *
 * `radiogroup`, because these are three mutually exclusive choices; a group of
 * buttons would announce as three unrelated actions.
 */

const OPTIONS = [
  { value: 'light', icon: Sun },
  { value: 'dark', icon: Moon },
  { value: 'system', icon: Monitor },
];

export function ThemeToggle() {
  const { choice, setChoice } = useTheme();
  const t = useTranslate();

  return (
    <div
      role="radiogroup"
      aria-label={t('theme.label')}
      className="flex items-center gap-0.5 rounded-md border border-border bg-muted/50 p-0.5"
    >
      {OPTIONS.map((option) => {
        const { value } = option;
        // Read as a variable rather than renamed in the parameter list: a
        // capitalised binding is what both the JSX and the lint config expect.
        const Glyph = option.icon;
        const isActive = choice === value;

        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={t(`theme.${value}`)}
            title={t(`theme.${value}`)}
            onClick={() => setChoice(value)}
            className={cn(
              'rounded p-1.5 transition-colors',
              isActive
                ? 'bg-card text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Glyph aria-hidden="true" className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
