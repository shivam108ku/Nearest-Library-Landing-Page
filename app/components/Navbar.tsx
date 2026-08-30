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
        <a href="#" className="flex items-center gap-2.5 group cursor-pointer" aria-label="Nearest Library">
          <div className="w-7 h-7 flex items-center justify-center text-neutral-900 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(45 12 12)" strokeLinecap="round" />
              <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(-45 12 12)" strokeLinecap="round" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
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
            href="#download"
            className="bg-black text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Download App
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
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
        <div className="md:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-lg border border-neutral-200/80 rounded-2xl p-5 shadow-xl pointer-events-auto flex flex-col gap-3">
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
            href="#download"
            onClick={() => setOpen(false)}
            className="bg-black text-white text-center py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-neutral-800"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
