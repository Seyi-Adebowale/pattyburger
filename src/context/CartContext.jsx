import { createContext, useEffect, useMemo, useState } from 'react'
import { PRODUCTS } from '@/data/menu'
import { STORAGE_KEYS } from '@/lib/constants'

export const CartContext = createContext(null)

function readStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.cart)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/**
 * Cart state, persisted to localStorage. `items` is a list of
 * { productId, quantity }; product details (name/price/image) are looked up
 * from the menu data on read, so the cart itself only stores the minimum.
 */
export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items))
  }, [items])

  const addItem = (productId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId)
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...prev, { productId, quantity }]
    })
  }

  const removeItem = (productId) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  const setQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeItem(productId)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => setItems([])

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = PRODUCTS.find((p) => p.id === item.productId)
          return product ? { ...item, product } : null
        })
        .filter(Boolean),
    [items],
  )

  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    [lines],
  )

  const value = { lines, count, subtotal, addItem, removeItem, setQuantity, clearCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
