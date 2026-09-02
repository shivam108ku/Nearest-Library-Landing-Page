import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckHero from "./CheckHero";
import CheckTool from "./CheckTool";
import CheckBenefits from "./CheckBenefits";
import CheckHowItWorks from "./CheckHowItWorks";
import CheckFAQ from "./CheckFAQ";
import Cta from "../components/CTA";

// Page-level metadata is inherited from layout.tsx (already fully SEO-optimized).
// Override only what's specific to this page if needed.
export const metadata: Metadata = {
  // Inherits title, description, OG, Twitter, schema from layout
  // Adding additional social-specific metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CheckPage() {
  return (
    <main>
      <Navbar />
      <CheckHero />
      <CheckTool />
      <CheckBenefits />
      <CheckHowItWorks />
      <CheckFAQ />
      <Cta />
      <Footer />
    </main>
  );
}
