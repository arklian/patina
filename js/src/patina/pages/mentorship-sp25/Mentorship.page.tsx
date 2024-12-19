import { Space, Text } from '@mantine/core'
import { About } from '@/patina/pages/mentorship-sp25/about/About.tsx'
import { Gain } from '@/patina/pages/mentorship-sp25/gain/Gain.tsx'
import { Hero } from '@/patina/components/Hero'
import { Details } from '@/patina/pages/mentorship-sp25/details/Details.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Mentorship.module.css'
import { ProgramDetails } from '@/patina/pages/mentorship-sp25/program/ProgramDetails.tsx'

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
        {'Students enrolled in an undergraduate program based in NYC are eligible. ' +
          'Preference will be given to sophomores but all are encouraged to apply!'}
        <p />
        {'Applications for Spring 2025 are now open!'}
      </Text>
    </div>
  )
  return (
    <ContentPage>
      <Hero
        title="Patina Mentorship Spring '25"
        details={message}
        img={imageUrls.mentorshipHero.src}
        alt={imageUrls.mentorshipHero.alt}
        buttonLink="https://docs.google.com/forms/d/195CMB4BcxKAyh72im-eWWCj10SFRB2bFcQGMmHYdzPs/viewform"
        buttonText="Apply to be a mentee!"
        buttonColor={'var(--mantine-color-patina-blue-light)'}
      />
      <About />
      <Space h={64} />
      <ProgramDetails />
      <Space h={36} />
      {/* Todo: Make Track Details */}
      <Details />
      <Gain />
    </ContentPage>
  )
}
