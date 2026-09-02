"use client";

import dynamic from "next/dynamic";
import SideRays from "../components/SideRays";

const FoldText = dynamic(() => import("../components/FoldText"), {
  ssr: false,
  loading: () => (
    <h1
      className="fold-text"
      style={{
        fontSize: "clamp(1.9rem, 6.5vw, 3rem)",
        fontWeight: 600,
        color: "#09090b",
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
      }}
      suppressHydrationWarning
    >
      Check Library <span style={{ color: "#B8860B" }}>Near Me</span>
      <br />
      in Seconds
    </h1>
  ),
});

export default function CheckHero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden bg-white px-4 sm:px-6 pt-28 pb-16"
      suppressHydrationWarning
      aria-label="Check Library Near Me"
    >
      {/* SideRays Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SideRays />
      </div>

      <div
        className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center"
        suppressHydrationWarning
      >
        {/* Breadcrumb — semantic + UX */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500 mb-6"
        >
          <a href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </a>
          <span aria-hidden="true">›</span>
          <span className="text-neutral-700 font-medium" aria-current="page">
            Check Library Near Me
          </span>
        </nav>

        {/* Pill Badge */}
        <div
          className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-3 sm:pr-4 py-1 text-xs sm:text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6 sm:mb-8 max-w-full"
          suppressHydrationWarning
        >
          <span className="bg-emerald-600 text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
            LIVE
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-600 whitespace-nowrap">
            Real-Time Library Checker Tool
          </span>
        </div>

        {/* H1 — primary SEO heading */}
        <div
          className="w-full max-w-3xl mx-auto mb-6 flex justify-center text-center"
          suppressHydrationWarning
        >
          <FoldText
            as="h1"
            text={"Check Library Near Me\n Live Status & Seats"}
            splitBy="char"
            hinge="top"
            trigger="mount"
            duration={0.65}
            stagger={0.045}
            ease="power3.out"
            perspective={700}
            creaseShading={0.55}
            fontSize="clamp(1.9rem, 6.5vw, 3rem)"
            fontWeight={600}
            color="#09090b"
            charColors={{ 6: "#B8860B", 7: "#B8860B", 8: "#B8860B", 9: "#B8860B", 10: "#B8860B", 11: "#B8860B", 12: "#B8860B", 13: "#B8860B" }}
          />
        </div>

        {/* SEO subheadline */}
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto text-center mb-8 leading-relaxed">
          Check the <strong className="text-neutral-900 font-semibold">nearest library near you</strong> in
          seconds — live seat availability, open-now status, AC/Wi-Fi amenities, and
          digital pass verification across <strong className="text-neutral-900 font-semibold">500+ partner libraries</strong> in India.
          100% free for students.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
          <a
            href="#check-tool"
            className="btn-premium cursor-pointer"
            aria-label="Start checking library availability now"
          >
            <span>Start Checking</span>
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/90 text-neutral-700 border border-neutral-200/90 px-5 sm:px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:bg-white hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#B8860B]">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" />
            </svg>
            Get the App
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3 text-xs text-neutral-500 px-2">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B8860B] to-[#D4A017] border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 border-2 border-white" />
            </div>
            <span className="font-medium text-neutral-700 whitespace-nowrap">10K+ students trust it</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-1">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-[#B8860B] flex-shrink-0">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-semibold text-neutral-700">4.8</span>
            <span className="whitespace-nowrap">on Play Store</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="whitespace-nowrap font-medium text-neutral-700">500+ libraries live</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
