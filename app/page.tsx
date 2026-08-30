import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PartnerLibraries from "./components/PartnerLibraries";
import ForLibraries from "./components/ForLibraries";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <Testimonials />
      <PartnerLibraries />
      <ForLibraries />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
