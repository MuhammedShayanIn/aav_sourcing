'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Product Card ─── */
interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  itemsCol1: string[];
  itemsCol2: string[];
  href: string;
}

function ProductCard({
  image,
  imageAlt,
  title,
  description,
  itemsCol1,
  itemsCol2,
  href,
}: ProductCardProps) {
  return (
    <SectionWrapper>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-beige transition-all duration-300 hover:shadow-md">
        {/* Image */}
        <Link
          href={href}
          className="relative block h-48 overflow-hidden bg-warm-gray cursor-pointer"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-4.5">
          <h3 className="text-[15px] font-bold leading-[22.5px] text-navy">
            <Link
              href={href}
              className="transition-colors hover:text-blue-primary"
            >
              {title}
            </Link>
          </h3>
          <p
            className="mt-1 text-[12px] leading-[19.5px]"
            style={{ color: 'rgba(15, 30, 51, 0.55)' }}
          >
            {description}
          </p>

          {/* 2-Column Bullet List */}
          <div className="mt-4 grid grid-cols-2 gap-x-1.5 sm:gap-x-2 gap-y-1.5 text-[10px] sm:text-[10.5px] leading-[15px]">
            <div className="flex flex-col gap-1.5 min-w-0">
              {itemsCol1.map((item) => (
                <div key={item} className="flex items-center gap-1.5 min-w-0">
                  <span className="text-[9px] text-neutral-400 select-none shrink-0 leading-none">•</span>
                  <span
                    className="whitespace-nowrap text-[10px] sm:text-[10.5px] leading-tight tracking-[-0.01em]"
                    style={{ color: 'rgba(15, 30, 51, 0.7)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              {itemsCol2.map((item) => (
                <div key={item} className="flex items-center gap-1.5 min-w-0">
                  <span className="text-[9px] text-neutral-400 select-none shrink-0 leading-none">•</span>
                  <span
                    className="whitespace-nowrap text-[10px] sm:text-[10.5px] leading-tight tracking-[-0.01em]"
                    style={{ color: 'rgba(15, 30, 51, 0.7)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Explore link */}
          <div
            className="mt-auto pt-4 border-t"
            style={{ borderColor: 'rgba(15, 30, 51, 0.08)' }}
          >
            <Link
              href={href}
              className="link-hover-effect group inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-primary"
            >
              <span>Explore</span>
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
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Feature List Item ─── */
function FeatureItem({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div
        className="h-[1px] w-full"
        style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
      />
      <div className="flex gap-4 py-4">
        <span
          className="w-6 shrink-0 pt-0.5 text-[11px] font-semibold leading-[16.5px] tracking-[0.1em]"
          style={{ color: 'rgba(15, 30, 51, 0.25)' }}
        >
          {number}
        </span>
        <p
          className="text-[14px] leading-[22.75px]"
          style={{ color: 'rgba(15, 30, 51, 0.7)' }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/* ─── Product Data ─── */
const PRODUCTS: ProductCardProps[] = [
  {
    image: '/images/products/cat-towels.png',
    imageAlt: 'Towels — rolled and folded white bath and hand towels',
    title: 'Towels',
    description:
      'Premium terry towels for retail, hospitality, and institutional use.',
    itemsCol1: [
      'Bath towels',
      'Kitchen towels',
      'Zero twist towels',
      'Jacquard towels',
    ],
    itemsCol2: [
      'Hand towels',
      'Bar mops',
      'Baby bath towels',
      'Cabana towels',
    ],
    href: '/textile/towels',
  },
  {
    image: '/images/products/cat-bedding.png',
    imageAlt: 'Bedding — complete white bedding set with pillows',
    title: 'Bedding',
    description:
      'Complete bedding sets crafted in a range of fabrics and finishes.',
    itemsCol1: [
      'Bedding sets',
      'Flannel bedding sets',
      'Sateen & percale sets',
      'Duvet cover sets',
      'Throws & blankets',
    ],
    itemsCol2: [
      'Jersey bedding sets',
      'Cotton bedding sets',
      'Muslin bedding sets',
      'Pillows',
    ],
    href: '/textile/bedding',
  },
  {
    image: '/images/products/cat-bedsheets.png',
    imageAlt: 'Bed Sheets — terracotta rust fitted sheet on wooden bed',
    title: 'Bed Sheets',
    description:
      'Fitted and flat sheets tailored to your specification.',
    itemsCol1: [
      'Fitted sheets',
      'Jersey & jacquard sheets',
      'Polycotton fitted sheets',
      'Stretch jersey sheets',
    ],
    itemsCol2: [
      'Muslin fitted sheets',
      'Waterproof fitted sheet',
      'TENCEL™ sheets',
    ],
    href: '/textile/bed-sheets',
  },
  {
    image: '/images/products/cat-fabrics.png',
    imageAlt: 'Fabrics — fabric rolls standing upright and stacked on table',
    title: 'Fabrics',
    description:
      'Greige, dyed, and finished fabrics sourced to technical specifications.',
    itemsCol1: [
      'Greige fabrics',
      'Printed fabrics',
      'Garment-washed fabric',
      'Denim fabrics',
    ],
    itemsCol2: [
      'PU/PVC laminated fabrics',
      'White & dyed fabrics',
      'Knitted fabrics',
    ],
    href: '/textile/fabrics',
  },
  {
    image: '/images/products/cat-garments.png',
    imageAlt: 'Garments — folded t-shirts and denim jeans on table',
    title: 'Garments',
    description:
      'Apparel sourcing for OEM and private-label orders.',
    itemsCol1: [
      'T-shirts & polo shirts',
      'Denim jeans',
      'Underwear',
    ],
    itemsCol2: [
      'Hoodies',
      'Cotton chinos & shorts',
      'Gloves & socks',
    ],
    href: '/textile/garments',
  },
  {
    image: '/images/products/cat-baby.png',
    imageAlt: 'Baby Textiles — soft pastel muslin swaddles and blankets',
    title: 'Baby Textiles',
    description:
      'Soft, safe textiles designed for baby comfort and care.',
    itemsCol1: [
      'Baby bedding sets',
      'Moses basket sheets',
      'Muslin swaddles',
      'Flannel receiving blankets',
      'Hooded terry towels',
    ],
    itemsCol2: [
      'Crib & cot sheets',
      'Waterproof sheets',
      'Baby sleeping bags',
      'Burp cloths',
    ],
    href: '/textile/baby-textiles',
  },
  {
    image: '/images/products/cat-yarns.png',
    imageAlt: 'Yarns — row of colorful yarn cones and spools on table',
    title: 'Yarns',
    description:
      'A wide range of yarns across counts and blends.',
    itemsCol1: [
      'Cotton yarn (Ne 10s–80s)',
      'Polyester viscose yarn',
      'Polyester cotton yarn',
      'Dyed yarn',
    ],
    itemsCol2: [
      'Lyocell yarn',
      'Polyester yarn',
      'Mélange yarn',
    ],
    href: '/textile/yarns',
  },
  {
    image: '/images/products/cat-institutional.png',
    imageAlt: 'Institutional Textiles — clean hospital bed with white linen and blanket',
    title: 'Institutional Textiles',
    description:
      'Reliable textiles for hospitality, healthcare, and institutional needs.',
    itemsCol1: [
      'Hotel bedding',
      'Waterproof bedding',
      'Institutional uniforms',
      'Laundry bags',
    ],
    itemsCol2: [
      'Hospital bedding',
      'Medical gowns',
      'Institutional bedding',
    ],
    href: '/textile/institutional-textiles',
  },
];

const WHO_WE_WORK_WITH_FEATURES = [
  'Direct manufacturer access.',
  'Full product range: towels, bedding, baby textiles, custom fabrics.',
  'Request samples before any bulk commitment.',
  'OEM and private label supported.',
  'Export-ready documentation and shipment coordination.',
];

export default function TextilePageClient() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="bg-navy">
        <div className="site-container py-16">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-accent" />
                <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-accent">
                  Product Range
                </span>
              </div>
              <h1 className="mt-6 text-[60px] font-black leading-[0.95] tracking-[-0.025em] text-white md:text-[80px] lg:text-[96px] lg:leading-[91.2px]">
                Textile
                <br />
                Sourcing
              </h1>
            </div>
            <div className="lg:justify-self-end">
              <p
                className="max-w-[377px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                Explore our range of towels, bedding, fabrics, garments,
                baby textiles, yarns, and institutional textiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCT CATEGORIES ═══════ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-24">
          <SectionWrapper>
            <div
              className="flex items-end justify-between pb-4"
              style={{ borderBottom: '1px solid rgba(15, 30, 51, 0.1)' }}
            >
              <h2 className="text-[32px] font-black leading-[48px] tracking-[-0.025em] text-navy">
                Product Categories
              </h2>
              <span
                className="hidden text-[12px] leading-[18px] md:block"
                style={{ color: 'rgba(15, 30, 51, 0.35)' }}
              >
                No prices. Enquire for quotation.
              </span>
            </div>
          </SectionWrapper>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHO WE WORK WITH ═══════ */}
      <section className="bg-beige">
        <div className="site-container py-24">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            <SectionWrapper className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-active">
                Who We Work With
              </span>
              <h2 className="mt-4 text-[41.6px] font-black leading-[52px] tracking-[-0.025em] text-navy">
                Buyers &amp; Sellers
              </h2>
              <p
                className="mt-5 max-w-[360px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(15, 30, 51, 0.6)' }}
              >
                We serve international buyers sourcing from Pakistan, and help
                Pakistani manufacturers reach global markets.
              </p>
            </SectionWrapper>

            <SectionWrapper className="lg:col-span-7" delay={0.1}>
              <div>
                {WHO_WE_WORK_WITH_FEATURES.map((text, i) => (
                  <FeatureItem
                    key={i}
                    number={String(i + 1).padStart(2, '0')}
                    text={text}
                  />
                ))}
                <div
                  className="h-[1px] w-full"
                  style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
                />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <CTASection
        heading="Interested in our
textile range?"
        description="Request a catalog or send your sourcing enquiry — no commitment required."
        primaryButtonText="Enquire Now"
        primaryButtonHref="/contact"
        secondaryButtonText="Request Catalog"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
