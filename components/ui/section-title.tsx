import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  light?: boolean
}

export function SectionTitle({ title, subtitle, className, light }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto text-pretty",
            light ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
