"use client"

import { useState } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Samuel has improved significantly in his reading since joining NADSCAM. The personalized attention and loving environment have made all the difference for our family.",
    name: "Parent of Samuel",
    role: "NADSCAM Student Family",
  },
  {
    quote:
      "The flashcards and learning materials from NADSCAM have transformed how we teach inclusive education. Every child in our school benefits from these resources.",
    name: "Marie Nkoulou",
    role: "School Principal, Partner School",
  },
  {
    quote:
      "Finding NADSCAM was a blessing. My daughter now has confidence she never had before. The teachers truly care about every child's success.",
    name: "Parent of Grace",
    role: "NADSCAM Student Family",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-primary via-primary to-nadscam-blue"
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Stories from Our Families" light />

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="text-white hover:bg-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    current === index ? "bg-white" : "bg-white/40",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="text-white hover:bg-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
