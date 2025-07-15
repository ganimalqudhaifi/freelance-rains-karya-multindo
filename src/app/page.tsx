import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import OurClients from "@/components/our-clients";
import PortfolioModuleSection from "@/components/portfolio-module-section";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurClients />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioModuleSection />
      <ContactSection />
    </>
  );
}
