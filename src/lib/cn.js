/**
 * Tiny classNames helper — joins truthy class values into a single string.
 * Keeps component markup readable when composing conditional Tailwind classes.
 *
 *   cn('px-4', isActive && 'bg-brand-500', disabled && 'opacity-50')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
