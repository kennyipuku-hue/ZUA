import { APP_NAME } from '../utils/constants'

interface LogoProps {
  /** "light" = for dark backgrounds, "dark" = for light backgrounds. */
  tone?: 'light' | 'dark'
  className?: string
}

/** The ZUA wordmark, used in every portal so the brand stays consistent. */
export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const textColor = tone === 'light' ? 'text-white' : 'text-ink-900'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-lg font-black text-ink-900">
        Z
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${textColor}`}>{APP_NAME}</span>
    </span>
  )
}
