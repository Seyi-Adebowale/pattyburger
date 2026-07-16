import { useContext } from 'react'
import { FavoritesContext } from '@/context/FavoritesContext'

/** Access favorites state/actions. Must be used within <FavoritesProvider>. */
export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider')
  return ctx
}
