import { useState, useEffect, useRef, useCallback } from 'react'
import { X, Phone, Calendar, Clock, User, Scissors, ChevronRight, Users } from 'lucide-react'

const IMG_BASE = import.meta.env.BASE_URL

const stylists = [
  { name: 'Rian', role: 'Lead Stylist', img: 'barber-rian.jpg' },
  { name: 'Kholiq', role: 'Senior Stylist', img: 'barber-kholiq.jpg' },
  { name: 'Ende', role: 'Senior Stylist', img: 'barber-ende.jpg' },
  { name: 'Any Stylist', role: 'No Preference', img: null },
]

const services = [
  { id: 'hc-colours', name: 'Haircut & Colours', price: 200000, desc: 'Basic Colours Black' },
  { id: 'hc-creambath', name: 'Haircut & Creambath', price: 180000, desc: 'Haircut + Relax Head Massage' },
  { id: 'hc-massage', name: 'Haircut & Massage', price: 150000, desc: 'Haircut + Massage 25 min' },
  { id: 'hc-shave', name: 'Haircut & Shave', price: 115000, desc: 'Clean Look Style' },
  { id: 'haircut', name: 'Haircut', price: 90000, desc: 'Clean and Tailored Cut' },
  { id: 'kids', name: 'Kids Haircut', price: 70000, desc: 'Fun Cut for Little Gents' },
  { id: 'beard', name: 'Beard Trim', price: 35000, desc: 'Shaped to Suit Your Look' },
  { id: 'wash', name: 'Hair Wash Only', price: 50000, desc: 'Quick Refresh with Massage' },
  { id: 'creambath', name: 'Creambath Head Massage', price: 100000, desc: 'Relaxing head massage' },
  { id: 'massage45', name: 'Relax Enjoy Massage (45 min)', price: 0, desc: 'Incl. Package' },
  { id: 'perm', name: 'Hair Downperm / Perming', price: 275000, desc: 'Rp 250-300K' },
  { id: 'ceratine', name: 'Hair Ceratine For Men', price: 275000, desc: 'Rp 250-300K' },
  { id: 'colours', name: 'Hair Colours Basic', price: 120000, desc: 'Black, Dark Brown, Blue Black' },
]

