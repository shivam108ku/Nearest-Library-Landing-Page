const libraryFeatures = [
  { emoji: "📊", title: "Live Dashboard", desc: "See occupancy, revenue, and student stats in real-time." },
  { emoji: "💰", title: "Payment Tracking", desc: "Auto-track payments, dues, and generate digital receipts." },
  { emoji: "👥", title: "Student Registry", desc: "Manage all members with profiles, IDs, and booking history." },
  { emoji: "🗺️", title: "Multi-Floor Seat Map", desc: "Visual seat maps for every floor with live availability." },
  { emoji: "📅", title: "Shift Management", desc: "Configure Morning, Evening, Full Day shifts with custom pricing." },
  { emoji: "📱", title: "WhatsApp Alerts", desc: "Automatic booking confirmations and reminders via WhatsApp." },
];

export default function ForLibraries() {
  return (
    <section id="for-libraries" className="py-24 px-6 bg-gradient-to-b from-[#FDF8EF]/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FDF8EF] border border-[#B8860B]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-xs font-bold text-[#B8860B] tracking-wide uppercase">For Library Owners</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-5 leading-tight">
              Run Your Library Like a <span className="shimmer-gold">Pro</span> 🏆
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Say goodbye to paper registers and manual billing.
              NearestLibrary gives you a complete digital toolkit to manage seats,
              students, payments, and attendance — all from your phone.
            </p>

            <a href="#download" className="cta-button px-8 py-4 rounded-2xl text-base font-extrabold shadow-xl cursor-pointer inline-block">
              <span className="flex items-center gap-2">
                Register Your Library — It&apos;s Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </a>
          </div>

          {/* Right — Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {libraryFeatures.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition-all group">
                <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">{f.emoji}</span>
                <h4 className="text-sm font-extrabold text-[#0F172A] mb-1">{f.title}</h4>
                <p className="text-xs text-[#475569] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
