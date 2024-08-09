import { Text } from '@mantine/core'
import { Forms } from '@/patina/components/Forms.tsx'
import { Criteria } from '@/patina/pages/scholarship/criteria/Criteria.tsx'
import { Application } from '@/patina/pages/scholarship/application/Application.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { Hero } from '@/patina/components/Hero'
// import { DonorSection } from '@/patina/pages/scholarship/donors/Donors.page.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Scholarship.module.css'
import { About } from '@/patina/pages/scholarship/about/About.tsx'

export function ScholarshipPage() {
  const message = (
    <Text className={styles.description}>
      {'The Patina Network Scholarship Fund intends to manifest our '}
      <Text
        component={'a'}
        className={styles.colored}
        href={'/mission'}
        inherit
      >
        {'vision'}
      </Text>
      {
        ' by awarding scholarships annually to students who have ethnicity, heritage, or ancestry relation to the AANHPI communities and would benefit the most from the financial stipend.'
      }
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Scholarship Fund"
        details={message}
        img={imageUrls.scholarshipHero.src}
        alt={imageUrls.scholarshipHero.alt}
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSfE93_PaX8Eynv_6zdMQnYHiljFq7Ci_E0_9hzRs2z3aSE3-g/viewform?fbzx=-2135089361293927732"
        buttonText="Apply for scholarship"
        buttonColor={'var(--mantine-color-patina-green-light)'}
      />
      <About />
      <Criteria />
      <Application />
      <Forms />
      {/*<DonorSection />*/}
    </ContentPage>
  )
}
