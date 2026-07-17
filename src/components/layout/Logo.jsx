import { Link } from 'react-router-dom'
import { PATHS } from '@/routes/paths'
import { cn } from '@/lib/cn'
import logoMark from '@/assets/images/pattyburger-mark.png'

/**
 * Pattyburger wordmark: full mascot badge (uncropped) + "Pattyburger" (bold) "Ng" (accent, small).
 *
 * @param {'light'|'dark'} [tone] text color for use on dark vs light backgrounds
 */
export default function Logo({ tone = 'dark', className, onClick }) {
  return (
    <Link
      to={PATHS.home}
      onClick={onClick}
      aria-label="Pattyburger.ng — home"
      className={cn('flex min-w-0 shrink items-center gap-2', className)}
    >
      <img src={logoMark} alt="" className="h-[3.75rem] w-auto shrink-0 object-contain lg:h-[4.5rem]" />
      <span className="font-display text-sm font-extrabold leading-tight tracking-tight min-[280px]:text-lg min-[280px]:leading-none sm:text-xl">
        <span className={tone === 'light' ? 'text-white' : 'text-ink'}>Patty</span>
        <span className="max-[279px]:block">
          <span className={cn('max-[279px]:hidden', tone === 'light' ? 'text-white' : 'text-ink')}>
            burger
          </span>
          <span className={cn('hidden max-[279px]:inline', tone === 'light' ? 'text-white' : 'text-ink')}>
            Burger
          </span>
          <span className="ml-0.5 text-accent-400">Ng</span>
        </span>
      </span>
    </Link>
  )
}
