const barbers = [
  {
    name: 'Rian',
    role: 'Lead Stylist',
    specialty: 'Classic Cuts, Fades, Beard Sculpting',
    experience: '5+ Years',
    image: '/ruangcukur/images/barber-rian.jpg',
  },
  {
    name: 'Kholiq',
    role: 'Color Specialist',
    specialty: 'Korean Style, Coloring, Texture',
    experience: '5+ Years',
    image: '/ruangcukur/images/barber-kholiq.jpg',
  },
  {
    name: 'Ende',
    role: 'Junior Stylist',
    specialty: 'Kids Cuts, Creative Styles, Fades',
    experience: '5+ Years',
    image: '/ruangcukur/images/barber-ende.jpg',
  },
]

export default function BarbersSection() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Our Team</span>
        </div>

        <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
          Meet Our <span className="text-gold italic">Barbers</span>
        </h2>
        <p className="text-text-secondary max-w-xl mb-12 leading-relaxed">
          Certified by UK & Korean academies. Every barber brings their own edge to the chair.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {barbers.map((barber, i) => (
            <div
              key={i}
              className="bg-bg-secondary border border-border hover:border-gold/50 transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-bg-primary/80 backdrop-blur-sm border border-gold/30 px-3 py-1">
                  <span className="text-gold text-[10px] tracking-wider uppercase font-semibold">
                    {barber.experience}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-text-primary font-semibold text-xl mb-1">{barber.name}</h3>
                <p className="text-gold text-xs tracking-wider uppercase mb-3">{barber.role}</p>
                <p className="text-text-muted text-sm leading-relaxed">{barber.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
