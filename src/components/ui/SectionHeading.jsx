import { cn } from '@/lib/cn'

/**
 * Reusable section heading: optional eyebrow, title, and subtitle.
 *
 * @param {string} [eyebrow] small label above the title
 * @param {React.ReactNode} title main heading text
 * @param {React.ReactNode} [subtitle] supporting copy below the title
 * @param {'left'|'center'} [align] text alignment (default 'left')
 * @param {2|3} [as] heading level for the title (default 2)
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as = 2,
  underline = false,
  className,
  ...props
}) {
  const Heading = `h${as}`

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </span>
      )}

      <Heading>{title}</Heading>

      {underline && (
        <span
          aria-hidden
          className={cn('h-1 w-16 rounded-full bg-accent-400', align === 'center' && 'mx-auto')}
        />
      )}

      {subtitle && (
        <p className={cn('max-w-2xl text-lg text-neutral-600', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
