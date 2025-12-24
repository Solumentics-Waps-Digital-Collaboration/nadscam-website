"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { cn } from "@/lib/utils"

const christmasImages = [
  {
    src: "/christmas-2024/image_00ac9d.jpg",
    alt: "Welcome to NADSCAM Vocational Training Institute sign with colorful decorations",
    className: "col-span-1 md:col-span-1", 
  },
  {
    src: "/christmas-2024/image_00ff57.jpg",
    alt: "Student laughing joyfully during the Christmas celebration",
    className: "row-span-2",
  },
  {
    src: "/christmas-2024/image_010204.jpg",
    alt: "Students in matching blue tracksuits watching the performances",
    className: "col-span-2",
  },
  {
    src: "/christmas-2024/image_00acbe.jpg",
    alt: "Presentation of gifts and flowers to students",
    className: "",
  },
  {
    src: "/christmas-2024/image_00fefc.jpg",
    alt: "Opening remarks and speeches at the event",
    className: "",
  },
  {
    src: "/christmas-2024/image_00fedf.jpg",
    alt: "Students cheering and celebrating together",
    className: "",
  },
  {
    src: "/christmas-2024/image_00ff1b.jpg",
    alt: "Students performing a presentation on stage",
    className: "",
  },
  {
    src: "/christmas-2024/image_00fe9c.jpg",
    alt: "Parents and community members sharing a moment",
    className: "col-span-2",
  },
   {
    src: "/christmas-2024/image_00febf.jpg",
    alt: "Community members enjoying the Christmas festivities",
    className: "",
  },
]

export function ChristmasEventSection() {
  return (
    <Section id="christmas-event" className="bg-nadscam-light-yellow/30">
      <div className="space-y-4 mb-10 text-center">
        <SectionTitle title="Christmas Break 2024" />
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Celebrating love, joy, and inclusion. Here are the beautiful moments 
          from this year's Christmas celebration at NADSCAM.
        </p>
      </div>

      {/* --- NEW HERO VIDEO SECTION --- */}
      <div className="w-full max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl border-4 border-white/50 bg-black">
        <video 
          className="w-full h-auto object-cover aspect-video"
          autoPlay 
          loop 
          muted 
          playsInline // Essential for iOS autoplay
        >
          {/* Ensure this path matches where you put the file in /public */}
          <source src="/christmas-2024/event-highlight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* ----------------------------- */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
        {christmasImages.map((image, index) => (
          <div 
            key={index} 
            className={cn(
              "relative group overflow-hidden rounded-2xl shadow-md border-2 border-white/50",
              image.className
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </Section>
  )
}