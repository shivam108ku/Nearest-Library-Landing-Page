import { fetchPublicLibraries } from "@/lib/api";
import PartnerLibrariesClient from "./PartnerLibrariesClient";
import FoldText from "./FoldText";

export default async function PartnerLibraries() {
  const libraries = await fetchPublicLibraries();

  if (libraries.length === 0) return null;

  return (
    <section
      id="partner-libraries"
      className="pt-16 sm:pt-20 pb-6 px-4 sm:px-6 bg-white relative"
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#B8860B]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full pl-1.5 pr-3 sm:pr-4 py-1 text-xs sm:text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-5 sm:mb-6">
            <span className="bg-neutral-900 text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">
              LIVE NETWORK
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-600 whitespace-nowrap">
              Verified Partner Libraries
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[3.2rem] font-semibold tracking-tight text-[#09090b] mb-4 leading-tight text-center">
            <FoldText
              text="Libraries That Trust Us 🏛️"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.025}
              charColors={{
                15: "#B8860B",
                16: "#B8860B",
                17: "#B8860B",
                18: "#B8860B",
                19: "#B8860B",
                20: "#B8860B",
                21: "#B8860B",
                22: "#B8860B",
              }}
            />
          </h2>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            {libraries.length}+ libraries across India are already managing their seats,
            students, and payments with NearestLibrary.
          </p>
        </div>

        {/* Interactive Client Component: Stats + Filter Tabs + Search + Premium Cards Grid */}
        <PartnerLibrariesClient libraries={libraries} />

        {/* Bottom CTA Card (Premium) */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="relative inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-neutral-200/80 rounded-2xl p-4 sm:px-6 sm:py-5 shadow-sm hover:shadow-md transition-shadow max-w-2xl mx-auto">
            <div className="absolute -inset-px bg-gradient-to-r from-transparent via-[#B8860B]/10 to-transparent rounded-2xl blur-md pointer-events-none" />
            <span className="relative text-sm font-semibold text-neutral-700">
              Are you a library owner? Get listed on our verified network today.
            </span>
            <a
              href="#for-libraries"
              className="relative inline-flex items-center gap-2 bg-neutral-900 text-white hover:bg-[#B8860B] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10">Register Your Library — Free</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
