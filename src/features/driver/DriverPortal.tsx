import { PortalPlaceholder } from '../../components/PortalPlaceholder'
import { PortalLayout } from '../../layouts/PortalLayout'
import type { NavItem } from '../../types'

/** Menu of the driver portal. Set "available" to true as each page is built. */
const driverNavItems: NavItem[] = [
  { label: 'Home', to: '/driver', available: true },
  { label: 'Jobs', to: '/driver/jobs', available: false },
  { label: 'Earnings', to: '/driver/earnings', available: false },
  { label: 'Account', to: '/driver/account', available: false },
]

/** Frame for every page in the driver portal. */
export function DriverLayout() {
  return <PortalLayout portalName="Driver" navItems={driverNavItems} />
}

export function DriverDashboard() {
  return (
    <PortalPlaceholder
      title="Driver dashboard"
      intro="Where drivers will go online, accept jobs and track earnings."
      plannedFeatures={[
        'Go online and offline',
        'Receive and accept ride, moto and delivery requests',
        'Manage the current job from pickup to drop-off',
        'Earnings summary and job history',
        'Driver profile, vehicle and documents',
      ]}
    />
  )
}
