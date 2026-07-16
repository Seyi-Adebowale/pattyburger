import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import Spinner from './Spinner'

const VARIANTS = {
  primary:
    'bg-brand-500 text-white shadow-sm hover:bg-brand-600 active:bg-brand-700',
  accent:
    'bg-accent-400 text-ink shadow-sm hover:bg-accent-500 active:bg-accent-600',
  secondary: 'bg-ink text-white shadow-sm hover:bg-ink/90 active:bg-ink/80',
  outline:
    'border border-brand-600 text-brand-700 hover:bg-brand-50 active:bg-brand-100',
  'outline-light':
    'border border-white/30 text-white hover:bg-white/10 active:bg-white/15',
  ghost: 'text-brand-700 hover:bg-brand-50 active:bg-brand-100',
  white: 'bg-white text-ink shadow-sm hover:bg-neutral-100 active:bg-neutral-200',
}

const SIZES = {
  sm: 'min-h-9 px-4 py-1.5 text-sm gap-1.5',
  md: 'min-h-11 px-6 py-2 text-sm gap-2',
  lg: 'min-h-13 px-5 py-2.5 text-sm gap-2 sm:px-8 sm:text-base sm:gap-2.5',
  icon: 'h-11 w-11',
}

/**
 * Polymorphic button.
 * - Renders a react-router <Link> when `to` is provided.
 * - Renders an <a> when `href` is provided.
 * - Otherwise renders a <button>.
 *
 * @param {'primary'|'secondary'|'outline'|'ghost'|'white'} [variant]
 * @param {'sm'|'md'|'lg'|'icon'} [size]
 * @param {boolean} [loading] show spinner and disable interaction
 * @param {boolean} [fullWidth]
 * @param {string} [to]   internal route -> renders Link
 * @param {string} [href] external url  -> renders anchor
 */
const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    to,
    href,
    type,
    className,
    disabled,
    children,
    ...props
  },
  ref,
) {
  const classes = cn(
    'inline-flex select-none items-center justify-center rounded-full font-semibold cursor-pointer',
    'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-brand-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className,
  )

  const content = (
    <>
      {loading && <Spinner size="sm" />}
      {children}
    </>
  )

  // Internal navigation
  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} aria-disabled={disabled} {...props}>
        {content}
      </Link>
    )
  }

  // External link
  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type ?? 'button'}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  )
})

export default Button
