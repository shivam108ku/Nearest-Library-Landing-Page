export default function CheckBenefits() {
  const benefits = [
    {
      icon: "⚡",
      title: "Instant Live Status",
      desc: "Check library open-now status, seat count, and shift availability updated every minute from real QR check-in data.",
    },
    {
      icon: "📍",
      title: "Nearest Library Discovery",
      desc: "Find the nearest library to your exact location across 50+ Indian cities with distance, AC, Wi-Fi, and amenity filters.",
    },
    {
      icon: "🎫",
      title: "Digital Pass Verification",
      desc: "Verify your digital library pass with QR scan — instant membership validation at any NearestLibrary partner.",
    },
    {
      icon: "🔒",
      title: "100% Free, No Signup",
      desc: "Check libraries unlimited times without creating an account. Built for students, owned by students.",
    },
    {
      icon: "🛡️",
      title: "Real-Time Data, No Fakes",
      desc: "Every check is backed by live partner-library data — no stale listings, no fake availability promises.",
    },
    {
      icon: "📱",
      title: "Works on Web & App",
      desc: "Check from any browser at nearestlibrary.com/check, or get the full experience on the Android app.",
    },
  ];

  return (
    <section
      id="why-check"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white"
      aria-label="Benefits of the library checker"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              WHY USE
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              The NearestLibrary Checker
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#09090b] mb-4 text-center">
            Why students use our <span style={{ color: "#B8860B" }}>library check</span> tool
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto">
            Stop wasting trips. Check the nearest library near you in seconds — before you walk out the door.
          </p>
        </div>

        {/* Benefits grid — semantic for SEO */}
        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          aria-label="Library checker benefits"
        >
          {benefits.map((b) => (
            <li
              key={b.title}
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#B8860B]/40 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8860B]/15 to-[#B8860B]/5 text-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-[#09090b] mb-2">{b.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{b.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
