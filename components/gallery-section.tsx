"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { X } from "lucide-react"

const images = [
  { src: "/nadscam-one-on-one-instruction-slate.jpg", caption: "One-on-one personalized instruction with educational materials" },
  { src: "/nadscam-therapy-wheelchair-personalized-care.jpg", caption: "Specialized therapy and personalized care for every child" },
  { src: "/nadscam-teacher-student-sight-words-lesson.jpg", caption: "Building literacy skills through sight words and phonics" },
  { src: "/nadscam-group-craft-activity-playroom.jpg", caption: "Group learning activities developing creative and social skills" },
  { src: "/nadscam-child-montessori-shape-sorting.jpg", caption: "Montessori education fostering independence and learning" },
  { src: "/nadscam-student-celebrating-achievement.jpg", caption: "Celebrating achievements and building confidence" },
  { src: "/nadscam-best-flashcards-product.jpg", caption: "Our BEST educational flashcards for early learners" },
  { src: "/nadscam-hands-on-craft-learning.jpg", caption: "Hands-on craft work and creative skills development" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <Section id="gallery" className="bg-muted">
      <SectionTitle title="See Our Work in Action" subtitle="Real moments, real impact, real hope" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium">{image.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].src || "/placeholder.svg"}
            alt={images[selectedImage].caption}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center font-medium">
            {images[selectedImage].caption}
          </p>
        </div>
      )}
    </Section>
  )
}