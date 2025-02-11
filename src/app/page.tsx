import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import NavigationHeader from "@/components/navigation-header";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <NavigationHeader />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
