import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

interface FooterProps {
  onBookClick?: () => void
}

export default function Footer({ onBookClick }: FooterProps) {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Ruang Cukur .INC"
              className="h-10 w-auto object-contain mb-4"
            />
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
              <button
                onClick={onBookClick}
                className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} />
                +62 811-9451-887
              </button>
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
            <div className="space-y-3">
              <a
                href="https://instagram.com/ruangcukur.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <ExternalLink size={16} />
                IG @ruangcukur.inc
              </a>
              <a
                href="https://instagram.com/ruangcukur.inc_gs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <ExternalLink size={16} />
                IG @ruangcukur.inc_gs
              </a>
              <a
                href="https://tiktok.com/@ruangcukur.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <ExternalLink size={16} />
                TikTok @ruangcukur.inc
              </a>
            </div>
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
