import { Button, Center, Space, Text, useMantineTheme } from '@mantine/core'
import { Hero } from '@/patina/components/Hero'
import { About } from '@/patina/pages/past-programs/mentor-sp25/about/About'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Mentor.module.css'
import { ProgramDetails } from '@/patina/pages/past-programs/mentor-sp25/program/ProgramDetails.tsx'
import { Tracks } from '@/patina/pages/past-programs/mentor-sp25/tracks/Tracks.tsx'

const mentorGoogleFormUrl = 'https://forms.gle/cCGBxbDVGoWb9nyn7'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  const message = (
    <Text className={styles.description}>
      {
        'Share your expertise and make a meaningful impact by mentoring! Join us to help cultivate diverse talent, foster cultural awareness, and shape a more inclusive future in your industry.'
      }
      <p />
      {'Applications for Spring 2025 are now open!'}
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Be a Patina Network Mentor"
        details={message}
        img={imageUrls.mentorApplyHero.src}
        alt={imageUrls.mentorApplyHero.alt}
        buttonLink={mentorGoogleFormUrl}
        buttonText="Apply to be a mentor today!"
        buttonColor={'var(--mantine-color-patina-blue-light)'}
      />
      <About />
      <Space h={64} />
      <ProgramDetails />
      <Space h={64} />
      <Tracks />
      <Space h={64} />
      <ApplyButton />
      <Space h={64} />
    </ContentPage>
  )
}

function ApplyButton() {
  const theme = useMantineTheme()

  return (
    <Center>
      <Button
        component="a"
        variant="filled"
        color={theme.other.patinaBlueLight}
        autoContrast
        target="_blank"
        href={mentorGoogleFormUrl}
      >
        <Text c={'black'} size="20">
          {'Apply to be a mentor here!'}
        </Text>
      </Button>
    </Center>
  )
}
