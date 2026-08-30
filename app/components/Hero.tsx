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
      className="relative w-full h-screen min-h-[100dvh] flex flex-col items-center justify-center text-center overflow-hidden bg-white px-4"
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
          className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8"
          suppressHydrationWarning
        >
          <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            NOW LIVE
          </span>
          <span className="text-xs sm:text-sm font-medium text-neutral-600">
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
        <div className="flex items-center justify-center gap-3.5">
          <a
            href="#download"
            className="bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:bg-neutral-800 transition-all cursor-pointer"
          >
            Get started
          </a>
          <a
            href="#features"
            className="bg-white/90 text-neutral-700 border border-neutral-200/90 px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:bg-white transition-all cursor-pointer"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* ── Seamless Bottom Gradient Transition into Page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
}
