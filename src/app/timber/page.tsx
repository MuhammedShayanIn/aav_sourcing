import { Metadata } from 'next';
import TimberPageClient from './TimberPageClient';

export const metadata: Metadata = {
  title: 'Timber Sourcing',
  description:
    'Export-grade hardwood and softwood species for international buyers — Spruce, Pine, Oak, Ash, Beech — kiln-dried, certified, ready to ship from AAV Sourcing.',
  openGraph: {
    title: 'Timber Sourcing | AAV Sourcing',
    description:
      'Source kiln-dried, export-grade timber from verified mills across Europe and Scandinavia.',
  },
};

export default function TimberPage() {
  return <TimberPageClient />;
}
