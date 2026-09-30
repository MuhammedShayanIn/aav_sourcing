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
                className="text-[14px] leading-[20px]"
                style={{ color: 'rgba(255, 255, 255, 0.55)' }}
              >
                AAV Sourcing — Karachi, Pakistan
              </p>
              <a
                href="https://wa.me/923253205555"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-2 text-[14px] leading-[20px] text-[#25D366] transition-all duration-300 hover:text-white"
              >
                <Image
                  src="/images/icons/whatsapp-green.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
                <span className="link-hover-effect font-medium">+92 325 3205555</span>
              </a>
              <a
                href="mailto:aav@aavsourcing.com"
                className="group inline-flex items-center gap-2 text-[14px] leading-[20px] text-blue-accent transition-all duration-300 hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <rect x="2" y="3.5" width="11" height="8" rx="1.5" stroke="#4FA3E3" strokeWidth="1.2"/>
                  <path d="M2.5 4.5L7.5 8.5L12.5 4.5" stroke="#4FA3E3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="link-hover-effect">aav@aavsourcing.com</span>
              </a>
              <div
                className="inline-flex items-center gap-2 text-[14px] leading-[20px]"
                style={{ color: 'rgba(255, 255, 255, 0.45)' }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 opacity-60"
                  aria-hidden="true"
                >
                  <path d="M12.5 8.5C12.5 9.05228 12.0523 9.5 11.5 9.5H4L1.5 12V3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H11.5C12.0523 2.5 12.5 2.94772 12.5 3.5V8.5Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>WeChat: vavdiii</span>
              </div>
              <a
                href="https://linkedin.com/in/aav"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[14px] leading-[20px] text-white/50 transition-all duration-300 hover:text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 opacity-60 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <rect x="1.25" y="1.25" width="12.5" height="12.5" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="4.5" cy="4.5" r="0.75" fill="currentColor"/>
                  <path d="M3.75 6.5H5.25V10.75H3.75V6.5Z" fill="currentColor"/>
                  <path d="M7 6.5H8.4V7.1C8.75 6.6 9.4 6.35 10.1 6.35C11.5 6.35 12.25 7.2 12.25 8.7V10.75H10.75V8.9C10.75 8 10.4 7.6 9.75 7.6C9.1 7.6 8.5 8.1 8.5 8.9V10.75H7V6.5Z" fill="currentColor"/>
                </svg>
                <span className="link-hover-effect">linkedin.com/in/aav</span>
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
