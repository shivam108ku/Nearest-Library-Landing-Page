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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center shadow-lg">
            <span className="text-[#D4A017] text-lg font-black">N</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#0F172A]">
            Nearest<span className="text-[#B8860B]">Library</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#475569] hover:text-[#0F172A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B8860B] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#download" className="cta-button px-5 py-2.5 rounded-xl text-sm font-bold cursor-pointer">
            <span className="flex items-center gap-2">
              Download App
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menu">
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 w-full bg-[#0F172A] transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-full bg-[#0F172A] transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-[#0F172A] transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-white/20 px-6 pb-6 pt-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-[#475569] hover:text-[#0F172A]">
              {l.label}
            </a>
          ))}
          <a href="#download" className="cta-button mt-3 block text-center px-5 py-2.5 rounded-xl text-sm font-bold">
            <span>Download App</span>
          </a>
        </div>
      )}
    </nav>
  );
}
