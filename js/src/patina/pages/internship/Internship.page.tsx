import { Text } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

export function InternshipPage() {
  const message = (
    <Text>
      {
        'This summer, we partnered with local tech organizations to offer a tech-focused bootcamp-style internship.'
      }
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Internship Summer 2024"
        details={message}
        img={imageUrls.internshipHero.src}
        alt={imageUrls.internshipHero.alt}
      />
    </ContentPage>
  )
}
