import {
  ArrowLeftRight,
  BookMarked,
  Boxes,
  ChartColumn,
  Code,
  Compass,
  FileText,
  Lightbulb,
  LifeBuoy,
  ListChecks,
  Map,
  MapPin,
  Package,
  Receipt,
  ShieldCheck,
} from 'lucide-react';

import { cn } from '@/lib/cn';

/**
 * The section icons, resolved by name so `content/sections.js` can stay plain
 * data that a test or the search indexer can import without React.
 *
 * NAMED IMPORTS, NOT A NAMESPACE. `import * as icons from 'lucide-react'` reads
 * more elegantly and costs about 900 kB: the namespace defeats tree-shaking and
 * every one of the library's thousand-plus icons lands in the bundle. This map
 * is the price of shipping only the fifteen that are used.
 *
 * Adding a section means adding its icon here. A name with no entry renders
 * nothing rather than throwing — a missing decoration must not take a page down.
 */
const ICONS = {
  ArrowLeftRight,
  BookMarked,
  Boxes,
  ChartColumn,
  Code,
  Compass,
  FileText,
  Lightbulb,
  LifeBuoy,
  ListChecks,
  Map,
  MapPin,
  Package,
  Receipt,
  ShieldCheck,
};

/**
 * Icons here are DECORATIVE without exception: each sits beside a text label
 * that is the accessible name. `aria-hidden` is therefore unconditional — an
 * icon that announced itself would make the sidebar read every destination
 * twice.
 */
export function Icon({ name, className, ...rest }) {
  const Component = ICONS[name];
  if (!Component) return null;

  return <Component aria-hidden="true" className={cn('h-4 w-4 shrink-0', className)} {...rest} />;
}
