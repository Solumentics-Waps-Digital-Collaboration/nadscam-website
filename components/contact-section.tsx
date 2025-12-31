import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Chateau Ngoa Ekelle, Yaoundé, Cameroon",
    subtext: "Opposite Ecole Nesto",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+237 675 070 671",
    subtext: "+237 621 695 708",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@nadscam.org",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 8:00 AM - 5:00 PM",
    subtext: "Contact us for weekend appointments",
  },
]

export function ContactSection() {
  return (
    <Section id="contact" className="bg-background">
      <SectionTitle title="Get In Touch" subtitle="We'd love to hear from you" />

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
          <ContactForm />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{info.title}</p>
                  <p className="text-muted-foreground">{info.content}</p>
                  {info.subtext && <p className="text-muted-foreground text-sm">{info.subtext}</p>}
                  {info.isWhatsApp && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 text-nadscam-green border-nadscam-green hover:bg-nadscam-green hover:text-white bg-transparent"
                      asChild
                    >
                      <a href="https://wa.me/237675070671" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-8 rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8504449558944!2d11.516!3d3.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTEnNTcuNiJOIDExwrAzMCc1Ny42IkU!5e0!3m2!1sen!2scm!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NADSCAM Location"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}