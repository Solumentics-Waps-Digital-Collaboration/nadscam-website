import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 px-4 md:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/happy-children-learning-together-inclusive-educati.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-nadscam-blue/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 text-pretty">
          Join us in empowering children with special needs. Whether you're a parent, educator, or supporter, there's a
          place for you in the NADSCAM family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" asChild>
            <a href="#contact">Contact Us Today</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent"
            asChild
          >
            <a href="https://wa.me/237675070671" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Order Resources
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
