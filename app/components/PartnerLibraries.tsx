import { fetchPublicLibraries } from "@/lib/api";
import PartnerLibrariesClient from "./PartnerLibrariesClient";

export default async function PartnerLibraries() {
  const libraries = await fetchPublicLibraries();

  if (libraries.length === 0) return null;

  return (
    <section
      id="partner-libraries"
      className="pt-20 pb-6 px-4 sm:px-6 bg-white relative"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-4 py-1 text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
            <span className="bg-neutral-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              LIVE NETWORK
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600">
              Verified Partner Libraries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-semibold tracking-tight text-[#09090b] mb-4 leading-tight">
            Libraries That <span className="text-[#B8860B]">Trust Us</span> 🏛️
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            {libraries.length}+ libraries across India are already managing their seats, 
            students, and payments with NearestLibrary.
          </p>
        </div>

        {/* Interactive Client Component: Stats + Filter Tabs + Search + Luxury Cards Grid */}
        <PartnerLibrariesClient libraries={libraries} />

        {/* Bottom CTA Card */}
        <div className="text-center mt-10">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-neutral-200/80 rounded-2xl p-4 sm:px-6 shadow-sm">
            <span className="text-sm font-semibold text-neutral-700">
              Are you a library owner? Get listed on our verified network today.
            </span>
            <a
              href="#for-libraries"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <span>Register Your Library — Free</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
