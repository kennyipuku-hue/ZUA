import { PortalPlaceholder } from '../../components/PortalPlaceholder'
import { PortalLayout } from '../../layouts/PortalLayout'
import type { NavItem } from '../../types'

/** Menu of the customer portal. Set "available" to true as each page is built. */
const customerNavItems: NavItem[] = [
  { label: 'Home', to: '/customer', available: true },
  { label: 'Trips', to: '/customer/trips', available: false },
  { label: 'Deliveries', to: '/customer/deliveries', available: false },
  { label: 'Account', to: '/customer/account', available: false },
]

/** Frame for every page in the customer portal. */
export function CustomerLayout() {
  return <PortalLayout portalName="Customer" navItems={customerNavItems} />
}

export function CustomerDashboard() {
  return (
    <PortalPlaceholder
      title="Customer dashboard"
      intro="Where customers will book rides and send deliveries."
      plannedFeatures={[
        'Request a ZUA Ride or ZUA Moto trip',
        'Send a parcel or document with ZUA Delivery',
        'Follow a trip or delivery in progress',
        'Trip and delivery history',
        'Profile and account settings',
      ]}
    />
  )
}
