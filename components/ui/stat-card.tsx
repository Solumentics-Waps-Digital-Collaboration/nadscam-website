"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, Users, School, Package, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Icon mapping object
const iconMap: Record<string, LucideIcon> = {
  calendar: Calendar,
  users: Users,
  school: School,
  package: Package,
}

interface StatCardProps {
  icon: string
  value: string
  label: string
  className?: string
}

export function StatCard({ icon, value, label, className }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef<HTMLDivElement>(null)

  // Get the icon component from the map
  const Icon = iconMap[icon] || Calendar

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    const suffix = value.replace(/\d/g, "")
    const duration = 2000
    const steps = 60
    const stepValue = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= numericValue) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current) + suffix)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className={cn("text-center p-6", className)}>
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{displayValue}</div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  )
}