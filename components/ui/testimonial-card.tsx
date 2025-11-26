import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  className?: string
}

export function TestimonialCard({ quote, name, role, className }: TestimonialCardProps) {
  return (
    <div className={cn("bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20", className)}>
      <Quote className="w-10 h-10 text-nadscam-yellow mb-4" />
      <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">"{quote}"</p>
      <div>
        <p className="text-white font-semibold">{name}</p>
        <p className="text-white/70 text-sm">{role}</p>
      </div>
    </div>
  )
}
