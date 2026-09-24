import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailPage from '@/components/ProductDetailPage';
import { TEXTILE_INNER_PAGES } from '@/data/inner-pages';

/* ─── Static Params ─── */
export function generateStaticParams() {
  return Object.keys(TEXTILE_INNER_PAGES).map((slug) => ({ slug }));
}

/* ─── Dynamic Metadata ─── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = TEXTILE_INNER_PAGES[slug];
  if (!data) return {};

  return {
    title: `${data.title} — Textile Sourcing`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} — Textile Sourcing | AAV Sourcing`,
      description: data.subtitle,
    },
  };
}

/* ─── Page ─── */
export default async function TextileDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = TEXTILE_INNER_PAGES[slug];

  if (!data) {
    notFound();
  }

  return <ProductDetailPage {...data} />;
}
