"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I book a seat in a nearby library using NearestLibrary?",
    a: "Download the NearestLibrary app or browse online, choose your preferred library in your city, select your seat and shift (Morning, Afternoon, Evening, or Full Day), and tap to confirm your booking in seconds.",
  },
  {
    q: "How can library owners list their study space on NearestLibrary?",
    a: "Library owners can register for free by clicking 'Register Your Library', entering basic space details, configuring floor seat maps, and gaining instant access to the digital management dashboard.",
  },
  {
    q: "Is NearestLibrary free for students?",
    a: "Yes! The NearestLibrary mobile app is 100% free for students to download, search nearby libraries, check real-time seat availability, and view study logs.",
  },
  {
    q: "How does QR code attendance work?",
    a: "Every registered library gets a unique QR code poster. Students scan the QR code upon entry and exit to automatically log their check-in and check-out times without manual registers.",
  },
  {
    q: "Can I manage multiple library branches or floors?",
    a: "Absolutely! The library owner dashboard supports multi-floor layouts, shift pricing customization, real-time occupancy monitoring, and automated payment tracking across all your branches.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-white to-[#FDF8EF]/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-wide uppercase">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-4">
            Frequently Asked <span className="shimmer-gold">Questions</span> 💡
          </h2>
          <p className="text-lg text-[#475569] max-w-lg mx-auto">
            Everything you need to know about booking study seats and managing your library.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="glass-card rounded-2xl border border-white/60 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-extrabold text-[#0F172A]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#B8860B] text-white rotate-180" : "bg-[#F1F5F9] text-[#0F172A]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-[#475569] leading-relaxed border-t border-black/5 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
