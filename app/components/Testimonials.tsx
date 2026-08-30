const testimonials = [
  {
    name: "Priya Sharma",
    role: "UPSC Aspirant, Delhi",
    text: "NearestLibrary completely changed my preparation routine! I used to waste 30 minutes every morning searching for a seat. Now I book before I even leave home. The QR check-in is so smooth — absolutely love this app! 💛",
    avatar: "P",
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    name: "Rajesh Kumar",
    role: "Library Owner, Jaipur",
    text: "Managing 120 seats across 3 floors used to be chaos with paper registers. Now everything is digital — live seat maps, auto payments, attendance logs. My revenue went up 40% in the first month! 🚀",
    avatar: "R",
    color: "#0EA5E9",
    bg: "#E0F2FE",
  },
  {
    name: "Ananya Patel",
    role: "CA Student, Mumbai",
    text: "The Digital Access Pass is so cool — feels like a VIP library card! I can see exactly which shifts have seats available before going. No more standing in queues or calling the library. Total game-changer ✨",
    avatar: "A",
    color: "#10B981",
    bg: "#D1FAE5",
  },
  {
    name: "Vikram Singh",
    role: "Library Owner, Lucknow",
    text: "The enquiry management feature alone saved me hours each week. Now I can track walk-ins, follow up via WhatsApp, and convert them into members — all from my phone. Best investment for my library! 📊",
    avatar: "V",
    color: "#B8860B",
    bg: "#FDF8EF",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              REVIEWS
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Real Stories, Real Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-semibold tracking-tight text-[#09090b] mb-5 leading-tight">
            Students & Librarians <span className="text-[#B8860B]">Love It</span> 💬
          </h2>
          <p className="text-[17px] text-[#475569] max-w-xl mx-auto leading-relaxed">
            Hear from students who found their perfect study spot and library owners who transformed their operations.
          </p>
        </div>

        {/* Happy Students Image + Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Left — Image Card */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-white/50 max-w-[320px] glow-pulse">
              <img
                src="/features.png"
                alt="Happy students celebrating in a modern library"
                className="w-full h-auto object-cover"
                width={320}
                height={400}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Testimonial Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-[#D4A017]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[13px] text-[#475569] leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                    style={{ background: t.bg, color: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#0F172A]">{t.name}</p>
                    <p className="text-[11px] text-[#94A3B8] font-semibold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
