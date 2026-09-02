export default function CheckHowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Open the checker",
      desc: "Visit nearestlibrary.com/check on any browser, or download the NearestLibrary Android app for the full experience.",
    },
    {
      n: "02",
      title: "Pick what to check",
      desc: "Choose between seat availability, library open-now status, or digital pass verification — all in one tool.",
    },
    {
      n: "03",
      title: "Get live results",
      desc: "See the nearest library near you with real-time seat count, distance, AC, Wi-Fi, fees, and live open-now status.",
    },
    {
      n: "04",
      title: "Book or visit",
      desc: "Reserve your study seat instantly in the app, or walk into a confirmed-open library with a verified pass.",
    },
  ];

  return (
    <section
      id="how-check-works"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F8FAFC]"
      aria-label="How the library checker works"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              HOW IT WORKS
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              4 Simple Steps
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#09090b] mb-4 text-center">
            How to <span style={{ color: "#B8860B" }}>check a library near me</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto">
            Check seat availability, status, or your pass in under 60 seconds. No signup, no payment, no friction.
          </p>
        </div>

        {/* Steps — ordered list for SEO + semantics */}
        <ol
          className="grid sm:grid-cols-2 gap-4 sm:gap-5"
          aria-label="Steps to check a library"
        >
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 hover:shadow-md transition-all"
            >
              <div
                className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-[#B8860B] text-white font-extrabold text-base flex items-center justify-center shadow-md"
                aria-hidden="true"
              >
                {s.n}
              </div>
              <h3 className="text-lg font-bold text-[#09090b] mb-2 mt-2">{s.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>

        {/* SEO internal link to homepage */}
        <div className="mt-10 text-center">
          <a
            href="/#features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:text-[#D4A017] transition-colors"
          >
            See all NearestLibrary features →
          </a>
        </div>
      </div>
    </section>
  );
}
