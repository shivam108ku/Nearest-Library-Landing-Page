export default function Hero() {
  return (
    <section className="gradient-bg relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Decorative Sparkles */}
      <div className="sparkle" style={{ top: "12%", left: "8%", animationDelay: "0s" }} />
      <div className="sparkle" style={{ top: "22%", right: "12%", animationDelay: "0.8s" }} />
      <div className="sparkle" style={{ top: "55%", left: "18%", animationDelay: "1.6s" }} />
      <div className="sparkle" style={{ top: "35%", right: "6%", animationDelay: "2.2s" }} />
      <div className="sparkle" style={{ bottom: "25%", left: "50%", animationDelay: "1.2s" }} />
      <div className="sparkle" style={{ top: "70%", right: "30%", animationDelay: "0.5s" }} />

      {/* Gradient Orbs */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#B8860B]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#4338CA]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left Content ── */}
          <div>
            {/* Trust Badge */}
            <div className="slide-up inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-[#E8ECF4] rounded-full px-5 py-2.5 mb-7 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-bold text-[#475569] tracking-wide uppercase">
                India&apos;s #1 Library Seat Booking Platform
              </span>
            </div>

            <h1 className="slide-up slide-up-delay-1 hero-title text-[3.2rem] md:text-[3.8rem] leading-[1.08] font-black tracking-tight mb-6">
              Your Perfect{" "}
              <span className="shimmer-gold">Study Spot,</span>
              <br />
              One Tap Away ✨
            </h1>

            <p className="slide-up slide-up-delay-2 text-[17px] text-[#475569] leading-[1.7] mb-9 max-w-[520px]">
              Discover nearby libraries, reserve your favorite seat in seconds,
              track attendance with a QR scan, and manage your entire library —
              all from one beautiful app.
            </p>

            {/* CTA Buttons */}
            <div className="slide-up slide-up-delay-3 flex flex-wrap gap-4 mb-12">
              <a href="#download" className="cta-button px-8 py-4 rounded-2xl text-[15px] font-extrabold shadow-xl cursor-pointer">
                <span className="flex items-center gap-2.5">
                  Download Free App
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                </span>
              </a>
              <a href="#for-libraries" className="secondary-button px-8 py-4 rounded-2xl text-[15px] font-bold cursor-pointer inline-flex items-center gap-2">
                I Own a Library
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>

            {/* Social Proof Row */}
            <div className="slide-up slide-up-delay-4 flex items-center gap-6">
              <div className="flex -space-x-3">
                {["#EDE9FE", "#D1FAE5", "#DBEAFE", "#FEE2E2", "#FDF8EF"].map((bg, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-[2.5px] border-white flex items-center justify-center shadow-md" style={{ background: bg, zIndex: 5 - i }}>
                    <span className="text-[11px] font-black" style={{ color: ["#6D28D9", "#065F46", "#1D4ED8", "#991B1B", "#B8860B"][i] }}>
                      {["R", "A", "P", "S", "M"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-[15px] h-[15px] text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs font-extrabold text-[#B8860B] ml-1">4.9</span>
                </div>
                <p className="text-[13px] text-[#475569] font-semibold">
                  Loved by <span className="text-[#0F172A] font-extrabold">10,000+</span> students across India
                </p>
              </div>
            </div>
          </div>

          {/* ── Right — Premium Hero Image ── */}
          <div className="slide-up slide-up-delay-3 relative flex justify-center lg:justify-end">
            <div className="float relative w-full max-w-[500px]">
              {/* Main Hero Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50 glow-pulse">
                <img
                  src="/hero.png"
                  alt="Premium modern library co-working study space with warm golden lighting and students"
                  className="w-full h-auto object-cover"
                  width={500}
                  height={375}
                  loading="eager"
                />
              </div>

              {/* Floating Notification — Bottom Left */}
              <div className="float-delayed absolute -bottom-5 -left-4 md:-left-8 glass-card rounded-2xl px-5 py-3.5 shadow-xl border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#D1FAE5] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-extrabold text-[#0F172A]">Seat Reserved! 🎉</p>
                    <p className="text-[11px] text-[#94A3B8] font-semibold">Seat #12 • Morning Shift</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge — Top Right */}
              <div className="float absolute -top-4 -right-2 md:-right-8 glass-card rounded-2xl px-5 py-3 shadow-xl border border-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#0F172A]">24 seats free</p>
                    <p className="text-[10px] text-[#94A3B8] font-semibold">Near you right now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
