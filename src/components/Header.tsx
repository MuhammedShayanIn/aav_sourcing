'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** Navigation items matching the Figma design */
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Textile', href: '/textile' },
  { label: 'Timber', href: '/timber' },
  { label: 'Where We Source', href: '/where-we-source' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: 'rgba(245, 241, 235, 0.95)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderColor: 'rgba(15, 30, 51, 0.08)',
      }}
    >
      <div className="site-container flex h-[68px] items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="AAV Sourcing Home" className="transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/images/logo-7fed28.png"
            alt="AAV Sourcing"
            width={115}
            height={60}
            className="h-[50px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col items-center justify-center py-2 px-1"
              >
                <span
                  className={`text-[13px] leading-[19.5px] tracking-[0.025em] transition-all duration-200 ${
                    isActive
                      ? 'font-bold text-blue-active'
                      : 'font-medium text-navy/70 group-hover:font-semibold group-hover:text-navy group-hover:scale-[1.03]'
                  }`}
                >
                  {item.label}
                </span>
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-[-2px] h-[2px] w-full rounded-full bg-blue-active"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-[-2px] h-[1.5px] w-0 rounded-full bg-navy/40 transition-all duration-300 ease-out group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="btn-outline-navy group hidden px-5 py-2 text-[13px] md:inline-flex"
        >
          <span>Enquire</span>
          <Image
            src="/images/icons/arrow-right.svg"
            alt=""
            width={12}
            height={12}
            className="arrow-slide"
            aria-hidden="true"
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-[2px] w-6 bg-navy transition-transform duration-300 ${mobileOpen ? 'translate-y-[5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[2px] w-6 bg-navy transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[2px] w-6 bg-navy transition-transform duration-300 ${mobileOpen ? '-translate-y-[5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t md:hidden"
            style={{
              borderColor: 'rgba(15, 30, 51, 0.08)',
              backgroundColor: 'rgba(245, 241, 235, 0.98)',
            }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors"
                    style={{
                      color: isActive ? '#1E5FA8' : 'rgba(15, 30, 51, 0.7)',
                      backgroundColor: isActive
                        ? 'rgba(30, 95, 168, 0.08)'
                        : 'transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-full border px-5 py-2.5 text-[13px] font-semibold text-navy"
                style={{ borderColor: 'rgba(15, 30, 51, 0.25)' }}
              >
                Enquire
                <Image
                  src="/images/icons/arrow-right.svg"
                  alt=""
                  width={12}
                  height={12}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
