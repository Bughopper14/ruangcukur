import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: '( HOME )', href: '#hero' },
  { label: '( SERVICES )', href: '#services' },
  { label: '( GALLERY )', href: '#gallery' },
  { label: '( BOOKING )', href: '#booking' },
]

const WA_LINK = 'https://wa.me/628119451887?text=Halo%20Ruang%20Cukur!%20Saya%20mau%20booking%20untuk%20...'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Ruang Cukur .INC"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-xs tracking-widest text-text-secondary hover:text-gold transition-colors duration-200 uppercase"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 bg-whatsapp text-white px-4 py-2 text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                <Phone size={14} />
                Book
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-text-primary p-1"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-2xl tracking-widest text-text-secondary hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 bg-whatsapp text-white px-8 py-3 text-sm font-semibold tracking-wider uppercase"
          >
            <Phone size={16} />
            Book via WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
