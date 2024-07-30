import { Stack, Container } from '@mantine/core'
import { Hero } from '@/patina/mentor/hero/Hero'
import { Impact } from '@/patina/mentor/impact/Impact'
import { About } from '@/patina/mentor/about/About'
import { Banner } from '@/patina/mentor/banner/banner.tsx'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  return (
    <Container size={'75rem'}>
      <Stack>
        <Hero />
        <About />
        {/* 75rem == 1200px */}
        <Banner />
        <Impact />
      </Stack>
    </Container>
  )
}
