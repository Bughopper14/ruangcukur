import { Phone, MapPin, Clock } from 'lucide-react'

const WA_LINK = 'https://wa.me/628119451887?text=Halo%20Ruang%20Cukur!%20Saya%20mau%20booking%20untuk%20...'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hexagonal pattern */}
      <div className="absolute inset-0 bg-bg-primary">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23C9A961' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-bg-primary/80 to-bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            UK & Korea Certified Barbers
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <h1 className="font-[Playfair_Display] text-5xl sm:text-7xl md:text-8xl font-bold text-text-primary leading-[0.95] mb-2">
            RUANG
          </h1>
          <h1 className="font-[Playfair_Display] text-5xl sm:text-7xl md:text-8xl font-bold text-gold leading-[0.95] mb-8">
            CUKUR
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <p className="text-text-secondary text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
            Premium grooming experience with certified barbers.
            Clean cuts, sharp shaves, modern style.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-bg-primary px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Book via WhatsApp
          </a>
        </div>

        <div className="animate-fade-in-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-text-muted text-xs tracking-wider" style={{ animationDelay: '1s', opacity: 0 }}>
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-gold" />
            Open Daily 09.00 - 21.00
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-gold" />
            Ruko Madison Grande K9
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-gold/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  )
}
