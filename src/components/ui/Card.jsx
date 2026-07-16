import { cn } from '@/lib/cn'

/**
 * Reusable surface card.
 *
 * @param {'elevated'|'outline'|'ghost'} [variant] visual style (default 'elevated')
 * @param {boolean} [hover] add lift/shadow on hover (default false)
 * @param {'none'|'sm'|'md'|'lg'} [padding] inner padding (default 'md')
 * @param {React.ElementType} [as] element to render (default 'div')
 */
export default function Card({
  as: Tag = 'div',
  variant = 'elevated',
  hover = false,
  padding = 'md',
  className,
  children,
  ...props
}) {
  const variants = {
    elevated: 'bg-white shadow-sm ring-1 ring-black/5',
    outline: 'bg-white border border-neutral-200',
    ghost: 'bg-neutral-50',
  }

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <Tag
      className={cn(
        'rounded-2xl',
        variants[variant],
        paddings[padding],
        hover &&
          'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
