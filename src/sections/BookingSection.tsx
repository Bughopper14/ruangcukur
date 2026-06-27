import { Phone, MapPin, Clock } from 'lucide-react'

interface BookingSectionProps {
  onBookClick?: () => void
}

export default function BookingSection({ onBookClick }: BookingSectionProps) {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-bg-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Booking</span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h2 className="font-[Playfair_Display] text-3xl sm:text-5xl font-semibold text-text-primary mb-6">
          Ready for a <span className="text-gold italic">Fresh Cut?</span>
        </h2>

        <p className="text-text-secondary text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Walk-ins welcome, but booking is recommended for the best experience.
          Reserve your spot now.
        </p>

        <button
          onClick={onBookClick}
          className="inline-flex items-center gap-3 bg-gold text-bg-primary px-10 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 mb-12"
        >
          <Phone size={18} />
          Book Appointment
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-text-muted text-sm">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-gold" />
            Open Daily | 09.00 - 21.00
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            Ruko Madison Grande K9, Gading Serpong
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-gold" />
            +62 811-9451-887
          </span>
        </div>
      </div>
    </section>
  )
}
