"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Professional Building & Design
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Build Your <span className="text-primary">Dream Space</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transform your vision into reality. From concept to completion, we deliver exceptional building,
                carpentry, and design services that exceed expectations.
              </p>
            </div>

            {/* Updated button links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#services">
                <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all duration-300 font-semibold flex items-center justify-center gap-2 w-full sm:w-auto">
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/projects">
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary/5 transition-colors font-semibold w-full sm:w-auto">
                  View Portfolio
                </button>
              </Link>
            </div>

            {/* Updated stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-96 lg:h-full lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/hero-kitchen-install.jpg"
              alt="Professional kitchen installation by Guivas and K Design Projects team"
              className="w-full h-full object-cover brightness-90 contrast-110 saturate-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/5 to-transparent"></div>
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
