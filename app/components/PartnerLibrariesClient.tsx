"use client";

import React, { useState, useMemo, useEffect } from "react";
import { type Library } from "@/lib/api";

/* ── Facility SVG Icons (Premium Outline Set) ─────────────── */
type IconKey =
  | "wifi"
  | "ac"
  | "power"
  | "parking"
  | "cctv"
  | "locker"
  | "cafeteria"
  | "water"
  | "washroom"
  | "reading"
  | "printer"
  | "study"
  | "default";

const facilityIconKey: Record<string, IconKey> = {
  "Wi-Fi": "wifi",
  "AC": "ac",
  "Power Backup": "power",
  "Parking": "parking",
  "CCTV": "cctv",
  "Locker": "locker",
  "Cafeteria": "cafeteria",
  "Drinking Water": "water",
  "Water Cooler": "water",
  "Washroom": "washroom",
  "Reading Room": "reading",
  "Printer": "printer",
  "Study Material": "study",
};

function FacilityIcon({ k }: { k: IconKey }) {
  const props = {
    width: 11,
    height: 11,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (k) {
    case "wifi":
      return (
        <svg {...props}>
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      );
    case "ac":
      return (
        <svg {...props}>
          <path d="M2 12h20" />
          <path d="M12 2v20" />
          <path d="m4.93 4.93 14.14 14.14" />
          <path d="M19.07 4.93 4.93 19.07" />
        </svg>
      );
    case "power":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "parking":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      );
    case "cctv":
      return (
        <svg {...props}>
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
          <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "locker":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 10v4M11 10v4M15 10v4M19 10v4" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      );
    case "cafeteria":
      return (
        <svg {...props}>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case "water":
      return (
        <svg {...props}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case "washroom":
      return (
        <svg {...props}>
          <circle cx="12" cy="5" r="2" />
          <path d="M10 22V12a2 2 0 1 1 4 0v10" />
          <path d="M8 22v-7" />
          <path d="M16 22v-7" />
        </svg>
      );
    case "reading":
      return (
        <svg {...props}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-1H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-1h7z" />
        </svg>
      );
    case "printer":
      return (
        <svg {...props}>
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      );
    case "study":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return "NL";
}

/* ── Premium Logo Monogram with Gradient Ring ────────────── */
interface MonochromeLogoProps {
  readonly name: string;
  readonly logoUrl?: string;
}

function MonochromeLogo({ name, logoUrl }: MonochromeLogoProps) {
  if (logoUrl) {
    return (
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-md ring-2 ring-white group-hover:ring-[#B8860B]/30 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
        <img src={logoUrl} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  const initials = getInitials(name);

  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black ring-2 ring-white shadow-md flex items-center justify-center group-hover:ring-[#B8860B]/30 group-hover:scale-105 transition-all duration-300 flex-shrink-0 overflow-hidden">
      {/* Subtle gloss highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
      {/* Diagonal shine */}
      <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-[#B8860B]/20 blur-xl pointer-events-none" />
      <span className="relative text-[15px] sm:text-base font-bold tracking-wider text-white">
        {initials}
      </span>
    </div>
  );
}

/* ── Capacity Ring (visual indicator) ─────────────────────── */
function CapacityRing({ seats }: { seats: number }) {
  const pct = Math.min((seats / 100) * 100, 100); // 100 seats = 100%
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - (pct / 100) * circumference;
  return (
    <div className="relative w-11 h-11 flex-shrink-0">
      <svg className="w-11 h-11 -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" stroke="#F5F5F4" strokeWidth="4" fill="none" />
        <circle
          cx="22"
          cy="22"
          r="18"
          stroke="url(#capGrad)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
        <defs>
          <linearGradient id="capGrad" x1="0" y1="0" x2="44" y2="44">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#D4A017" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 20h12" />
          <path d="M8 20v-4M12 20v-4M16 20v-4" />
          <path d="M4 16h16l-2-9H6z" />
          <path d="M9 7V4a3 3 0 0 1 6 0v3" />
        </svg>
      </div>
    </div>
  );
}

/* ── Client Component ───────────────────────────────────── */
interface PartnerLibrariesClientProps {
  readonly libraries: readonly Library[];
}

export default function PartnerLibrariesClient({ libraries }: PartnerLibrariesClientProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique regions/cities for filter pills
  const regions = useMemo(() => {
    const counts: Record<string, number> = {};
    libraries.forEach((lib) => {
      const loc = lib.district || lib.state || "Other";
      counts[loc] = (counts[loc] || 0) + 1;
    });

    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([region]) => region);

    return ["All", ...sorted];
  }, [libraries]);

  // Filtered libraries list
  const filteredLibraries = useMemo(() => {
    return libraries.filter((lib) => {
      const matchesRegion =
        selectedRegion === "All" ||
        Boolean(lib.district?.toLowerCase().includes(selectedRegion.toLowerCase())) ||
        Boolean(lib.state?.toLowerCase().includes(selectedRegion.toLowerCase()));

      const matchesSearch =
        searchQuery.trim() === "" ||
        lib.libraryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        Boolean(lib.district?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        Boolean(lib.state?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        lib.facilities.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesRegion && matchesSearch;
    });
  }, [libraries, selectedRegion, searchQuery]);

  // Pagination: Show 8 initially, with "Show More" expansion
  const INITIAL_VISIBLE_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // Reset pagination when user switches regions or searches
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [selectedRegion, searchQuery]);

  const displayedLibraries = useMemo(() => {
    return filteredLibraries.slice(0, visibleCount);
  }, [filteredLibraries, visibleCount]);

  // Aggregate stats
  const totalDesks = useMemo(() => {
    return libraries.reduce((acc, l) => acc + (l.totalSeats || 50), 0);
  }, [libraries]);

  return (
    <div className="space-y-10">
      {/* ── Premium Stats Ribbon with Hover Effects ── */}
      <div className="relative max-w-5xl mx-auto">
        {/* Subtle gold glow background */}
        <div className="absolute -inset-px bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/10 to-[#B8860B]/0 blur-xl pointer-events-none" />
        <div className="relative bg-white border border-neutral-200/90 rounded-2xl p-1.5 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
            <div className="group/stat p-4 sm:p-5 rounded-xl hover:bg-gradient-to-br hover:from-neutral-50 hover:to-[#B8860B]/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center group-hover/stat:from-[#B8860B] group-hover/stat:to-[#D4A017] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight leading-none">
                    {libraries.length}<span className="text-[#B8860B]">+</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">Verified Hubs</p>
                </div>
              </div>
            </div>
            <div className="group/stat p-4 sm:p-5 rounded-xl hover:bg-gradient-to-br hover:from-neutral-50 hover:to-[#B8860B]/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center group-hover/stat:from-[#B8860B] group-hover/stat:to-[#D4A017] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 20h12" />
                    <path d="M8 20v-4M12 20v-4M16 20v-4" />
                    <path d="M4 16h16l-2-9H6z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight leading-none">
                    {totalDesks.toLocaleString()}<span className="text-[#B8860B]">+</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">Managed Desks</p>
                </div>
              </div>
            </div>
            <div className="group/stat p-4 sm:p-5 rounded-xl hover:bg-gradient-to-br hover:from-neutral-50 hover:to-[#B8860B]/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center group-hover/stat:from-[#B8860B] group-hover/stat:to-[#D4A017] transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <path d="M14 14h3v3h-3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#09090b] tracking-tight leading-none">
                    100<span className="text-[#B8860B]">%</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">QR Attendance</p>
                </div>
              </div>
            </div>
            <div className="group/stat p-4 sm:p-5 rounded-xl hover:bg-gradient-to-br hover:from-neutral-50 hover:to-[#B8860B]/5 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 flex items-center justify-center group-hover/stat:from-emerald-600 group-hover/stat:to-emerald-500 transition-all duration-300 relative">
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight leading-none">Live</p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">Seat Occupancy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter Tabs & Search Bar (Premium) ── */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* Region Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-neutral-50 border border-neutral-200/80 rounded-2xl shadow-inner">
          {regions.map((region) => {
            const isSelected = selectedRegion === region;
            const count =
              region === "All"
                ? libraries.length
                : libraries.filter(
                    (l) =>
                      Boolean(l.district?.toLowerCase().includes(region.toLowerCase())) ||
                      Boolean(l.state?.toLowerCase().includes(region.toLowerCase()))
                  ).length;

            return (
              <button
                type="button"
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-white text-neutral-900 shadow-md ring-1 ring-neutral-200"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-white/60"
                }`}
              >
                <span>{region}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                    isSelected
                      ? "bg-[#B8860B] text-white"
                      : "bg-neutral-200/70 text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input (Premium) */}
        <div className="relative w-full lg:w-80 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/10 to-[#B8860B]/0 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-[#B8860B] transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, city, AC..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-white border border-neutral-200 rounded-2xl focus:outline-none focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 transition-all text-neutral-900 placeholder:text-neutral-400 shadow-sm"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 text-xs font-bold flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            ) : (
              <kbd className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 text-[10px] font-mono text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">
                <span>⌘</span>K
              </kbd>
            )}
          </div>
        </div>
      </div>

      {/* ── Library Cards Grid (Premium) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto">
        {displayedLibraries.map((lib, idx) => {
          const seats = lib.totalSeats > 0 ? lib.totalSeats : 50;
          return (
            <div
              key={lib.id}
              className="group relative bg-white border border-neutral-200/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12),0_8px_16px_-8px_rgba(184,134,11,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              {/* Top gradient band with watermark */}
              <div className="relative h-20 sm:h-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black overflow-hidden">
                {/* Watermark logo text */}
                <div className="absolute inset-0 flex items-center justify-end pr-6 opacity-[0.07] pointer-events-none">
                  <span className="text-[80px] sm:text-[100px] font-black text-white tracking-tighter leading-none">
                    {getInitials(lib.libraryName)}
                  </span>
                </div>
                {/* Subtle gold shine */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#B8860B]/20 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#D4A017]/15 blur-xl pointer-events-none" />
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Floating logo overlapping bottom */}
                <div className="absolute -bottom-7 left-5">
                  <MonochromeLogo name={lib.libraryName} logoUrl={lib.logoUrl} />
                </div>
                {/* Top-right verified badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span>Verified</span>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="pt-9 px-5 pb-4 flex-1 flex flex-col">
                {/* Title + City */}
                <div className="mb-3">
                  <h3 className="text-[15px] sm:text-base font-bold text-[#09090b] tracking-tight leading-snug line-clamp-1 mb-1.5 group-hover:text-black transition-colors">
                    {lib.libraryName}
                  </h3>
                  {(lib.district || lib.state) && (
                    <p className="text-[11.5px] text-neutral-500 font-medium flex items-center gap-1">
                      <svg
                        className="w-3 h-3 text-[#B8860B] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate text-neutral-600">
                        {[lib.district, lib.state].filter(Boolean).join(", ")}
                      </span>
                    </p>
                  )}
                </div>

                {/* Capacity & Shift Premium Card */}
                <div className="flex items-center gap-3 bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/80 rounded-2xl px-3.5 py-2.5 mb-3 group-hover:border-[#B8860B]/30 group-hover:from-[#B8860B]/5 transition-all duration-300">
                  <CapacityRing seats={seats} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#09090b] leading-tight">
                      {seats} <span className="text-neutral-500 font-semibold">Desks</span>
                    </p>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5">
                      Live Multi-Shift
                    </p>
                  </div>
                </div>

                {/* Facilities Premium Pills */}
                {lib.facilities.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {lib.facilities.slice(0, 4).map((f) => {
                      const key = facilityIconKey[f] || "default";
                      return (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 bg-white border border-neutral-200 rounded-lg py-1 pl-1.5 pr-2 text-[10.5px] font-semibold text-neutral-700 hover:border-[#B8860B]/40 hover:text-[#B8860B] transition-colors"
                          title={f}
                        >
                          <span className="w-4 h-4 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-600">
                            <FacilityIcon k={key} />
                          </span>
                          <span className="leading-none">{f}</span>
                        </span>
                      );
                    })}
                    {lib.facilities.length > 4 && (
                      <span className="inline-flex items-center bg-neutral-100 border border-neutral-200 rounded-lg px-2 py-1 text-[10px] font-bold text-neutral-600 leading-none">
                        +{lib.facilities.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Spacer pushes footer down */}
                <div className="flex-1" />

                {/* Card Footer (Glassmorphism strip) */}
                <div className="mt-3 -mx-5 -mb-4 px-5 py-3 bg-gradient-to-br from-neutral-50/80 via-white to-neutral-50/80 border-t border-neutral-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-neutral-600">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span>QR Live</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-700 group-hover:text-[#B8860B] transition-colors">
                    <span>View Hub</span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Hover gradient border reveal */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#B8860B]/30" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Show More / Show Less Controls (Premium) ── */}
      {filteredLibraries.length > INITIAL_VISIBLE_COUNT && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <p className="text-xs text-neutral-500 font-medium">
            Showing <span className="font-bold text-neutral-800">{Math.min(visibleCount, filteredLibraries.length)}</span> of <span className="font-bold text-neutral-800">{filteredLibraries.length}</span> libraries
          </p>
          {visibleCount < filteredLibraries.length ? (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="group/btn inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>Show More Libraries</span>
              <span className="bg-[#B8860B] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                +{filteredLibraries.length - visibleCount}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover/btn:translate-y-0.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-600 border border-neutral-200 font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
            >
              <span>Show Less</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          )}
        </div>
      )}

      {filteredLibraries.length === 0 && (
        <div className="text-center py-16 px-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-3xl max-w-md mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center mx-auto mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h4 className="text-base font-bold text-neutral-800">No libraries match your search</h4>
          <p className="text-xs text-neutral-500 mt-1.5 max-w-xs mx-auto">
            Try selecting another city or clearing your search filter to see all verified hubs.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("All");
              setSearchQuery("");
            }}
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-[#B8860B] transition-colors cursor-pointer shadow-md hover:shadow-lg"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
            <span>Clear Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
