import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { HERO } from '@/data/home'
import { fadeInUp, staggerContainer } from '@/lib/motion'

/** Detects when the BPSHC drip font is ready, so "Juicy" only gets its
 *  oversized/tracked styling once that font is actually painting —
 *  otherwise the fallback font renders those overrides distorted. */
function useDripFontReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined' || !document.fonts) {
      setReady(true)
      return
    }
    if (document.fonts.check('1em BPSHC')) {
      setReady(true)
      return
    }
    let cancelled = false
    document.fonts
      .load('1em BPSHC')
      .then(() => {
        if (!cancelled) setReady(true)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return ready
}

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80'

const hideOnError = (e) => {
  e.currentTarget.style.display = 'none'
}

const DRIP_FONT = { fontFamily: "'BPSHC', 'Poppins', sans-serif" }

export default function Hero() {
  const dripFontReady = useDripFontReady()

  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-hero text-white lg:rounded-b-[2.5rem]">
      {/* Background */}
      <div aria-hidden className="absolute inset-0">
        {/* soft glow behind the burger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute right-0 top-1/2 hidden h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-accent-500/15 blur-[130px] lg:block"
        />

        {/* Small/medium screens: full-bleed burger + dark scrim for legibility */}
        <motion.img
          src={HERO_IMAGE}
          alt=""
          onError={hideOnError}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover object-center lg:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/85 via-hero/80 to-hero/70 lg:hidden" />

        {/* Large screens: whole burger, feathered so it melts into the hero */}
        <motion.img
          src={HERO_IMAGE}
          alt=""
          onError={hideOnError}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0, y: [0, -14, 0] }}
          transition={{
            opacity: { duration: 1, ease: 'easeOut' },
            x: { duration: 1, ease: 'easeOut' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          }}
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to top, transparent 0%, #000 16%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to top, transparent 0%, #000 16%)',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
          className="absolute inset-y-0 right-0 hidden h-full w-[60%] object-cover object-center lg:block"
        />
      </div>

      <Container className="relative">
        <div className="flex min-h-[85vh] max-w-xl flex-col justify-center py-28 lg:py-40">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-start gap-7"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold tracking-normal text-white/80 backdrop-blur-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FontAwesomeIcon icon={faStar} className="text-accent-400" />
              </motion.span>
              {HERO.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="-mt-4 text-5xl leading-[1.1] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] min-[400px]:text-6xl sm:text-7xl lg:text-8xl"
            >
              {HERO.titleLines.map((line, i) =>
                line.accent ? (
                  <motion.span
                    key={line.text}
                    className="block italic text-accent-400"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                  >
                    {line.text}
                  </motion.span>
                ) : (
                  <motion.span
                    key={line.text}
                    className="flex flex-wrap items-baseline gap-x-3"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                  >
                    <motion.span
                      key={dripFontReady ? 'drip' : 'fallback'}
                      initial={dripFontReady ? { opacity: 0, scale: 0.85 } : false}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      style={dripFontReady ? DRIP_FONT : undefined}
                      className={
                        dripFontReady
                          ? 'text-[1.3em] leading-none tracking-wide text-accent-400 min-[400px]:text-[1.55em]'
                          : ''
                      }
                    >
                      Juicy
                    </motion.span>
                    <span className="whitespace-nowrap">till the</span>
                  </motion.span>
                ),
              )}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-md text-base text-white/70 sm:text-lg"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <Button
                to={HERO.primaryCta.to}
                size="lg"
                fullWidth
                className="whitespace-nowrap sm:w-auto"
              >
                {HERO.primaryCta.label}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-brand-600">
                  <motion.span
                    className="grid place-items-center"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </motion.span>
                </span>
              </Button>
              <Button
                to={HERO.secondaryCta.to}
                size="lg"
                variant="outline-light"
                fullWidth
                className="whitespace-nowrap sm:w-auto"
              >
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
