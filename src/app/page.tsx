import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import NavigationHeader from "@/components/navigation-header";
import OurClients from "@/components/our-clients";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import WhatsappCTA from "@/components/whatsapp-cta";

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <HeroSection />
      <OurClients />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
      <WhatsappCTA />
    </>
  );
}
