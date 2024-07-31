import { Hero } from '@/patina/pages/mentor/hero/Hero'
import { Impact } from '@/patina/pages/mentor/impact/Impact'
import { About } from '@/patina/pages/mentor/about/About'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  return (
    <ContentPage>
      <Hero />
      <About />
      <Impact />
    </ContentPage>
  )
}
