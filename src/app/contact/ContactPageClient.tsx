'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionWrapper from '@/components/SectionWrapper';

/* ─── Toggle Button Group ─── */
function ToggleGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
              isSelected
                ? 'border-navy bg-navy text-white shadow-sm'
                : 'border-navy/20 bg-transparent text-navy/60 hover:border-navy hover:text-navy'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

/* ─── Contact Info Row ─── */
function ContactInfoRow({
  icon,
  label,
  value,
  valueColor,
}: {
  icon: string;
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 flex shrink-0 items-start">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl">
          <Image src={icon} alt="" width={15} height={15} aria-hidden="true" />
        </div>
      </div>
      <div>
        <span
          className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.15em]"
          style={{ color: 'rgba(15, 30, 51, 0.35)' }}
        >
          {label}
        </span>
        <p
          className="mt-0.5 text-[14px] font-medium leading-[21px]"
          style={{ color: valueColor || 'rgba(15, 30, 51, 0.8)' }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ContactPageClient() {
  const [role, setRole] = useState('Buyer');
  const [interest, setInterest] = useState('Textile');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Validation
    if (!role) {
      setStatus({ type: 'error', message: 'Please select whether you are a Buyer or Seller.' });
      return;
    }

    if (!interest) {
      setStatus({ type: 'error', message: 'Please select your category of interest.' });
      return;
    }

    if (!fullName.trim()) {
      setStatus({ type: 'error', message: 'Please enter your full name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    if (!message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your requirement message.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          role,
          interest,
          fullName: fullName.trim(),
          company: company.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: data.message || "Thank you! We'll get back to you within 24 hours.",
      });

      // Clear input fields
      setFullName('');
      setCompany('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'An error occurred while sending your message. Please try again.';
      setStatus({ type: 'error', message: errMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Get in Touch
                </span>
              </div>
              <h1 className="mt-6 text-[60px] font-black leading-[0.95] tracking-[-0.025em] text-white md:text-[80px] lg:text-[96px] lg:leading-[91.2px]">
                Let&apos;s
                <br />
                Talk.
              </h1>
            </div>
            <div className="lg:justify-self-end">
              <p
                className="max-w-[384px] text-[15px] leading-[24.38px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                Whether you&apos;re sourcing textile or timber products, or looking to
                connect with international buyers — we&apos;re ready to help. Share
                your requirement and we&apos;ll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FORM SECTION ═══════ */}
      <section className="bg-cream">
        <div className="site-container py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left — Contact Details (4 cols) */}
            <SectionWrapper className="lg:col-span-4">
              <div className="rounded-2xl bg-beige p-8">
                <h2 className="text-[17.6px] font-black leading-[26.4px] tracking-[-0.025em] text-navy">
                  Contact Details
                </h2>
                <div className="mt-7 flex flex-col gap-5">
                  <ContactInfoRow
                    icon="/images/icons/contact-person.svg"
                    label="Contact"
                    value="Ahad Vavdiwala"
                  />
                  <ContactInfoRow
                    icon="/images/icons/contact-company.svg"
                    label="Company"
                    value="AAV Sourcing"
                  />
                  <ContactInfoRow
                    icon="/images/icons/contact-location.svg"
                    label="Location"
                    value="Karachi, Pakistan"
                  />
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 rounded-xl p-2 -mx-2 transition-all duration-300 hover:bg-white/60 hover:scale-[1.02]"
                  >
                    <div className="mt-0.5 flex shrink-0 items-start">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'rgba(37, 211, 102, 0.15)' }}
                      >
                        <Image
                          src="/images/icons/contact-whatsapp.svg"
                          alt=""
                          width={15}
                          height={15}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <span
                        className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.15em]"
                        style={{ color: 'rgba(15, 30, 51, 0.35)' }}
                      >
                        WhatsApp
                      </span>
                      <p className="mt-0.5 text-[14px] font-medium leading-[21px] text-whatsapp link-hover-effect">
                        Message us directly
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[16px]" style={{ color: 'rgba(15, 30, 51, 0.5)' }}>⏱</span>
                  <span className="text-[12.5px] leading-[18.75px]" style={{ color: 'rgba(15, 30, 51, 0.5)' }}>
                    We respond within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[16px]" style={{ color: 'rgba(15, 30, 51, 0.5)' }}>🔒</span>
                  <span className="text-[12.5px] leading-[18.75px]" style={{ color: 'rgba(15, 30, 51, 0.5)' }}>
                    Your enquiry is confidential
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[16px]" style={{ color: 'rgba(15, 30, 51, 0.5)' }}>📦</span>
                  <span className="text-[12.5px] leading-[18.75px]" style={{ color: 'rgba(15, 30, 51, 0.5)' }}>
                    No minimum order for first enquiry
                  </span>
                </div>
              </div>
            </SectionWrapper>

            {/* Right — Form (8 cols) */}
            <SectionWrapper className="lg:col-span-8" delay={0.1}>
              <form
                className="rounded-2xl bg-beige p-8 lg:p-10"
                onSubmit={handleSubmit}
                noValidate
              >
                <h2 className="text-[20.8px] font-black leading-[31.2px] tracking-[-0.025em] text-navy">
                  Send an Enquiry
                </h2>

                {/* Status Alert Notification */}
                {status && (
                  <div
                    className={`mt-6 flex items-start gap-3 rounded-xl p-4 text-[13.5px] leading-[21px] ${
                      status.type === 'success'
                        ? 'border border-green-200 bg-green-50 text-green-900'
                        : 'border border-red-200 bg-red-50 text-red-800'
                    }`}
                  >
                    <span className="mt-0.5 text-[16px]">
                      {status.type === 'success' ? '✅' : '⚠️'}
                    </span>
                    <p className="flex-1">{status.message}</p>
                  </div>
                )}

                {/* I am a */}
                <div className="mt-8">
                  <label
                    className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.15em]"
                    style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                  >
                    I am a *
                  </label>
                  <div className="mt-3">
                    <ToggleGroup
                      options={['Buyer', 'Seller / Manufacturer']}
                      value={role}
                      onChange={setRole}
                    />
                  </div>
                </div>

                {/* Interested in */}
                <div className="mt-8">
                  <label
                    className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.15em]"
                    style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                  >
                    Interested in *
                  </label>
                  <div className="mt-3">
                    <ToggleGroup
                      options={['Textile', 'Timber', 'Other']}
                      value={interest}
                      onChange={setInterest}
                    />
                  </div>
                </div>

                {/* Name & Company */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.15em]"
                      style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Smith"
                      className="mt-2 w-full border-b bg-transparent py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-blue-primary"
                      style={{
                        borderColor: 'rgba(15, 30, 51, 0.2)',
                        color: '#0F1E33',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.15em]"
                      style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Company Ltd."
                      className="mt-2 w-full border-b bg-transparent py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-blue-primary"
                      style={{
                        borderColor: 'rgba(15, 30, 51, 0.2)',
                        color: '#0F1E33',
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-8">
                  <label
                    className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.15em]"
                    style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="mt-2 w-full border-b bg-transparent py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-blue-primary"
                    style={{
                      borderColor: 'rgba(15, 30, 51, 0.2)',
                      color: '#0F1E33',
                    }}
                  />
                </div>

                {/* Message */}
                <div className="mt-8">
                  <label
                    className="text-[11px] font-semibold uppercase leading-[16.5px] tracking-[0.15em]"
                    style={{ color: 'rgba(15, 30, 51, 0.4)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your product requirement, target quantity, destination, or any other details…"
                    className="mt-2 w-full resize-none border-b bg-transparent py-2.5 text-[14px] text-navy outline-none transition-colors focus:border-blue-primary"
                    style={{
                      borderColor: 'rgba(15, 30, 51, 0.2)',
                      color: '#0F1E33',
                    }}
                  />
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary group px-9 py-4 text-[13px] ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending Enquiry…' : 'Send Enquiry'}</span>
                    {isSubmitting ? (
                      <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <Image
                        src="/images/icons/arrow-right-white.svg"
                        alt=""
                        width={13}
                        height={13}
                        className="arrow-slide"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              </form>
            </SectionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
