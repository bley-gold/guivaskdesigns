"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import CeoMessage from "@/components/ceo-message"
import Certifications from "@/components/certifications"
import ProfessionalAffiliations from "@/components/professional-affiliations"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <CeoMessage />
      <Certifications />
      <ProfessionalAffiliations />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
