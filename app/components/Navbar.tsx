"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] px-5 py-2.5 flex items-center justify-between pointer-events-auto transition-all"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Brand / Logo */}
        <a href="/" className="flex items-center gap-2.5 group cursor-pointer" aria-label="Nearest Library">
          <div className="w-8 h-8 rounded-xl overflow-hidden shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
            <img src="/logo.png" alt="Nearest Library Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-neutral-900">
            Nearest <span className="text-[#B8860B]">Lib</span>rary
          </span>
        </a>

        {/* Desktop Links & Action */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-black hover:to-[#27272a] hover:-translate-y-0.5 transition-all cursor-pointer overflow-hidden group"
          >
            <span>Download App</span>
            <svg className="transition-transform group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/20 to-[#B8860B]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 text-neutral-700 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-[2px] w-full bg-neutral-900 transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-neutral-900 transition-all duration-300 ${
                open ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-neutral-900 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden fixed top-20 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-lg border border-neutral-200/80 rounded-2xl p-4 sm:p-5 shadow-xl pointer-events-auto flex flex-col gap-3 max-w-2xl mx-auto">
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-neutral-700 hover:text-black border-b border-neutral-100"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="py-2 text-sm font-medium text-neutral-700 hover:text-black border-b border-neutral-100"
          >
            About
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="relative bg-black text-white text-center py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all overflow-hidden group"
          >
            <span className="relative z-10">Download App (Google Play)</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      )}
    </header>
  );
}
