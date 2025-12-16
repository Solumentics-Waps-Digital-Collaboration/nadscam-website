import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ImpactSection } from "@/components/impact-section"
import { DonationSection } from "@/components/donation-section" // Imported
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProductsSection } from "@/components/products-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InstituteIntroSection } from "@/components/institute-intro-section"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InstituteIntroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <WhyUsSection />
      <ImpactSection />
      <DonationSection />
      <GallerySection />
      <TestimonialsSection />
      <ProductsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}