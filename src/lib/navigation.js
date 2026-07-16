import { PATHS } from '@/routes/paths'

/** Primary navigation links (navbar + footer). */
export const MAIN_NAV = [
  { label: 'Home', to: PATHS.home },
  { label: 'Menu', to: PATHS.menu },
  { label: 'Pre-Order', to: PATHS.bookings },
  { label: 'Contact', to: PATHS.contact },
]

/** Social profiles (icons resolved in the Footer). */
export const SOCIAL_LINKS = [
  { label: 'WhatsApp', href: 'https://wa.me/234', icon: 'whatsapp' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'TikTok', href: 'https://tiktok.com', icon: 'tiktok' },
]

/** Contact details shown in the footer / contact page. */
export const CONTACT_INFO = {
  phone: '+234 800 000 0000',
  email: 'hello@pattyburger.ng',
  address: 'Ikorodu, Lagos',
}
