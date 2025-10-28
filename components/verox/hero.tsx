"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = Math.max(0.5, 1 - scrollY / 1500)
  const opacity = Math.max(0, 1 - scrollY / 800)

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div
        className="container relative z-10 mx-auto px-4 py-20 text-center"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          transformOrigin: "center center",
        }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight text-balance">
          Revolutionizing Franchise Discovery with AI Intelligence
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
          Empowering tier 2/3 brands across India to find the perfect franchise opportunities through intelligent
          matching and data-driven insights.
        </p>

        <Button
          size="lg"
          onClick={scrollToContact}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
