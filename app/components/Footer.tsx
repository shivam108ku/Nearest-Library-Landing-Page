"use client";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "For Students", "For Libraries", "Pricing", "Download"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/nearestlibrary",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-kumar108/",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nearestlibrary",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@nearestlibrary",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

function getFooterLinkHref(link: string): string {
  switch (link) {
    case "Download":
      return "https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1";
    case "About Us":
    case "For Libraries":
      return "#about";
    case "Features":
    case "For Students":
      return "#features";
    case "Contact Us":
    case "Help Center":
      return "mailto:shivam108ku@gmail.com";
    case "Privacy Policy":
      return "#privacy";
    case "Terms of Service":
      return "#terms";
    default:
      return "#top";
  }
}

export default function Footer() {
  return (
    <footer className="relative bg-[#09090b] text-white pt-12 sm:pt-16 pb-8 px-4 sm:px-6">
      {/* Top gradient accent line */}
      <div className="footer-gradient-line absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-14">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                <img src="/logo.png" alt="Nearest Library Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                Nearest <span className="text-[#B8860B]">Lib</span>rary
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
              India&apos;s #1 library near me app. Find the nearest library near you, book study seats online, and manage attendance with QR check-in. Helping 10,000+ students find their perfect study space daily.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mb-6 max-w-sm"
              aria-label="Newsletter signup"
            >
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 block">
                Get study tips & updates
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="newsletter-input flex-1 min-w-0"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-3 sm:px-3.5 py-2 rounded-xl bg-[#B8860B] hover:bg-[#D4A017] text-white text-sm font-semibold transition-all hover:-translate-y-0.5 flex-shrink-0"
                  aria-label="Subscribe"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="flex gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-[#B8860B] hover:to-[#D4A017] border border-white/10 hover:border-transparent flex items-center justify-center text-neutral-400 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="min-w-0">
              <h4 className="text-xs font-bold text-neutral-300 mb-3 sm:mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {col.links.map((link) => {
                  const href = getFooterLinkHref(link);
                  const isExternal = href.startsWith("http");
                  return (
                    <li key={link}>
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-[#B8860B] transition-colors font-medium break-words"
                      >
                        <span>{link}</span>
                        <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <p className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span>&copy; {new Date().getFullYear()} NearestLibrary Inc. All rights reserved.</span>
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-neutral-300 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-neutral-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
