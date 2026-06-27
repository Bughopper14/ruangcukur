import { Scissors, Award, Sparkles } from 'lucide-react'

const features = [
  { icon: Award, text: '5.0 Google Rating' },
  { icon: Scissors, text: 'UK & Korea Certified' },
  { icon: Sparkles, text: 'Modern Premium Interior' },
]

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-bg-secondary border border-border relative overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/interior-2.jpg`}
                alt="Ruang Cukur Seating Area"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-bg-primary/20 to-transparent" />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
          </div>

          {/* Text side */}
          <div>
            <h2 className="font-[Playfair_Display] text-3xl sm:text-4xl font-semibold text-text-primary mb-6 leading-tight">
              The Art of
              <span className="text-gold italic"> Modern</span> Grooming
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Ruang Cukur .INC brings premium barbershop experience to Gading Serpong.
              Our barbers are certified by leading academies from the UK and Korea,
              ensuring every cut meets international standards.
              Step into our modern space with hexagonal LED ceiling and enjoy
              the ultimate grooming experience.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <f.icon size={16} className="text-gold" />
                  </div>
                  <span className="text-text-primary text-sm font-medium">{f.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 text-xs font-semibold tracking-wider uppercase hover:bg-gold/10 transition-colors"
            >
              See Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
