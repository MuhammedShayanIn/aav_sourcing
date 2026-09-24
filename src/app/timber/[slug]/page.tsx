import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailPage from '@/components/ProductDetailPage';
import { TIMBER_INNER_PAGES } from '@/data/inner-pages';

/* ─── Static Params ─── */
export function generateStaticParams() {
  return Object.keys(TIMBER_INNER_PAGES).map((slug) => ({ slug }));
}

/* ─── Dynamic Metadata ─── */
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = TIMBER_INNER_PAGES[slug];
  if (!data) return {};

  return {
    title: `${data.title} — Timber Sourcing`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} — Timber Sourcing | AAV Sourcing`,
      description: data.subtitle,
    },
  };
}

/* ─── Page ─── */
export default async function TimberDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = TIMBER_INNER_PAGES[slug];

  if (!data) {
    notFound();
  }

  return <ProductDetailPage {...data} />;
}
