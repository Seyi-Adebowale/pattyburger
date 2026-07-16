import {
  Hero,
  FeaturedFavorites,
  WhyChooseUs,
  SpecialDeal,
  MenuExplorer,
  BulkOrderCTA,
} from '@/components/home'

/**
 * Pattyburger homepage. Composes the section components top-to-bottom.
 * The global Navbar/Footer are provided by RootLayout.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedFavorites />
      <WhyChooseUs />
      <SpecialDeal />
      <MenuExplorer />
      <BulkOrderCTA />
    </>
  )
}
