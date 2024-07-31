import { Container, Stack } from '@mantine/core'
import { Hero } from '@/patina/pages/community/hero/Hero.tsx'
import { MainSection } from '@/patina/pages/community/events/MainSection.tsx'

export function CommunityPage() {
  return (
    <Container size={'75rem'}>
      <Stack>
        <Hero />
        <MainSection />
      </Stack>
    </Container>
  )
}
