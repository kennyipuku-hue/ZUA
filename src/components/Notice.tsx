import type { ReactNode } from 'react'

/** A clearly visible note, used to label anything temporary or unfinished. */
export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-brand-300 bg-brand-50 px-4 py-3 text-sm text-brand-700">
      {children}
    </p>
  )
}
