import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Logo from './Logo'
import { MAIN_NAV } from '@/lib/navigation'
import { PATHS } from '@/routes/paths'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Overlay (transparent, white text) only over pages with a dark PageHero.
  const DARK_HERO_PATHS = [PATHS.home, PATHS.menu, PATHS.bookings, PATHS.cart, PATHS.contact]
  const hasDarkHero = DARK_HERO_PATHS.includes(location.pathname)
  const overlay = hasDarkHero && !scrolled
  const tone = overlay ? 'light' : 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navLinkClass = ({ isActive }) =>
    cn(
      'relative text-sm font-semibold transition-colors',
      isActive
        ? 'text-accent-400'
        : overlay
          ? 'text-white/85 hover:text-white'
          : 'text-ink/80 hover:text-brand-600',
      // active underline
      isActive &&
        'after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent-400',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        overlay
          ? 'bg-transparent'
          : 'border-b border-neutral-200 bg-white/90 shadow-sm backdrop-blur-md',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Logo tone={tone} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {MAIN_NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === PATHS.home} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button to={PATHS.menu} variant="accent" size="sm">
              Order Now
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className={cn(
                'grid h-11 w-11 place-items-center rounded-full transition-colors',
                overlay ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-neutral-100',
              )}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-xl" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-16 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 top-16 z-40 border-b border-neutral-200 bg-white lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <Container className="py-6">
                <ul className="flex flex-col gap-1">
                  {MAIN_NAV.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.to === PATHS.home}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                            isActive
                              ? 'bg-brand-50 text-brand-700'
                              : 'text-ink hover:bg-neutral-100',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <Button to={PATHS.menu} variant="accent" fullWidth className="mt-4">
                  Order Now
                </Button>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
