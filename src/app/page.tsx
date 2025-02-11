import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import NavigationHeader from "@/components/navigation-header";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
