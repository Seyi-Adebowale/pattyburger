import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLeaf,
  faBicycle,
  faBowlFood,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons'
import Section from '@/components/ui/Section'
import { HIGHLIGHTS } from '@/data/home'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const ICONS = {
  leaf: faLeaf,
  bike: faBicycle,
  portion: faBowlFood,
  smile: faFaceSmile,
}

export default function WhyChooseUs() {
  return (
    <Section spacing="sm" className="pt-0">
      {/* Heading — shown on mobile only, to match the desktop strip */}
      <h2 className="mb-6 text-2xl lg:hidden">Why Pattyburger?</h2>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:rounded-2xl lg:border lg:border-neutral-200 lg:bg-white lg:p-8"
      >
        {HIGHLIGHTS.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm lg:border-0 lg:p-0 lg:shadow-none"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-50 text-lg text-accent-500">
              <FontAwesomeIcon icon={ICONS[item.icon]} />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="break-words text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-1 break-words text-sm text-neutral-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
