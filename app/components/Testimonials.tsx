const stats = [
  { value: "500+", label: "Libraries Listed", emoji: "📚" },
  { value: "10K+", label: "Happy Students", emoji: "😊" },
  { value: "50K+", label: "Seats Booked", emoji: "💺" },
  { value: "98%", label: "Satisfaction Rate", emoji: "⭐" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "UPSC Aspirant, Delhi",
    text: "NearestLibrary changed my study routine completely! I used to waste 30 mins searching for a seat. Now I book before I leave home. Absolute game-changer! 💛",
    avatar: "P",
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    name: "Rajesh Kumar",
    role: "Library Owner, Jaipur",
    text: "Managing 120 seats used to be a nightmare with registers. Now everything is digital — bookings, payments, attendance. My revenue increased by 40%! 🚀",
    avatar: "R",
    color: "#0EA5E9",
    bg: "#E0F2FE",
  },
  {
    name: "Ananya Patel",
    role: "CA Student, Mumbai",
    text: "The QR check-in is so smooth! No more signing registers. Plus, I can see which shifts have seats available before going. Love this app! ✨",
    avatar: "A",
    color: "#10B981",
    bg: "#D1FAE5",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <span className="text-3xl mb-2 block">{s.emoji}</span>
              <p className="text-3xl md:text-4xl font-black text-[#0F172A] mb-1">{s.value}</p>
              <p className="text-sm text-[#475569] font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FDF8EF] border border-[#B8860B]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-bold text-[#B8860B] tracking-wide uppercase">Real Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] mb-4">
            Students & Librarians <span className="shimmer-gold">Love It</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-xl mx-auto">
            Do not just take our word for it — hear from the people using NearestLibrary every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card group hover:shadow-lg hover:-translate-y-1 transition-all">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: t.bg, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8] font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
