import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

const WA_LINK = 'https://wa.me/628119451887?text=Halo%20Ruang%20Cukur!%20Saya%20mau%20booking%20untuk%20...'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-[Playfair_Display] text-xl font-bold text-text-primary">
                RUANG CUKUR
              </span>
              <span className="text-gold text-xs font-semibold tracking-widest">.INC</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              UK & Korea Certified Barbers.<br />
              Premium grooming experience di Gading Serpong.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                +62 811-9451-887
              </a>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin size={16} />
                Ruko Madison Grande K9
              </div>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <Clock size={16} />
                Open Daily 09.00 - 21.00
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">
              Follow Us
            </h4>
            <a
              href="https://instagram.com/ruangcukur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-gold transition-colors text-sm"
            >
              <ExternalLink size={18} />
              @ruangcukur
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-xs tracking-wider">
            &copy; 2025 Ruang Cukur .INC &middot; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
