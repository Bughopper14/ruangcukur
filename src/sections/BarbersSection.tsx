import { Scissors, Palette, User } from 'lucide-react'

const barbers = [
  {
    name: 'Senior Barber',
    role: 'Lead Stylist',
    specialty: 'Classic Cuts, Fades',
    icon: Scissors,
  },
  {
    name: 'Stylist',
    role: 'Color Specialist',
    specialty: 'Korean Style, Coloring',
    icon: Palette,
  },
  {
    name: 'Barber',
    role: 'Junior Stylist',
    specialty: 'Kids Cuts, Beard Trim',
    icon: User,
  },
]

export default function BarbersSection() {
  return (
    <section className="py-20 sm:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Our Team</span>
        </div>

        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-semibold text-text-primary mb-12">
          Meet Our <span className="text-gold italic">Barbers</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {barbers.map((barber, i) => (
            <div
              key={i}
              className="bg-bg-secondary border border-border hover:border-gold/50 transition-all duration-300 group"
            >
              {/* Photo placeholder */}
              <div className="aspect-square bg-bg-tertiary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/80" />
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-bg-primary border-2 border-gold/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:border-gold transition-colors">
                    <barber.icon size={32} className="text-gold/60" />
                  </div>
                  <p className="text-text-muted text-xs tracking-wider uppercase">{barber.name}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-text-primary font-semibold text-lg mb-1">{barber.name}</h3>
                <p className="text-gold text-xs tracking-wider uppercase mb-3">{barber.role}</p>
                <p className="text-text-muted text-sm">{barber.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
