import { useState } from 'react'
import { cn } from '@/lib/cn'

/**
 * Image with a graceful branded fallback. If `src` is missing or fails to
 * load, it renders `emoji` centered on a warm gradient so cards/hero never
 * show a broken-image icon.
 *
 * @param {string} [src] image url
 * @param {string} [emoji] fallback emoji (default 🍽️)
 * @param {string} alt accessible description
 */
export default function FoodImage({
  src,
  emoji = '🍽️',
  alt = '',
  className,
  imgClassName,
  fallbackClassName = 'bg-gradient-to-br from-accent-100 via-accent-200 to-brand-100',
  objectFit = 'cover',
  ...props
}) {
  const [failed, setFailed] = useState(false)
  const showFallback = !src || failed

  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      {showFallback ? (
        <div
          role="img"
          aria-label={alt}
          className={cn(
            'flex h-full w-full items-center justify-center',
            fallbackClassName,
          )}
        >
          <span className="text-[clamp(2rem,10vw,4rem)]" aria-hidden>
            {emoji}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn(
            'h-full w-full',
            objectFit === 'contain' ? 'object-contain' : 'object-cover',
            imgClassName,
          )}
        />
      )}
    </div>
  )
}
