'use client';

import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Value Item ─── */
function ValueItem({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div
        className="h-[1px] w-full"
        style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
      />
      <div className="flex gap-6 py-5">
        <span
          className="w-6 shrink-0 pt-0.5 text-[11px] font-semibold leading-[16.5px] tracking-[0.1em]"
          style={{ color: 'rgba(15, 30, 51, 0.25)' }}
        >
          {number}
        </span>
        <p
          className="text-[15px] leading-[24.38px]"
          style={{ color: 'rgba(15, 30, 51, 0.7)' }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/* ─── Process Step ─── */
function ProcessStep({
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
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
      />
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
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

const VALUES = [
  'Direct factory access across Pakistan\'s textile and timber supply base.',
  'Single point of contact for sourcing, quality checks, and export.',
  'OEM, private label, and custom development supported.',
  'In-factory inspection before every shipment leaves.',
  'Long-term buyer relationships — not one-off transactions.',
  'Serving importers across Europe, the Middle East, and North America.',
];

const PROCESS_STEPS = [
  { number: '01', title: 'Enquiry', description: 'Share your product requirement, quantity, and destination market.' },
  { number: '02', title: 'Sampling', description: 'We develop and send pre-production samples for approval.' },
  { number: '03', title: 'Production', description: 'Bulk manufacturing begins at a verified, vetted facility.' },
  { number: '04', title: 'Quality Check', description: 'In-house and in-factory inspection before dispatch.' },
  { number: '05', title: 'Shipment', description: 'Export packaging, documentation, and dispatch from Karachi.' },
];

export default function AboutPageClient() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="bg-navy">
        <div className="site-container py-16">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-accent" />
                <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-accent">
                  Our Story
                </span>
              </div>
              <h1 className="mt-6 text-[48px] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[84px]">
                About
                <br />
                <span className="whitespace-nowrap">AAV Sourcing</span>
              </h1>
            </div>
            <div className="flex items-end lg:col-span-4 lg:justify-self-end">
              <p
                className="max-w-[358px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                Over 20 years, we have built direct relationships with hundreds of
                factories, suppliers, and mills across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ COMPANY STORY ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
            <SectionWrapper className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-active">
                Est. 20+ Years
              </span>
              <h2 className="mt-5 text-[48px] font-black leading-[60px] tracking-[-0.025em] text-navy">
                A Single Sourcing Point in Pakistan
              </h2>
            </SectionWrapper>

            <SectionWrapper className="lg:col-span-7" delay={0.1}>
              <p
                className="text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(15, 30, 51, 0.65)' }}
              >
                AAV Sourcing was founded with a clear purpose: to make Pakistan&apos;s
                world-class textile and timber production accessible to global
                buyers without friction. Based in Karachi — Pakistan&apos;s commercial
                capital — we bridge the gap between international demand and local
                manufacturing excellence.
              </p>
              <p
                className="mt-5 text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(15, 30, 51, 0.65)' }}
              >
                Over 20 years, we have built direct relationships with hundreds of
                factories, suppliers, and mills across Pakistan — offering buyers a
                single trusted contact for sourcing, quality assurance, and shipment
                coordination.
              </p>
              {/* Founder Card */}
              <div className="mt-8 flex items-center gap-4 rounded-xl bg-beige p-4 pr-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-[14px] font-bold text-white">
                  AV
                </div>
                <div>
                  <p className="text-[14px] font-semibold leading-[20px] text-navy">
                    Ahad Vavdiwala
                  </p>
                  <p
                    className="text-[12px] leading-[16px]"
                    style={{ color: 'rgba(15, 30, 51, 0.45)' }}
                  >
                    Founder — AAV Sourcing, Karachi
                  </p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE STAND FOR ═══════ */}
      <section className="bg-beige">
        <div className="site-container py-24">
          <SectionWrapper>
            <div
              className="pb-4"
              style={{ borderBottom: '1px solid rgba(15, 30, 51, 0.1)' }}
            >
              <h2 className="text-[35.2px] font-black leading-[52.8px] tracking-[-0.025em] text-navy">
                What We Stand For
              </h2>
            </div>
          </SectionWrapper>

          <div className="mt-14">
            {VALUES.map((text, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <ValueItem number={String(i + 1).padStart(2, '0')} text={text} />
              </SectionWrapper>
            ))}
            <div
              className="h-[1px] w-full"
              style={{ backgroundColor: 'rgba(15, 30, 51, 0.12)' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════ HOW WE WORK ═══════ */}
      <section className="bg-section-dark-gradient">
        <div className="site-container py-24">
          <SectionWrapper>
            <div className="flex items-end justify-between">
              <h2 className="text-[38.4px] font-black leading-[57.6px] tracking-[-0.025em] text-white">
                How We Work
              </h2>
              <span
                className="hidden text-[12px] leading-[18px] md:block"
                style={{ color: 'rgba(255, 255, 255, 0.35)' }}
              >
                Enquiry to delivery
              </span>
            </div>
          </SectionWrapper>

          <div className="mt-14">
            {PROCESS_STEPS.map((step, i) => (
              <SectionWrapper key={step.number} delay={i * 0.1}>
                <ProcessStep {...step} />
              </SectionWrapper>
            ))}
            <div
              className="h-[1px] w-full"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <CTASection
        heading="Ready to start
sourcing?"
        description="Send us your requirement and we'll respond within 24 hours."
        primaryButtonText="Get in Touch"
        primaryButtonHref="/contact"
      />
    </>
  );
}
