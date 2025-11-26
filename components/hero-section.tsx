import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/happy-children-in-educational-classroom-setting-le.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          Empowering Every Child to Shine
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
          NADSCAM provides love, structure, and life-changing support for children with special needs across Cameroon.
          Since 2014, we've been unlocking potential and building brighter futures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-nadscam-green text-nadscam-green hover:bg-nadscam-green hover:text-white text-lg px-8 py-6 bg-transparent"
            asChild
          >
            <a href="https://wa.me/237675070671" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-float"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-10 h-10" />
      </a>
    </section>
  )
}
