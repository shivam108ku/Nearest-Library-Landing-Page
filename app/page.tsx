import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import StudentBenefits from "./components/StudentBenefits";
import PartnerLibraries from "./components/PartnerLibraries";
import CityGrid from "./components/CityGrid";
import ForLibraries from "./components/ForLibraries";
import Faq from "./components/FAQ";
import Cta from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <StudentBenefits />
      <PartnerLibraries />
      <CityGrid />
      <ForLibraries />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
