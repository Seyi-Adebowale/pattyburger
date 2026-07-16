import { cn } from '@/lib/cn'

/**
 * Form field label.
 *
 * @param {boolean} [required] appends a required-field marker
 */
export default function Label({ required, className, children, ...props }) {
  return (
    <label className={cn('mb-1.5 block text-sm font-semibold text-ink', className)} {...props}>
      {children}
      {required && <span className="ml-0.5 text-brand-600">*</span>}
    </label>
  )
}
