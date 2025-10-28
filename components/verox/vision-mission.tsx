"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const cards = [
  {
    icon: Eye,
    title: "Vision",
    description: "Revolutionize franchise industry with trusted platform for tier 2/3 brands",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Transform unorganized sector into organized, reliable, data-driven ecosystem",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Promise",
    description: "Complete neutrality with rigorous AI analysis and vetting",
    gradient: "from-pink-500 to-indigo-500",
  },
]

export function VisionMission() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 200) // Stagger animation
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-24 px-4 relative bg-transparent text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Vision & Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building the future of franchise discovery in India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? "opacity-100 translate-x-0"
                  : index === 0
                    ? "opacity-0 -translate-x-20"
                    : index === 2
                      ? "opacity-0 translate-x-20"
                      : "opacity-0 translate-y-10"
              }`}
            >
              <Card
                className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full"
                style={{
                  transform: "perspective(1000px)",
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget
                  const rect = card.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = (y - centerY) / 10
                  const rotateY = (centerX - x) / 10

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
