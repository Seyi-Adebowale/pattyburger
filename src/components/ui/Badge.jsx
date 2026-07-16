import { cn } from '@/lib/cn'

const VARIANTS = {
  bestseller: 'bg-brand-500 text-white',
  neutral: 'bg-white/90 text-ink',
}

const LABELS = {
  bestseller: 'Best Seller',
}

/**
 * Small pill badge used on product images (Best Seller).
 *
 * @param {'bestseller'|'neutral'} [variant]
 * @param {React.ReactNode} [children] overrides the default label
 */
export default function Badge({ variant = 'neutral', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm',
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children ?? LABELS[variant]}
    </span>
  )
}
