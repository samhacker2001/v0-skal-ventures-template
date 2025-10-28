"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Brain, Users, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover Opportunities",
    description:
      "Browse through our curated database of tier 2/3 franchise brands across India, filtered by industry, investment, and location.",
    number: "01",
  },
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description:
      "Our intelligent algorithm analyzes your profile, preferences, and goals to recommend the perfect franchise matches for you.",
    number: "02",
  },
  {
    icon: Users,
    title: "Connect & Evaluate",
    description:
      "Get detailed insights, financial projections, and direct connections with franchise brands to make informed decisions.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Launch Your Franchise",
    description:
      "Receive ongoing support, resources, and guidance as you embark on your franchise journey with confidence.",
    number: "04",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 relative bg-gradient-to-b from-background to-indigo-950/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your journey to franchise success in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute top-0 right-0 text-9xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
                {step.number}
              </div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
      </div>
    </section>
  )
}
