import { Stack, Container } from '@mantine/core'
import { Hero } from '@/patina/pages/mentor/hero/Hero'
import { Impact } from '@/patina/pages/mentor/impact/Impact'
import { About } from '@/patina/pages/mentor/about/About'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  return (
    <Container size={'75rem'}>
      <Stack>
        <Hero />
        <About />
        <Impact />
      </Stack>
    </Container>
  )
}
