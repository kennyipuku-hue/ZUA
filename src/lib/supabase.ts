import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * The single Supabase connection for the whole platform.
 *
 * The customer, driver and admin portals all import from this file, so they
 * all talk to the same backend and database. Only the PUBLISHABLE key is used
 * here. Secret / service-role keys must never appear in frontend code.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

/** true once both values have been added to .env.local */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey)

/** null until .env.local is filled in, so the app can still start without it. */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabasePublishableKey!)
  : null

/** Use this in services: it returns the client or explains what is missing. */
export function getSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Copy .env.example to .env.local, add ' +
        'VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY, then restart "npm run dev".',
    )
  }
  return supabase
}
