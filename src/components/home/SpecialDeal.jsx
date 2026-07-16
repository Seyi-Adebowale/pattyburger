import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { DEAL } from '@/data/home'
import { fadeInUp } from '@/lib/motion'

const DEAL_IMAGE =
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80'

export default function SpecialDeal() {
  return (
    <Section spacing="sm">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-10 sm:px-10 lg:px-14 lg:py-14"
      >
        {/* Background combo image + green gradient overlay */}
        <div aria-hidden className="absolute inset-0">
          <img
            src={DEAL_IMAGE}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="absolute right-0 top-0 h-full w-3/5 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-800/30" />
        </div>

        {/* Copy */}
        <div className="relative flex max-w-md flex-col items-start gap-3">
          <span className="text-sm font-bold uppercase tracking-widest text-accent-400">
            {DEAL.eyebrow}
          </span>
          <h2 className="text-white">{DEAL.title}</h2>
          <p className="font-display text-4xl font-extrabold text-accent-400 sm:text-5xl">
            {DEAL.highlight}
          </p>
          <Button
            to={DEAL.cta.to}
            variant="accent"
            size="lg"
            fullWidth
            className="mt-3 sm:w-auto"
          >
            {DEAL.cta.label}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-accent-400">
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </span>
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
