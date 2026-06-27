import { ArrowRight } from 'lucide-react'

interface PackagesSectionProps {
  onBookClick?: (serviceId: string) => void
}

const packages = [
  {
    id: 'hc-colours',
    title: 'Haircut & Colours',
    description: 'Basic Colours Black',
    price: '200.000',
  },
  {
    id: 'hc-creambath',
    title: 'Haircut & Creambath',
    description: 'Haircut + Relax Head Massage',
    price: '180.000',
  },
  {
    id: 'hc-massage',
    title: 'Haircut & Massage',
    description: 'Haircut + Massage 25 min',
    price: '150.000',
  },
  {
    id: 'hc-shave',
    title: 'Haircut & Shave',
    description: 'Clean Look Style',
    price: '115.000',
    featured: true,
  },
]

export default function PackagesSection({ onBookClick }: PackagesSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Packages</span>
        </div>

        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
          Best <span className="text-gold italic">Value</span> Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-bg-secondary border p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                pkg.featured
                  ? 'border-gold'
                  : 'border-border hover:border-gold/50'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-px left-6 right-6 h-0.5 bg-gold" />
              )}
              <h3 className="text-text-primary font-semibold text-lg sm:text-xl mb-2">{pkg.title}</h3>
              <p className="text-text-muted text-sm mb-6">{pkg.description}</p>
              <div className="flex items-end justify-between">
                <span className="text-gold font-bold text-2xl sm:text-3xl">Rp {pkg.price}</span>
                <button
                  onClick={() => onBookClick?.(pkg.id)}
                  className="flex items-center gap-1 text-text-muted hover:text-gold transition-colors text-xs tracking-wider uppercase"
                >
                  Book <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
