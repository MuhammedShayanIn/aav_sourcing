'use client';

import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Species Card ─── */
function SpeciesCard({
  image,
  imageAlt,
  name,
  description,
}: {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
}) {
  return (
    <SectionWrapper>
      <div className="group flex flex-col overflow-hidden rounded-2xl bg-beige shadow-sm">
        <div className="relative h-48 overflow-hidden bg-warm-gray">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          />
          {/* Gradient overlay */}
          <div className="bg-timber-card-gradient absolute inset-0" />
          {/* Label */}
          <span className="absolute bottom-4 left-4 text-[17.6px] font-black leading-[26.4px] tracking-[-0.025em] text-white">
            {name}
          </span>
        </div>
        <div className="p-4">
          <p
            className="text-[11.5px] leading-[15.81px]"
            style={{ color: 'rgba(15, 30, 51, 0.5)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Spec Card ─── */
function SpecCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-6"
      style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <span className="text-[14px] font-bold leading-[21px] text-white">
        {title}
      </span>
      <span
        className="mt-0.5 text-[11px] leading-[16.5px]"
        style={{ color: 'rgba(255, 255, 255, 0.35)' }}
      >
        {subtitle}
      </span>
    </div>
  );
}

/* ─── Supply Feature ─── */
function SupplyFeature({ number, text }: { number: string; text: string }) {
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

const SPECIES = [
  { image: '/images/timber-spruce.png', imageAlt: 'Stacked spruce timber planks', name: 'Spruce', description: 'Construction · Packaging · Furniture' },
  { image: '/images/timber-pine.png', imageAlt: 'Pine lumber pile', name: 'Pine', description: 'Flooring · Joinery · Structural' },
  { image: '/images/timber-oak.png', imageAlt: 'Oak wood grain surface', name: 'Oak', description: 'Furniture · Flooring · Millwork' },
  { image: '/images/timber-ash.png', imageAlt: 'Ash wood texture close up', name: 'Ash', description: 'Sports Equipment · Tool Handles · Interiors' },
  { image: '/images/timber-beech.png', imageAlt: 'Beech wood board surface', name: 'Beech', description: 'Interior Fittings · Furniture · Plywood' },
];

const SUPPLY_FEATURES = [
  'All timber sourced from verified, certified mills in Europe and Scandinavia.',
  'Kiln-dried to international moisture content standards (8–12% MC).',
  'Grade A and B export quality available based on buyer specification.',
  'FSC-certified supply available on request for sustainability requirements.',
  'Custom cutting, sizing, and packaging executed to your purchase order.',
  'Experienced in China-routed supply chains, documentation, and customs.',
];

export default function TimberPageClient() {
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
                Timber
                <br />
                Sourcing
              </h1>
            </div>
            <div className="lg:justify-self-end">
              <p
                className="max-w-[363px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                Export-grade hardwood and softwood species for international
                buyers — specialized in supply chains through China and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SPEC BAR ═══════ */}
      <section className="bg-navy-light">
        <div className="site-container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <SpecCard title="Kiln Dried" subtitle="8–12% MC standard" />
            <SpecCard title="Grade A/B Export" subtitle="To international grading" />
            <SpecCard title="FSC Available" subtitle="On request" />
            <SpecCard title="Custom Sizes" subtitle="Cut and dressed to order" />
          </div>
        </div>
      </section>

      {/* ═══════ AVAILABLE SPECIES ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          <SectionWrapper>
            <div
              className="flex items-end justify-between pb-4"
              style={{ borderBottom: '1px solid rgba(15, 30, 51, 0.1)' }}
            >
              <h2 className="text-[32px] font-black leading-[48px] tracking-[-0.025em] text-navy">
                Available Species
              </h2>
              <span
                className="hidden text-[12px] leading-[18px] md:block"
                style={{ color: 'rgba(15, 30, 51, 0.35)' }}
              >
                All kiln-dried, export-ready
              </span>
            </div>
          </SectionWrapper>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {SPECIES.map((s) => (
              <SpeciesCard key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SUPPLY CAPABILITY ═══════ */}
      <section className="bg-beige">
        <div className="site-container py-24">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            <SectionWrapper className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-active">
                Supply Capability
              </span>
              <h2 className="mt-4 text-[41.6px] font-black leading-[52px] tracking-[-0.025em] text-navy">
                Export-Grade Timber, Reliably Supplied
              </h2>
              <p
                className="mt-5 max-w-[320px] text-[14px] leading-[22.75px]"
                style={{ color: 'rgba(15, 30, 51, 0.5)' }}
              >
                Sourced from verified mills across Europe and Scandinavia, with
                experience in China-routed supply chains and full export
                documentation.
              </p>
            </SectionWrapper>

            <SectionWrapper className="lg:col-span-7" delay={0.1}>
              {SUPPLY_FEATURES.map((text, i) => (
                <SupplyFeature
                  key={i}
                  number={String(i + 1).padStart(2, '0')}
                  text={text}
                />
              ))}
              <div
                className="h-[1px] w-full"
                style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <CTASection
        heading="Request a timber
quotation"
        description="Specify species, volume, grade, and destination — we respond promptly."
        primaryButtonText="Get a Quotation"
        primaryButtonHref="/contact"
      />
    </>
  );
}
