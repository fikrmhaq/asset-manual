import { useEffect, useState } from 'react';
import { ImageOff } from 'lucide-react';

import { useTranslate } from '@/i18n/language';
import { resolveAssetUrl } from '@/lib/assetUrl';

/**
 * A screenshot slot that survives the screenshot not existing.
 *
 * There are NO screenshots in this repository yet, and none have been invented —
 * a fabricated image of a screen nobody has run is worse than no image, because
 * a reader will trust it. So content references the file it WOULD use:
 *
 *   ![The New asset form](/screenshots/assets/create-asset.png)
 *
 * and this renders a labelled placeholder until someone drops a real capture at
 * `public/screenshots/assets/create-asset.png`. Nothing else changes on the day
 * they do — no Markdown edit, no code change.
 *
 * The written steps never depend on the image, and the placeholder says so, so a
 * reader who meets one does not go hunting for instructions they are missing.
 *
 * NOT `loading="lazy"`. A lazy image below the fold is never requested, so it
 * never fails, so the placeholder never appears — and the reader gets a broken
 * image glyph the moment they scroll to it instead. The whole point of this
 * component is knowing whether the file is there, and that requires asking.
 */

export function Screenshot({ src, alt, caption }) {
  const t = useTranslate();
  const resolved = resolveAssetUrl(src);
  const [failed, setFailed] = useState(!resolved);

  // A new src deserves a fresh verdict; without this, navigating from an
  // article with a missing image to one with a real image keeps the placeholder.
  useEffect(() => {
    setFailed(!resolved);
  }, [resolved]);

  const label = caption ?? alt;

  if (failed) {
    return (
      <figure className="my-6">
        <div
          /* Not `role="img"`: there is no image. It is a note about one. */
          role="note"
          className="flex min-h-[9rem] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-strong bg-muted/40 px-6 py-8 text-center"
        >
          <ImageOff aria-hidden="true" className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">
            {label || t('screenshot.pending')}
          </p>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            {t('screenshot.pendingHint')}
          </p>
        </div>
      </figure>
    );
  }

  return (
    <figure className="my-6">
      <img
        src={resolved}
        alt={alt ?? ''}
        decoding="async"
        onError={() => setFailed(true)}
        className="w-full rounded-lg border border-border bg-card shadow-xs"
      />
      {label ? (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">{label}</figcaption>
      ) : null}
    </figure>
  );
}
