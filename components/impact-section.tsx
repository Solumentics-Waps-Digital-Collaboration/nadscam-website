'use client'

import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { StatCard } from "@/components/ui/stat-card"

const stats = [
  { icon: "calendar", value: "10+", label: "Years of Service" },
  { icon: "users", value: "500+", label: "Children Trained" },
  { icon: "school", value: "50+", label: "Partner Schools" },
  { icon: "package", value: "1000+", label: "Educational Resources Distributed" },
]

export function ImpactSection() {
  return (
    <Section id="impact" className="bg-background">
      <SectionTitle title="Our Impact in Numbers" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </Section>
  )
}