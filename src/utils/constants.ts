import type { ServiceType } from '../types'

export const APP_NAME = 'ZUA'
export const APP_SLOGAN = 'Move. Ride. Deliver.'
export const LAUNCH_CITY = 'Kinshasa'

export interface ServiceInfo {
  id: ServiceType
  name: string
  description: string
}

export const SERVICES: ServiceInfo[] = [
  { id: 'ride', name: 'ZUA Ride', description: 'Comfortable car trips across the city.' },
  { id: 'moto', name: 'ZUA Moto', description: 'Fast motorcycle trips that beat the traffic.' },
  { id: 'delivery', name: 'ZUA Delivery', description: 'Parcels and documents delivered door to door.' },
]
