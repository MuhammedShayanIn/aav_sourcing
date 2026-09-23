'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Timber Product Card ─── */
interface TimberProductProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
}

function TimberProductCard({ image, imageAlt, title, description, tags }: TimberProductProps) {
  return (
    <SectionWrapper>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-beige">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-warm-gray">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-[15px] font-bold leading-[22.5px] text-navy">
            {title}
          </h3>
          <p
            className="mt-1.5 flex-1 text-[11.5px] leading-[18.69px]"
            style={{ color: 'rgba(15, 30, 51, 0.5)' }}
          >
            {description}
          </p>
          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium"
                style={{
                  borderColor: 'rgba(15, 30, 51, 0.15)',
                  color: 'rgba(15, 30, 51, 0.45)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Enquire link */}
          <div
            className="mt-4 border-t pt-4"
            style={{ borderColor: 'rgba(15, 30, 51, 0.08)' }}
          >
            <Link
              href="/contact"
              className="link-hover-effect group inline-flex items-center gap-1.5 text-[12px] font-semibold text-blue-primary"
            >
              <span>Enquire</span>
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

/* ─── Product Data ─── */
const TIMBER_PRODUCTS: TimberProductProps[] = [
  {
    image: '/images/timber-softwood.png',
    imageAlt: 'Pine lumber planks stacked at a mill',
    title: 'Softwood Sawn Timber',
    description:
      'Kiln dried rough sawn pine (furniture components, packaging, joinery, general manufacturing — buyer specified sizes/grades), Kiln dried rough sawn spruce (construction, furniture frames, packaging), Kiln dried S4S spruce (planed four sides, smooth finish, furniture & interior fittings)',
    tags: ['Pine', 'Spruce', 'S4S planed'],
  },
  {
    image: '/images/timber-hardwood.png',
    imageAlt: 'Oak wood grain close-up surface',
    title: 'Hardwood Sawn Timber',
    description:
      'Oak (furniture, flooring, joinery, interiors), Beech (furniture, cabinetry, machined components), Ash (furniture, flooring, joinery, distinctive grain applications). Available in edged or unedged form, subject to species and supplier availability.',
    tags: ['Oak', 'Beech', 'Ash'],
  },
  {
    image: '/images/timber-logs.png',
    imageAlt: 'Stacked round logs in a timber yard',
    title: 'Logs',
    description:
      'Softwood and hardwood logs for sawmills, veneer production, and further processing. Enquiries should specify species, diameter range, length, grade, and destination.',
    tags: ['Softwood', 'Hardwood', 'Sawmill / veneer'],
  },
  {
    image: '/images/timber-plywood.png',
    imageAlt: 'Sheets of plywood stacked at a warehouse',
    title: 'Plywood',
    description:
      'For furniture, cabinetry, interiors, packaging, and construction. Specifications include thickness, sizes, face grades, and core types.',
    tags: ['Furniture grade', 'Construction', 'Custom spec'],
  },
  {
    image: '/images/timber-veneer.png',
    imageAlt: 'Wood veneer sheets showing natural grain',
    title: 'Veneer',
    description:
      'Natural wood veneer for furniture, doors, wall panels, and decorative surfaces. Species, cut, thickness, and grading matched to project requirements.',
    tags: ['Natural veneer', 'Furniture', 'Decorative'],
  },
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
                className="max-w-[525px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                AAV Sourcing connects buyers with softwood and hardwood timber,
                logs, plywood, and veneer. Products can be sourced to your
                required species, dimensions, grade, moisture content, and
                packing specifications, subject to availability.
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

      {/* ═══════ AVAILABLE SPECIES / PRODUCTS ═══════ */}
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

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TIMBER_PRODUCTS.map((product) => (
              <TimberProductCard key={product.title} {...product} />
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
        description="Send us your required specifications including quantity, dimensions, grade, moisture content, and delivery destination for a tailored sourcing offer."
        primaryButtonText="Get a Quotation"
        primaryButtonHref="/contact"
      />
    </>
  );
}
