import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { BOOKINGS } from '@/data/bookings'
import { PATHS } from '@/routes/paths'
import { fadeInUp } from '@/lib/motion'

const BULK_IMAGE =
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80'

export default function BulkOrderCTA() {
  return (
    <Section spacing="sm" className="pb-16 sm:pb-20 lg:pb-24">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="relative flex flex-col overflow-hidden rounded-3xl shadow-xl shadow-ink/10 lg:flex-row"
      >
        {/* Info side — dark, matches the Hero's palette */}
        <div className="relative flex flex-col justify-center gap-4 overflow-hidden bg-hero px-8 py-10 text-white sm:px-10 lg:flex-1 lg:py-14">
          <img
            src={BULK_IMAGE}
            alt=""
            aria-hidden
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-hero/85" />
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20 blur-[80px]"
          />
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative grid h-12 w-12 place-items-center rounded-2xl bg-accent-400 text-xl text-ink"
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
          </motion.span>
          <h2 className="relative text-white">Feeding a Crowd?</h2>
          <p className="relative max-w-sm text-white/70">{BOOKINGS.subtitle}</p>
        </div>

        {/* Ticket seam */}
        <div className="relative hidden w-0 bg-hero lg:block">
          <div className="absolute inset-y-0 left-0 border-l-2 border-dashed border-white/25" />
          <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-white" />
          <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-white" />
        </div>

        {/* Action side — accent stub */}
        <div className="relative flex flex-col items-start justify-center gap-4 overflow-hidden bg-accent-400 px-6 py-10 text-ink sm:px-10 sm:py-14 lg:w-96 lg:shrink-0">
          {/* Decorative texture — line pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 2px, transparent 2px, transparent 16px)',
            }}
          />

          <span className="relative text-sm font-bold uppercase tracking-widest text-ink/70">
            {BOOKINGS.eyebrow}
          </span>
          <p className="relative font-display text-2xl font-extrabold leading-tight sm:text-3xl">
            Get your bulk order ready
          </p>
          <Button
            to={PATHS.bookings}
            variant="secondary"
            size="lg"
            fullWidth
            className="relative sm:w-auto"
          >
            Pre-Order Now
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-400 text-ink">
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </span>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
