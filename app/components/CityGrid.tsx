"use client";

import React from "react";
import FoldText from "./FoldText";

const CITIES: { name: string; state: string; count: string; popular?: boolean }[] = [
  { name: "Delhi", state: "NCT", count: "85+", popular: true },
  { name: "Mumbai", state: "Maharashtra", count: "70+", popular: true },
  { name: "Bangalore", state: "Karnataka", count: "60+", popular: true },
  { name: "Hyderabad", state: "Telangana", count: "45+" },
  { name: "Pune", state: "Maharashtra", count: "40+", popular: true },
  { name: "Chennai", state: "Tamil Nadu", count: "35+" },
  { name: "Kolkata", state: "West Bengal", count: "30+" },
  { name: "Jaipur", state: "Rajasthan", count: "25+" },
  { name: "Lucknow", state: "Uttar Pradesh", count: "20+" },
  { name: "Patna", state: "Bihar", count: "18+" },
  { name: "Bhopal", state: "Madhya Pradesh", count: "15+" },
  { name: "Chandigarh", state: "Chandigarh", count: "12+" },
  { name: "Ahmedabad", state: "Gujarat", count: "22+" },
  { name: "Indore", state: "Madhya Pradesh", count: "16+" },
  { name: "Nagpur", state: "Maharashtra", count: "10+" },
  { name: "Surat", state: "Gujarat", count: "12+" },
];

export default function CityGrid() {
  return (
    <section
      id="cities"
      className="pt-16 pb-16 px-4 sm:px-6 bg-gradient-to-b from-white via-[#FAFAFA] to-white relative"
      aria-label="Find library near me in Indian cities"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-full px-3.5 py-1.5 text-xs shadow-sm mb-5">
            <span className="text-base">📍</span>
            <span className="font-semibold text-neutral-700 uppercase tracking-wide">
              Available in 50+ Indian Cities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold tracking-tight text-[#09090b] mb-4 leading-tight text-center">
            <FoldText
              text="Find a Library Near Me in Your City"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.02}
              getCharColor={(char, idx) => {
                if (idx >= 5 && idx <= 12) return "#B8860B";
                if (idx >= 17 && idx <= 20) return "#B8860B";
                return undefined;
              }}
            />
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Discover verified <strong className="text-neutral-800 font-semibold">study libraries near you</strong> across India.
            Whether you need a silent study zone, an AC reading room, or an affordable library for exam prep —
            we have a partner hub in your city.
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {CITIES.map((city) => (
            <a
              key={city.name}
              href="#partner-libraries"
              className="group relative flex items-center justify-between gap-3 bg-white border border-neutral-200/80 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-[#B8860B]/30 transition-all duration-300"
              aria-label={`Library near me in ${city.name}, ${city.state} — ${city.count} libraries`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-[#B8860B] group-hover:from-[#B8860B] group-hover:to-[#D4A017] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#09090b] truncate">
                      Library near me {city.name}
                    </h3>
                    {city.popular && (
                      <span className="hidden sm:inline-block text-[9px] font-black text-[#B8860B] bg-[#B8860B]/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-500 font-medium mt-0.5 truncate">
                    {city.state} • {city.count} libraries
                  </p>
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400 group-hover:text-[#B8860B] group-hover:translate-x-0.5 transition-all flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs sm:text-sm text-neutral-500 max-w-3xl mx-auto leading-relaxed">
          Don't see your city? New <strong className="text-neutral-700 font-semibold">study libraries and reading rooms</strong> are
          added daily. <a href="#download" className="text-[#B8860B] font-semibold hover:underline">Download the app</a> and we'll notify you when a partner library opens in your area.
        </p>
      </div>
    </section>
  );
}