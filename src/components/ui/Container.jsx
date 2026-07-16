import { cn } from '@/lib/cn'

/**
 * Responsive, centered content wrapper with consistent horizontal padding.
 * Use it to constrain page/section content to the site's max width.
 *
 * @param {'sm'|'md'|'lg'|'full'} [size] max-width preset (default 'lg')
 * @param {React.ElementType} [as] element/component to render (default 'div')
 */
export default function Container({
  as: Tag = 'div',
  size = 'lg',
  className,
  children,
  ...props
}) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-page',
    full: 'max-w-none',
  }

  return (
    <Tag
      className={cn('mx-auto w-full px-6 sm:px-8 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
