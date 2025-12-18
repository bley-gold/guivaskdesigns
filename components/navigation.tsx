"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Guivas & K
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground hover:text-primary">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact">
              <button className="w-full mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-medium">
                Get Quote
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
