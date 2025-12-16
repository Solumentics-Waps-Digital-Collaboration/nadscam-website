import { SectionTitle } from "@/components/ui/section-title"
import { ServiceCard } from "@/components/ui/service-card"
import { GraduationCap, BookOpen, Heart, Users } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Vocational Training Institute for Special Needs",
    description:
      "At our Vocational Training Institute for Special Needs, Inclusion & Mentorship, we offer professional training in Speech Therapy, Applied Behaviour Analysis (ABA), Jolly Phonics, Montessori Education, Craft Work & Creative Skills, and many more specialised programs.",
    features: [
      "Speech Therapy training",
      "Applied Behaviour Analysis (ABA)",
      "Jolly Phonics and Montessori methods",
      "Experienced and passionate teachers",
    ],
  },
  {
    icon: Users,
    title: "Special Needs Education & Training",
    description:
      "We provide personalized education programs designed specifically for children with Down syndrome and other special needs. Our structured approach focuses on developing life skills, academic abilities, and social competencies.",
    features: [
      "Individualized learning plans",
      "Qualified special education teachers",
      "Safe and supportive environment",
      "Focus on life skills and autonomy",
    ],
  },
  {
    icon: BookOpen,
    title: "Educational Flashcards & Learning Tools",
    description:
      "Flashcards are important because they make learning simple, visual, and engaging. They help children focus, improve memory, build vocabulary, and make lessons fun and interactive—especially for early learners and children with special needs.",
    features: [
      "Simple, visual, and engaging",
      "Improves memory and vocabulary",
      "Perfect for early learners",
      "Available for bulk orders",
    ],
  },
  {
    icon: Heart,
    title: "Inclusive Educational Resources",
    description:
      "We develop and distribute comprehensive educational materials designed for inclusive learning environments. Our resources ensure that every child, regardless of ability, can participate fully in education.",
    features: [
      "Curriculum-aligned materials",
      "Teacher training support available",
      "Accessible and inclusive design",
      "Distribution nationwide",
    ],
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-primary via-primary to-nadscam-blue"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="What We Do" subtitle="Comprehensive support for children, families, and schools" light />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}