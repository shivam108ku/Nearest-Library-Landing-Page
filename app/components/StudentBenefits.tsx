"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import BlurText from "./BlurText";
import FoldText from "./FoldText";

const studentCards = [
  {
    step: "01",
    tag: "EXAM PREP",
    title: "Daily Current Affairs & PIB Updates",
    desc: "Curated exam-oriented daily news, PIB releases & key takeaways in Hindi & English for UPSC, SSC, and state competitive exams.",
    badges: ["UPSC & SSC Focus", "PIB Press Releases", "Daily Digest"],
    img: "/icon_current_affairs.jpg",
  },
  {
    step: "02",
    tag: "DIGITAL IDENTITY",
    title: "Live Seat Details & Digital Pass",
    desc: "Assigned desk number, floor, shift timings & booking validity — all displayed on a shareable digital library identity card.",
    badges: ["Floor & Seat Number", "Digital Library ID", "Active Shift Status"],
    img: "/icon_digital_pass.jpg",
  },
  {
    step: "03",
    tag: "STUDY CONSISTENCY",
    title: "30-Day Study Streak & Activity Grid",
    desc: "A GitHub-style attendance calendar motivates students to maintain study discipline, track total hours, and build long streaks.",
    badges: ["30-Day Activity Grid", "Daily Study Streak", "Study Hours Logged"],
    img: "/icon_study_streak.jpg",
  },
  {
    step: "04",
    tag: "SMART ATTENDANCE",
    title: "Instant QR Check-in & Check-out",
    desc: "Seamless contactless entry and exit punch right from the phone at your reception standee without any paper registers.",
    badges: ["One-Tap QR Punch", "Automatic In/Out Logs", "Zero Queues"],
    img: "/icon_qr_checkin.jpg",
  },
];

export default function StudentBenefits() {
  return (
    <section
      id="student-benefits"
      className="pt-16 pb-4 px-4 sm:px-6 bg-gradient-to-b from-[#F8FAFC] via-white to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-[#B8860B] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              STUDENT EXPERIENCE
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Why Students Love Your Library
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-semibold tracking-tight text-[#09090b] mb-5 leading-tight text-center">
            <FoldText
              text="Your Students Get More Than a Seat"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.02}
              getCharColor={(char, idx) => {
                if (idx >= 18) return "#B8860B";
                return undefined;
              }}
            />
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            When you manage your library with NearestLibrary, your students automatically get daily exam prep, digital passes, and habit trackers — all built-in.
          </p>
        </div>

        {/* ── ScrollStack: Exact same smooth parameters and styling as Features ── */}
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
          {studentCards.map((card) => (
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
                  <span className="text-[#B8860B] font-bold">
                    {card.tag}
                  </span>
                </div>

                {/* Title with BlurText animation */}
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

              {/* Right Column: Illustration Preview (exact same container styling as Features) */}
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
