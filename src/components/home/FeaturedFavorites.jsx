import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ProductCard from '@/components/menu/ProductCard'
import { FEATURED_PRODUCTS } from '@/data/menu'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function FeaturedFavorites() {
  return (
    <Section spacing="md">
      {/* Header */}
      <div className="mb-8 flex flex-col items-center gap-2 text-center sm:mb-12">
        <h2 className="text-2xl sm:text-3xl">Best Sellers</h2>
        <span aria-hidden className="h-1 w-16 rounded-full bg-accent-400" />
      </div>

      {/* Cards: horizontal scroll/carousel until there's room for all 4 in one row (lg+) */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="no-scrollbar -mx-6 flex snap-x gap-4 overflow-x-auto pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible"
      >
        {/* Real flex-item spacers reproduce the page's edge inset (padding on
            a scroll-snap container isn't respected at the edges). They need
            snap-start too, or the browser's initial snap skips past them
            straight to the first card. */}
        <div aria-hidden className="w-2 shrink-0 snap-start lg:hidden" />
        {FEATURED_PRODUCTS.map((product) => (
          <motion.div
            key={product.id}
            variants={fadeInUp}
            className="w-64 shrink-0 snap-start lg:w-auto"
          >
            <ProductCard product={product} showBadge={false} />
          </motion.div>
        ))}
        <div aria-hidden className="w-2 shrink-0 snap-start lg:hidden" />
      </motion.div>
    </Section>
  )
}
