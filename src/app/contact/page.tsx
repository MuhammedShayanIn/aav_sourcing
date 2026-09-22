import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with AAV Sourcing. Share your textile or timber sourcing requirement and we\'ll respond within 24 hours. Based in Karachi, Pakistan.',
  openGraph: {
    title: 'Contact Us | AAV Sourcing',
    description:
      'Send an enquiry for textile or timber sourcing. We respond within 24 hours.',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
