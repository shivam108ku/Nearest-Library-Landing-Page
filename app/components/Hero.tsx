"use client";

import dynamic from "next/dynamic";
import SideRays from "./SideRays";

const FoldText = dynamic(() => import("./FoldText"), {
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
      Nearest <span style={{ color: "#B8860B" }}>Lib</span>rary
      <br />
      for your future
    </h1>
  ),
});

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden bg-white px-4 sm:px-6"
      suppressHydrationWarning
    >
      {/* ── WebGL SideRays Background (Full Screen) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SideRays />
      </div>

      {/* ── Center Demo Content exactly matching screenshot ── */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center"
        suppressHydrationWarning
      >

        {/* Top Pill Badge: Relevant to NearestLibrary */}
        <div
          className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-3 sm:pr-4 py-1 text-xs sm:text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6 sm:mb-8 max-w-full"
          suppressHydrationWarning
        >
          <span className="bg-neutral-900 text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
            NOW LIVE
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-600 whitespace-nowrap">
            Find &amp; Reserve Nearby Study Libraries
          </span>
        </div>

        {/* 3D Origami FoldText Headline via Next.js Dynamic Client Boundary */}
        <div
          className="w-full max-w-xl mx-auto mb-8 flex justify-center text-center"
          suppressHydrationWarning
        >
          <FoldText
            as="h1"
            text={"Nearest Library Making\n Libraries Smarter"}
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
            charColors={{ 8: "#B8860B", 9: "#B8860B", 10: "#B8860B" }}
          />
        </div>

        {/* Action Buttons matching screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
          <a
            href="#download"
            className="btn-premium cursor-pointer"
          >
            <span>Get started</span>
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white/90 text-neutral-700 border border-neutral-200/90 px-5 sm:px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:bg-white hover:border-neutral-300 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Learn more
          </a>
        </div>

        {/* Hero Trust Strip - Micro proof below CTAs */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3 text-xs text-neutral-500 px-2">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B8860B] to-[#D4A017] border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-white" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 border-2 border-white" />
            </div>
            <span className="font-medium text-neutral-700 whitespace-nowrap">10K+ students</span>
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
            <span className="flex-shrink-0">🇮🇳</span>
            <span className="whitespace-nowrap">Made in India</span>
          </div>
        </div>
      </div>

      {/* ── Seamless Bottom Gradient Transition into Page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
