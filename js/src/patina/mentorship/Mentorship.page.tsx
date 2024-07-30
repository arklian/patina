import { Container, Stack } from '@mantine/core'
import { About } from '@/patina/mentorship/about/About.tsx'
import { Apply } from '@/patina/mentorship/apply/Apply.tsx'
import { Gain } from '@/patina/mentorship/gain/Gain.tsx'
import { Hero } from '@/patina/mentorship/hero/Hero.tsx'
import { Details } from '@/patina/mentorship/details/Details.tsx'
import { Impact } from '@/patina/mentorship/impact/Impact.tsx'
/**
 * MentorshipPage component renders a mentorship page layout with multiple sections.
 * Each section is represented by a Skeleton component, which can be replaced with actual content.
 * */
export function MentorshipPage() {
  return (
    <Container size={'75rem'}>
      <Stack>
        <Hero />
        <About />
        <Gain />
        <Details />
        <Apply />
        <Impact />
      </Stack>
    </Container>
  )
}