const timeSlots = Array.from({ length: 25 }, (_, i) => {
  const h = Math.floor(i / 2) + 9
  const m = i % 2 === 0 ? '00' : '30'
  return `${String(h).padStart(2, '0')}:${m}`
})

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [stylist, setStylist] = useState('Any Stylist')
  const [service, setService] = useState(initialService || '')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [personCount, setPersonCount] = useState(1)

  // Refs for enter-to-next-field
  const nameRef = useRef<HTMLInputElement>(null)
  const serviceRef = useRef<HTMLSelectElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const timeRef = useRef<HTMLSelectElement>(null)
  const personRef = useRef<HTMLSelectElement>(null)

  const focusNext = useCallback((nextRef: React.RefObject<HTMLElement | null>) => {
    nextRef.current?.focus()
  }, [])

  useEffect(() => {
    if (initialService) setService(initialService)
  }, [initialService])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset form defaults every time modal opens
      setStylist('Any Stylist')
      setService(initialService || '')
      setDate('')
      setTime('')
      setCustomerName('')
      setPersonCount(1)
      // Auto-focus name field after animation
      setTimeout(() => nameRef.current?.focus(), 150)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen, initialService])

  if (!isOpen) return null

  const selectedStylist = stylists.find((s) => s.name === stylist)
  const selectedService = services.find((s) => s.id === service)
  const price = selectedService ? selectedService.price : 0
  const totalPrice = price * personCount
  const priceText = selectedService
    ? price === 0
      ? 'Incl. Package'
      : `Rp ${totalPrice.toLocaleString('id-ID')}`
    : '-'
  const unitPriceText = selectedService
    ? price === 0
      ? 'Incl. Package'
      : `Rp ${price.toLocaleString('id-ID')}`
    : '-'

  const handleSubmit = () => {
    const s = services.find((x) => x.id === service)
    const personLine = personCount > 1 ? `*Jumlah Orang:* ${personCount} orang%0A` : ''
    const msg =
      `Halo Ruang Cukur! Saya mau booking:%0A%0A` +
      `*Nama:* ${customerName}%0A` +
      `*Tanggal:* ${date}%0A` +
      `*Waktu:* ${time}%0A` +
      `*Stylist:* ${stylist}%0A` +
      `*Paket:* ${s?.name}${s?.desc ? ` (${s.desc})` : ''}%0A` +
      `*Harga/unit:* ${unitPriceText}%0A` +
      personLine +
      `*Total Harga:* ${priceText}%0A%0A` +
      `Terima kasih!`
    window.open(`https://wa.me/628119451887?text=${msg}`, '_blank')
    onClose()
  }

  const today = new Date().toISOString().split('T')[0]

  const isFormValid = customerName.trim() && service && date && time

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-bg-secondary border border-border w-full sm:w-[28rem] sm:max-w-[90vw] max-h-[92vh] sm:max-h-[90vh] overflow-y-auto animate-fade-in rounded-t-xl sm:rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-bg-secondary z-10">
          <h3 className="text-text-primary font-semibold text-lg">
            Book <span className="text-gold italic">Appointment</span>
          </h3>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-5 space-y-5">
          {/* Customer Name */}
          <div>
            <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted mb-2">
              <User size={14} className="text-gold" /> Nama Customer
            </label>
            <input
              ref={nameRef}
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  focusNext(serviceRef)
                }
              }}
              placeholder="Masukkan nama Anda"
              className="w-full bg-bg-primary border border-border text-text-primary p-3.5 text-sm rounded-lg focus:border-gold outline-none transition-colors placeholder:text-text-muted/50"
            />
          </div>

          {/* Stylist — horizontal scroll cards with photo */}
          <div>
            <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted mb-3">
              <Scissors size={14} className="text-gold" /> Pilih Stylist
            </label>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
              {stylists.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setStylist(s.name)}
                  className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200 min-w-[90px] ${
                    stylist === s.name
                      ? 'border-gold bg-gold/10'
                      : 'border-border/60 bg-bg-primary hover:border-gold/40'
                  }`}
                >
                  {s.img ? (
                    <img
                      src={`${IMG_BASE}images/${s.img}`}
                      alt={s.name}
                      className={`w-16 h-16 rounded-full object-cover border-2 transition-all ${
                        stylist === s.name ? 'border-gold' : 'border-border'
                      }`}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                      stylist === s.name
                        ? 'border-gold bg-gold/10'
                        : 'border-border bg-bg-primary'
                    }`}>
                      <User size={24} className="text-text-muted" />
                    </div>
                  )}
                  <div className="text-center">
                    <div className={`text-sm font-semibold ${stylist === s.name ? 'text-gold' : 'text-text-primary'}`}>
                      {s.name}
                    </div>
                    <div className="text-[11px] text-text-muted leading-tight">{s.role}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Stylist Preview (big) */}
          {selectedStylist && selectedStylist.img && (
            <div className="flex items-center gap-4 bg-bg-primary border border-border rounded-lg p-4">
              <img
                src={`${IMG_BASE}images/${selectedStylist.img}`}
                alt={selectedStylist.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-gold flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="text-text-primary font-bold text-lg">{selectedStylist.name}</div>
                <div className="text-gold text-sm font-medium">{selectedStylist.role}</div>
                <div className="text-text-muted text-xs mt-1">
                  Stylist pilihan Anda untuk service ini.
                </div>
              </div>
              <ChevronRight size={18} className="text-text-muted flex-shrink-0 ml-auto" />
            </div>
          )}

          {/* Service */}
          <div>
            <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted mb-2">
              <Scissors size={14} className="text-gold" /> Pilih Service / Paket
            </label>
            <select
              ref={serviceRef}
              value={service}
              onChange={(e) => setService(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  focusNext(dateRef)
                }
              }}
              className="w-full bg-bg-primary border border-border text-text-primary p-3.5 text-sm rounded-lg focus:border-gold outline-none transition-colors appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="">-- Pilih Service --</option>
              <optgroup label="Packages">
                {services
                  .filter((s) => s.id.startsWith('hc-'))
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} — Rp {s.price.toLocaleString('id-ID')}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="Individual Services">
                {services
                  .filter((s) => !s.id.startsWith('hc-'))
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} —{' '}
                      {s.price === 0
                        ? 'Incl. Package'
                        : `Rp ${s.price.toLocaleString('id-ID')}`}
                    </option>
                  ))}
              </optgroup>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted mb-2">
                <Calendar size={14} className="text-gold" /> Tanggal
              </label>
              <input
                ref={dateRef}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    focusNext(timeRef)
                  }
                }}
                min={today}
                className="w-full bg-bg-primary border border-border text-text-primary p-3.5 text-sm rounded-lg focus:border-gold outline-none transition-colors"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted mb-2">
                <Clock size={14} className="text-gold" /> Waktu
              </label>
              <select
                ref={timeRef}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    focusNext(personRef)
                  }
                }}
                className="w-full bg-bg-primary border border-border text-text-primary p-3.5 text-sm rounded-lg focus:border-gold outline-none transition-colors appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                <option value="">-- Pilih --</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Person Count */}
          <div>
            <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted mb-2">
              <Users size={14} className="text-gold" /> Jumlah Orang
            </label>
            <select
              ref={personRef}
              value={personCount}
              onChange={(e) => setPersonCount(Number(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  // If form valid, trigger submit; otherwise just blur
                  if (isFormValid) handleSubmit()
                }
              }}
              className="w-full bg-bg-primary border border-border text-text-primary p-3.5 text-sm rounded-lg focus:border-gold outline-none transition-colors appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} orang
                </option>
              ))}
            </select>
          </div>

          {/* Price Preview */}
          <div className="bg-bg-primary border border-gold/30 rounded-lg p-5">
            <div className="flex items-center justify-between mb-1">
              <div className="text-xs text-text-muted uppercase tracking-wider">
                Perkiraan Harga
              </div>
              {personCount > 1 && selectedService && price > 0 && (
                <div className="text-xs text-text-muted">
                  {unitPriceText} × {personCount}
                </div>
              )}
            </div>
            <div className="text-gold font-bold text-2xl">{priceText}</div>
            {selectedService?.desc && (
              <div className="text-text-muted text-xs mt-1">
                {selectedService.desc}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="w-full flex items-center justify-center gap-2 bg-gold text-bg-primary py-4 text-sm font-semibold tracking-wider uppercase rounded-lg hover:bg-gold-light transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            <Phone size={16} />
            Konfirmasi via WhatsApp
          </button>

          <p className="text-center text-text-muted text-xs pb-2">
            Walk-ins juga welcome. Booking recommended untuk weekend.
          </p>
        </div>
      </div>
    </div>
  )
}
