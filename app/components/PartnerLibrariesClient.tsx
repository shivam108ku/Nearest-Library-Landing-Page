"use client";

import React, { useState, useMemo } from "react";
import { type Library } from "@/lib/api";

/* ── Minimal Black & White Facility Emojis ───────────────── */
const facilityEmoji: Record<string, string> = {
  "Wi-Fi": "📶",
  "AC": "❄️",
  "Power Backup": "🔋",
  "Parking": "🅿️",
  "CCTV": "📹",
  "Locker": "🔐",
  "Cafeteria": "☕",
  "Drinking Water": "💧",
  "Water Cooler": "💧",
  "Washroom": "🚻",
  "Reading Room": "📖",
  "Printer": "🖨️",
  "Study Material": "📝",
};

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return "NL";
}

/* ── Sleek Monochrome Logo Monogram ──────────────────────── */
function MonochromeLogo({ name, logoUrl }: { name: string; logoUrl?: string }) {
  if (logoUrl) {
    return (
      <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-xs border border-neutral-200 group-hover:border-neutral-300 transition-colors flex-shrink-0">
        <img src={logoUrl} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  const initials = getInitials(name);

  return (
    <div className="relative w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shadow-sm group-hover:bg-black transition-colors flex-shrink-0">
      {/* Gloss reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none rounded-xl" />
      <span className="text-[14px] font-bold tracking-wider text-white">
        {initials}
      </span>
    </div>
  );
}

/* ── Client Component ───────────────────────────────────── */
export default function PartnerLibrariesClient({ libraries }: { libraries: Library[] }) {
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
        (lib.district && lib.district.toLowerCase().includes(selectedRegion.toLowerCase())) ||
        (lib.state && lib.state.toLowerCase().includes(selectedRegion.toLowerCase()));

      const matchesSearch =
        searchQuery.trim() === "" ||
        lib.libraryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lib.district && lib.district.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (lib.state && lib.state.toLowerCase().includes(searchQuery.toLowerCase())) ||
        lib.facilities.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesRegion && matchesSearch;
    });
  }, [libraries, selectedRegion, searchQuery]);

  // Aggregate stats
  const totalDesks = useMemo(() => {
    return libraries.reduce((acc, l) => acc + (l.totalSeats || 50), 0);
  }, [libraries]);

  return (
    <div className="space-y-10">
      {/* ── Monochrome Stats Ribbon ── */}
      <div className="bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-5 shadow-xs max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100 text-center">
          <div className="pt-2 sm:pt-0">
            <p className="text-2xl sm:text-3xl font-semibold text-[#09090b] tracking-tight">{libraries.length}+</p>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Verified Hubs</p>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-4">
            <p className="text-2xl sm:text-3xl font-semibold text-[#B8860B] tracking-tight">{totalDesks.toLocaleString()}+</p>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Managed Desks</p>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-4">
            <p className="text-2xl sm:text-3xl font-semibold text-[#09090b] tracking-tight">100%</p>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">QR Attendance</p>
          </div>
          <div className="pt-2 sm:pt-0 sm:pl-4">
            <p className="text-2xl sm:text-3xl font-semibold text-[#09090b] tracking-tight">Live</p>
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mt-0.5">Seat Occupancy</p>
          </div>
        </div>
      </div>

      {/* ── Filter Tabs & Search Bar ── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* Region Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {regions.map((region) => {
            const isSelected = selectedRegion === region;
            const count =
              region === "All"
                ? libraries.length
                : libraries.filter(
                    (l) =>
                      (l.district && l.district.toLowerCase().includes(region.toLowerCase())) ||
                      (l.state && l.state.toLowerCase().includes(region.toLowerCase()))
                  ).length;

            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600"
                }`}
              >
                <span>{region}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-neutral-700 text-white" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
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
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-neutral-200 rounded-full focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all text-neutral-900 placeholder:text-neutral-400 shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Library Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {filteredLibraries.map((lib) => {
          return (
            <div
              key={lib.id}
              className="group relative bg-white border border-neutral-200/80 hover:border-neutral-300 rounded-2xl p-5 shadow-2xs hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Logo + Verified Pill */}
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <MonochromeLogo name={lib.libraryName} logoUrl={lib.logoUrl} />

                  {/* Clean Monochrome Verified Pill */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 border border-neutral-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    Verified
                  </span>
                </div>

                {/* Library Title */}
                <h3 className="text-[15px] font-semibold text-[#09090b] tracking-tight group-hover:text-black transition-colors leading-snug line-clamp-1 mb-1">
                  {lib.libraryName}
                </h3>

                {/* Location with Pin */}
                {(lib.district || lib.state) && (
                  <p className="text-[12px] text-neutral-500 font-medium flex items-center gap-1 mb-3.5">
                    <svg
                      className="w-3 h-3 text-neutral-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{[lib.district, lib.state].filter(Boolean).join(", ")}</span>
                  </p>
                )}

                {/* Capacity & Shift Badge */}
                <div className="flex items-center justify-between gap-2 bg-neutral-50 border border-neutral-200/60 rounded-xl px-3 py-1.5 mb-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🪑</span>
                    <span className="text-xs font-semibold text-neutral-800">
                      {lib.totalSeats > 0 ? `${lib.totalSeats} Desks` : "50+ Desks"}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-neutral-500">
                    Multi-Shift
                  </span>
                </div>

                {/* Facilities Badges — Clean Monochrome */}
                {lib.facilities.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {lib.facilities.slice(0, 4).map((f, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1 bg-neutral-50 border border-neutral-200/70 rounded-lg px-2 py-0.5 text-[10px] font-medium text-neutral-700"
                      >
                        <span className="text-[11px]">{facilityEmoji[f] || "✨"}</span>
                        <span>{f}</span>
                      </span>
                    ))}
                    {lib.facilities.length > 4 && (
                      <span className="inline-flex items-center bg-neutral-100 border border-neutral-200 rounded-lg px-2 py-0.5 text-[10px] font-semibold text-neutral-600">
                        +{lib.facilities.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-medium text-neutral-400 group-hover:text-neutral-800 transition-colors">
                <span className="flex items-center gap-1">
                  <span className="text-neutral-900 font-bold">●</span> QR Attendance
                </span>
                <span className="inline-flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform text-neutral-700 group-hover:text-neutral-950">
                  Live Hub →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredLibraries.length === 0 && (
        <div className="text-center py-16 bg-white border border-neutral-200 rounded-2xl max-w-md mx-auto">
          <p className="text-2xl mb-2">🔍</p>
          <h4 className="text-sm font-semibold text-neutral-800">No libraries match your search</h4>
          <p className="text-xs text-neutral-500 mt-1">Try selecting another city or clearing your search filter.</p>
          <button
            onClick={() => {
              setSelectedRegion("All");
              setSearchQuery("");
            }}
            className="mt-3.5 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
