import { createContext, useEffect, useMemo, useState } from 'react'
import { PRODUCTS } from '@/data/menu'
import { STORAGE_KEYS } from '@/lib/constants'

export const FavoritesContext = createContext(null)

function readStoredFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.favorites)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/** Favorited product ids, persisted to localStorage and shared across every ProductCard. */
export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(readStoredFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(ids))
  }, [ids])

  const isFavorite = (productId) => ids.includes(productId)

  const toggleFavorite = (productId) => {
    setIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const products = useMemo(
    () => ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean),
    [ids],
  )

  const value = { ids, products, isFavorite, toggleFavorite }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
