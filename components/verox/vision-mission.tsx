"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb } from "lucide-react"

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's leading AI-powered franchise marketplace, connecting ambitious entrepreneurs with high-potential tier 2/3 brands and creating a thriving ecosystem of successful partnerships.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Democratize franchise opportunities by leveraging artificial intelligence to match the right brands with the right partners, making franchise expansion accessible, transparent, and data-driven.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Our Values",
    description:
      "Innovation, transparency, and empowerment drive everything we do. We believe in using cutting-edge technology to create meaningful connections and sustainable business growth.",
    gradient: "from-pink-500 to-indigo-500",
  },
]

export function VisionMission() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building the future of franchise discovery in India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <CardContent className="p-8 relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
