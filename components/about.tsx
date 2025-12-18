"use client"

import { Check } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="relative h-96 lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/team-of-construction-professionals-working.jpg"
              alt="Our team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
          </div>

          {/* Right content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-block">
                About Us
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Quality Building & <span className="text-primary">Design Excellence</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Guivas and K Design Projects (Pty) Ltd is a professional building and design company that specializes in
                a wide range of construction-related services. With a commitment to quality and client satisfaction, we
                offer services including painting, plastering, carpentry, brickwork, door fitting, bathroom design,
                flooring installation, plumbing, and tiling. Located in Cosmo City, Randburg, we aim to deliver
                exceptional results across both residential and commercial projects.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Expert team of professional builders and designers",
                "End-to-end project management and quality control",
                "NHBRC registered and compliant builder",
                "Personalized solutions for every client",
                "Competitive pricing without compromising quality",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/#contact">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-semibold">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
