"use client";

import { useState } from "react";

type TabKey = "availability" | "status" | "verify";

const tabs: { key: TabKey; label: string; icon: string; title: string; sub: string }[] = [
  {
    key: "availability",
    label: "Check Availability",
    icon: "🪑",
    title: "Check library seat availability near you",
    sub: "See live seat count at every nearby library before you visit.",
  },
  {
    key: "status",
    label: "Library Status",
    icon: "🟢",
    title: "Check if a library is open right now",
    sub: "Live open-now status, hours, and amenity check for 500+ libraries.",
  },
  {
    key: "verify",
    label: "Verify Pass",
    icon: "🎫",
    title: "Verify your digital library pass",
    sub: "Confirm your membership, active plan, and pass validity instantly.",
  },
];

// Mock data — would be replaced with real API responses
const MOCK_LIBRARIES = [
  { name: "StudyHub Library — Patna", distance: "0.6 km", seats: 23, total: 60, status: "Open", closingTime: "10:00 PM", ac: true, wifi: true, shift: "Full Day" },
  { name: "Knowledge Point — Boring Road", distance: "1.2 km", seats: 8, total: 40, status: "Open", closingTime: "9:30 PM", ac: true, wifi: true, shift: "Evening" },
  { name: "Readers' Den — Patliputra", distance: "2.4 km", seats: 0, total: 50, status: "Full", closingTime: "11:00 PM", ac: false, wifi: true, shift: "Morning" },
  { name: "Scholar's Library — Kankarbagh", distance: "3.1 km", seats: 41, total: 80, status: "Open", closingTime: "10:30 PM", ac: true, wifi: true, shift: "Full Day" },
  { name: "Focus Study Center — Rajendra Nagar", distance: "4.5 km", seats: 15, total: 35, status: "Open", closingTime: "9:00 PM", ac: true, wifi: false, shift: "Afternoon" },
  { name: "Bright Minds Library — Danapur", distance: "6.8 km", seats: 6, total: 30, status: "Closing Soon", closingTime: "8:00 PM", ac: false, wifi: true, shift: "Evening" },
];

