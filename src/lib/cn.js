import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Conditional class names, with later Tailwind utilities winning over earlier
 * ones of the same kind. The same helper the application uses, for the same
 * reason: `cn('p-2', condition && 'p-4')` should produce `p-4`, not both.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
