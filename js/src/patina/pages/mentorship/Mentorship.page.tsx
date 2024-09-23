import { Space, Text } from '@mantine/core'
import { About } from '@/patina/pages/mentorship/about/About.tsx'
// import { Apply } from '@/patina/pages/mentorship/apply/TimelineSection.tsx'
import { Gain } from '@/patina/pages/mentorship/gain/Gain.tsx'
import { Hero } from '@/patina/components/Hero'
// import { Details } from '@/patina/pages/mentorship/details/Details.tsx'
// import { Impact } from '@/patina/pages/mentorship/impact/Impact.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Mentorship.module.css'
import { ProgramDetails } from '@/patina/pages/mentorship/program/ProgramDetails.tsx'

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
        <p />
        {
          'Sophomores or juniors currently enrolled in a US undergraduate program can apply.'
        }
        <br />
        {'Applications are closed for Fall 2024.'}
      </Text>
    </div>
  )
  return (
    <ContentPage>
      <Hero
        title="Patina Network Mentorship"
        details={message}
        img={imageUrls.mentorshipHero.src}
        alt={imageUrls.mentorshipHero.alt}
        buttonLink="https://docs.google.com/forms/d/195CMB4BcxKAyh72im-eWWCj10SFRB2bFcQGMmHYdzPs/viewform"
        buttonText="Join the waitlist to be a mentee"
        buttonColor={'var(--mantine-color-patina-blue-light)'}
      />
      <About />
      <Space h={64} />
      <ProgramDetails />
      <Space h={64} />
      <Gain />
      {/*<Details />*/}
      {/*<Apply />*/}
      {/*<Impact />*/}
    </ContentPage>
  )
}