export default function CheckTool() {
  const [activeTab, setActiveTab] = useState<TabKey>("availability");
  const [city, setCity] = useState("Patna");
  const [passId, setPassId] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verifyResult, setVerifyResult] = useState<null | { name: string; plan: string; valid: boolean; expires: string }>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passId.trim()) return;
    setVerifying(true);
    setVerifyResult(null);
    setTimeout(() => {
      setVerifying(false);
      setVerifyResult({
        name: "Verified Student",
        plan: "Full Day — Active",
        valid: passId.toUpperCase().startsWith("NL"),
        expires: "31 Dec 2026",
      });
    }, 1100);
  };

  return (
    <section
      id="check-tool"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white via-[#F8FAFC] to-white"
      suppressHydrationWarning
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header — H2 with SEO keywords */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              CHECKER
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Free Library Check Tool
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#09090b] mb-4 text-center">
            Check any library near me — <span style={{ color: "#B8860B" }}>in seconds</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto">
            Pick what you want to check below. The NearestLibrary checker is live across 500+ partner libraries in India.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          role="tablist"
          aria-label="Library check options"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`panel-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#09090b] text-white shadow-md"
                  : "bg-white border border-neutral-200/80 text-neutral-700 hover:border-neutral-300"
              }`}
            >
              <span aria-hidden="true">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab panels */}
        <div
          className="gradient-border-card bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {/* ── TAB 1: Check Availability ── */}
          {activeTab === "availability" && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090b] mb-2">
                {tabs[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] mb-6">
                {tabs[0].sub}
              </p>

              {/* City selector — semantic select for SEO */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 mb-6"
                aria-label="Filter by city"
              >
                <label htmlFor="city-select" className="sr-only">
                  Select your city
                </label>
                <select
                  id="city-select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40"
                >
                  {["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Jaipur", "Lucknow", "Patna", "Bhopal", "Chandigarh", "Ahmedabad"].map((c) => (
                    <option key={c} value={c}>
                      Library near me in {c}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#D4A017] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Check Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>

              {/* Results list — semantic list with structured data hints */}
              <ul className="space-y-3" aria-label={`Libraries in ${city}`}>
                {MOCK_LIBRARIES.map((lib, i) => {
                  const isFull = lib.seats === 0;
                  const isClosing = lib.status === "Closing Soon";
                  return (
                    <li
                      key={lib.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-neutral-200/80 hover:border-[#B8860B]/40 hover:shadow-sm transition-all"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm sm:text-base font-bold text-[#09090b] truncate">
                            {lib.name}
                          </h4>
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              isFull
                                ? "bg-rose-100 text-rose-700"
                                : isClosing
                                ? "bg-amber-100 text-amber-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              isFull ? "bg-rose-500" : isClosing ? "bg-amber-500" : "bg-emerald-500"
                            }`} />
                            {lib.status}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">
                          {lib.distance} away · Closes {lib.closingTime} · {lib.shift} shift available
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-[11px] font-medium">
                          {lib.ac && <span className="text-sky-700">❄ AC</span>}
                          {lib.wifi && <span className="text-violet-700">📶 Wi-Fi</span>}
                          <span className="text-neutral-500">📍 {city}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                        <div className="text-right">
                          <p className={`text-2xl font-extrabold leading-none ${
                            isFull ? "text-rose-600" : lib.seats < 10 ? "text-amber-600" : "text-emerald-600"
                          }`}>
                            {lib.seats}
                          </p>
                          <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                            of {lib.total} seats
                          </p>
                        </div>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-[#09090b] hover:bg-black text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                        >
                          Book Seat
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <p className="text-xs text-neutral-500 mt-6 text-center">
                Live demo data · Download the app for real-time seat availability in your city.
              </p>
            </div>
          )}

          {/* ── TAB 2: Library Status ── */}
          {activeTab === "status" && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090b] mb-2">
                {tabs[1].title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] mb-6">
                {tabs[1].sub}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Libraries open now", value: "312", color: "emerald", icon: "🟢" },
                  { label: "Libraries closing in 1h", value: "47", color: "amber", icon: "⏰" },
                  { label: "Currently full", value: "23", color: "rose", icon: "🔴" },
                  { label: "24-hour libraries", value: "18", color: "sky", icon: "🌙" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl border border-neutral-200/80 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      <span aria-hidden="true">{stat.icon}</span>
                      {stat.label}
                    </div>
                    <p className={`text-3xl sm:text-4xl font-extrabold text-${stat.color}-600`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200/60">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#09090b] mb-1">
                      All status updates are live
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Every partner library updates its open-now status in real-time via QR check-in data. No stale info — what you see is what&apos;s true right now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 3: Verify Pass ── */}
          {activeTab === "verify" && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#09090b] mb-2">
                {tabs[2].title}
              </h3>
              <p className="text-sm sm:text-base text-[#475569] mb-6">
                {tabs[2].sub}
              </p>

              <form onSubmit={handleVerify} aria-label="Verify digital library pass">
                <label htmlFor="pass-id" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Enter your pass ID or scan QR
                </label>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input
                    id="pass-id"
                    type="text"
                    value={passId}
                    onChange={(e) => setPassId(e.target.value)}
                    placeholder="e.g. NL-PATNA-2026-A1B2"
                    className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#B8860B]/40"
                    aria-describedby="pass-help"
                  />
                  <button
                    type="submit"
                    disabled={verifying}
                    className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#D4A017] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                  >
                    {verifying ? "Verifying..." : "Verify Pass"}
                  </button>
                </div>
                <p id="pass-help" className="text-xs text-neutral-500 mb-6">
                  Tip: Pass IDs starting with <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-[11px]">NL</code> are valid demo IDs.
                </p>
              </form>

              {verifyResult && (
                <div
                  className={`p-5 rounded-2xl border-2 ${
                    verifyResult.valid
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-rose-50 border-rose-200"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${
                        verifyResult.valid
                          ? "bg-emerald-600 text-white"
                          : "bg-rose-600 text-white"
                      }`}
                    >
                      {verifyResult.valid ? "✓" : "✗"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#09090b] mb-1">
                        {verifyResult.valid ? "Pass Verified" : "Invalid Pass ID"}
                      </h4>
                      <p className="text-xs text-neutral-600">
                        {verifyResult.valid
                          ? `${verifyResult.name} · ${verifyResult.plan} · Valid until ${verifyResult.expires}`
                          : "Try a pass ID starting with NL or open the NearestLibrary app to find your pass."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 text-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B] hover:text-[#D4A017]"
                >
                  Open the app to scan your QR pass instantly →
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Section footer note */}
        <p className="text-xs text-neutral-500 text-center mt-6 max-w-2xl mx-auto">
          The NearestLibrary checker works in <strong>50+ Indian cities</strong> and updates every minute. For the freshest data, use the Android app.
        </p>
      </div>
    </section>
  );
}
