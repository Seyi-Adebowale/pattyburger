import Container from './Container'
import { cn } from '@/lib/cn'

/**
 * Vertical section wrapper providing the site's consistent spacing rhythm.
 * Wraps children in a <Container> by default.
 *
 * @param {boolean} [container] wrap content in a Container (default true)
 * @param {'sm'|'md'|'lg'|'full'} [containerSize] passed through to Container
 * @param {'sm'|'md'|'lg'} [spacing] vertical padding preset (default 'md')
 */
export default function Section({
  as: Tag = 'section',
  container = true,
  containerSize = 'lg',
  spacing = 'md',
  className,
  children,
  ...props
}) {
  const spacings = {
    sm: 'py-12',
    md: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-28 lg:py-36',
  }

  return (
    <Tag className={cn(spacings[spacing], className)} {...props}>
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </Tag>
  )
}
