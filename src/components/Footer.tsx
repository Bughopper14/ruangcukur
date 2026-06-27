import { MapPin, Phone, Clock } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.23 0 .45.04.66.1V9.4a6.37 6.37 0 0 0-.66-.04A6.34 6.34 0 0 0 2.5 15.7a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.38a8.18 8.18 0 0 0 4.8 1.54V6.69h-.39z"/>
    </svg>
  )
}

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
              <a
                href="https://maps.google.com/?q=Ruko+Madison+Grande+K9+Gading+Serpong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <MapPin size={16} />
                Ruko Madison Grande K9
              </a>
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
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/ruangcukur.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-text-secondary hover:text-gold hover:border-gold transition-all"
                aria-label="Instagram @ruangcukur.inc"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://instagram.com/ruangcukur.inc_gs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-text-secondary hover:text-gold hover:border-gold transition-all"
                aria-label="Instagram @ruangcukur.inc_gs"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://tiktok.com/@ruangcukur.inc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-text-secondary hover:text-gold hover:border-gold transition-all"
                aria-label="TikTok @ruangcukur.inc"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-text-muted text-xs">@ruangcukur.inc</p>
              <p className="text-text-muted text-xs">@ruangcukur.inc_gs</p>
              <p className="text-text-muted text-xs">@ruangcukur.inc</p>
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
