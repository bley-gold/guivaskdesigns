'use client'

import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-primary/5 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Ready to Start Your <span className="text-primary">Project?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contact us today for a free consultation. Our team is ready to discuss your project and provide expert guidance.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us</p>
                  <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <p className="font-semibold text-foreground">info@guivasandk.com</p>
                </div>
              </div>
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-semibold inline-flex items-center gap-2">
              Get Free Quote
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Inquiry</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a service...</option>
                  <option>Building & Construction</option>
                  <option>Carpentry & Fitting</option>
                  <option>Painting & Plastering</option>
                  <option>Design Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-secondary transition-colors font-semibold"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
