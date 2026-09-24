'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Types ─── */
export interface ProductItem {
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
}

export interface RelatedProduct {
  title: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface ProductDetailPageProps {
  /** Parent category: "Textile" or "Timber" */
  category: 'Textile' | 'Timber';
  /** Parent link */
  categoryHref: string;
  /** Page title (e.g. "Towels") */
  title: string;
  /** Optional hero title with line break for 2-line layout */
  heroTitle?: string;
  /** Hero subtitle text */
  subtitle: string;
  /** Filter tags shown next to heading */
  tags: string[];
  /** Product grid items */
  products: ProductItem[];
  /** Optional specification notice (e.g. for Logs, Plywood, Veneer) */
  notice?: string;
  /** CTA button text */
  ctaText: string;
  /** Related / recommended products */
  relatedProducts: RelatedProduct[];
}

/* ─── Product Grid Card ─── */
function ProductGridCard({ title, image, imageAlt, description }: ProductItem) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-beige transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden bg-warm-gray">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[15px] font-bold leading-[22px] text-navy">
          {title}
        </h3>
        {description && (
          <p
            className="mt-2 text-[12.5px] leading-[20px]"
            style={{ color: 'rgba(15, 30, 51, 0.6)' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Related Product Card ─── */
function RelatedCard({ title, image, imageAlt, href }: RelatedProduct) {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col overflow-hidden rounded-2xl bg-beige transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative h-36 w-full overflow-hidden bg-warm-gray">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[13px] font-semibold text-navy">{title}</span>
        <Image
          src="/images/icons/arrow-right.svg"
          alt=""
          width={11}
          height={11}
          className="arrow-slide opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

/* ─── Main Component ─── */
export default function ProductDetailPage({
  category,
  categoryHref,
  title,
  heroTitle,
  subtitle,
  tags,
  products,
  notice,
  ctaText,
  relatedProducts,
}: ProductDetailPageProps) {
  const footnoteText =
    category === 'Timber'
      ? 'All timber products are available to custom specifications. Share your required species, dimensions, grade, moisture content, and destination for a tailored quotation.'
      : "All products are available in custom specifications. Send us your requirements — quantity, dimensions, material, and destination — and we'll prepare a tailored offer.";

  return (
    <>
      {/* ═══════ BREADCRUMB + HERO ═══════ */}
      <section
        className="bg-navy"
        style={{
          background:
            'linear-gradient(135deg, rgba(15, 30, 51, 1) 0%, rgba(27, 58, 92, 1) 100%)',
        }}
      >
        <div className="site-container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 pb-6 pt-10">
            <Link
              href="/"
              className="text-[11px] font-medium leading-[16.5px] transition-colors hover:text-white"
              style={{ color: 'rgba(255, 255, 255, 0.55)' }}
            >
              Home
            </Link>
            <span
              className="text-[11px]"
              style={{ color: 'rgba(255, 255, 255, 0.25)' }}
            >
              /
            </span>
            <Link
              href={categoryHref}
              className="text-[11px] font-medium leading-[16.5px] transition-colors hover:text-white"
              style={{ color: 'rgba(255, 255, 255, 0.55)' }}
            >
              {category}
            </Link>
            <span
              className="text-[11px]"
              style={{ color: 'rgba(255, 255, 255, 0.25)' }}
            >
              /
            </span>
            <span
              className="text-[11px] font-medium leading-[16.5px]"
              style={{ color: 'rgba(255, 255, 255, 0.55)' }}
            >
              {title}
            </span>
          </div>

          {/* Hero */}
          <div className="flex flex-col gap-8 pb-16 lg:flex-row lg:items-end lg:justify-between">
            <SectionWrapper className="w-full shrink-0 lg:max-w-[740px]">
              <h1 className="text-[38px] font-black leading-[1.05] tracking-[-0.025em] text-white sm:text-[50px] md:text-[62px] lg:text-[72px] xl:text-[80px] lg:leading-[1.0] xl:leading-[76px]">
                {(heroTitle || title).split('\n').map((line, idx) => (
                  <span
                    key={idx}
                    className="block whitespace-normal sm:whitespace-nowrap"
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </SectionWrapper>
            <SectionWrapper delay={0.1} className="w-full shrink-0 pb-1 lg:max-w-[361px]">
              <p className="max-w-[361px] text-[14px] leading-[22px] text-white/50 md:text-[15px] md:leading-[24.38px]">
                {subtitle}
              </p>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCT GRID & DETAILS ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          {/* Section header with tags */}
          <SectionWrapper>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span
                  className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.2em]"
                  style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                >
                  Available Products
                </span>
                <h2 className="mt-2 text-[30.4px] font-black leading-[45.6px] tracking-[-0.025em] text-navy">
                  {title}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-[11px] font-medium"
                    style={{
                      borderColor: 'rgba(15, 30, 51, 0.15)',
                      color: 'rgba(15, 30, 51, 0.55)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Product cards grid (if products available) */}
          {products.length > 0 && (
            <div
              className={`mt-12 grid grid-cols-1 gap-6 ${
                products.length <= 3
                  ? 'md:grid-cols-3'
                  : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}
            >
              {products.map((product) => (
                <SectionWrapper key={product.title}>
                  <ProductGridCard {...product} />
                </SectionWrapper>
              ))}
            </div>
          )}

          {/* Notice callout box (e.g. Logs, Plywood, Veneer, Hardwood) */}
          {notice && (
            <SectionWrapper>
              <div className="mt-10 flex items-start gap-4 rounded-2xl border border-navy/10 bg-beige/60 p-6 md:p-8">
                <Image
                  src="/images/icons/circle-warning.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5 shrink-0 opacity-70"
                  aria-hidden="true"
                />
                <p className="text-[15px] leading-[26px] font-medium text-navy/80">
                  {notice}
                </p>
              </div>
            </SectionWrapper>
          )}

          {/* Enquire boxed card (Figma style EL-e015bb52) */}
          <SectionWrapper>
            <div className="mt-14 rounded-2xl bg-[#EAE5DC] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p
                className="max-w-[448px] text-[13.5px] leading-[21.94px]"
                style={{ color: 'rgba(15, 30, 51, 0.55)' }}
              >
                {footnoteText}
              </p>
              <Link
                href="/contact"
                className="btn-cta-blue group shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[13px] font-semibold text-white transition-all duration-300 hover:brightness-110 shadow-sm"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(26, 79, 191, 1) 0%, rgba(36, 100, 212, 1) 50%, rgba(27, 58, 140, 1) 100%)',
                }}
              >
                <span>{ctaText}</span>
                <Image
                  src="/images/icons/arrow-right-white.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="arrow-slide"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ═══════ RELATED PRODUCTS ═══════ */}
      {relatedProducts.length > 0 && (
        <section className="bg-beige">
          <div className="site-container py-24">
            <SectionWrapper>
              <div className="flex items-end justify-between">
                <h2 className="text-[28px] md:text-[32px] font-bold md:font-black leading-[40px] tracking-[-0.025em] text-navy">
                  {category === 'Textile' ? 'Other Textile Categories' : 'Other Timber Categories'}
                </h2>
                <Link
                  href={categoryHref}
                  className="link-hover-effect group hidden items-center gap-1.5 text-[12px] font-semibold text-blue-primary md:inline-flex"
                >
                  <span>View all</span>
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt=""
                    width={11}
                    height={11}
                    className="arrow-slide"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </SectionWrapper>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.slice(0, 4).map((product) => (
                <SectionWrapper key={product.title}>
                  <RelatedCard {...product} />
                </SectionWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ CTA ═══════ */}
      <CTASection
        heading={`Interested in\n${title.toLowerCase()}?`}
        description={`Send your specifications or request samples — no commitment required. We'll provide a tailored quotation.`}
        primaryButtonText="Enquire Now"
        primaryButtonHref="/contact"
      />
    </>
  );
}
