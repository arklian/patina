import { Text } from '@mantine/core'
import { About } from '@/patina/pages/mentorship/about/About.tsx'
// import { Apply } from '@/patina/pages/mentorship/apply/Apply.tsx'
import { Gain } from '@/patina/pages/mentorship/gain/Gain.tsx'
import { Hero } from '@/patina/components/Hero'
// import { Details } from '@/patina/pages/mentorship/details/Details.tsx'
// import { Impact } from '@/patina/pages/mentorship/impact/Impact.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Mentorship.module.css'

/**
 * MentorshipPage component renders a mentorship page layout with multiple sections.
 * Each section is represented by a Skeleton component, which can be replaced with actual content.
 * */
export function MentorshipPage() {
  const message = (
    <Text className={styles.description}>
      {'The Patina Network mentorship program is open to students currently ' +
        'enrolled in any US college program or recently graduated who are ' +
        'interested in guidance with their workplace readiness.'}
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Patina Network Mentorship"
        details={message}
        img={imageUrls.mentorshipHero.src}
        alt={imageUrls.mentorshipHero.alt}
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSfpYDIYEIDlvC922E7tUXXlBlOhpEt2-DPkCK0nMzcAPmgX-w/viewform"
        buttonText="Apply Here"
      />
      <About />
      <Gain />
      {/*<Details />*/}
      {/*<Apply />*/}
      {/*<Impact />*/}
    </ContentPage>
  )
}
