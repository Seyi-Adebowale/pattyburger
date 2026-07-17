import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Section, Button } from '@/components/ui'
import { PageHero } from '@/components/layout'
import FoodImage from '@/components/ui/FoodImage'
import { useCart } from '@/hooks/useCart'
import { formatCurrency } from '@/lib/format'
import { PATHS } from '@/routes/paths'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const CART_IMAGE =
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=80'

export default function CartPage() {
  const { lines, count, subtotal, setQuantity, removeItem } = useCart()

  return (
    <>
      <PageHero title="Your Cart" image={CART_IMAGE} />

      <Section spacing="lg" className="!pt-8 lg:!pt-10">
        {lines.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-2xl text-brand-500">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <p className="text-lg font-semibold text-ink">Your cart is empty</p>
            <p className="text-neutral-500">Add something delicious from the menu.</p>
            <Button to={PATHS.menu} variant="primary" size="lg" className="mt-2">
              Browse the Menu
            </Button>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
            {/* Items */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-4"
            >
              {lines.map((line) => (
                <motion.div
                  key={line.productId}
                  variants={fadeInUp}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <FoodImage
                      src={line.product.image}
                      emoji={line.product.emoji}
                      alt={line.product.name}
                      className="h-20 w-20 shrink-0 rounded-xl ring-1 ring-black/5"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-bold text-ink">
                        {line.product.name}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {formatCurrency(line.product.price)} each
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="flex items-center gap-2 rounded-full border border-neutral-200 p-1">
                      <button
                        type="button"
                        onClick={() => setQuantity(line.productId, line.quantity - 1)}
                        aria-label={`Decrease ${line.product.name} quantity`}
                        className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-ink hover:bg-neutral-100"
                      >
                        <FontAwesomeIcon icon={faMinus} className="text-xs" />
                      </button>
                      <span className="w-5 text-center text-sm font-semibold">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(line.productId, line.quantity + 1)}
                        aria-label={`Increase ${line.product.name} quantity`}
                        className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-ink hover:bg-neutral-100"
                      >
                        <FontAwesomeIcon icon={faPlus} className="text-xs" />
                      </button>
                    </div>

                    <span className="w-20 shrink-0 text-right font-bold text-ink">
                      {formatCurrency(line.product.price * line.quantity)}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeItem(line.productId)}
                      aria-label={`Remove ${line.product.name} from cart`}
                      className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full text-neutral-300 transition-colors hover:bg-red-50 hover:text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </motion.div>
              ))}

              <Button to={PATHS.menu} variant="ghost" size="md" className="mt-2 w-fit">
                &larr; Continue Shopping
              </Button>
            </motion.div>

            {/* Order summary */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-5 rounded-3xl bg-white p-7 shadow-lg ring-1 ring-black/5 lg:sticky lg:top-28"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Order Summary
              </h3>

              <div className="flex flex-col gap-2 border-b border-neutral-200 pb-5 text-sm text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>
                    Items ({count})
                  </span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink">Subtotal</span>
                <span className="text-2xl font-extrabold text-ink">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <Button type="button" variant="primary" size="lg" fullWidth className="shadow-md">
                Checkout
              </Button>
            </motion.div>
          </div>
        )}
      </Section>
    </>
  )
}
