import { Metadata } from 'next';
import WhereWeSourceClient from './WhereWeSourceClient';

export const metadata: Metadata = {
  title: 'Where We Source',
  description:
    'AAV Sourcing operates two specialist divisions — textile from Pakistan and timber from Europe — each with established supplier networks and buyer markets across multiple regions.',
  openGraph: {
    title: 'Where We Source | AAV Sourcing',
    description:
      'Textile sourcing from Pakistan, timber from Europe & Scandinavia. Serving buyers across Europe, the USA, the Middle East, and Asia.',
  },
};

export default function WhereWeSourcePage() {
  return <WhereWeSourceClient />;
}
