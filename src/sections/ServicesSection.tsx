import { Scissors, User, Sparkles, Droplets } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Haircut',
    description: 'Clean and Tailored Cut',
    price: '90.000',
  },
  {
    icon: User,
    title: 'Kids Haircut',
    description: 'Fun Cut for Little Gents',
    price: '70.000',
  },
  {
    icon: Sparkles,
    title: 'Beard Trim',
    description: 'Shaped to Suit Your Look',
    price: '35.000',
  },
  {
    icon: Droplets,
    title: 'Hair Wash Only',
    description: 'Quick Refresh with Massage',
    price: '50.000',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Services</span>
        </div>

        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
          Hair <span className="text-gold italic">Services</span>
        </h2>

        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={i}
              className="group flex items-center justify-between py-6 border-b border-border hover:border-gold/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 bg-bg-tertiary border border-border group-hover:border-gold/50 flex items-center justify-center transition-colors">
                  <service.icon size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-base sm:text-lg">{service.title}</h3>
                  <p className="text-text-muted text-sm">{service.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gold font-bold text-lg sm:text-xl">Rp {service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
