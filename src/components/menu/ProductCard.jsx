import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid, faPlus, faMinus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import FoodImage from '@/components/ui/FoodImage'
import Modal from '@/components/ui/Modal'
import { formatCurrency } from '@/lib/format'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/hooks/useFavorites'
import { cn } from '@/lib/cn'

/**
 * Product card used in Best Sellers and the Menu Explorer grid.
 * Clicking the image/name opens a details modal (no dedicated product page).
 *
 * @param {object} product menu item ({ id, name, description, price, image, category, badge })
 * @param {boolean} [showBadge] whether to render the Best Seller / New ribbon
 */
export default function ProductCard({ product, className, showBadge = true }) {
  const [added, setAdded] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [modalQty, setModalQty] = useState(1)
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()

  const liked = isFavorite(product.id)

  const handleAdd = () => {
    addItem(product.id, 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const handleModalAdd = () => {
    addItem(product.id, modalQty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
    setModalQty(1)
  }

  const closeModal = () => {
    setDetailsOpen(false)
    setModalQty(1)
  }

  return (
    <>
      <Card
        padding="none"
        hover
        className={cn('group flex h-full flex-col overflow-hidden', className)}
      >
        {/* Image */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            aria-label={`View details for ${product.name}`}
            className="block w-full cursor-pointer"
          >
            <FoodImage
              src={product.image}
              emoji={product.emoji}
              alt={product.name}
              className="aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>

          {showBadge && product.badge && (
            <Badge variant={product.badge} className="absolute left-3 top-3" />
          )}

          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            aria-pressed={liked}
            aria-label={liked ? `Remove ${product.name} from favourites` : `Add ${product.name} to favourites`}
            className="absolute right-3 top-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55"
          >
            <FontAwesomeIcon
              icon={liked ? faHeartSolid : faHeartOutline}
              className={liked ? 'text-accent-400' : ''}
            />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-base font-bold text-ink">
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="cursor-pointer text-left hover:text-brand-600"
            >
              {product.name}
            </button>
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-neutral-500">
            {product.description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <span className="text-lg font-extrabold text-ink">
              {formatCurrency(product.price)}
            </span>
            <div className="relative">
              <AnimatePresence>
                {added && (
                  <motion.span
                    initial={{ opacity: 0, y: 0, scale: 0.8 }}
                    animate={{ opacity: 1, y: -22, scale: 1 }}
                    exit={{ opacity: 0, y: -34 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="pointer-events-none absolute inset-x-0 top-0 text-center text-sm font-bold text-brand-600"
                  >
                    +1
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.button
                type="button"
                onClick={handleAdd}
                aria-label={`Add ${product.name} to cart`}
                animate={added ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={cn(
                  'grid h-10 w-10 cursor-pointer place-items-center rounded-full text-white shadow-sm transition-colors hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
                  added ? 'bg-brand-600' : 'bg-brand-500 hover:bg-brand-600',
                )}
              >
                <FontAwesomeIcon icon={added ? faCheck : faPlus} />
              </motion.button>
            </div>
          </div>
        </div>
      </Card>

      {/* Details modal */}
      <Modal open={detailsOpen} onClose={closeModal}>
        <FoodImage
          src={product.image}
          emoji={product.emoji}
          alt={product.name}
          className="aspect-[16/9] w-full"
        />
        <div className="flex flex-col gap-3 p-6">
          {product.badge && <Badge variant={product.badge} className="w-fit" />}
          <h2 className="text-xl text-ink">{product.name}</h2>
          <p className="text-sm text-neutral-600">{product.description}</p>

          <div className="mt-3 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-8">
            <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-neutral-200 p-1">
              <button
                type="button"
                onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-ink hover:bg-neutral-100"
              >
                <FontAwesomeIcon icon={faMinus} className="text-xs" />
              </button>
              <span className="w-6 text-center text-sm font-semibold">{modalQty}</span>
              <button
                type="button"
                onClick={() => setModalQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-ink hover:bg-neutral-100"
              >
                <FontAwesomeIcon icon={faPlus} className="text-xs" />
              </button>
            </div>

            <div className="relative">
              <AnimatePresence>
                {added && (
                  <motion.span
                    initial={{ opacity: 0, y: 0, scale: 0.8 }}
                    animate={{ opacity: 1, y: -26, scale: 1 }}
                    exit={{ opacity: 0, y: -38 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="pointer-events-none absolute inset-x-0 top-0 text-center text-sm font-bold text-brand-600"
                  >
                    Added to cart!
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.button
                type="button"
                onClick={handleModalAdd}
                animate={added ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={cn(
                  'flex w-full cursor-pointer items-center justify-between gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:scale-[1.02] active:scale-95 min-[480px]:w-64',
                  added ? 'bg-brand-600' : 'bg-brand-500 hover:bg-brand-600',
                )}
              >
                {added ? (
                  <span className="mx-auto flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheck} />
                    Added
                  </span>
                ) : (
                  <>
                    <span>Add to Cart</span>
                    <span>{formatCurrency(product.price * modalQty)}</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
