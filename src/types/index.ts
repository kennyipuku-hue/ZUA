/** The three kinds of ZUA user. Each one maps to one portal. */
export type UserRole = 'customer' | 'driver' | 'admin'

/** The three services ZUA offers. */
export type ServiceType = 'ride' | 'moto' | 'delivery'

/** One entry in a portal's navigation menu. */
export interface NavItem {
  label: string
  to: string
  /** false = the page is planned but not built yet, shown greyed out. */
  available: boolean
}
