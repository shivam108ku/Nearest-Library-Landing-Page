export default function CTA() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#09090b] border border-neutral-800 rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-[-80px] right-[-80px] w-[260px] h-[260px] rounded-full bg-[#B8860B]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[220px] h-[220px] rounded-full bg-[#B8860B]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-5xl mb-5 block">🎓</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight" style={{ color: '#ffffff' }}>
              Ready to Find Your <span className="text-[#B8860B]">Perfect Study Spot?</span>
            </h2>
            <p className="text-base text-neutral-400 mb-9 max-w-lg mx-auto leading-relaxed">
              Join thousands of students who have already transformed their study routine. Download NearestLibrary today — it&apos;s completely free.
            </p>

            {/* Google Play Download Button (Android Only) */}
            <div className="flex flex-col items-center justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-white hover:bg-neutral-100 text-neutral-950 rounded-2xl px-8 py-4 transition-all shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                {/* Official Google Play Icon */}
                <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" />
                  <path fill="#34A853" d="M10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635z" />
                  <path fill="#FBBC04" d="M16.8 8.991l-2.302 2.302 2.302 2.302 2.302-1.33c.642-.37.642-.973 0-1.344l-2.302-1.93z" />
                  <path fill="#EA4335" d="M5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <p className="text-[11px] text-neutral-500 font-bold uppercase tracking-wider">GET IT ON</p>
                  <p className="text-lg font-extrabold text-neutral-950 leading-tight">Google Play</p>
                </div>
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-neutral-400 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Android Phones & Tablets • Free Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
