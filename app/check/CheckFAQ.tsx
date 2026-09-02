"use client";

import { useState } from "react";
import FoldText from "../components/FoldText";

const faqs = [
  {
    q: "How do I check the nearest library near me?",
    a: "Visit nearestlibrary.com/check on any browser, or open the NearestLibrary Android app. The checker uses your live location to instantly show the nearest library near you with real-time seat availability, distance, AC/Wi-Fi status, and open-now hours. No signup required.",
  },
  {
    q: "Is the library check tool really free?",
    a: "Yes — 100% free for students. You can check library availability, status, timing, AC/Wi-Fi, and verify your pass unlimited times. There are no hidden charges, no premium tier, and no credit card needed. Library owners also get free access to the partner dashboard.",
  },
  {
    q: "How fresh is the seat availability data?",
    a: "Every partner library updates its seat count in real-time through QR check-in events. As students check in and out, the seat count updates within 60 seconds. The open-now status is also live — sourced from actual library check-ins, not scheduled hours.",
  },
  {
    q: "Can I check if a library near me is open right now?",
    a: "Yes. The NearestLibrary checker shows a live 'Open Now' badge, closing time, and current shift availability for every partner library. You'll never walk to a closed library again — the status is updated from real QR check-in data every minute.",
  },
  {
    q: "How do I verify my digital library pass?",
    a: "Open the NearestLibrary app, go to 'My Pass', and your digital pass with a unique QR code is displayed. Library owners scan this QR at the entrance to verify your membership, active plan, and pass validity. You can also verify on the web at /check by entering your pass ID.",
  },
  {
    q: "Which cities can I check libraries in?",
    a: "The library check feature works in 50+ Indian cities including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Jaipur, Lucknow, Patna, Bhopal, Chandigarh, Ahmedabad, Indore, Nagpur, Surat, Deoria, and many more. We add new cities every week as new partner libraries join.",
  },
  {
    q: "Do I need to create an account to use the checker?",
    a: "No. The library checker is fully open — no signup, no login, no email. Just open /check or the app, pick your city, and instantly see live library availability. You only need an account if you want to book a seat or save favourite libraries.",
  },
  {
    q: "How do library owners check their library's live status?",
    a: "Library owners get a dedicated partner dashboard inside the NearestLibrary app. From the dashboard, you can check live occupancy, today's attendance count, revenue collection, active members, QR check-in logs, and library health metrics — all in real-time.",
  },
];

export default function CheckFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      aria-label="Frequently asked questions about checking libraries"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              FAQ
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Check Library Near Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#09090b] mb-4 text-center">
            <FoldText
              text="Check Library FAQ 💡"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.025}
              getCharColor={(char, idx) => {
                if (idx >= 13 && idx <= 21) return "#B8860B";
                return undefined;
              }}
            />
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto">
            Common questions about checking library near me availability, status, and passes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <ul className="space-y-3 sm:space-y-4" aria-label="Check Library FAQ">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={faq.q}
                className={`gradient-border-card bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "shadow-lg border-transparent"
                    : "border border-neutral-200/80 shadow-sm hover:shadow-md"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full p-4 sm:p-6 text-left flex justify-between items-start gap-3 sm:gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
