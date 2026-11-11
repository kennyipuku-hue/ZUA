import { Link, NavLink, Outlet } from 'react-router'
import { Logo } from '../components/Logo'
import type { NavItem } from '../types'

interface PortalLayoutProps {
  /** Shown next to the logo, e.g. "Driver". */
  portalName: string
  navItems: NavItem[]
}

/**
 * Shared frame for the customer, driver and admin portals.
 * Phone: top bar + bottom tab bar. Larger screens: top bar + side menu.
 * Each portal passes in its own name and navigation, so the look stays
 * consistent while the content differs.
 */
export function PortalLayout({ portalName, navItems }: PortalLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-10 bg-ink-900">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Logo tone="light" />
            <span className="rounded-full bg-ink-700 px-2.5 py-0.5 text-xs font-semibold text-brand-300">
              {portalName}
            </span>
          </div>
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white">
            Exit
          </Link>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Side menu: tablets and desktops */}
        <nav
          aria-label={`${portalName} side menu`}
          className="hidden w-56 shrink-0 border-r border-slate-200 bg-white p-3 md:block"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <PortalNavEntry item={item} layout="side" />
              </li>
            ))}
          </ul>
        </nav>

        <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-5 pb-24 md:pb-8">
          <Outlet />
        </main>
      </div>

      {/* Bottom tab bar: phones */}
      <nav
        aria-label={`${portalName} tab bar`}
        className="fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.label} className="flex-1">
              <PortalNavEntry item={item} layout="bottom" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

function PortalNavEntry({ item, layout }: { item: NavItem; layout: 'side' | 'bottom' }) {
  const shape =
    layout === 'side'
      ? 'flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium'
      : 'flex min-h-14 flex-col items-center justify-center border-t-2 px-1 text-xs font-medium'

  // Pages that are not built yet are shown greyed out instead of leading nowhere.
  if (!item.available) {
    return (
      <span className={`${shape} cursor-not-allowed border-transparent text-slate-400`} aria-disabled="true">
        {item.label}
        <span className="text-[10px] font-normal uppercase tracking-wide">Soon</span>
      </span>
    )
  }

  const active = layout === 'side' ? 'bg-brand-50 text-ink-900' : 'border-brand-500 text-ink-900'

  return (
    <NavLink
      to={item.to}
      end
      className={({ isActive }) =>
        `${shape} ${isActive ? active : 'border-transparent text-slate-600 hover:text-ink-900'}`
      }
    >
      {item.label}
    </NavLink>
  )
}
