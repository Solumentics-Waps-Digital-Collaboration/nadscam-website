import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { Target, Eye } from "lucide-react"

export function MissionSection() {
  return (
    <Section id="mission" className="bg-background">
      <SectionTitle title="Our Mission & Vision" />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide comprehensive, inclusive education and training for children with special needs, empowering them
            to become autonomous, confident, and valued members of society. We create accessible learning resources that
            break down barriers and open doors to opportunities.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-xl bg-nadscam-yellow/20 flex items-center justify-center mb-6">
            <Eye className="w-7 h-7 text-nadscam-yellow" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A Cameroon where every child with special needs has equal access to quality education, where families feel
            supported, and where society recognizes and celebrates the unique abilities of every individual.
          </p>
        </div>
      </div>
    </Section>
  )
}
