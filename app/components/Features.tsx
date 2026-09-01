"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import BlurText from "./BlurText";
import FoldText from "./FoldText";

const stackCards = [
  {
    step: "01",
    tag: "LIVE SEAT GRID",
    title: "Multi-Floor Visual Seat Management",
    desc: "Monitor live seat occupancy floor by floor in real time. Allocate Morning, Evening, or Full Day shifts, manage reserved desks, and eliminate double-booking forever.",
    badges: ["Multi-Floor Grid", "Real-Time Occupancy", "Zero Double Booking"],
    img: "/icon_seatmap.jpg",
  },
  {
    step: "02",
    tag: "DIGITAL ATTENDANCE",
    title: "Automated QR Code Check-in System",
    desc: "Replace paper registers with one simple QR code poster at your reception. Students scan to log their check-in and check-out, giving you accurate, timestamped attendance records.",
    badges: ["Dynamic QR Poster", "Instant Log-in", "Automated Timestamps"],
    img: "/icon_attendance.jpg",
  },
  {
    step: "03",
    tag: "STUDENT REGISTRY",
    title: "Complete Member Database & History",
    desc: "Maintain digital profiles for every student with unique Member IDs, assigned shifts, payment status, and attendance logs. Search any student in seconds by name or phone.",
    badges: ["Digital Member Pass", "Full History", "One-Tap Search"],
    img: "/icon_students.jpg",
  },
  {
    step: "04",
    tag: "AUTOMATED REVENUE",
    title: "Smart Fee Tracking & WhatsApp Alerts",
    desc: "Track monthly collections and pending dues automatically. Generate professional digital receipts in one tap and send automated WhatsApp payment reminders to students.",
    badges: ["Auto Dues Tracking", "Digital Receipts", "WhatsApp Alerts"],
    img: "/icon_billing.jpg",
  },
];

export default function Features() {
  return (
    <section id="features" className="pt-20 pb-4 px-4 sm:px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              MANAGEMENT
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Built for Modern Librarians
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-semibold tracking-tight text-[#09090b] mb-5 leading-tight text-center">
            <FoldText
              text="Everything You Need to Run Your Library"
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
            Say goodbye to paper registers, payment confusion, and manual tracking. Automate seat booking, QR attendance, billing, and student records — all right from your phone.
          </p>
        </div>

        {/* ── ScrollStack Showcase: Text with BlurText + High-Res Illustration ── */}
        <ScrollStack
          itemDistance={90}
          itemScale={0.035}
          itemStackDistance={26}
          stackPosition="22%"
          scaleEndPosition="10%"
          baseScale={0.88}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={true}
        >
          {stackCards.map((card) => (
            <ScrollStackItem
              key={card.step}
              style={{
                background: "#FFFFFF",
                borderColor: "rgba(0, 0, 0, 0.08)",
                borderWidth: "1.5px",
              }}
            >
              {/* Left Column: Text & Badges */}
              <div className="flex-1 min-w-0 pr-0 md:pr-4 flex flex-col items-start">
                {/* Step Pill */}
                <div className="inline-flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/80 rounded-full pl-2 pr-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                  <span className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {card.step}
                  </span>
                  <span className="text-neutral-600 font-semibold">
                    {card.tag}
                  </span>
                </div>

                {/* Title with BlurText animation (fontWeight: 600) */}
                <div className="mb-3 w-full">
                  <BlurText
                    text={card.title}
                    delay={80}
                    animateBy="words"
                    direction="top"
                    className="text-2xl sm:text-3xl lg:text-[2.1rem] font-semibold tracking-tight text-[#09090b] leading-snug"
                    style={{ fontWeight: 600 }}
                  />
                </div>

                {/* Description with BlurText animation */}
                <div className="w-full max-w-xl mb-5">
                  <BlurText
                    text={card.desc}
                    delay={35}
                    animateBy="words"
                    direction="bottom"
                    className="text-sm sm:text-[15px] text-[#475569] leading-relaxed"
                  />
                </div>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2">
                  {card.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-neutral-600"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Illustration Preview */}
              <div className="hidden md:flex flex-shrink-0 w-44 h-44 lg:w-72 lg:h-72 rounded-3xl overflow-hidden bg-neutral-50/80 border border-neutral-200/70 p-3 items-center justify-center shadow-inner group">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
                  width={288}
                  height={288}
                  loading="lazy"
                />
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
