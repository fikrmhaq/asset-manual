import { cn } from '@/lib/cn';

/**
 * The AL-MUFTI lockup, as used by the application itself.
 *
 * THE ASSET IS AUTHORITATIVE. `public/brand/almufti-logo.png` is the supplied
 * file, byte for byte. Nothing here recolours, crops, inverts or reconstructs
 * it — including in dark mode. It does not need it: the wordmark is brand blue
 * (#008FD7) and mid grey (#8B8B8C) on transparency, and both clear 4.5:1
 * against the manual's dark ground as well as against white.
 *
 * The lockup is 1084×167, a 6.5:1 horizontal wordmark. Both intrinsic
 * dimensions are declared so the browser reserves the correct box before the
 * image loads, and only the HEIGHT is ever constrained (`w-auto`) — there is no
 * code path that can set both axes, which is what makes distortion impossible
 * rather than merely unlikely.
 *
 * The file is COPIED into this workspace rather than referenced across from
 * `apps/web`. The manual builds on its own or it is not standalone.
 */
export function BrandMark({ className, height = 'h-6' }) {
  return (
    <img
      src="./brand/almufti-logo.png"
      /* The wordmark reads "SMK AL-MUFTI"; a screen reader should hear the
         institution, not the word "logo". */
      alt="SMK AL-MUFTI"
      width={1084}
      height={167}
      decoding="async"
      className={cn('w-auto max-w-full object-contain', height, className)}
    />
  );
}
