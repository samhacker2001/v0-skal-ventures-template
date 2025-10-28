"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, TrendingUp, Database, HeadphonesIcon, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Intelligence",
    description:
      "Advanced algorithms analyze thousands of data points to find your perfect franchise match in seconds.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access India's largest curated collection of tier 2/3 franchise opportunities across all industries.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "Every franchise brand is thoroughly vetted and verified to ensure authenticity and reliability.",
    gradient: "from-pink-500 to-indigo-500",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description: "Make informed decisions with detailed analytics, market trends, and financial projections.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Get personalized guidance from our franchise experts throughout your entire journey.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "Success Stories",
    description: "Join hundreds of successful franchise partnerships built through our platform.",
    gradient: "from-pink-500 to-indigo-500",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose Verox Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The smartest way to discover and evaluate franchise opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <CardContent className="p-8 relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
