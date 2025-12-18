"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Luxury Modern Kitchen",
    category: "Interior Design",
    image: "/images/1.jpg",
    description: "Premium black and white kitchen with marble island and custom cabinetry",
  },
  {
    id: 2,
    title: "Contemporary White Kitchen",
    category: "Interior Design",
    image: "/images/2.jpg",
    description: "Sleek white kitchen with integrated appliances and marble countertops",
  },
  {
    id: 3,
    title: "Luxury Bar & Entertainment",
    category: "Interior Design",
    image: "/images/3.jpg",
    description: "Premium home bar with wine collection and ambient lighting",
  },
  {
    id: 4,
    title: "Modern TV Entertainment Unit",
    category: "Interior Design",
    image: "/images/4.jpg",
    description: "Sophisticated marble TV wall with custom cabinetry and shelving",
  },
  {
    id: 5,
    title: "Modern Bedroom Wardrobe",
    category: "Carpentry",
    image: "/images/5.jpg",
    description: "Custom built-in wardrobe with light wood finish and marble flooring",
  },
  {
    id: 6,
    title: "White Modern Kitchen Setup",
    category: "Interior Design",
    image: "/images/6.jpg",
    description: "Contemporary kitchen with integrated appliances and clean lines",
  },
  {
    id: 7,
    title: "Elegant Bedroom Closet",
    category: "Carpentry",
    image: "/images/7.jpg",
    description: "Spacious custom closet with premium light wood finish",
  },
  {
    id: 8,
    title: "Wood-Paneled Entertainment Wall",
    category: "Interior Design",
    image: "/images/8.jpg",
    description: "Stunning timber feature wall with integrated TV and accent lighting",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-block">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our finest work across residential and commercial projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link href="/projects" className="w-full">
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 w-full justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                      <ExternalLink size={16} />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-colors font-semibold inline-flex items-center gap-2">
              See All Projects
              <ExternalLink size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
