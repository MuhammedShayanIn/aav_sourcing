'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/SectionWrapper';
import CTASection from '@/components/CTASection';

/* ─── Market Tag ─── */
function MarketTag({ text }: { text: string }) {
  return (
    <span
      className="rounded-full border px-3.5 py-1 text-[12px] font-medium leading-[18px]"
      style={{
        borderColor: 'rgba(15, 30, 51, 0.18)',
        color: 'rgba(15, 30, 51, 0.65)',
      }}
    >
      {text}
    </span>
  );
}

/* ─── Source Card ─── */
function SourceCard({
  label,
  heading,
  description,
  markets,
  image,
  imageAlt,
  reversed = false,
}: {
  label: string;
  heading: string;
  description: string;
  markets: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}) {
  const contentBlock = (
    <div className="flex flex-1 flex-col justify-center p-10 lg:p-14">
      <span
        className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em]"
        style={{ color: '#1E5FA8' }}
      >
        {label}
      </span>
      <h2 className="mt-4 text-[32px] font-black leading-[40px] tracking-[-0.025em] text-navy">
        {heading}
      </h2>
      <p
        className="mt-5 max-w-[448px] text-[15px] leading-[24.38px]"
        style={{ color: 'rgba(15, 30, 51, 0.6)' }}
      >
        {description}
      </p>
      <div className="mt-8">
        <span
          className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.15em]"
          style={{ color: 'rgba(15, 30, 51, 0.35)' }}
        >
          Markets served
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {markets.map((market) => (
            <MarketTag key={market} text={market} />
          ))}
        </div>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative h-[300px] overflow-hidden lg:h-[448px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: reversed
            ? 'none'
            : 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
    </div>
  );

  return (
    <SectionWrapper>
      <div className="overflow-hidden rounded-2xl bg-beige">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${
            reversed ? '' : ''
          }`}
        >
          {reversed ? (
            <>
              {contentBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {contentBlock}
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ─── Process Step Card ─── */
function ProcessStepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-cream p-5 md:p-6 shadow-xs">
      <div>
        <span
          className="text-[11px] font-semibold leading-[16.5px] tracking-[0.1em]"
          style={{ color: 'rgba(15, 30, 51, 0.25)' }}
        >
          {number}
        </span>
        <h3 className="mt-3 text-[15px] font-bold leading-[20.63px] text-navy">
          {title}
        </h3>
      </div>
      <p
        className="mt-3 text-[12px] leading-[19px]"
        style={{ color: 'rgba(15, 30, 51, 0.55)' }}
      >
        {description}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   WHERE WE SOURCE PAGE
   ═══════════════════════════════════════════════════ */
export default function WhereWeSourceClient() {
  return (
    <>
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="bg-navy">
        <div className="site-container py-16">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-accent" />
                <span className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.18em] text-blue-accent">
                  Supply Reach
                </span>
              </div>
              <h1 className="mt-6 text-[52px] font-black leading-[0.95] tracking-[-0.025em] text-white md:text-[72px] lg:text-[86px] lg:leading-[82.09px]">
                Where We
                <br />
                Source &amp;
                <br />
                Supply
              </h1>
            </div>
            <div className="lg:justify-self-end">
              <p
                className="max-w-[384px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                AAV Sourcing operates two specialist divisions — textile and
                timber — each with established supplier networks and buyer
                markets across multiple regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SOURCING CARDS ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          {/* Textile Sourcing Card */}
          <SourceCard
            label="Textiles from Pakistan"
            heading="Sourced from Karachi and across Pakistan"
            description="We source textile products through mills and manufacturers in Karachi and across Pakistan, serving buyers in Europe, the USA, the Middle East, and Asia."
            markets={['Europe', 'United States', 'Middle East', 'Asia']}
            image="/images/products/folded-white-textile-fabric-from-pakistani-mill.png"
            imageAlt="Folded white textile fabric from Pakistani mill"
          />

          {/* Timber Sourcing Card */}
          <div className="mt-10">
            <SourceCard
              label="Timber from Europe, Russia & the USA"
              heading="Supplying buyers in China, Asia & the Middle East"
              description="We source timber for buyers in China, other Asian markets, and the Middle East. Products and origins depend on the specifications and availability for each enquiry."
              markets={['China', 'Asia', 'Middle East']}
              image="/images/products/stacked-spruce-timber-planks-ready-for-export.png"
              imageAlt="Stacked spruce timber planks ready for export"
              reversed
            />
          </div>
        </div>
      </section>

      {/* ═══════ HOW A SOURCING ENQUIRY WORKS ═══════ */}
      <section className="bg-beige">
        <div className="site-container py-24">
          <div className="mx-auto max-w-[1020px]">
            <SectionWrapper>
              <div
                className="pb-5"
                style={{ borderBottom: '1px solid rgba(15, 30, 51, 0.1)' }}
              >
                <h2 className="text-[28px] font-black leading-[42px] tracking-[-0.025em] text-navy md:text-[32px] md:leading-[48px]">
                  How a Sourcing Enquiry Works
                </h2>
              </div>
            </SectionWrapper>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <SectionWrapper delay={0.05} className="h-full">
                <ProcessStepCard
                  number="01"
                  title="Receive Specifications"
                  description="Buyer shares product, quantity, grade, and destination requirements."
                />
              </SectionWrapper>
              <SectionWrapper delay={0.1} className="h-full">
                <ProcessStepCard
                  number="02"
                  title="Source & Quote"
                  description="We identify suitable suppliers and prepare a tailored offer with all-in pricing."
                />
              </SectionWrapper>
              <SectionWrapper delay={0.15} className="h-full">
                <ProcessStepCard
                  number="03"
                  title="Sample & Confirm"
                  description="Samples dispatched and approved before any bulk order is placed."
                />
              </SectionWrapper>
              <SectionWrapper delay={0.2} className="h-full">
                <ProcessStepCard
                  number="04"
                  title="Ship & Document"
                  description="We coordinate export documentation, packaging, and delivery to destination."
                />
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <CTASection
        heading={"Looking to source\nor supply?"}
        headingHighlight="Let's talk."
        description="Share your product specifications and we'll prepare a tailored sourcing offer."
        primaryButtonText="Send an Enquiry"
        primaryButtonHref="/contact"
      />
    </>
  );
}
