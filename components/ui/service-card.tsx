import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  className?: string
}

export function ServiceCard({ icon: Icon, title, description, features, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-colors",
        className,
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-white/90 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-nadscam-yellow" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
