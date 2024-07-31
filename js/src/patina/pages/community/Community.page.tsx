import { Hero } from '@/patina/pages/community/hero/Hero.tsx'
import { MainSection } from '@/patina/pages/community/events/MainSection.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

export function CommunityPage() {
  return (
    <ContentPage>
      <Hero />
      <MainSection />
    </ContentPage>
  )
}
