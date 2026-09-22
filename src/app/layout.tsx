import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter-var',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'AAV Sourcing — Your Trusted Sourcing Partner',
    template: '%s | AAV Sourcing',
  },
  description:
    'Connecting global buyers, importers & wholesalers with Pakistan\'s finest textile and timber manufacturers — directly, reliably. 20+ years of sourcing experience.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AAV Sourcing',
    title: 'AAV Sourcing — Your Trusted Sourcing Partner',
    description:
      'Textile & Timber Sourcing from Pakistan. Serving global buyers since 20+ years.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-inter">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
