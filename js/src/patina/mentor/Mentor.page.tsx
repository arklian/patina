import { Stack, Container } from '@mantine/core'
import { Impact } from '@/patina/mentor/impact/Impact'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  return (
    <Container size={'75rem'}>
      {/* 75rem == 1200px */}
      <Stack>
        <Impact />
      </Stack>
    </Container>
  )
}
