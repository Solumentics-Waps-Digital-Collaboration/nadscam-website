import { Heart, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact Us" },
  { href: "#", label: "Privacy Policy" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-nadscam-purple-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">NADSCAM</span>
            </div>
            <p className="text-white/80 text-sm mb-2">Quality Education for All</p>
            <p className="text-white/60 text-sm mb-6">Empowering children with special needs since 2014</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">Chateau Ngoa Ekelle, Yaoundé, Cameroon</li>
              <li>
                <a href="tel:+237675070671" className="text-white/70 hover:text-white transition-colors">
                  +237 675 070 671
                </a>
              </li>
              <li>
                <a href="mailto:info@nadscam.org" className="text-white/70 hover:text-white transition-colors">
                  info@nadscam.org
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/237675070671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-nadscam-green text-white px-4 py-2 rounded-lg hover:bg-nadscam-green/90 transition-colors text-sm font-medium"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">© {new Date().getFullYear()} NADSCAM. All rights reserved.</p>
          <p className="text-white/60">
            Designed with <Heart className="w-4 h-4 inline text-red-400" /> for inclusive education
          </p>
        </div>
      </div>
    </footer>
  )
}
