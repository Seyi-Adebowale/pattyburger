import Spinner from './Spinner'
import { cn } from '@/lib/cn'

/**
 * Full-area loading state — center it in the viewport or a container.
 * Handy as a Suspense fallback for lazily-loaded routes.
 *
 * @param {boolean} [fullScreen] fill the viewport height (default true)
 */
export default function PageLoader({ fullScreen = true, label = 'Loading', className }) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center',
        fullScreen ? 'min-h-screen' : 'min-h-64 py-16',
        className,
      )}
    >
      <Spinner size="lg" className="text-brand-600" label={label} />
    </div>
  )
}
