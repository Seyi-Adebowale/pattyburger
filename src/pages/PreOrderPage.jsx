import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faTruck, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Section, Card, Input, Textarea, Label, Button } from '@/components/ui'
import { PageHero } from '@/components/layout'
import { BOOKINGS } from '@/data/bookings'
import { SOCIAL_LINKS } from '@/lib/navigation'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/cn'

const BOOKINGS_IMAGE =
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=80'

const HOW_IT_WORKS = [
  'Fill in your order details below',
  'We confirm availability & pricing with you directly',
  'Make payment to confirm your order',
  'Pick it up, or have it delivered, right on time',
]

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  fulfillment: 'pickup',
  date: '',
  time: '',
  order: '',
  occasion: '',
  notes: '',
}

/** Builds the pre-filled WhatsApp message from the form values. */
function buildMessage(form) {
  const lines = [
    'Hi Pattyburger! I’d like to place a bulk pre-order.',
    '',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email && `Email: ${form.email}`,
    `Fulfillment: ${form.fulfillment === 'delivery' ? 'Delivery' : 'Pickup'}`,
    `Date: ${form.date}`,
    form.time && `Preferred time: ${form.time}`,
    '',
    'Order:',
    form.order,
    form.occasion && `Occasion: ${form.occasion}`,
    form.notes && `Notes: ${form.notes}`,
  ].filter(Boolean)

  return lines.join('\n')
}

export default function PreOrderPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const whatsapp = SOCIAL_LINKS.find((social) => social.icon === 'whatsapp')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const setFulfillment = (fulfillment) => setForm((f) => ({ ...f, fulfillment }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = encodeURIComponent(buildMessage(form))
    const base = whatsapp?.href ?? 'https://wa.me/234'
    window.open(`${base}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHero title={BOOKINGS.title} image={BOOKINGS_IMAGE} />

      <Section spacing="lg" className="!pt-8 lg:!pt-10">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="max-w-2xl text-lg text-neutral-600">{BOOKINGS.subtitle}</p>
        </div>

        {/* How it works — dark/accent panel */}
        <div className="mx-auto mb-14 max-w-5xl rounded-3xl bg-hero px-6 py-10 sm:px-10">
          <h2 className="mb-8 text-center text-2xl text-white">How It Works</h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-6 sm:flex-row sm:items-start"
          >
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step} className="contents">
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-1 flex-col items-center gap-3 text-center text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-400 text-sm font-bold text-ink">
                    {i + 1}
                  </span>
                  <p className="text-sm text-white/70">{step}</p>
                </motion.div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div aria-hidden className="hidden items-center pt-3 sm:flex">
                    <FontAwesomeIcon icon={faChevronRight} className="text-accent-400/60" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-2xl"
        >
          {/* Form */}
          <motion.div variants={fadeInUp}>
            <Card padding="lg" className="border border-neutral-200 max-[359px]:p-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                {/* Your details */}
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink">
                    Your Details
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="name" required>
                        Full name
                      </Label>
                      <Input
                        id="name"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" required>
                        Phone number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="080X XXX XXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Fulfillment */}
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink">
                    Pickup or Delivery
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setFulfillment('pickup')}
                      className={cn(
                        'flex min-w-[140px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors',
                        form.fulfillment === 'pickup'
                          ? 'border-brand-500 bg-brand-500 text-white'
                          : 'border-neutral-200 text-ink hover:border-brand-300 hover:text-brand-600',
                      )}
                    >
                      <FontAwesomeIcon icon={faStore} />
                      Pickup
                    </button>
                    <button
                      type="button"
                      onClick={() => setFulfillment('delivery')}
                      className={cn(
                        'flex min-w-[140px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors',
                        form.fulfillment === 'delivery'
                          ? 'border-brand-500 bg-brand-500 text-white'
                          : 'border-neutral-200 text-ink hover:border-brand-300 hover:text-brand-600',
                      )}
                    >
                      <FontAwesomeIcon icon={faTruck} />
                      Delivery
                    </button>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="date" required>
                        {form.fulfillment === 'delivery' ? 'Delivery date' : 'Pickup date'}
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={form.date}
                        onChange={update('date')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred time</Label>
                      <Input id="time" type="time" value={form.time} onChange={update('time')} />
                    </div>
                  </div>
                </div>

                {/* Order */}
                <div>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-ink">
                    Your Order
                  </h3>
                  <div className="flex flex-col gap-5">
                    <div>
                      <Label htmlFor="order" required>
                        What would you like to order?
                      </Label>
                      <Textarea
                        id="order"
                        required
                        rows={4}
                        value={form.order}
                        onChange={update('order')}
                        placeholder="e.g. 15 Classic Beef Burgers, 10 Chicken Wings, 5 Oreo Milkshakes"
                      />
                    </div>

                    <div>
                      <Label htmlFor="occasion">Occasion</Label>
                      <Input
                        id="occasion"
                        value={form.occasion}
                        onChange={update('occasion')}
                        placeholder="Birthday, office lunch, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea
                        id="notes"
                        value={form.notes}
                        onChange={update('notes')}
                        placeholder="Anything else we should know?"
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg">
                  Send Pre-Order Request
                </Button>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </Section>
    </>
  )
}
