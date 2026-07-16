import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

/** Text/date/number/etc input, styled to match Button's focus/border language. */
const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-ink',
        'placeholder:text-neutral-400',
        'transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
        className,
      )}
      {...props}
    />
  )
})

export default Input
