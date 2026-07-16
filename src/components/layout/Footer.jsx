import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Logo from './Logo'
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/navigation'
import { BRAND } from '@/lib/constants'
import { BUSINESS } from '@/data/home'

const SOCIAL_ICONS = {
  instagram: faInstagram,
  facebook: faFacebookF,
  tiktok: faTiktok,
  whatsapp: faWhatsapp,
}

const CONTACT_ITEMS = [
  { icon: faPhone, value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: faEnvelope, value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: faLocationDot, value: CONTACT_INFO.address },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsapp = SOCIAL_LINKS.find((social) => social.icon === 'whatsapp')

  return (
    <footer className="mt-auto bg-hero text-white/70">
      <Container className="pb-6 pt-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + socials */}
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="max-w-xs text-sm leading-relaxed">
              Best Burgers in Ikorodu & Lagos
            </p>
            <ul className="flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.icon}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/15 transition-colors hover:bg-accent-400 hover:text-ink"
                  >
                    <FontAwesomeIcon icon={SOCIAL_ICONS[social.icon]} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & support */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Hours & Support
            </h3>
            <p className="mt-4 flex items-start gap-3 text-sm">
              <FontAwesomeIcon icon={faClock} className="mt-1 text-accent-400" fixedWidth />
              {BUSINESS.hours}
            </p>
            {whatsapp && (
              <Button href={whatsapp.href} target="_blank" rel="noopener noreferrer" className="mt-5">
                Chat with Us
              </Button>
            )}
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.value} className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="mt-1 text-accent-400"
                    fixedWidth
                  />
                  {item.href ? (
                    <a href={item.href} className="hover:text-white">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p>
            A{' '}
            <a
              href="https://technovada.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-accent-400"
            >
              Technovada
            </a>{' '}
            Creation
          </p>
        </div>
      </Container>
    </footer>
  )
}
