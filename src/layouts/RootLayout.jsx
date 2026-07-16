import {
  Navbar,
  Footer,
  ScrollToTop,
  FloatingCartButton,
  AnimatedOutlet,
} from '@/components/layout'

/**
 * Root layout shared by all customer-facing pages.
 * Composes the global chrome: navbar, animated page area, footer, plus
 * scroll-restoration and the floating cart shortcut.
 */
export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatedOutlet />
      </main>
      <Footer />
      <FloatingCartButton />
    </div>
  )
}
