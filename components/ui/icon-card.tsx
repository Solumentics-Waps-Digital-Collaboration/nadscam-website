import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function IconCard({ icon: Icon, title, description, className }: IconCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow",
        className,
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
