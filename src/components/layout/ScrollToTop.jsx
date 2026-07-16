import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Behavior-only component: scrolls the window to the top whenever the route
 * pathname changes. Render once inside the router (e.g. in RootLayout).
 * Renders nothing.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
