import { isSupabaseConfigured } from '../lib/supabase'

/** Small development indicator: shows whether .env.local has been filled in. */
export function SupabaseStatus() {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-slate-500">
      <span
        className={`h-2 w-2 rounded-full ${isSupabaseConfigured ? 'bg-emerald-500' : 'bg-red-500'}`}
        aria-hidden="true"
      />
      {isSupabaseConfigured
        ? 'Supabase: credentials loaded'
        : 'Supabase: not configured (add .env.local)'}
    </span>
  )
}
