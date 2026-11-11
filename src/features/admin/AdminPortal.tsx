import { PortalPlaceholder } from '../../components/PortalPlaceholder'
import { PortalLayout } from '../../layouts/PortalLayout'
import type { NavItem } from '../../types'

/** Menu of the admin dashboard. Set "available" to true as each page is built. */
const adminNavItems: NavItem[] = [
  { label: 'Overview', to: '/admin', available: true },
  { label: 'Users', to: '/admin/users', available: false },
  { label: 'Drivers', to: '/admin/drivers', available: false },
  { label: 'Orders', to: '/admin/orders', available: false },
]

/** Frame for every page in the admin dashboard. */
export function AdminLayout() {
  return <PortalLayout portalName="Admin" navItems={adminNavItems} />
}

export function AdminDashboard() {
  return (
    <PortalPlaceholder
      title="Admin dashboard"
      intro="Where the ZUA team will manage users, drivers and operations."
      plannedFeatures={[
        'Platform overview and key numbers',
        'Customer management',
        'Driver applications and approval',
        'Trips and deliveries monitoring',
        'Pricing and service settings',
      ]}
    />
  )
}
