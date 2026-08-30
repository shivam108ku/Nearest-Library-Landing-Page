/* ── Facility → Emoji Map ─────────────────────────────── */
const facilityEmoji: Record<string, string> = {
  "Wi-Fi": "📶",
  "AC": "❄️",
  "Power Backup": "🔋",
  "Parking": "🅿️",
  "CCTV": "📹",
  "Locker": "🔐",
  "Cafeteria": "☕",
  "Drinking Water": "💧",
  "Washroom": "🚻",
  "Reading Room": "📖",
  "Printer": "🖨️",
  "Study Material": "📝",
};

import { fetchPublicLibraries, type Library } from "@/lib/api";

/* ── Dynamic Logo Themes & Icons ──────────────────────── */
const LOGO_THEMES = [
  {
    gradient: "from-[#0F172A] via-[#1E293B] to-[#B8860B]",
    border: "border-[#E5B844]/40",
    accent: "#FDF8EF",
    glow: "rgba(184, 134, 11, 0.25)",
    icon: "pillars",
  },
  {
    gradient: "from-[#064E3B] via-[#047857] to-[#10B981]",
    border: "border-[#34D399]/40",
    accent: "#ECFDF5",
    glow: "rgba(16, 185, 129, 0.25)",
    icon: "book",
  },
  {
    gradient: "from-[#2E1065] via-[#581C87] to-[#7C3AED]",
    border: "border-[#A78BFA]/40",
    accent: "#FAF5FF",
    glow: "rgba(124, 58, 237, 0.25)",
    icon: "crest",
  },
  {
    gradient: "from-[#4C0519] via-[#881337] to-[#E11D48]",
    border: "border-[#FB7185]/40",
    accent: "#FFF1F2",
    glow: "rgba(225, 29, 72, 0.25)",
    icon: "shield",
  },
  {
    gradient: "from-[#082F49] via-[#0369A1] to-[#0EA5E9]",
    border: "border-[#38BDF8]/40",
    accent: "#F0F9FF",
    glow: "rgba(14, 165, 233, 0.25)",
    icon: "lamp",
  },
  {
    gradient: "from-[#451A03] via-[#78350F] to-[#D97706]",
    border: "border-[#FCD34D]/40",
    accent: "#FFFBEB",
    glow: "rgba(217, 119, 6, 0.25)",
    icon: "quill",
  },
];

function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return "NL";
}

/* ── Mini Emblem SVG ──────────────────────────────────── */
function EmblemIcon({ type }: { type: string }) {
  if (type === "pillars") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 18h16M6 18V9M10 18V9M14 18V9M18 18V9M3 9l9-6 9 6H3z" />
      </svg>
    );
  }
  if (type === "book") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  }
  if (type === "crest") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (type === "lamp") {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  }
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  );
}

/* ── Premium Library Logo Component ───────────────────── */
function LibraryLogo({ name, logoUrl }: { name: string; logoUrl?: string }) {
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={name}
        className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
      />
    );
  }

  const hash = getHash(name);
  const theme = LOGO_THEMES[hash % LOGO_THEMES.length];
  const initials = getInitials(name);

  return (
    <div
      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.gradient} border ${theme.border} p-1.5 flex flex-col justify-between items-center shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 overflow-hidden flex-shrink-0`}
      style={{ boxShadow: `0 8px 24px -4px ${theme.glow}` }}
    >
      {/* Glass glossy highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

      {/* Decorative background watermark */}
      <div className="absolute -right-1 -bottom-1 opacity-15 text-white pointer-events-none scale-150">
        <EmblemIcon type={theme.icon} />
      </div>

      {/* Top tiny emblem badge */}
      <div className="relative z-10 opacity-80" style={{ color: theme.accent }}>
        <EmblemIcon type={theme.icon} />
      </div>

      {/* Center Initials Monogram */}
      <span
        className="relative z-10 text-[15px] font-black tracking-wider leading-none text-white drop-shadow-md pb-0.5"
        style={{ fontFamily: "var(--font-sans, system-ui)" }}
      >
        {initials}
      </span>
    </div>
  );
}

export default async function PartnerLibraries() {
  const libraries = await fetchPublicLibraries();

  if (libraries.length === 0) return null;

  return (
    <section id="partner-libraries" className="py-28 px-6 bg-gradient-to-b from-white to-[#FDF8EF]/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D1FAE5] border border-[#10B981]/20 rounded-full px-5 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-bold text-[#065F46] tracking-wide uppercase">
              Live on Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-[3.2rem] font-black tracking-tight text-[#0F172A] mb-5 leading-tight">
            Libraries That <span className="shimmer-gold">Trust Us</span> 🏛️
          </h2>
          <p className="text-[17px] text-[#475569] max-w-xl mx-auto leading-relaxed">
            {libraries.length}+ libraries across India are already managing their seats, 
            students, and payments with NearestLibrary.
          </p>
        </div>

        {/* Library Cards Grid */}
        <div className="library-grid">
          {libraries.map((lib, i) => {
            return (
              <div
                key={lib.id}
                className="library-card group"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Card Top — Dynamic Logo & Info */}
                <div className="flex items-start gap-4 mb-4">
                  <LibraryLogo name={lib.libraryName} logoUrl={lib.logoUrl} />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-extrabold text-[#0F172A] truncate leading-tight mb-1 group-hover:text-[#B8860B] transition-colors">
                      {lib.libraryName}
                    </h3>
                    {(lib.district || lib.state) && (
                      <p className="text-[12px] text-[#64748B] font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {[lib.district, lib.state].filter(Boolean).join(", ")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Seats Badge */}
                {lib.totalSeats > 0 && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-[#E0F2FE] rounded-full px-3 py-1">
                      <svg className="w-3.5 h-3.5 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-[11px] font-bold text-[#0369A1]">{lib.totalSeats} Seats</span>
                    </div>
                  </div>
                )}

                {/* Facilities */}
                {lib.facilities.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {lib.facilities.slice(0, 4).map((f, fi) => (
                      <span
                        key={fi}
                        className="inline-flex items-center gap-1 bg-[#F8FAFC] border border-[#E8ECF4] rounded-lg px-2 py-0.5 text-[10px] font-semibold text-[#475569]"
                      >
                        <span className="text-[11px]">{facilityEmoji[f] || "✨"}</span>
                        {f}
                      </span>
                    ))}
                    {lib.facilities.length > 4 && (
                      <span className="inline-flex items-center bg-[#FDF8EF] border border-[#B8860B]/15 rounded-lg px-2 py-0.5 text-[10px] font-bold text-[#B8860B]">
                        +{lib.facilities.length - 4} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-sm text-[#64748B] mb-4 font-medium">
            Want your library on this list?
          </p>
          <a
            href="#for-libraries"
            className="cta-button px-8 py-4 rounded-2xl text-[15px] font-extrabold shadow-xl cursor-pointer inline-block"
          >
            <span className="flex items-center gap-2">
              Register Your Library — Free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
