"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "reveal" | "scale" | "slide-left" | "slide-right" | "bounce" | "morph"
  delay?: number
  className?: string
}

export function ScrollAnimation({ children, animation = "reveal", delay = 0, className = "" }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    reveal: "scroll-reveal",
    scale: "scroll-scale",
    "slide-left": "scroll-slide-left",
    "slide-right": "scroll-slide-right",
    bounce: "scroll-reveal",
    morph: "scroll-scale",
  }[animation]

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
