import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const products = [
  {
    image: "/colorful-reading-literacy-flashcard-set-for-childr.jpg",
    title: "BEST Educational Flashcards",
    description: "Flashcards are important because they make learning simple, visual, and engaging. They help children focus, improve memory, build vocabulary, and make lessons fun and interactive—especially for early learners and children with special needs.",
    price: "Order flashcards from us for your children",
  },
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
  return (
    <Section id="products" className="bg-background">
      <SectionTitle title="Our Educational Products" subtitle="Quality learning tools for schools and families" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">{product.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
              <p className="text-primary font-medium text-sm mb-4">{product.price}</p>
              <Button asChild className="w-full">
                <a href="https://wa.me/237675070671" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order Now
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}