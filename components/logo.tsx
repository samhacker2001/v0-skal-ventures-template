"use client"

import type React from "react"
import { useEffect, useState } from "react"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const slideOffset = -(scrollY * 0.5)
  const opacity = Math.max(0, 1 - scrollY / 100)
  const scale = Math.max(0, 1 - scrollY / 80)
  const textOpacity = Math.max(0, 1 - scrollY / 80)

  return (
    <svg
      className="w-24 sm:w-28 transition-all duration-300 ease-in leading-10 mx-14 md:w-40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `translateX(${slideOffset}px) scale(${scale})`,
        opacity: opacity,
      }}
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        fill="url(#logoGradient)"
        letterSpacing="-0.5"
        style={{ opacity: textOpacity }}
      >
        VeroX
      </text>
    </svg>
  )
}
