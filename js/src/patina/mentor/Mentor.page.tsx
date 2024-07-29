import { Stack, Container } from '@mantine/core'
import { Hero } from '@/patina/mentor/hero/Hero'
import { Impact } from '@/patina/mentor/impact/Impact'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  return (
    <Container size={'75rem'}>
      <Hero />
      {/* 75rem == 1200px */}
      <Stack>
        <Impact />
      </Stack>
    </Container>
  )
}
