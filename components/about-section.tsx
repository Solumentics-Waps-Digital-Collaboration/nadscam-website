import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { Calendar, MapPin, Users, BookOpen } from "lucide-react"

const stats = [
  { icon: Calendar, value: "Since 2014", label: "Over 10 years of impact" },
  { icon: MapPin, value: "Based in Yaoundé", label: "Serving all of Cameroon" },
  { icon: Users, value: "Hundreds of children", label: "Trained and empowered" },
  { icon: BookOpen, value: "Nationwide reach", label: "Resources in schools across Cameroon" },
]

export function AboutSection() {
  return (
    <Section id="about" className="bg-nadscam-light-yellow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/group-of-happy-diverse-children-learning-together-.jpg"
            alt="Children learning at NADSCAM"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl hidden md:block" />
        </div>

        <div>
          <SectionTitle title="Who We Are" className="text-left mb-8 md:mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            NADSCAM is a family built from hope, compassion, and the belief that every child deserves a chance to shine.
            We stand beside children with special needs, giving them love, dignity, and the tools to grow.
          </p>
          <div className="bg-white rounded-xl p-8 mb-8 shadow-lg border-2 border-nadscam-green/20">
            <h3 className="text-2xl font-bold text-nadscam-green mb-4">
              AT THE VOCATIONAL TRAINING INSTITUTE FOR SPECIAL NEEDS, INCLUSION & MENTORSHIP
            </h3>
            <p className="text-base text-muted-foreground mb-4 font-semibold">
              We offer professional training in:
            </p>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-nadscam-green mr-2">•</span>
                <span>Speech Therapy</span>
              </li>
              <li className="flex items-start">
                <span className="text-nadscam-green mr-2">•</span>
                <span>Applied Behaviour Analysis (ABA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-nadscam-green mr-2">•</span>
                <span>Jolly Phonics</span>
              </li>
              <li className="flex items-start">
                <span className="text-nadscam-green mr-2">•</span>
                <span>Montessori Education</span>
              </li>
              <li className="flex items-start">
                <span className="text-nadscam-green mr-2">•</span>
                <span>Craft Work & Creative Skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-nadscam-green mr-2">•</span>
                <span>…and many more specialised programs</span>
              </li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              With our team of experienced and passionate teachers, we empower trainees to become confident, 
              skilled and compassionate professionals.
            </p>
            <p className="text-lg font-semibold text-nadscam-green">
              Join our team and help make the world of special needs a truly wonderful place
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}