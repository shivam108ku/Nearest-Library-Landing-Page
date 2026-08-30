const libraryFeatures = [
  { emoji: "📊", title: "Live Analytics Dashboard", desc: "Real-time occupancy, revenue tracking, and daily reports at a glance." },
  { emoji: "💰", title: "Automated Billing", desc: "Track payments, dues, generate receipts. No more manual cash registers." },
  { emoji: "👥", title: "Student Registry & Profiles", desc: "Complete member database with IDs, contact details, and booking history." },
  { emoji: "🗺️", title: "Multi-Floor Seat Maps", desc: "Configure separate floors with independent seat layouts and shift timings." },
  { emoji: "📅", title: "Shift Management", desc: "Morning, Evening, Full Day — custom pricing and seat allocation per shift." },
  { emoji: "📱", title: "WhatsApp Alerts", desc: "Automated booking confirmations, payment reminders sent directly via WhatsApp." },
  { emoji: "📋", title: "Enquiry Pipeline", desc: "Track walk-in enquiries, follow up, and convert them into active members." },
  { emoji: "📈", title: "Revenue Reports", desc: "Monthly, weekly, daily revenue breakdowns by floor, shift, and payment type." },
];

export default function ForLibraries() {
  return (
    <section id="for-libraries" className="py-28 px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
              <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                OWNERS
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-600">
                For Library Owners
              </span>
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-black tracking-tight text-[#0F172A] mb-6 leading-tight">
              Run Your Library Like a <span className="text-[#B8860B]">Pro</span> 🏆
            </h2>
            <p className="text-[17px] text-[#475569] leading-relaxed mb-5">
              Replace paper registers, manual billing, and phone calls with a complete digital toolkit. NearestLibrary gives you everything to manage seats, students, payments, attendance, and enquiries — all from your phone.
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed mb-8 border-l-[3px] border-[#B8860B]/50 pl-4 italic">
              &ldquo;My revenue went up 40% after switching to NearestLibrary. No more confusion with registers.&rdquo; — Rajesh K., Library Owner, Jaipur
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                className="bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-4 rounded-2xl text-[15px] font-bold shadow-md hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Register Your Library — Free</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right — Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {libraryFeatures.map((f, i) => (
              <div key={i} className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-[26px] mb-3 block group-hover:scale-110 transition-transform">{f.emoji}</span>
                <h4 className="text-sm font-extrabold text-[#0F172A] mb-1.5">{f.title}</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
