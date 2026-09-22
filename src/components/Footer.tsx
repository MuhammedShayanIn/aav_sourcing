import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Textile', href: '/textile' },
  { label: 'Timber', href: '/timber' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-navy">
      <div className="site-container pt-16 pb-8">
        {/* Main Footer Grid */}
        <div
          className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12 md:gap-10"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          {/* Logo & Tagline — 5 cols */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/logo-footer.png"
                alt="AAV Sourcing"
                width={115}
                height={60}
                className="h-[50px] w-auto object-contain brightness-0 invert opacity-80"
              />
            </Link>
            <p
              className="mt-5 max-w-[280px] text-[14px] leading-[22.75px]"
              style={{ color: 'rgba(255, 255, 255, 0.45)' }}
            >
              Textile &amp; Timber Sourcing from Pakistan.
              <br />
              Serving global buyers since 20+ years.
            </p>
          </div>

          {/* Navigation — 3 cols */}
          <div className="md:col-span-3">
            <h3
              className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.15em]"
              style={{ color: 'rgba(255, 255, 255, 0.3)' }}
            >
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-hover-effect text-[14px] leading-[20px] text-white/60 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 4 cols */}
          <div className="md:col-span-4">
            <h3
              className="text-[10px] font-semibold uppercase leading-[15px] tracking-[0.15em]"
              style={{ color: 'rgba(255, 255, 255, 0.3)' }}
            >
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <p
                className="text-[14px] font-medium leading-[20px]"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Ahad Vavdiwala
              </p>
              <p
                className="text-[14px] leading-[20px]"
                style={{ color: 'rgba(255, 255, 255, 0.55)' }}
              >
                AAV Sourcing — Karachi, Pakistan
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-2 text-[14px] leading-[20px] text-blue-accent transition-all duration-300 hover:text-white"
              >
                <Image
                  src="/images/icons/whatsapp.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="link-hover-effect">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-7 md:flex-row">
          <p
            className="text-[12px] leading-[18px]"
            style={{ color: 'rgba(255, 255, 255, 0.25)' }}
          >
            © 2026 AAV Sourcing. All rights reserved.
          </p>
          <p
            className="text-[12px] leading-[18px]"
            style={{ color: 'rgba(255, 255, 255, 0.25)' }}
          >
            Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
