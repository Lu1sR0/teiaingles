"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}

export function MagneticButton({ children, className = "", onClick, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <Button
      ref={buttonRef}
      className={`transition-all duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}
