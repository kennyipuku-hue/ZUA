import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold ' +
  'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-ink-900 hover:bg-brand-600',
  secondary: 'bg-ink-900 text-white hover:bg-ink-800',
  ghost: 'border border-slate-300 bg-white text-ink-900 hover:bg-slate-100',
}

function classes(variant: Variant, fullWidth: boolean, extra: string) {
  return `${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${extra}`
}

interface SharedProps {
  variant?: Variant
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

/** A normal button (submits a form or runs an action). */
export function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, fullWidth, className)} {...rest}>
      {children}
    </button>
  )
}

/** Looks like a button but navigates to another page. */
export function ButtonLink({
  to,
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
}: SharedProps & { to: string }) {
  return (
    <Link to={to} className={classes(variant, fullWidth, className)}>
      {children}
    </Link>
  )
}
