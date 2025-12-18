'use client'

import { Building2, Hammer, Palette, Blocks as Bricks, Droplet, DoorOpen, Wrench, FlowerIcon as FloorPlan } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Building and Construction',
    description: 'From initial planning to project completion, we manage all aspects of building and construction for residential and commercial properties.'
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Expert carpentry services specializing in custom furniture, fittings, and structural elements. Our craftsmanship ensures durable and elegant designs in every piece we create and install.'
  },
  {
    icon: Palette,
    title: 'Painting and Plastering',
    description: 'Interior and exterior painting and plastering services that enhance the aesthetic appeal and durability of buildings.'
  },
  {
    icon: Bricks,
    title: 'Brickwork',
    description: 'We specialize in durable brickwork, constructing strong walls and structures using high-quality materials for reliable, long-lasting results.'
  },
  {
    icon: Droplet,
    title: 'Plumbing',
    description: 'We provide specialized plumbing solutions for efficient water supply and drainage in new constructions and renovations, covering installations and ongoing maintenance.'
  },
  {
    icon: DoorOpen,
    title: 'Door Fitting and Bathroom Design',
    description: 'Expert carpentry services specializing in custom furniture, fittings, and structural elements. Our craftsmanship ensures durable and elegant designs in every piece we create and install.'
  },
  {
    icon: Wrench,
    title: 'General Renovation and Maintenance',
    description: 'Comprehensive renovation services, including structural modifications, refurbishments, and ongoing maintenance.'
  },
  {
    icon: FloorPlan,
    title: 'Flooring Installation and Tiling',
    description: 'We offer expert installation of various flooring materials and tiling, transforming spaces with style and durability.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full inline-block">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of professional services tailored to meet your building and renovation needs. From initial planning to final touches, we ensure quality and satisfaction every step of the way.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={28} className="text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
