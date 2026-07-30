const footerLinks = [
  {
    title: "Product",
    links: ["Features", "For Students", "For Libraries", "Pricing", "Download"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#D4A017] flex items-center justify-center">
                <span className="text-white text-lg font-black">N</span>
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                Nearest<span className="text-[#D4A017]">Library</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              India&apos;s smartest library seat booking platform. Helping students find their perfect study spot, every single day.
            </p>
            <div className="flex gap-3">
              {["X", "In", "Ig", "Yt"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-xs font-bold text-white/40 hover:text-white/80 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-extrabold text-white/80 mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-[#D4A017] transition-colors font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-medium" suppressHydrationWarning>
            © {new Date().getFullYear()} NearestLibrary. Made with 💛 in India. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-medium">
            Built for students who dream big ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
