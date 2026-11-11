import { Route, Routes } from 'react-router'
import { AdminDashboard, AdminLayout } from './features/admin/AdminPortal'
import { CustomerDashboard, CustomerLayout } from './features/customer/CustomerPortal'
import { DriverDashboard, DriverLayout } from './features/driver/DriverPortal'
import { PublicLayout } from './layouts/PublicLayout'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RegisterPage } from './pages/RegisterPage'

/**
 * The route map: which web address shows which page.
 * Each portal has its own layout, so its pages are grouped under it.
 * NOTE: the portal routes are not protected yet. Access control by role
 * is added together with authentication in the next stage.
 */
export default function App() {
  return (
    <Routes>
      {/* Public pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Customer portal */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<CustomerDashboard />} />
      </Route>

      {/* Driver portal */}
      <Route path="/driver" element={<DriverLayout />}>
        <Route index element={<DriverDashboard />} />
      </Route>

      {/* Admin dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  )
}
