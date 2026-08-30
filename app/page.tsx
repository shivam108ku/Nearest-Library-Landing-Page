import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import StudentBenefits from "./components/StudentBenefits";
import PartnerLibraries from "./components/PartnerLibraries";
import ForLibraries from "./components/ForLibraries";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const revalidate = 3600; // Instant Static ISR: Serves pre-rendered HTML in <15ms

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <StudentBenefits />
      <PartnerLibraries />
      <ForLibraries />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
