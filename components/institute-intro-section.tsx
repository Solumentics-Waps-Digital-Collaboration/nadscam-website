import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from "lucide-react"

export function InstituteIntroSection() {
  return (
    <Section className="bg-gradient-to-b from-nadscam-light-yellow to-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Logo Side */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="Vocational Training Institute for Special Needs Logo"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="text-center lg:text-left">
          <div className="inline-block mb-4 px-4 py-2 bg-nadscam-green/10 border-2 border-nadscam-green rounded-full">
            <span className="text-nadscam-green font-bold text-sm">
              A NEW CHAPTER IN OUR JOURNEY
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            From Association to Institute
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            <strong>National Association for Down Syndrome Cameroon has given birth to The Institute.</strong> What began 
            as an association advocating for children with special needs has now evolved into a comprehensive training 
            institute dedicated to building a generation of skilled, compassionate professionals.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The <strong>Vocational Training Institute for Special Needs, Inclusion & Mentorship</strong> represents our 
            commitment to not only supporting children, but also empowering the educators, therapists, and specialists 
            who work with them every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-nadscam-green hover:bg-nadscam-green/90 text-white text-lg px-8 py-6"
              asChild
            >
              <a href="#services">
                <GraduationCap className="w-5 h-5 mr-2" />
                Explore Our Programs
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-nadscam-green text-nadscam-green hover:bg-nadscam-green hover:text-white text-lg px-8 py-6"
              asChild
            >
              <a href="#contact">
                Join Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}