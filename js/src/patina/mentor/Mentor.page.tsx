import { Stack, Container, Image } from '@mantine/core'
import { Impact } from '@/patina/mentor/impact/Impact'
import { imageUrls } from '@/patina/assets/images'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  return (
    <Container size={'75rem'}>
      <div>
        <Image src={imageUrls.mentorApplyHero.src} alt={'placeholder'} />
      </div>
      {/* 75rem == 1200px */}
      <Stack>
        <Impact />
      </Stack>
    </Container>
  )
}
