import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { IconCard } from "@/components/ui/icon-card"
import { Award, Heart, Users, TrendingUp, MapPin, Shield } from "lucide-react"

const advantages = [
  {
    icon: Award,
    title: "10+ Years of Excellence",
    description:
      "Since 2014, we've been pioneering special needs education in Cameroon with proven results and trusted expertise.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every child is treated with love, dignity, and respect. We see potential where others see challenges.",
  },
  {
    icon: Users,
    title: "Experienced Educators",
    description:
      "Our team of trained special education professionals brings years of expertise and genuine passion to every lesson.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Children who train with us show measurable improvements in reading, math, social skills, and independence.",
  },
  {
    icon: MapPin,
    title: "Nationwide Impact",
    description:
      "Our educational resources are used in schools across all regions of Cameroon, reaching thousands of students.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "We provide a structured, secure space where children can learn, grow, and express themselves freely.",
  },
]

export function WhyUsSection() {
  return (
    <Section id="why-us" className="bg-nadscam-light-purple">
      <SectionTitle title="Why Families & Schools Trust NADSCAM" subtitle="A decade of proven impact and dedication" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((advantage, index) => (
          <IconCard key={index} {...advantage} />
        ))}
      </div>
    </Section>
  )
}
