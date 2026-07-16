import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/cn'

/**
 * Horizontal, scrollable category selector. On small screens the tabs scroll
 * between flanking left/right arrow buttons (arrows sit beside the scroller,
 * never over it, so tabs can't slide underneath them). From `sm` up the tabs
 * wrap to a centered row and the arrows are hidden.
 *
 * @param {Array<{id,label}>} categories
 * @param {string} active active category id
 * @param {(id:string)=>void} onChange
 */
export default function CategoryTabs({ categories, active, onChange, className }) {
  const scrollerRef = useRef(null)

  const scrollByPage = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: 'smooth' })
  }

  const arrowClass =
    'grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full border border-neutral-200 bg-white text-ink shadow-sm transition-colors hover:border-brand-300 hover:text-brand-600 sm:hidden'

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        aria-label="Scroll categories left"
        className={arrowClass}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
      </button>

      <div
        ref={scrollerRef}
        role="tablist"
        aria-label="Menu categories"
        className="no-scrollbar flex min-w-0 flex-1 gap-3 overflow-x-auto sm:flex-wrap sm:justify-center"
      >
        {categories.map((cat) => {
          const isActive = cat.id === active
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(cat.id)}
              className={cn(
                'inline-flex shrink-0 cursor-pointer items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all',
                isActive
                  ? 'border-brand-500 bg-brand-500 text-white shadow-sm'
                  : 'border-neutral-200 bg-white text-ink hover:border-brand-300 hover:text-brand-600',
              )}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => scrollByPage(1)}
        aria-label="Scroll categories right"
        className={arrowClass}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
      </button>
    </div>
  )
}
