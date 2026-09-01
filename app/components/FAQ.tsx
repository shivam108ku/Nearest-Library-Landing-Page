"use client";
import { useState } from "react";
import FoldText from "./FoldText";

const faqs = [
  {
    q: "How do I find the nearest library near me using NearestLibrary?",
    a: "Download the NearestLibrary app from Google Play Store, open it, and it will automatically detect your location to show the nearest library near you. You can browse available study seats, check real-time occupancy, and book your seat in seconds — completely free for students!",
  },
  {
    q: "Is NearestLibrary really free for students looking for a library near me?",
    a: "Yes! The NearestLibrary app is 100% free for students. You can search for libraries near you, check seat availability, book study seats, track your attendance, and manage your study streaks — all without paying anything.",
  },
  {
    q: "How do I book a study seat at a library near me?",
    a: "Open the NearestLibrary app, search for 'library near me', pick your preferred library, select a shift (Morning, Afternoon, Evening, or Full Day), choose an available seat from the interactive seat map, and confirm your booking. It takes less than 30 seconds!",
  },
  {
    q: "How does QR code attendance tracking work at the library?",
    a: "Every NearestLibrary partner library has a unique QR code displayed at the entrance. Students scan the QR code when entering and leaving. Their attendance is automatically logged in the app with exact timestamps — no manual registers needed.",
  },
  {
    q: "Can library owners list their study space on NearestLibrary?",
    a: "Yes! Library owners can register their library for free on the NearestLibrary platform. After registration, you get access to a full digital dashboard for seat management, billing, attendance tracking, student management, and real-time occupancy monitoring.",
  },
  {
    q: "What cities have libraries listed on NearestLibrary?",
    a: "NearestLibrary currently has 500+ partner libraries across major Indian cities including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Jaipur, Lucknow, Patna, Bhopal, Chandigarh, Ahmedabad, Kolkata, and many more. New libraries are added daily!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto" suppressHydrationWarning>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              FAQ
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#09090b] mb-4 text-center">
            <FoldText
              text="Frequently Asked Questions 💡"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.025}
              getCharColor={(char, idx) => {
                if (idx >= 17 && idx <= 25) return "#B8860B";
                return undefined;
              }}
            />
          </h2>
          <p className="text-lg text-[#475569] max-w-lg mx-auto">
            Everything you need to know about booking study seats and managing your library.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`gradient-border-card bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "shadow-lg border-transparent"
                    : "border border-neutral-200/80 shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-start gap-3 sm:gap-4 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors mt-0.5 ${
                        isOpen
                          ? "bg-[#B8860B] text-white"
                          : "bg-neutral-100 text-neutral-500 group-hover:bg-[#B8860B]/15 group-hover:text-[#B8860B]"
                      }`}
                    >
                      Q{i + 1}
                    </span>
                    <span className="text-[15px] sm:text-[17px] font-semibold text-[#09090b] leading-snug break-words">
                      {faq.q}
                    </span>
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? "bg-neutral-900 text-white rotate-180"
                        : "bg-neutral-100 text-neutral-800 group-hover:bg-neutral-200"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-[15px] text-[#475569] leading-relaxed border-t border-neutral-100 pt-3 sm:pt-4 break-words">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
