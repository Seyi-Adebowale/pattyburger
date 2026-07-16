import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

/** Access cart state/actions. Must be used within <CartProvider>. */
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
