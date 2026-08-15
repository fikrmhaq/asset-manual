import { useEffect, useId, useRef, useState } from 'react';

import { useTheme } from '@/theme/theme';
import { useTranslate } from '@/i18n/language';

/**
 * Renders a ```mermaid fence as a diagram.
 *
 * LAZY BY DESIGN. Mermaid is the largest dependency in this application by an
 * order of magnitude, and most articles have no diagram at all. The import is
 * dynamic, so Rollup gives it a chunk of its own that is fetched the first time
 * a reader opens an article that actually contains one. A manual whose every
 * page paid for a parser it does not use would be the wrong trade.
 *
 * THEME. Mermaid bakes colours into the SVG at render time, so a diagram drawn
 * in light mode stays light after the reader switches. The effect therefore
 * depends on the resolved theme and re-renders the diagram — cheap, and the
 * alternative is an unreadable diagram in dark mode.
 *
 * A syntax error shows the source rather than an empty box: a diagram that
 * failed to draw should still leave the reader with the information in it.
 */
export function Mermaid({ chart }) {
  const { resolved } = useTheme();
  const t = useTranslate();
  const [svg, setSvg] = useState('');
  const [failed, setFailed] = useState(false);
  const containerRef = useRef(null);

  // A stable, unique id per instance. Mermaid injects a temporary element under
  // this id, and two diagrams on one page must not collide.
  const reactId = useId();
  const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    let cancelled = false;

    async function draw() {
      try {
        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: resolved === 'dark' ? 'dark' : 'neutral',
          fontFamily: 'inherit',
          flowchart: { curve: 'basis', useMaxWidth: true },
          themeVariables: {
            // Let the diagram sit on the article surface rather than painting
            // its own white rectangle into a dark page.
            background: 'transparent',
            primaryColor: resolved === 'dark' ? '#1d2126' : '#e8f5fd',
            primaryBorderColor: resolved === 'dark' ? '#2aa5e0' : '#008fd7',
            primaryTextColor: resolved === 'dark' ? '#eff1f3' : '#191b1e',
            lineColor: resolved === 'dark' ? '#6b7075' : '#9aa0a8',
          },
        });

        const { svg: rendered } = await mermaid.render(diagramId, chart);
        if (!cancelled) {
          setSvg(rendered);
          setFailed(false);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    draw();
    return () => {
      cancelled = true;
    };
  }, [chart, diagramId, resolved]);

  if (failed) {
    return (
      <pre className="my-5 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <figure
      ref={containerRef}
      /*
       * Diagrams are wide and readers are often not. The figure scrolls
       * horizontally on its own rather than pushing the page sideways, and is
       * focusable + labelled so a keyboard user can reach that scroll region —
       * a scrollable box that cannot be focused is unusable without a mouse.
       */
      tabIndex={0}
      role="img"
      aria-label={t('content.diagram')}
      className="my-6 overflow-x-auto rounded-lg border border-border bg-card p-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
