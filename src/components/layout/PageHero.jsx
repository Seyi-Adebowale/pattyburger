import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

/**
 * Shared compact page hero — dark, rounded-bottom banner with an optional
 * background photo, used at the top of every non-homepage page for a
 * consistent look across the site.
 *
 * @param {React.ReactNode} title
 * @param {string} [image] background photo url
 */
export default function PageHero({ title, image }) {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-hero pb-20 pt-28 text-white lg:rounded-b-[2.5rem] lg:pb-32 lg:pt-40">
      <div aria-hidden className="absolute inset-0">
        {image && (
          <img
            src={image}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-hero/70 via-hero/80 to-hero" />
      </div>

      <Container className="relative flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
      </Container>
    </section>
  )
}
