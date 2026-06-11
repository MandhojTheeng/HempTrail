import { HomeAnimations } from '../components/home/HomeAnimations'
import { HomeCategorySection } from '../components/home/HomeCategorySection'
import { HomeFeatureStrip } from '../components/home/HomeFeatureStrip'
import { HomeHero } from '../components/home/HomeHero'
import { HomeProductShowcase } from '../components/home/HomeProductShowcase'
import { HomeStorySection } from '../components/home/HomeStorySection'
import { HomeWholesaleSection } from '../components/home/HomeWholesaleSection'
import { HomeContactSection } from '../components/home/HomeContactSection'

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#FAF7F0] text-[#222222]">
      <HomeAnimations />
      <HomeHero />
      <HomeFeatureStrip />
      <HomeCategorySection />
      <HomeStorySection />
      <HomeProductShowcase />
      <HomeWholesaleSection />
      <HomeContactSection />
    </main>
  )
}