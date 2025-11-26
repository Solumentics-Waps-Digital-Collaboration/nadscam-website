"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/237675070671"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-nadscam-green text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute w-full h-full rounded-full bg-nadscam-green animate-pulse-ring" />
      <MessageCircle className="w-7 h-7 relative z-10" />
    </a>
  )
}
