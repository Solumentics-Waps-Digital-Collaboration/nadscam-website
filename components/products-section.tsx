"use client"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download, Eye } from "lucide-react"
import { useState } from "react"

const flashcardSets = [
  {
    image: "/flashcards-cvc-en-ed.jpg",
    title: "CVC Words: -en & -ed Patterns",
    description: "Learn word families with Ben, den, hen, bed, fed, led and more",
  },
  {
    image: "/flashcards-cvc-ag-an.jpg",
    title: "CVC Words: -ag & -an Patterns",
    description: "Master bag, tag, wag, can, fan, man word patterns",
  },
  {
    image: "/flashcards-cvc-at-ap.jpg",
    title: "CVC Words: -at & -ap Patterns",
    description: "Practice bat, cat, hat, cap, map, tap combinations",
  },
  {
    image: "/flashcards-cvc-ib-ar.jpg",
    title: "CVC Words: -ib & -ar Patterns",
    description: "Build reading skills with bib, fib, rib, bar, car, jar",
  },
  {
    image: "/flashcards-cvc-ab-ad.jpg",
    title: "CVC Words: -ab & -ad Patterns",
    description: "Explore cab, dab, gab, bad, dad, mad word families",
  },
  {
    image: "/flashcards-cvc-eg-et.jpg",
    title: "CVC Words: -eg & -et Patterns",
    description: "Discover beg, leg, peg, jet, net, pet patterns",
  },
  {
    image: "/flashcards-cvc-am-ob.jpg",
    title: "CVC Words: -am & -ob Patterns",
    description: "Learn cam, ham, jam, Bob, cob, job combinations",
  },
  {
    image: "/flashcards-cvc-ut.jpg",
    title: "CVC Words: -ut Pattern",
    description: "Master cut, gut, hut, nut word family",
  },
  {
    image: "/flashcards-cvc-od-un.jpg",
    title: "CVC Words: -od & -un Patterns",
    description: "Practice cod, nod, pod, bun, fun, run words",
  },
  {
    image: "/flashcards-cvc-in-it.jpg",
    title: "CVC Words: -in & -it Patterns",
    description: "Build vocabulary with bin, fin, pin, bit, fit, sit",
  },
]

const otherProducts = [
  {
    image: "/mathematics-numbers-flashcards-counting-addition-s.jpg",
    title: "Mathematics & Numbers Set",
    description: "Engaging math flashcards with counting, addition, and subtraction",
    price: "Custom pricing available",
  },
  {
    image: "/custom-educational-learning-resources-materials-te.jpg",
    title: "Custom Educational Resources",
    description: "Personalized materials for your school or organization",
    price: "Contact for quote",
  },
]

export function ProductsSection() {
  const [showAllFlashcards, setShowAllFlashcards] = useState(false)
  
  const displayedFlashcards = showAllFlashcards ? flashcardSets : flashcardSets.slice(0, 3)

  return (
    <Section id="products" className="bg-background">
      <SectionTitle 
        title="Our Educational Products" 
        subtitle="Quality learning tools designed by special education experts"
      />

      {/* Featured Flashcard Collection */}
      <div className="bg-gradient-to-r from-nadscam-green/10 to-nadscam-light-yellow rounded-2xl p-8 mb-12 border-2 border-nadscam-green/20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-nadscam-green mb-4">
              CVC Flashcard Collection
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our comprehensive CVC (Consonant-Vowel-Consonant) flashcard sets are specially designed 
              for early literacy and special needs education. Each set features vibrant visuals, 
              clear word patterns, and engaging illustrations that make learning to read simple, 
              visual, and fun.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-nadscam-green text-xl">✓</span>
                <p className="text-muted-foreground">222 high-quality flashcards across 10 word family sets</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-nadscam-green text-xl">✓</span>
                <p className="text-muted-foreground">Perfect for schools, therapy centers, and home learning</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-nadscam-green text-xl">✓</span>
                <p className="text-muted-foreground">Proven effective for children with special needs</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-nadscam-green hover:bg-nadscam-green/90"
                asChild
              >
                <a href="https://wa.me/237675070671" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order Full Set
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-nadscam-green text-nadscam-green hover:bg-nadscam-green hover:text-white"
                asChild
              >
                <a href="/222_flasch_carte.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Catalog (PDF)
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/flashcards-cvc-preview.jpg"
              alt="NADSCAM CVC Flashcards Preview"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Flashcard Sets Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6">Browse Our Flashcard Sets</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedFlashcards.map((flashcard, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all group"
            >
              <div className="relative aspect-[4/3] bg-nadscam-light-yellow overflow-hidden">
                <img
                  src={flashcard.image}
                  alt={flashcard.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-5">
                <h4 className="font-semibold mb-2 text-nadscam-green">{flashcard.title}</h4>
                <p className="text-muted-foreground text-sm">{flashcard.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {!showAllFlashcards && flashcardSets.length > 3 && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAllFlashcards(true)}
              className="border-2 border-nadscam-green text-nadscam-green hover:bg-nadscam-green hover:text-white"
            >
              <Eye className="w-5 h-5 mr-2" />
              View All {flashcardSets.length} Sets
            </Button>
          </div>
        )}
      </div>

      {/* Other Products */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Other Educational Resources</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {otherProducts.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                <p className="text-nadscam-green font-medium text-sm mb-4">{product.price}</p>
                <Button 
                  className="w-full bg-nadscam-green hover:bg-nadscam-green/90" 
                  asChild
                >
                  <a href="https://wa.me/237675070671" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center bg-nadscam-light-yellow rounded-2xl p-8 border-2 border-nadscam-green/10">
        <h3 className="text-2xl font-bold mb-3">Need Custom Educational Materials?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We can create personalized flashcards, learning resources, and teaching materials 
          tailored to your school, therapy center, or organization's specific needs.
        </p>
        <Button 
          size="lg" 
          className="bg-nadscam-green hover:bg-nadscam-green/90"
          asChild
        >
          <a href="#contact">Request Custom Materials</a>
        </Button>
      </div>
    </Section>
  )
}