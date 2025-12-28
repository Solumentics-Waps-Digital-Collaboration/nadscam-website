import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award } from "lucide-react"

const achievements = [
  {
    icon: Heart,
    title: "Compassionate Leadership",
    description: "Leading with love and dedication since 2014",
  },
  {
    icon: Users,
    title: "Inclusive Vision",
    description: "Serving children and adults with all forms of disabilities",
  },
  {
    icon: Award,
    title: "Sustainable Impact",
    description: "Building programs that transform lives and strengthen families",
  },
]

export function FounderSection() {
  return (
    <Section id="founder" className="bg-white">
      <SectionTitle 
        title="Meet Our Founder" 
        subtitle="Leadership built on hope, compassion, and unwavering commitment"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/precilia-esah-tabe-nadscam-founder.jpg"
              alt="Precilia Esah Anyangwa Epse Tabe - Founder and President of NADSCAM"
              className="w-full object-cover aspect-[3/4]"
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-nadscam-green/20 rounded-2xl -z-10 hidden md:block" />
          </div>
        </div>

        {/* Founder Bio */}
        <div className="order-1 lg:order-2">
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-nadscam-green mb-2">
              Precilia Esah Anyangwa Epse Tabe
            </h3>
            <p className="text-xl text-muted-foreground font-medium">
              Founder & President, NADSCAM
            </p>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
            <p>
              Precilia Esah Anyangwa Epse Tabe is the Founder and President of the National Association 
              for Down Syndrome Cameroon (NADSCAM), an inclusive organization serving children and adults 
              with all forms of disabilities.
            </p>
            <p>
              Through education, therapy, vocational training, and family support, she leads initiatives 
              that transform lives and strengthen vulnerable families. Precilia works closely with donors 
              and partners to ensure resources are used responsibly to create sustainable, life-changing 
              impact for persons with disabilities in Cameroon.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-nadscam-light-yellow rounded-lg p-4 text-center border-2 border-nadscam-green/10"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-nadscam-green/10 flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-nadscam-green" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-nadscam-green to-nadscam-green/80 rounded-xl p-6 text-white">
            <p className="text-lg font-semibold mb-4">
              "Every child deserves a chance to shine. Together, we can build a more inclusive and hopeful future."
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-white text-nadscam-green hover:bg-white/90"
                asChild
              >
                <a href="#donation">Partner With Us</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-nadscam-green bg-transparent"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}