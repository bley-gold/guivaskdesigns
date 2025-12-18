"use client"

import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Guivas & K</h3>
            <p className="text-background/80 leading-relaxed">
              Professional building and design solutions for your dream projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-background transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Building
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Carpentry
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Painting
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>6159 Sierra Leone Avenue</li>
              <li>Cosmo City Ext 06, Randburg</li>
              <li>Phone: 078 694 0018</li>
              <li>Email: adoracionmosiapoa@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 py-8 mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-background/80 text-sm">
            © 2025 Guivas and K Design Projects (Pty) Ltd. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61567036906319"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/guivas-and-k-331939334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
