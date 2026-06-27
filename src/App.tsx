import Header from './components/Header'
import BookingModal from './components/BookingModal'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import PackagesSection from './sections/PackagesSection'
import PromoSection from './sections/PromoSection'
import BarbersSection from './sections/BarbersSection'
import GallerySection from './sections/GallerySection'
import BookingSection from './sections/BookingSection'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [initialService, setInitialService] = useState<string | undefined>(undefined)

  const openBooking = (serviceId?: string) => {
    setInitialService(serviceId)
    setBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header onBookClick={() => openBooking()} />
      <main>
        <HeroSection onBookClick={() => openBooking()} />
        <AboutSection />
        <ServicesSection />
        <PackagesSection onBookClick={openBooking} />
        <PromoSection />
        <BarbersSection />
        <GallerySection onBookClick={() => openBooking()} />
        <BookingSection onBookClick={() => openBooking()} />
      </main>
      <Footer onBookClick={() => openBooking()} />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={initialService}
      />
    </div>
  )
}

export default App
