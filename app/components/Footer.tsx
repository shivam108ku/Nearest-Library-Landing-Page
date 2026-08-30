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
    <footer className="bg-[#09090b] text-white pt-16 pb-8 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-14">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl overflow-hidden flex-shrink-0">
                <img src="/logo.png" alt="Nearest Library Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                Nearest <span className="text-[#B8860B]">Lib</span>rary
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
              India&apos;s #1 library near me app. Find the nearest library near you, book study seats online, and manage attendance with QR check-in. Helping 10,000+ students find their perfect study space daily.
            </p>
            <div className="flex gap-3">
              {["X", "In", "Ig", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-xs font-bold text-neutral-400 hover:text-white transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-neutral-300 mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Download"
                          ? "https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary&pli=1"
                          : link === "About Us"
                          ? "#about"
                          : link === "For Libraries"
                          ? "#about"
                          : link === "Features"
                          ? "#features"
                          : "#"
                      }
                      target={link === "Download" ? "_blank" : undefined}
                      rel={link === "Download" ? "noopener noreferrer" : undefined}
                      className="text-sm text-neutral-400 hover:text-[#B8860B] transition-colors font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} NearestLibrary Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
