import { Metadata } from 'next';
import TextilePageClient from './TextilePageClient';

export const metadata: Metadata = {
  title: 'Textile Sourcing',
  description:
    'Finished textile products for international buyers and importers — towels, bedding, baby essentials, hospital linen, fabric sourcing, and OEM/private label from Pakistan.',
  openGraph: {
    title: 'Textile Sourcing | AAV Sourcing',
    description:
      'Source finished textile products directly from Pakistan\'s top manufacturers with quality assurance and export handling.',
  },
};

export default function TextilePage() {
  return <TextilePageClient />;
}
