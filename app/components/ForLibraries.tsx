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
    <section id="for-libraries" className="py-28 px-6 bg-gradient-to-b from-[#FDF8EF]/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FDF8EF] border border-[#B8860B]/20 rounded-full px-5 py-2 mb-6">
              <span className="text-xs font-bold text-[#B8860B] tracking-wide uppercase">For Library Owners</span>
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-black tracking-tight text-[#0F172A] mb-6 leading-tight">
              Run Your Library Like a <span className="shimmer-gold">Pro</span> 🏆
            </h2>
            <p className="text-[17px] text-[#475569] leading-relaxed mb-5">
              Replace paper registers, manual billing, and phone calls with a complete digital toolkit. NearestLibrary gives you everything to manage seats, students, payments, attendance, and enquiries — all from your phone.
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed mb-8 border-l-[3px] border-[#B8860B]/30 pl-4 italic">
              &ldquo;My revenue went up 40% after switching to NearestLibrary. No more confusion with registers.&rdquo; — Rajesh K., Library Owner, Jaipur
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#download" className="cta-button px-8 py-4 rounded-2xl text-[15px] font-extrabold shadow-xl cursor-pointer">
                <span className="flex items-center gap-2">
                  Register Your Library — Free
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right — Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {libraryFeatures.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-white/60">
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
