import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { PATHS } from '@/routes/paths'
import { useCart } from '@/hooks/useCart'

/**
 * Always-visible floating cart shortcut — replaces the navbar's cart icon
 * so the cart stays one tap away from anywhere on the page.
 */
export default function FloatingCartButton() {
  const { count } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
    >
      <Link
        to={PATHS.cart}
        aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}
        className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 transition-transform hover:scale-105 hover:bg-brand-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:h-14 sm:w-14"
      >
        <FontAwesomeIcon icon={faCartShopping} className="text-base sm:text-xl" />
        <AnimatePresence>
          {count > 0 && (
            <motion.span
              key={count}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent-400 px-1 text-[10px] font-bold text-ink ring-2 ring-white sm:h-6 sm:min-w-6 sm:text-xs"
            >
              {count}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}
