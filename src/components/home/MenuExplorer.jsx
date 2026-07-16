import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import CategoryTabs from '@/components/menu/CategoryTabs'
import ProductCard from '@/components/menu/ProductCard'
import { CATEGORIES, getProductsByCategory } from '@/data/menu'

export default function MenuExplorer() {
  const [active, setActive] = useState(CATEGORIES[0].id)
  const products = getProductsByCategory(active)

  return (
    <Section spacing="md">
      <SectionHeading
        align="center"
        underline
        title="Explore Our Menu"
        subtitle="From juicy burgers to creamy shakes and boba — pick a category and dig in."
        className="mb-8"
      />

      <CategoryTabs
        categories={CATEGORIES}
        active={active}
        onChange={setActive}
        className="mb-10"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
