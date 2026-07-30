export default function CTA() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="navy-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Gradient Orbs */}
          <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full bg-[#B8860B]/10 blur-3xl" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[200px] h-[200px] rounded-full bg-[#4338CA]/10 blur-3xl" />

          <div className="relative z-10">
            <span className="text-5xl mb-5 block">🎓</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Ready to Find Your <span className="text-[#D4A017]">Perfect Study Spot?</span>
            </h2>
            <p className="text-base text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Join thousands of students who have already transformed their study routine. Download NearestLibrary today — it&apos;s completely free.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="group flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#D4A017]/30 rounded-2xl px-6 py-4 transition-all hover:-translate-y-1 hover:shadow-xl">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">Download on the</p>
                  <p className="text-base font-bold text-white">App Store</p>
                </div>
              </a>

              <a href="#" className="group flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-[#D4A017]/30 rounded-2xl px-6 py-4 transition-all hover:-translate-y-1 hover:shadow-xl">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33-2.302 1.33-1.811-1.33 1.811-1.33zM5.864 2.658L16.8 8.991l-2.302 2.302-8.635-8.635z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">Get it on</p>
                  <p className="text-base font-bold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
