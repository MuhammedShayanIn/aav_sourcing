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
  tags: string[];
}

function ProductCard({ image, imageAlt, title, description, tags }: ProductCardProps) {
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-[15px] font-bold leading-[22.5px] text-navy">
            {title}
          </h3>
          <p
            className="mt-1 flex-1 text-[11.5px] leading-[18.69px]"
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
    image: '/images/textile-muslin.png',
    imageAlt: 'Soft white baby muslin swaddle cloth',
    title: 'Muslin & Baby Essentials',
    description:
      'Swaddles, diapers, bedding, duvet sets, sleeping bags, bibs, burp cloths, bandanas, wash gloves & hooded towels',
    tags: ['Cotton muslin', 'Double gauze', 'Printed / dyed'],
  },
  {
    image: '/images/textile-sheets.png',
    imageAlt: 'White bed sheets and pillows on a premium bed',
    title: 'Sheets & Bedding',
    description:
      'Jersey, terry, muslin, molton and flannel fitted sheets; woven and flannel bed sets; pillowcases and duvet covers',
    tags: ['Cotton', 'Tencel', 'Bamboo blends'],
  },
  {
    image: '/images/textile-waterproof.png',
    imageAlt: 'White quilted mattress protector fabric closeup',
    title: 'Waterproof Protection',
    description:
      'Breathable mattress and pillow protectors with TPU or PVC lamination, fitted or elasticated to buyer dimensions',
    tags: ['Jersey + TPU', 'Terry + TPU', 'PU / PVC'],
  },
  {
    image: '/images/textile-towels.png',
    imageAlt: 'Neatly stacked white folded bath towels',
    title: 'Towels & Bath',
    description:
      'Bath towels, bath sheets, hand towels, washcloths, beach towels, bath mats and baby hooded towels',
    tags: ['Ring spun', 'Zero twist', 'Dobby / jacquard'],
  },
  {
    image: '/images/textile-hospital.png',
    imageAlt: 'Clean white hospital bed near window',
    title: 'Hospital & Hospitality',
    description:
      'Hospital jersey sheets, institutional bed linen, hotel bedding, protective articles and washable laundry bags',
    tags: ['Commercial wash', 'Custom sizes', 'Bulk packing'],
  },
  {
    image: '/images/textile-fabric.png',
    imageAlt: 'Premium folded white fabric rolls',
    title: 'Fabric Sourcing',
    description:
      'Knitted and woven fabrics supplied greige, dyed, printed, laminated or finished to technical requirements',
    tags: ['Jersey / terry', 'Flannel', 'Sheeting / muslin'],
  },
  {
    image: '/images/textile-oem.png',
    imageAlt: 'Colorful thread spools in textile factory',
    title: 'OEM & Private Label',
    description:
      'Custom branding, labeling, and packaging — your design, your brand, manufactured to your specification',
    tags: ['Custom labels', 'Private label', 'Brand packaging'],
  },
  {
    image: '/images/textile-linen.png',
    imageAlt: 'Luxury hotel and restaurant table linen, folded premium tablecloths and napkins',
    title: 'Home & Hospitality Linen',
    description:
      'Premium hotel and restaurant linen — tablecloths, napkins, kitchen textiles and staff uniforms',
    tags: ['Hotel grade', 'Restaurant', 'Bulk orders'],
  },
];

const BUYER_CONTENT = {
  description:
    "Source finished textile products directly from Pakistan's top manufacturers — with quality assurance and export handling included.",
  features: [
    'Direct manufacturer access — no agent markups.',
    'Full product range: towels, bedding, baby textiles, custom fabrics.',
    'Request samples before any bulk commitment.',
    'OEM and private label supported.',
    'Export-ready documentation and shipment coordination.',
  ],
};

const SELLER_CONTENT = {
  description:
    "Partner with AAV Sourcing to connect your manufacturing facilities with recurring international buyers across Europe, the Middle East, and the Americas.",
  features: [
    'Direct access to vetted international buyers and recurring commercial contracts.',
    'Assistance with export compliance, buyer specifications, and lab testing standards.',
    'Reliable payment structures and LC coordination for export safety.',
    'Global market representation and product promotion without overhead.',
    'End-to-end export documentation, freight booking, and customs clearance support.',
  ],
};

export default function TextilePageClient() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');
  const currentContent = activeTab === 'buyers' ? BUYER_CONTENT : SELLER_CONTENT;

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
                Finished textile products for international buyers and importers —
                and a direct channel to global markets for Pakistani manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCT CATEGORIES ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
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

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
            <SectionWrapper className="lg:col-span-4">
              <h2 className="text-[35.2px] font-black leading-[52.8px] tracking-[-0.025em] text-navy">
                Who We Work With
              </h2>
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('buyers')}
                  className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                    activeTab === 'buyers'
                      ? 'bg-navy text-white shadow-sm'
                      : 'border border-navy/20 bg-transparent text-navy/70 hover:border-navy hover:text-navy'
                  }`}
                >
                  For Buyers
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('sellers')}
                  className={`rounded-full px-6 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                    activeTab === 'sellers'
                      ? 'bg-navy text-white shadow-sm'
                      : 'border border-navy/20 bg-transparent text-navy/70 hover:border-navy hover:text-navy'
                  }`}
                >
                  For Sellers
                </button>
              </div>
            </SectionWrapper>

            <SectionWrapper className="lg:col-span-8" delay={0.1}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p
                  className="text-[15px] leading-[24.38px]"
                  style={{ color: 'rgba(15, 30, 51, 0.6)' }}
                >
                  {currentContent.description}
                </p>
                <div className="mt-8">
                  {currentContent.features.map((text, i) => (
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
              </motion.div>
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
