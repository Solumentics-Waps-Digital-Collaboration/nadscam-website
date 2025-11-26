import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NADSCAM - National Association for Down Syndrome Cameroon",
  description:
    "NADSCAM provides love, structure, and life-changing support for children with special needs across Cameroon. Quality special needs education and educational resources since 2014.",
  keywords: [
    "Down syndrome",
    "Cameroon",
    "special needs education",
    "inclusive education",
    "NADSCAM",
    "educational resources",
  ],
  authors: [{ name: "NADSCAM" }],
  openGraph: {
    title: "NADSCAM - Empowering Every Child to Shine",
    description: "Quality special needs education and educational resources in Cameroon since 2014.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}