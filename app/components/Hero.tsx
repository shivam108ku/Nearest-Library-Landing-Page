export default function Hero() {
  return (
    <section className="gradient-bg relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Decorative Sparkles */}
      <div className="sparkle" style={{ top: "15%", left: "10%", animationDelay: "0s" }} />
      <div className="sparkle" style={{ top: "25%", right: "15%", animationDelay: "0.8s" }} />
      <div className="sparkle" style={{ top: "60%", left: "20%", animationDelay: "1.6s" }} />
      <div className="sparkle" style={{ top: "40%", right: "8%", animationDelay: "2.2s" }} />
      <div className="sparkle" style={{ bottom: "20%", left: "45%", animationDelay: "1.2s" }} />

      {/* Gradient Orbs */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#B8860B]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#4338CA]/8 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="slide-up inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#E8ECF4] rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-bold text-[#475569] tracking-wide uppercase">
                Trusted by 500+ Libraries Across India
              </span>
            </div>

            <h1 className="slide-up slide-up-delay-1 hero-title text-[3.5rem] leading-[1.1] font-black tracking-tight mb-6">
              Your Perfect{" "}
              <span className="shimmer-gold">Study Spot</span>
              <br />
              is Just a{" "}
              <span className="gradient-text">Tap Away</span> ✨
            </h1>

            <p className="slide-up slide-up-delay-2 text-lg text-[#475569] leading-relaxed mb-8 max-w-xl">
              Discover nearby libraries, book your favorite seat in seconds,
              and track attendance with a simple QR scan. The smartest way
              for students to find their focus zone.
            </p>

            {/* CTA Buttons */}
            <div className="slide-up slide-up-delay-3 flex flex-wrap gap-4 mb-10">
              <a href="#download" className="cta-button px-8 py-4 rounded-2xl text-base font-extrabold shadow-xl cursor-pointer">
                <span className="flex items-center gap-2">
                  Download Free App
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                </span>
              </a>
              <a href="#features" className="secondary-button px-8 py-4 rounded-2xl text-base font-bold cursor-pointer inline-flex items-center gap-2">
                See Features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14l-7 7-7-7M12 21V3" /></svg>
              </a>
            </div>

            {/* Social Proof */}
            <div className="slide-up slide-up-delay-4 flex items-center gap-6">
              <div className="flex -space-x-3">
                {["#EDE9FE", "#D1FAE5", "#DBEAFE", "#FEE2E2"].map((bg, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center shadow-md" style={{ background: bg, zIndex: 4 - i }}>
                    <span className="text-xs font-black" style={{ color: ["#6D28D9", "#065F46", "#1D4ED8", "#991B1B"][i] }}>
                      {["R", "A", "P", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#475569] font-semibold">
                  Loved by <span className="text-[#0F172A] font-extrabold">10,000+</span> students
                </p>
              </div>
            </div>
          </div>

          {/* Right — Interactive App UI Preview Mockup Card */}
          <div className="slide-up slide-up-delay-3 relative flex justify-center">
            <div className="float relative w-full max-w-[440px]">
              {/* Main Card */}
              <div className="navy-glass rounded-3xl p-6 shadow-2xl border border-white/10 glow-pulse">
                {/* App Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#D4A017] flex items-center justify-center font-black text-white text-base shadow-md">
                      N
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white">Central Study Hub</h4>
                      <p className="text-[11px] text-white/50 font-medium">Ground Floor • AC Hall</p>
                    </div>
                  </div>
                  <span className="bg-[#10B981]/20 text-[#10B981] text-[10px] font-extrabold px-3 py-1 rounded-full border border-[#10B981]/30">
                    Open Now
                  </span>
                </div>

                {/* Seat Map Preview */}
                <div className="bg-white/5 rounded-2xl p-4 mb-4 border border-white/5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-white/70">Seat Layout</span>
                    <span className="text-[11px] text-[#D4A017] font-semibold">18/24 Available</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((s) => {
                      const isOccupied = [3, 7, 11, 15].includes(s);
                      const isSelected = s === 12;
                      return (
                        <div
                          key={s}
                          className={`h-9 rounded-xl flex items-center justify-center text-xs font-extrabold transition-all ${
                            isSelected
                              ? "bg-gradient-to-br from-[#B8860B] to-[#D4A017] text-white shadow-lg scale-105 border border-white/40"
                              : isOccupied
                              ? "bg-white/10 text-white/30 border border-white/5"
                              : "bg-white/15 text-white hover:bg-white/25 border border-white/10"
                          }`}
                        >
                          {s}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between bg-white/10 rounded-2xl p-3 border border-white/10">
                  <div>
                    <p className="text-[10px] text-white/50 uppercase font-extrabold">Selected Seat</p>
                    <p className="text-sm font-extrabold text-white">Seat #12 (Full Day)</p>
                  </div>
                  <button className="bg-gradient-to-r from-[#B8860B] to-[#D4A017] text-white px-4 py-2 rounded-xl text-xs font-black shadow-md">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="float-delayed absolute -bottom-6 -left-6 glass-card rounded-2xl px-5 py-3 shadow-xl border border-white/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#0F172A]">Seat Reserved!</p>
                    <p className="text-[10px] text-[#94A3B8] font-semibold">Seat #12 • Morning Shift</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="float absolute -top-5 -right-6 glass-card rounded-2xl px-5 py-3 shadow-xl border border-white/40">
                <p className="text-xs font-extrabold text-[#10B981]">↑ 24 seats available</p>
                <p className="text-[10px] text-[#94A3B8] font-semibold mt-0.5">Right now near you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
