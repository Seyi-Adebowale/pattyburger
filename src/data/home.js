/**
 * Static content for the homepage sections. Kept here so copy can be edited
 * without touching component markup.
 *
 * Copy is intentionally spread so each fact lives in ONE place:
 *  - delivery detail -> "Why Choose Us" (Fast Delivery)
 *  - opening hours   -> footer
 *  - product summary -> hero subtitle
 */

/** Hero section. */
export const HERO = {
  eyebrow: 'Best Burgers in Ikorodu & Lagos',
  titleLines: [
    { text: 'Juicy till the', accent: false },
    { text: 'Last Bite.', accent: true },
  ],
  subtitle:
    "Loaded burgers, waffles, milkshakes and boba — everything you're craving, in one place.",
  primaryCta: { label: 'Order Now', to: '/menu' },
  secondaryCta: { label: 'Pre-Order in Bulk', to: '/pre-order' },
}

/** "Why Choose Us" feature highlights. */
export const HIGHLIGHTS = [
  {
    icon: 'leaf',
    title: 'Fresh Ingredients',
    description: 'Prepared with quality ingredients daily.',
  },
  {
    icon: 'bike',
    title: 'Fast Delivery',
    description: 'Same-day delivery across Lagos — hot & fresh, always.',
  },
  {
    icon: 'portion',
    title: 'Big on Flavor',
    description: 'Bold, satisfying bites in every order.',
  },
  {
    icon: 'smile',
    title: 'Loved by Customers',
    description: 'Consistently great taste & service.',
  },
]

/** Special deal banner. */
export const DEAL = {
  eyebrow: 'Special Deal',
  title: 'Burger + Fries + Drink',
  highlight: 'Save 15%',
  cta: { label: 'Order Now', to: '/menu' },
}

/** Opening hours — shown in the footer only. */
export const BUSINESS = {
  hours: 'Open everyday, 10am – 8:30pm',
}
