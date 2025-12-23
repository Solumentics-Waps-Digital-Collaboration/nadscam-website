"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { cn } from "@/lib/utils"

// THIS IS THE ARRAY YOU ASKED ABOUT
const christmasImages = [
  {
    src: "/christmas-2024/image_00ac9d.jpg", // The Welcome Sign
    alt: "Welcome to NADSCAM Vocational Training Institute sign with colorful decorations",
    className: "col-span-1 md:col-span-1", 
  },
  {
    src: "/christmas-2024/image_00ff57.jpg", // Joyful laughing in wheelchair
    alt: "Student laughing joyfully during the Christmas celebration",
    className: "row-span-2", // This vertical shot deserves more height
  },
  {
    src: "/christmas-2024/image_010204.jpg", // Students in blue tracksuits
    alt: "Students in matching blue tracksuits watching the performances",
    className: "col-span-2", // Wide shot looks better spanning two columns
  },
  {
    src: "/christmas-2024/image_00acbe.jpg", // Gift giving/Flowers
    alt: "Presentation of gifts and flowers to students",
    className: "",
  },
  {
    src: "/christmas-2024/image_00fefc.jpg", // Woman speaking with mic
    alt: "Opening remarks and speeches at the event",
    className: "",
  },
  {
    src: "/christmas-2024/image_00fedf.jpg", // Cheering group
    alt: "Students cheering and celebrating together",
    className: "",
  },
  {
    src: "/christmas-2024/image_00ff1b.jpg", // Kids praying/performing
    alt: "Students performing a presentation on stage",
    className: "",
  },
  {
    src: "/christmas-2024/image_00fe9c.jpg", // Two women talking
    alt: "Parents and community members sharing a moment",
    className: "col-span-2", // Another good wide shot
  },
   {
    src: "/christmas-2024/image_00febf.jpg", // Audience women in yellow
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