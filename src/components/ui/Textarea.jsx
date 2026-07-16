import { forwardRef } from 'react'
import { cn } from '@/lib/cn'

const Textarea = forwardRef(function Textarea({ className, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink',
        'placeholder:text-neutral-400',
        'transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20',
        className,
      )}
      {...props}
    />
  )
})

export default Textarea
