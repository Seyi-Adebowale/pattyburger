import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { Section, Container, SectionHeading } from '@/components/ui'
import { PageHero } from '@/components/layout'
import ProductCard from '@/components/menu/ProductCard'
import { CATEGORIES, PRODUCTS, getProductsByCategory } from '@/data/menu'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/cn'

/** Spread shot showing multiple items — placeholder stock photo, swap for real Pattyburger photography. */
const MENU_IMAGE =
  'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1800&q=80'

export default function MenuPage() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(CATEGORIES[0].id)
  const sectionRefs = useRef({})
  const tabsScrollerRef = useRef(null)

  const scrollTabsByPage = (direction) => {
    const el = tabsScrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: 'smooth' })
  }

  const normalizedQuery = query.trim().toLowerCase()
  const isSearching = normalizedQuery.length > 0

  const searchResults = useMemo(() => {
    if (!isSearching) return []
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(normalizedQuery) ||
        p.description.toLowerCase().includes(normalizedQuery),
    )
  }, [isSearching, normalizedQuery])

  // Scroll-spy: highlight whichever category section is currently in view.
  useEffect(() => {
    if (isSearching) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.category)
        })
      },
      { rootMargin: '-160px 0px -70% 0px', threshold: 0 },
    )
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [isSearching])

  // Keep the active tab scrolled into view within the (mobile) horizontal tab strip.
  useEffect(() => {
    const scroller = tabsScrollerRef.current
    const tab = scroller?.querySelector(`[data-cat="${active}"]`)
    tab?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' })
  }, [active])

  const scrollToCategory = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageHero title="Our Menu" image={MENU_IMAGE} />

      {/* Sticky search + category nav */}
      <div className="sticky top-16 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md lg:top-20">
        <Container className="flex flex-col gap-4 py-4">
          <div className="relative">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              aria-label="Search the menu"
              className="h-12 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-11 pr-11 text-sm text-ink placeholder:text-neutral-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-ink"
              >
                <FontAwesomeIcon icon={faXmark} className="text-sm" />
              </button>
            )}
          </div>

          {!isSearching && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTabsByPage(-1)}
                aria-label="Scroll categories left"
                className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-white text-ink shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 sm:hidden"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
              </button>

              <div
                ref={tabsScrollerRef}
                className="no-scrollbar flex min-w-0 flex-1 gap-2 overflow-x-auto sm:flex-wrap"
              >
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    data-cat={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={cn(
                      'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                      active === cat.id
                        ? 'border-brand-500 bg-brand-500 text-white'
                        : 'border-neutral-200 bg-white text-ink hover:border-brand-300 hover:text-brand-600',
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollTabsByPage(1)}
                aria-label="Scroll categories right"
                className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-white text-ink shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 sm:hidden"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </button>
            </div>
          )}
        </Container>
      </div>

      {/* Search results */}
      {isSearching ? (
        <Section spacing="md">
          <p className="mb-6 text-sm font-semibold text-neutral-500">
            Results for &ldquo;{query}&rdquo;
          </p>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 py-16 text-center text-neutral-500">
              <p className="text-lg font-semibold text-ink">No matches found</p>
              <p>Try a different search, or clear it to browse by category.</p>
            </div>
          )}
        </Section>
      ) : (
        CATEGORIES.map((cat, i) => {
          const products = getProductsByCategory(cat.id)
          if (products.length === 0) return null
          return (
            <section
              key={cat.id}
              id={cat.id}
              data-category={cat.id}
              ref={(el) => (sectionRefs.current[cat.id] = el)}
              className={cn(
                'scroll-mt-36 lg:scroll-mt-40',
                i % 2 === 1 && 'bg-neutral-50',
                i === 0 && '-mt-8 lg:-mt-10',
              )}
            >
              <Section spacing="sm">
                <SectionHeading title={cat.label} className="mb-6" />
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 sm:gap-6 lg:grid-cols-4"
                >
                  {products.map((product) => (
                    <motion.div key={product.id} variants={fadeInUp}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              </Section>
            </section>
          )
        })
      )}
    </>
  )
}
