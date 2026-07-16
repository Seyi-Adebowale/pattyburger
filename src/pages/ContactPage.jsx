import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import { Section, Card, Input, Textarea, Label, Button } from '@/components/ui'
import { PageHero } from '@/components/layout'
import { BUSINESS } from '@/data/home'
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/navigation'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/cn'

const CONTACT_IMAGE =
  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=80'

const SOCIAL_ICONS = {
  instagram: faInstagram,
  facebook: faFacebookF,
  tiktok: faTiktok,
}

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' }

/** Builds the pre-filled WhatsApp message from the form values. */
function buildMessage(form) {
  const lines = [
    'Hi Pattyburger! I have a question:',
    '',
    `Name: ${form.name}`,
    form.email && `Email: ${form.email}`,
    form.phone && `Phone: ${form.phone}`,
    '',
    form.message,
  ].filter(Boolean)

  return lines.join('\n')
}

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const whatsapp = SOCIAL_LINKS.find((social) => social.icon === 'whatsapp')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = encodeURIComponent(buildMessage(form))
    const base = whatsapp?.href ?? 'https://wa.me/234'
    window.open(`${base}?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  const socialLinks = SOCIAL_LINKS.filter((social) => social.icon !== 'whatsapp')

  const tiles = [
    {
      icon: faPhone,
      label: 'Call Us',
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
    },
    { social: true, label: 'Follow Us' },
    {
      icon: faEnvelope,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: faLocationDot,
      label: 'Visit Us',
      value: CONTACT_INFO.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`,
      external: true,
    },
    {
      icon: faClock,
      label: 'Opening Hours',
      value: BUSINESS.hours,
    },
  ]

  return (
    <>
      <PageHero title="Get in Touch" image={CONTACT_IMAGE} />

      <Section spacing="lg" className="!pt-8 lg:!pt-10">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="max-w-2xl text-lg text-neutral-600">
            Questions or feedback? Send us a message and we&rsquo;ll get back to you.
          </p>
        </div>

        {/* Contact tiles */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6"
        >
          {tiles.map((tile) => {
            const Tag = tile.href ? motion.a : motion.div
            return tile.social ? (
              <motion.div
                key={tile.label}
                variants={fadeInUp}
                className="flex w-full flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-8 text-center sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="flex h-14 items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-base text-brand-600 transition-colors hover:bg-brand-500 hover:text-white"
                    >
                      <FontAwesomeIcon icon={SOCIAL_ICONS[social.icon]} />
                    </a>
                  ))}
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink">{tile.label}</h3>
                  <p className="mt-1 text-sm text-neutral-500">See our latest on social</p>
                </div>
              </motion.div>
            ) : (
              <Tag
                key={tile.label}
                href={tile.href}
                target={tile.external ? '_blank' : undefined}
                rel={tile.external ? 'noopener noreferrer' : undefined}
                variants={fadeInUp}
                className={cn(
                  'group flex w-full flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-8 text-center transition-all sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]',
                  tile.href && 'hover:-translate-y-1 hover:shadow-xl',
                )}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-600">
                  <FontAwesomeIcon icon={tile.icon} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{tile.label}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{tile.value}</p>
                </div>
              </Tag>
            )
          })}
        </motion.div>

        {/* Message form */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-14 max-w-2xl"
        >
          <h2 className="mb-6 text-center text-2xl">Send Us a Message</h2>
          <Card padding="lg" className="border border-neutral-200 max-[359px]:p-4">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
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
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="080X XXX XXXX"
                />
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="message" required>
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="How can we help?"
                />
              </div>

              <Button type="submit" size="lg" className="sm:col-span-2">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </Section>
    </>
  )
}
