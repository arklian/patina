import { Text } from '@mantine/core'
import { Hero } from '@/patina/components/Hero'
// import { Impact } from '@/patina/pages/mentor/impact/Impact'
import { About } from '@/patina/pages/mentor/about/About'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Mentor.module.css'

/**
 * Mentor page allows people to apply to be mentors.
 * */
export function MentorPage() {
  const message = (
    <Text className={styles.description}>
      {
        'Make a difference in a student’s career by becoming a Patina Network mentor.'
      }
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Be a Patina Network Mentor"
        details={message}
        img={imageUrls.mentorApplyHero.src}
        alt={imageUrls.mentorApplyHero.alt}
        buttonLink="https://docs.google.com/forms/d/1yWPT7gYtpiKbBO6IKgcTygTzuHdAZaSomgu0BnDW23s/viewform"
        buttonText="Apply to be a mentor"
        buttonColor={'var(--mantine-color-patina-blue-light)'}
      />
      <About />
      {/*<Impact />*/}
    </ContentPage>
  )
}
