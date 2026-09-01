"use client";

import React from "react";
import FoldText from "./FoldText";

const adminSteps = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h.01" />
        <path d="M9 12h.01" />
        <path d="M9 15h.01" />
        <path d="M9 18h.01" />
      </svg>
    ),
    badge: "STEP 1: LIBRARY SETUP",
    title: "Setup Floors & Visual Seat Grid",
    desc: "Configure your library floors, total seat count, and desk layouts in Settings. Your visual seat map indicates occupied vs available seats in real-time across all floors.",
    tips: [
      "Configure Morning, Afternoon & Full Day shifts",
      "Switch floors with one tap on floor tabs",
      "Tap any seat to inspect desk status",
    ],
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    badge: "STEP 2: STUDENT REGISTRATION",
    title: "Add Students & Assign Seats",
    desc: "Tap any empty seat on the seat map to open the booking form. Fill in student name, phone number, and shift dates — the seat is alloted and login credentials are created instantly.",
    tips: [
      "Auto-generates student login: Name@Last4Digits",
      "Share your unique Library Code for student app access",
      "Instant confirmation with assigned seat & shift details",
    ],
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M14 14h3v3h-3z" />
        <path d="M21 14v3" />
        <path d="M14 21h3" />
      </svg>
    ),
    badge: "STEP 3: QR ATTENDANCE",
    title: "Display Official Entry/Exit QR Code",
    desc: "Tap 'Show Entry/Exit QR Code' on your Dashboard to display or print your dynamic QR poster. Place it at your reception — students scan with their app to mark check-in and check-out.",
    tips: [
      "Zero paper registers — automated digital logs",
      "Accurate timestamped entry & exit tracking",
      "Instant overstay alerts for shift expiration",
    ],
  },
  {
    num: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
    badge: "STEP 4: BILLING & ANALYTICS",
    title: "Collect Fees & Monitor Real-Time Dashboard",
    desc: "Record fee payments, issue instant digital PDF receipts, and track expiring memberships. Pull down your dashboard to monitor live attendance, occupancy, and revenue anytime.",
    tips: [
      "One-tap renewal for expiring memberships",
      "Automated WhatsApp payment & dues reminders",
      "Real-time daily, weekly, and monthly revenue analytics",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-8 pb-20 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              ADMIN GUIDE
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Quick Start Manual
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#09090b] mb-4 text-center">
            <FoldText
              text="Manage Your Library in 4 Simple Steps"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.02}
              getCharColor={(char, idx) => {
                if (idx >= 23) return "#B8860B";
                return undefined;
              }}
            />
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Taken directly from our official library admin workflow — from initial floor setup to contactless attendance and automated fee tracking.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-5 sm:space-y-6">
          {adminSteps.map((s) => (
            <div key={s.num} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group">
              {/* Step Icon Badge */}
              <div className="relative flex-shrink-0 self-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-700 text-white flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(184,134,11,0.3)] transition-all duration-300">
                  {s.icon}
                </div>
                {/* Connector line to next step (desktop only) */}
                {s.num !== "04" && (
                  <div className="hidden sm:block absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-[#B8860B]/40 to-transparent" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 w-full min-w-0 bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-7 shadow-xs group-hover:shadow-md group-hover:border-neutral-300 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] sm:text-xs font-black text-[#B8860B] tracking-widest uppercase">
                    {s.badge}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                    Step {s.num}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#09090b] mb-2 break-words">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed mb-4 break-words">
                  {s.desc}
                </p>

                {/* Practical Tips Row */}
                <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5 sm:gap-2">
                  {s.tips.map((tip) => (
                    <span
                      key={tip}
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-600 bg-neutral-50 border border-neutral-200/60 rounded-lg px-2 sm:px-2.5 py-1 break-words"
                    >
                      <span className="text-[#B8860B] font-bold">✓</span>
                      <span>{tip}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
