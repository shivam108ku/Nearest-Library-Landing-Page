"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "For Libraries", href: "#for-libraries" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/30" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="NearestLibrary Home">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/40 group-hover:scale-105 transition-transform">
            <img src="/logo.png" alt="NearestLibrary Logo" className="w-full h-full object-cover" width={40} height={40} />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#0F172A]">
            Nearest<span className="text-[#B8860B]">Library</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold text-[#475569] hover:text-[#0F172A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8860B] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#download" className="cta-button px-5 py-2.5 rounded-xl text-[13px] font-bold cursor-pointer">
            <span className="flex items-center gap-2">
              Download App
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Toggle Menu" aria-expanded={open}>
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-[2px] w-full bg-[#0F172A] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-full bg-[#0F172A] transition-all duration-300 ${open ? "opacity-0 scale-0" : ""}`} />
            <span className={`block h-[2px] w-full bg-[#0F172A] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-white/20 px-6 pb-6 pt-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-[#475569] hover:text-[#0F172A] border-b border-[#E8ECF4]/50 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#download" onClick={() => setOpen(false)} className="cta-button mt-4 block text-center px-5 py-3 rounded-xl text-sm font-bold">
            <span>Download App</span>
          </a>
        </div>
      )}
    </nav>
  );
}
