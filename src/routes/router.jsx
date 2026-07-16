import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import { PATHS } from './paths'
import HomePage from '@/pages/HomePage'
import MenuPage from '@/pages/MenuPage'
import CartPage from '@/pages/CartPage'
import PreOrderPage from '@/pages/PreOrderPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

/**
 * Application router.
 *
 * Pages are added as children of RootLayout as they are built. As the remaining
 * pages land, import them (ideally lazily) and register them here:
 *
 *   { path: PATHS.menu, element: <MenuPage /> }
 *   ...
 */
export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATHS.menu, element: <MenuPage /> },
      { path: PATHS.cart, element: <CartPage /> },
      { path: PATHS.bookings, element: <PreOrderPage /> },
      { path: PATHS.contact, element: <ContactPage /> },
      { path: PATHS.notFound, element: <NotFoundPage /> },
      // Remaining customer-facing routes go here.
    ],
  },
])
