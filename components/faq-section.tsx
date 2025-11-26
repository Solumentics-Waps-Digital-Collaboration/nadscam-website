import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { FAQItem } from "@/components/ui/faq-item"

const faqs = [
  {
    question: "What age groups do you work with?",
    answer:
      "We work with children of all ages who have special needs, from early childhood through adolescence. Our programs are tailored to each child's developmental stage and individual requirements.",
  },
  {
    question: "Do you only work with children who have Down syndrome?",
    answer:
      "While Down syndrome is our primary focus, we welcome and support children with various special needs including autism, learning disabilities, and developmental delays.",
  },
  {
    question: "How can schools order your educational flashcards?",
    answer:
      "Schools can contact us directly via WhatsApp at +237 675 070 671 or email us at info@nadscam.org. We offer bulk pricing and can customize flashcards to meet your specific curriculum needs.",
  },
  {
    question: "Do you provide training for parents and teachers?",
    answer:
      "Yes! We offer training workshops and support for both parents and educators who work with children with special needs. Contact us to learn about upcoming sessions.",
  },
  {
    question: "What is your location and how can we visit?",
    answer:
      "We are located in Chateau Ngoa Ekelle, Yaoundé, opposite Ecole Nesto. Please contact us in advance to schedule a visit and tour of our facilities.",
  },
]

export function FAQSection() {
  return (
    <Section id="faq" className="bg-nadscam-light-yellow">
      <SectionTitle title="Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </Section>
  )
}
