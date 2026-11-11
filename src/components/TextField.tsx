import type { InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

/** A labelled text input with consistent ZUA styling. */
export function TextField({ label, id, ...rest }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        className="block min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-ink-900 placeholder:text-slate-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-300 disabled:bg-slate-100"
        {...rest}
      />
    </div>
  )
}
