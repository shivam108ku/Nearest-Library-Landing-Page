export default function AppShowcase() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white via-[#FDF8EF]/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] rounded-full px-5 py-2 mb-5">
            <span className="text-xs font-bold text-[#0EA5E9] tracking-wide uppercase">See It in Action</span>
          </div>
          <h2 className="text-4xl md:text-[3.2rem] font-black tracking-tight text-[#0F172A] mb-5 leading-tight">
            Beautiful App, <span className="shimmer-gold">Powerful Features</span>
          </h2>
          <p className="text-[17px] text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Take a peek at the premium experience waiting for you — from onboarding to daily library management.
          </p>
        </div>

        {/* App Screenshots Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {[
            { img: "/slide1.png", label: "Discover Libraries", desc: "Find the best study spaces near you" },
            { img: "/slide2.png", label: "Book Your Seat", desc: "Reserve in seconds, choose your shift" },
            { img: "/slide3.png", label: "QR Scan Check-in", desc: "Scan & go — instant digital attendance" },
            { img: "/slide4.png", label: "Smart Dashboard", desc: "Real-time analytics for library owners" },
          ].map((slide, i) => (
            <div key={i} className="flex-shrink-0 w-[260px] md:w-[280px] snap-center group">
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white/60 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 mb-4">
                <img
                  src={slide.img}
                  alt={slide.label}
                  className="w-full h-auto object-cover"
                  width={280}
                  height={500}
                  loading="lazy"
                />
              </div>
              <h4 className="text-[15px] font-extrabold text-[#0F172A] text-center">{slide.label}</h4>
              <p className="text-xs text-[#475569] font-medium text-center mt-1">{slide.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image — Dashboard Preview */}
        <div className="mt-20 relative">
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 glow-pulse">
            <img
              src="/dashboard.png"
              alt="NearestLibrary smart library management dashboard with analytics and seat map"
              className="w-full h-auto object-cover"
              width={768}
              height={512}
              loading="lazy"
            />
          </div>
          {/* Floating Caption */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-2xl px-8 py-4 shadow-xl border border-white/50">
            <p className="text-sm font-extrabold text-[#0F172A] text-center">
              📊 Complete Library Management Dashboard
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
