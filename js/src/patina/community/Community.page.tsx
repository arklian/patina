import { Container, Stack } from '@mantine/core'
import { Hero } from '@/patina/community/hero/Hero.tsx'
import { MainSection } from '@/patina/community/events/MainSection.tsx'

export function CommunityPage() {
  return (
    <Container size={'75rem'}>
      <Stack>
        {'Community Page'}
        <Hero />
        <MainSection />
      </Stack>
    </Container>
  )
}
