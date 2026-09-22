'use client';

import Link from 'next/link';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

interface CTASectionProps {
  heading: string;
  /** Highlighted part of heading (rendered with lower opacity) */
  headingHighlight?: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

/**
 * Blue gradient CTA section used at the bottom of every page.
 * Matches Figma's gradient, radial glow, and layout.
 */
export default function CTASection({
  heading,
  headingHighlight,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-cta-gradient">
      {/* Radial glow overlay */}
      <div className="bg-cta-glow pointer-events-none absolute inset-0" />

      <div className="site-container relative py-24">
        <SectionWrapper>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
            {/* Heading */}
            <div className="max-w-[500px]">
              <h2 className="text-[26px] font-black leading-[1.12] tracking-[-0.025em] text-white sm:text-[32px] md:text-[38px] lg:text-[42px]">
                {heading.split('\n').map((line, idx) => (
                  <span
                    key={idx}
                    className="block whitespace-normal sm:whitespace-nowrap"
                  >
                    {line}
                  </span>
                ))}
                {headingHighlight && (
                  <span
                    className="block whitespace-normal sm:whitespace-nowrap"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {headingHighlight}
                  </span>
                )}
              </h2>
            </div>

            {/* Right column */}
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <p
                className="max-w-[384px] text-[15px] leading-[24.38px] lg:text-right"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={primaryButtonHref}
                  className="btn-white group px-8 py-4 text-[14px]"
                >
                  <span>{primaryButtonText}</span>
                  <Image
                    src="/images/icons/cta-arrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="arrow-slide"
                    aria-hidden="true"
                  />
                </Link>
                {secondaryButtonText && secondaryButtonHref && (
                  <Link
                    href={secondaryButtonHref}
                    className="btn-outline-white px-7 py-4 text-[14px]"
                  >
                    {secondaryButtonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
