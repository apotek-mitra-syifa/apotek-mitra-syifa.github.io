import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import UrgencyBanner from "@/components/UrgencyBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <UrgencyBanner />
      <Hero />
      <SocialProof />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
