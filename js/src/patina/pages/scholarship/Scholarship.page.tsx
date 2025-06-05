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
      {
        'The Patina Network Community Scholarship Program aims to empower and support Asian American, Native Hawaiian, and Pacific Islander (AANHPI) women and allies. We hope to help foster education opportunities by providing this small boost of financial assistance to under-resourced New York State students who demonstrate academic potential, community engagement, and financial need. '
      }
      <p />
      <Text fw={700} size={'xl'}>
        {'Applications are open June 9 - July 14! '}
      </Text>
      <Text pl={24} size={'lg'}>
        {'Total Awards: 2'}
      </Text>
      <Text pl={24} size={'lg'}>
        {'Amount: $1,000 per recipient'}
      </Text>
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Patina Network Community Scholarship"
        details={message}
        img={imageUrls.scholarshipHero.src}
        alt={imageUrls.scholarshipHero.alt}
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSebmBkODUg-FePMCvAO-iH7iItH1ruUFN1Whc13TrIkXRlbnQ/viewform"
        buttonText="Application Link"
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
