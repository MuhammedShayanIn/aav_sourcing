'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Animated Counter ─── */
function AnimatedStat({
  value,
  suffix = '',
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center px-6 py-10"
      style={{ borderRight: '1px solid rgba(255, 255, 255, 0.07)' }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-gradient-blue text-[56px] font-black leading-[56px] tracking-[-0.025em]"
      >
        {value}
        {suffix}
      </motion.span>
      <span
        className="mt-2.5 text-center text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.12em]"
        style={{ color: 'rgba(255, 255, 255, 0.35)' }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Category bullet item ─── */
function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1 w-1 shrink-0 rounded-full bg-blue-accent" />
      <span
        className="text-[12.5px] leading-[18.75px]"
        style={{ color: 'rgba(255, 255, 255, 0.75)' }}
      >
        {text}
      </span>
    </div>
  );
}

/* ─── Feature Row ─── */
function FeatureRow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div
        className="h-[1px] w-full"
        style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
      />
      <div className="flex gap-6 py-6">
        <div className="w-6 shrink-0 pt-0.5">
          <span
            className="text-[11px] font-semibold leading-[16.5px] tracking-[0.1em]"
            style={{ color: 'rgba(15, 30, 51, 0.25)' }}
          >
            {number}
          </span>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
          <h3 className="text-[15px] font-semibold leading-[22.5px] text-navy">
            {title}
          </h3>
          <p
            className="text-[14px] leading-[22.75px]"
            style={{ color: 'rgba(15, 30, 51, 0.55)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Process Step ─── */
function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div>
      {!isLast && (
        <div
          className="h-[1px] w-full"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
        />
      )}
      <div className="flex items-center gap-8 py-7">
        <div className="w-16 shrink-0">
          <span className="text-gradient-white text-[35.2px] font-black leading-[35.2px] tracking-[-0.025em]">
            {number}
          </span>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-1 md:grid-cols-2 md:gap-1">
          <h3 className="text-[17px] font-bold leading-[25.5px] text-white">
            {title}
          </h3>
          <p
            className="text-[14px] leading-[22.75px]"
            style={{ color: 'rgba(255, 255, 255, 0.45)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════ */
export default function HomePage() {
  const TEXTILE_ITEMS = [
    'Bath Towels',
    'Hand Towels',
    'Beach Towels',
    'Hotel Towels',
    'Bed Linen',
    'Fitted Sheets',
    'Baby Muslin',
    'Burp Cloths',
  ];
  const TIMBER_ITEMS = [
    'Spruce',
    'Pine',
    'Oak',
    'Ash',
    'Beech',
    'Kiln Dried',
    'Grade A/B',
    'FSC Available',
  ];

  return (
    <>
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative h-[781px] overflow-hidden bg-navy">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.png"
          alt="Premium towels on timber deck"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="bg-hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="site-container relative flex h-full items-center">
          <div className="max-w-[576px] pt-10 md:pt-14">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="h-[1px] w-8 bg-blue-primary" />
              <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-accent">
                Pakistan · Est. 20+ Yrs
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-[52px] font-black leading-[0.95] tracking-[-0.025em] text-white md:text-[72px] lg:text-[92.8px] lg:leading-[88.16px]"
            >
              Your Trusted
              <br />
              Sourcing
              <br />
              Partner
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 max-w-[400px] text-[17px] leading-[27.63px]"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Connecting global buyers, importers &amp; wholesalers with
              Pakistan&apos;s finest textile and timber manufacturers — directly,
              reliably.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex items-center gap-4"
            >
              <Link
                href="/contact"
                className="btn-primary group px-7 py-3.5 text-[13px]"
              >
                <span>Send an Enquiry</span>
                <Image
                  src="/images/icons/arrow-right-white.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="arrow-slide"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/about"
                className="link-underlined-animated py-3.5 text-[13px] font-medium"
              >
                Learn about us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE SOURCE ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          <SectionWrapper>
            {/* Section Header */}
            <div
              className="flex items-end justify-between pb-4"
              style={{ borderBottom: '1px solid rgba(15, 30, 51, 0.1)' }}
            >
              <h2 className="text-[38.4px] font-black leading-[57.6px] tracking-[-0.025em] text-navy">
                What We Source
              </h2>
              <span
                className="hidden text-[12px] font-medium leading-[18px] md:block"
                style={{ color: 'rgba(15, 30, 51, 0.4)' }}
              >
                Two categories. One partner.
              </span>
            </div>
          </SectionWrapper>

          {/* Cards Grid */}
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Textile Card */}
            <SectionWrapper delay={0.1}>
              <div className="group relative h-[520px] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/textile-card-bg.png"
                  alt="Stacked folded towels on rack"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="bg-card-overlay absolute inset-0" />
                <div className="relative flex h-full flex-col justify-end p-10">
                  <span
                    className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.2em]"
                    style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    Category 01
                  </span>
                  <h3 className="mt-2 text-[38.4px] font-black leading-[48px] tracking-[-0.025em] text-white">
                    Textile
                    <br />
                    Sourcing
                  </h3>
                  <p
                    className="mt-4 max-w-[320px] text-[14px] leading-[20px]"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    Finished textile products for global importers, wholesalers,
                    and hospitality brands.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-1.5">
                    {TEXTILE_ITEMS.map((item) => (
                      <BulletItem key={item} text={item} />
                    ))}
                  </div>
                  <div className="mt-8">
                    <div
                      className="h-[1px] w-full"
                      style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    />
                    <Link
                      href="/textile"
                      className="link-hover-effect group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-accent"
                    >
                      <span>Textile enquiry</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-slide shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.91663 7H11.0833M7 11.0833L11.0833 7L7 2.91663"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Timber Card */}
            <SectionWrapper delay={0.2}>
              <div className="group relative h-[520px] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src="/images/timber-card-bg.png"
                  alt="Stacked timber planks warehouse"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="bg-card-overlay-light absolute inset-0" />
                <div className="relative flex h-full flex-col justify-end p-10">
                  <span
                    className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.2em]"
                    style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                  >
                    Category 02
                  </span>
                  <h3 className="mt-2 text-[38.4px] font-black leading-[48px] tracking-[-0.025em] text-white">
                    Timber
                    <br />
                    Sourcing
                  </h3>
                  <p
                    className="mt-4 max-w-[320px] text-[14px] leading-[20px]"
                    style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    Export-grade hardwood and softwood species — kiln-dried,
                    certified, ready to ship.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-1.5">
                    {TIMBER_ITEMS.map((item) => (
                      <BulletItem key={item} text={item} />
                    ))}
                  </div>
                  <div className="mt-8">
                    <div
                      className="h-[1px] w-full"
                      style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    />
                    <Link
                      href="/timber"
                      className="link-hover-effect group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-accent"
                    >
                      <span>Timber enquiry</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-slide shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.91663 7H11.0833M7 11.0833L11.0833 7L7 2.91663"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════ STATS BAR ═══════ */}
      <section
        className="bg-navy"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="site-container bg-stats-radial">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <AnimatedStat value="20+" label="Years of Sourcing Experience" />
            <AnimatedStat value="2" label="Specialist Divisions" />
            <AnimatedStat value="Global" label="Markets Served" />
            <div className="flex items-center justify-center px-6 py-10">
              <p
                className="max-w-[140px] text-center text-[13px] italic font-medium leading-[17.88px]"
                style={{ color: 'rgba(255, 255, 255, 0.4)' }}
              >
                One accountable partner from enquiry to shipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY AAV SOURCING ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            {/* Left column — 4 cols */}
            <SectionWrapper className="lg:col-span-4">
              <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-primary">
                Why AAV Sourcing
              </span>
              <h2 className="mt-4 text-[48px] font-black leading-[60px] tracking-[-0.025em] text-navy">
                Built for
                <br />
                global trade
              </h2>
              <p
                className="mt-5 max-w-[320px] text-[14px] leading-[22.75px]"
                style={{ color: 'rgba(15, 30, 51, 0.5)' }}
              >
                Two decades of experience navigating Pakistan&apos;s
                manufacturing base for international buyers.
              </p>
            </SectionWrapper>

            {/* Right column — 8 cols */}
            <SectionWrapper className="lg:col-span-8" delay={0.15}>
              <FeatureRow
                number="01"
                title="Factory-Direct Pricing"
                description="Direct manufacturer relationships — no middlemen, better margins for buyers."
              />
              <FeatureRow
                number="02"
                title="OEM & Private Label"
                description="Custom branding and labeling executed to your specification."
              />
              <FeatureRow
                number="03"
                title="Sampling & Development"
                description="Pre-production samples with fast turnaround before any bulk commitment."
              />
              <FeatureRow
                number="04"
                title="Export & Shipment Coordination"
                description="Full logistics support from Karachi port to your destination."
              />
              <FeatureRow
                number="05"
                title="Transparent Pricing"
                description="We provide clear quotations so buyers can understand the product price and agreed sourcing fees."
              />
              <FeatureRow
                number="06"
                title="Competitive Landed Costs"
                description="We compare suitable sourcing and shipping options and provide the information needed to assess applicable import duties. Tariff rates depend on the product classification, origin, and destination, so they should be confirmed for each shipment."
              />
              <div
                className="h-[1px] w-full"
                style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
              />
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════ HOW WE WORK ═══════ */}
      <section className="bg-section-dark-gradient">
        <div className="site-container py-24">
          <SectionWrapper>
            {/* Section Header */}
            <div className="flex items-end justify-between">
              <h2 className="text-[38.4px] font-black leading-[57.6px] tracking-[-0.025em] text-white">
                How We Work
              </h2>
              <span
                className="hidden text-[12px] leading-[18px] md:block"
                style={{ color: 'rgba(255, 255, 255, 0.3)' }}
              >
                From enquiry to delivery
              </span>
            </div>
          </SectionWrapper>

          <div className="mt-14">
            <SectionWrapper delay={0.1}>
              <ProcessStep
                number="01"
                title="Enquiry"
                description="Share your requirement — product type, quantity, destination."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <ProcessStep
                number="02"
                title="Sourcing"
                description="We identify and vet the right manufacturer for your brief."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.3}>
              <ProcessStep
                number="03"
                title="Quality Control"
                description="In-factory inspection and sampling sign-off before production."
              />
            </SectionWrapper>
            <SectionWrapper delay={0.4}>
              <ProcessStep
                number="04"
                title="Shipment"
                description="Export packaging, documentation, and dispatch from Karachi."
              />
            </SectionWrapper>
            <div
              className="h-[1px] w-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <CTASection
        heading={'Looking to source\nor supply?'}
        headingHighlight="Let's talk."
        description="Share your sourcing requirement and we'll respond within 24 hours."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
      />
    </>
  );
}
