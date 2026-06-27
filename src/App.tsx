import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import PackagesSection from './sections/PackagesSection'
import PromoSection from './sections/PromoSection'
import BarbersSection from './sections/BarbersSection'
import BookingSection from './sections/BookingSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <PromoSection />
        <BarbersSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
