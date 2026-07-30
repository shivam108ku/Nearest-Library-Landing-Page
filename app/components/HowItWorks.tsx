const steps = [
  {
    num: "01",
    emoji: "📲",
    title: "Download the App",
    desc: "Get NearestLibrary on Android or iOS. Sign up with your phone number in under 30 seconds.",
  },
  {
    num: "02",
    emoji: "🔍",
    title: "Find a Library Near You",
    desc: "Browse libraries in your area. See real-time seat availability, shift timings, and student reviews.",
  },
  {
    num: "03",
    emoji: "💺",
    title: "Book Your Seat Instantly",
    desc: "Pick your preferred seat, choose Morning, Evening or Full Day shift, and confirm your booking.",
  },
  {
    num: "04",
    emoji: "📸",
    title: "Scan QR & Start Studying",
    desc: "Walk in, scan the QR code at the desk, and you are checked in. Focus on what matters — your goals.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-white to-[#FDF8EF]/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D1FAE5] rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#10B981] tracking-wide uppercase">Simple & Quick</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-4">
            Start Studying in <span className="shimmer-gold">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-xl mx-auto">
            From download to check-in, the entire journey takes less than 2 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 items-start group">
              {/* Step Number Circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl navy-glass flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-lg">{s.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex-1 glass-card rounded-2xl p-6 group-hover:shadow-lg transition-all group-hover:border-[#B8860B]/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-black text-[#B8860B] tracking-widest">STEP {s.num}</span>
                </div>
                <h3 className="text-lg font-extrabold text-[#0F172A] mb-1">{s.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
