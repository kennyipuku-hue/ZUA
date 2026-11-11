import { Link, Outlet } from 'react-router'
import { Logo } from '../components/Logo'
import { ButtonLink } from '../components/Button'
import { APP_NAME, APP_SLOGAN, LAUNCH_CITY } from '../utils/constants'

/** Frame for the public pages: landing, login and registration. */
export function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-ink-900">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
          <Link to="/" aria-label={`${APP_NAME} home`}>
            <Logo tone="light" />
          </Link>
          <nav className="flex items-center gap-2">
            <Link to="/login" className="px-3 py-2 text-sm font-semibold text-white hover:text-brand-300">
              Log in
            </Link>
            <ButtonLink to="/register" className="hidden sm:inline-flex">
              Sign up
            </ButtonLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-slate-500">
          {APP_NAME} · {APP_SLOGAN} · {LAUNCH_CITY}, DRC
        </div>
      </footer>
    </div>
  )
}
