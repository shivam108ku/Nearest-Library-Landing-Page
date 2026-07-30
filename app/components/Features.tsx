const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    color: "#0EA5E9",
    bgColor: "#E0F2FE",
    title: "Discover Nearby Libraries",
    desc: "Find the best study spaces near you with real-time seat availability, ratings, and facilities at a glance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    color: "#B8860B",
    bgColor: "#FDF8EF",
    title: "One-Tap Seat Booking",
    desc: "Reserve your favorite seat instantly. Choose your shift — Morning, Evening, or Full Day — with a single tap.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
    ),
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
    title: "QR Code Attendance",
    desc: "Check in and out by scanning a QR code at the library. Automated attendance logs for students and admins.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    color: "#10B981",
    bgColor: "#D1FAE5",
    title: "Smart Dashboard",
    desc: "Library owners get real-time analytics — occupancy rates, revenue tracking, and student management all in one place.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    color: "#F43F5E",
    bgColor: "#FFF1F2",
    title: "Payment & Billing",
    desc: "Transparent billing, payment tracking, and auto-generated receipts. No more cash confusion or manual ledgers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    ),
    color: "#0F172A",
    bgColor: "#F1F5FF",
    title: "Secure & Private",
    desc: "Your data stays safe with enterprise-grade security. Individual student passcodes and encrypted sessions.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EDE9FE] rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#8B5CF6] tracking-wide uppercase">Why Students Love Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-4">
            Everything You Need to <span className="shimmer-gold">Study Smarter</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            From finding the perfect seat to managing your entire library — we have got every feature covered.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="feature-card group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: f.bgColor, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
