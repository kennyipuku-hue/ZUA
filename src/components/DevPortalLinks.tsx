import { Link } from 'react-router'

const portals = [
  { to: '/customer', label: 'Customer portal' },
  { to: '/driver', label: 'Driver portal' },
  { to: '/admin', label: 'Admin dashboard' },
]

/**
 * TEMPORARY development shortcut so the three portals can be opened before
 * login exists. Only rendered while running "npm run dev"; it is never
 * included in a production build. Remove once authentication is in place.
 */
export function DevPortalLinks() {
  if (!import.meta.env.DEV) return null

  return (
    <div className="rounded-xl border border-dashed border-slate-300 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Development preview only
      </p>
      <ul className="mt-2 space-y-1 text-sm">
        {portals.map((portal) => (
          <li key={portal.to}>
            <Link to={portal.to} className="font-medium text-ink-900 underline">
              {portal.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
