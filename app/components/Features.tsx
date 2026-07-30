const features = [
  {
    img: "/icon_seatmap.png",
    title: "Visual Seat Map",
    desc: "Interactive multi-floor seat grids with live occupancy. Pick your exact seat, choose Morning, Evening, or Full Day shift — book in one tap.",
    color: "#0EA5E9",
    bgColor: "#E0F2FE",
  },
  {
    img: "/icon_attendance.png",
    title: "QR Code Attendance",
    desc: "Students check in & out by scanning a QR code at the library entrance. Automated digital attendance logs — no paper registers.",
    color: "#10B981",
    bgColor: "#D1FAE5",
  },
  {
    img: "/icon_students.png",
    title: "Student Registry",
    desc: "Complete member profiles with Library ID, booking history, payment status, and attendance records. Search by name, ID, or phone.",
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
  },
  {
    img: "/icon_billing.png",
    title: "Smart Billing & Revenue",
    desc: "Auto-track payments, pending dues, and monthly revenue. Generate digital receipts and see income breakdowns by shift and floor.",
    color: "#B8860B",
    bgColor: "#FDF8EF",
  },
];

const extraFeatures = [
  {
    emoji: "📊",
    title: "Real-Time Dashboard",
    desc: "Live occupancy rates, today's revenue, active bookings, and attendance — everything on one screen.",
  },
  {
    emoji: "📱",
    title: "Digital Access Pass",
    desc: "Every student gets a premium VIP-style digital library card with their unique Member ID and QR code.",
  },
  {
    emoji: "🏢",
    title: "Multi-Floor Management",
    desc: "Configure separate floors with independent seat counts, naming, and shift timings per floor.",
  },
  {
    emoji: "🔔",
    title: "WhatsApp Notifications",
    desc: "Automated booking confirmations, payment reminders, and seat expiry alerts via WhatsApp.",
  },
  {
    emoji: "📋",
    title: "Enquiry Management",
    desc: "Track new student enquiries, follow up on walk-ins, and convert leads into active members.",
  },
  {
    emoji: "🔒",
    title: "Secure & Private",
    desc: "Individual student passcodes, encrypted sessions, and role-based access for owners and managers.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#EDE9FE] rounded-full px-5 py-2 mb-5">
            <span className="text-xs font-bold text-[#8B5CF6] tracking-wide uppercase">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-[3.2rem] font-black tracking-tight text-[#0F172A] mb-5 leading-tight">
            Everything You Need to <span className="shimmer-gold">Study Smarter</span>
          </h2>
          <p className="text-[17px] text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Built from real library workflows — seat booking, attendance, billing, and student management, all designed for how Indian libraries actually work.
          </p>
        </div>

        {/* Primary Feature Cards — with real app images */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {features.map((f, i) => (
            <div key={i} className="feature-card group flex gap-5 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-lg group-hover:scale-105 transition-transform" style={{ background: f.bgColor }}>
                <img src={f.img} alt={f.title} className="w-full h-full object-cover" width={80} height={80} loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[17px] font-extrabold text-[#0F172A] mb-1.5">{f.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {extraFeatures.map((f, i) => (
            <div key={i} className="feature-card group">
              <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform inline-block">{f.emoji}</span>
              <h3 className="text-[15px] font-extrabold text-[#0F172A] mb-1.5">{f.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
