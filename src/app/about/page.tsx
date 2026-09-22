import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Over 20 years of sourcing experience — AAV Sourcing bridges the gap between international demand and Pakistan\'s textile & timber manufacturing excellence.',
  openGraph: {
    title: 'About Us | AAV Sourcing',
    description:
      'Founded in Karachi, AAV Sourcing is your single trusted contact for sourcing, quality assurance, and shipment coordination from Pakistan.',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
