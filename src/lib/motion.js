/**
 * Shared Framer Motion variants and transitions.
 * Centralized so animations feel consistent across the site and can be
 * tuned in one place.
 */

/** Default easing/duration used for most transitions. */
export const transition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1], // easeOutExpo-ish
}

/** Page-level enter/exit transition (used by AnimatedOutlet). */
export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

/** Fade + rise, handy for sections/cards revealing on mount. */
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

/** Simple fade. */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

/** Parent that staggers children (pair with fadeInUp on the children). */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}
