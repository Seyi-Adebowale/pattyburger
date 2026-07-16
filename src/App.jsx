import { MotionConfig } from 'framer-motion'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/router'
import { CartProvider } from '@/context/CartContext'
import { FavoritesProvider } from '@/context/FavoritesContext'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </CartProvider>
    </MotionConfig>
  )
}
