import { Gift, Star, Sparkles, Hand, Palette, Droplets } from 'lucide-react'

const otherServices = [
  { icon: Sparkles, name: 'Creambath Head Massage', price: '100.000' },
  { icon: Hand, name: 'Relax Enjoy Massage (45 min)', price: 'Ask' },
  { icon: Droplets, name: 'Hair Downperm / Perming', price: '250-300K' },
  { icon: Sparkles, name: 'Hair Keratin For Men', price: '250-300K' },
  { icon: Palette, name: 'Hair Colours Basic', price: '120.000' },
]

export default function PromoSection() {
  return (
    <section className="py-20 sm:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promo cards */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Special Promo</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {/* Loyalty Card */}
          <div className="bg-bg-primary border border-gold/30 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Gift size={28} className="text-gold mb-4" />
            <h3 className="text-text-primary font-semibold text-lg mb-2">Loyalty Card</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              6 Visits = <span className="text-gold font-semibold">1 FREE Haircut</span> (No Wash)
            </p>
          </div>

          {/* First Visit */}
          <div className="bg-bg-primary border border-gold/30 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <Star size={28} className="text-gold mb-4" />
            <h3 className="text-text-primary font-semibold text-lg mb-2">First Visit Offer</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              <span className="text-gold font-semibold">5% Off</span> — Rate us on Google &quot;RUANG CUKUR.INC&quot;
            </p>
          </div>
        </div>

        {/* Other Services */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Other Services</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {otherServices.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-4 border-b border-border"
            >
              <div className="flex items-center gap-3">
                <s.icon size={16} className="text-gold/70" />
                <span className="text-text-secondary text-sm">{s.name}</span>
              </div>
              <span className="text-text-primary font-semibold text-sm">
                {s.price === 'Ask' ? 'Ask' : `Rp ${s.price}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
