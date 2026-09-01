"use client";

import React, { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  gradient: string;
  icon: React.ReactNode;
  decimals?: number;
};

const stats: Stat[] = [
  {
    value: 100,
    suffix: "+",
    label: "Active Students",
    sublabel: "studying daily",
    gradient: "from-[#B8860B]/15 to-[#D4A017]/5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: "+",
    label: "Partner Libraries",
    sublabel: "across India",
    gradient: "from-emerald-500/15 to-emerald-500/5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    value: 50,
    suffix: "+",
    label: "Cities Covered",
    sublabel: "and growing",
    gradient: "from-sky-500/15 to-sky-500/5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    value: 4.8,
    decimals: 1,
    suffix: "★",
    label: "Play Store Rating",
    sublabel: "from 2K+ reviews",
    gradient: "from-rose-500/15 to-rose-500/5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

function useCountUp(target: number, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return {
    ref,
    value: decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString(),
  };
}

function StatCard({ stat }: { stat: Stat }) {
  const decimals = stat.decimals ?? 0;
  const { ref, value } = useCountUp(stat.value, 1600, decimals);

  return (
    <div
      ref={ref}
      className="stat-glow group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-6 lg:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />
      <div className="relative z-10 flex flex-row items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8860B] transition-colors">
          {stat.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#09090b] leading-none">
            {value}
            <span className="text-[#B8860B]">{stat.suffix}</span>
          </div>
          <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-neutral-800 break-words">
            {stat.sublabel}
          </div>
          <div className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 break-words">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-full px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs shadow-sm">
            <span className="flex h-1.5 w-1.5 relative flex-shrink-0">
              <span className="absolute inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-neutral-700 tracking-wide uppercase whitespace-nowrap">
              Live Numbers • Updated Daily
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="trust-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500 flex-shrink-0">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span className="whitespace-nowrap">Verified Library Owners</span>
          </span>
          <span className="trust-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#B8860B] flex-shrink-0">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="whitespace-nowrap">4.8★ on Google Play</span>
          </span>
          <span className="trust-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500 flex-shrink-0">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="whitespace-nowrap">100% Free for Students</span>
          </span>
          <span className="trust-pill">
            <span className="text-base flex-shrink-0">🇮🇳</span>
            <span className="whitespace-nowrap">Made in India</span>
          </span>
        </div>
      </div>
    </section>
  );
}