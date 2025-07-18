import { Space, Text } from '@mantine/core'
import { About } from '@/patina/pages/mentorship-fa25/about/About.tsx'
import { Gain } from '@/patina/pages/mentorship-fa25/gain/Gain.tsx'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Mentorship.module.css'
import { ProgramDetails } from '@/patina/pages/mentorship-fa25/program/ProgramDetails.tsx'
import { Tracks } from '@/patina/pages/mentorship-fa25/tracks/Tracks.tsx'

/**
 * MentorshipPage component renders a mentorship page layout with multiple sections.
 * Each section is represented by a Skeleton component, which can be replaced with actual content.
 * */
export function MentorshipPage() {
  const message = (
    <div>
      <Text className={styles.description}>
        {
          'The Patina Network mentorship program will pair you with an experienced mentor in your field and foster a safe environment to explore how culture, career, and life intersect.'
        }
      </Text>
      <Text className={styles.description}>
        {'Students enrolled in an undergraduate program based in NYC are eligible. ' +
          'Freshmen and sophomores may get the most value from the programming but all are encouraged to apply!'}
      </Text>
      <Text className={styles.description}>
        {'Applications will open soon for Fall 2025!'}
      </Text>
    </div>
  )
  return (
    <ContentPage>
      <Hero
        title="Patina Mentorship Fall '25"
        details={message}
        img={imageUrls.mentorshipHero.src}
        alt={imageUrls.mentorshipHero.alt}
        buttonLink=""
        buttonText="Opening Soon!"
        buttonColor={'var(--mantine-color-patina-blue-light)'}
      />
      <About />
      <Space h={64} />
      <ProgramDetails />
      <Space h={36} />
      <Tracks />
      <Space h={64} />
      <Gain />
    </ContentPage>
  )
}
