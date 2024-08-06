import { Text } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './Internship.module.css'

export function InternshipPage() {
  const message = (
    <Text className={styles.details}>
      {
        'This summer, we partnered with local tech organizations to offer a tech-focused bootcamp-style internship.'
      }
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Internship Summer 2024"
        details={message}
        img={imageUrls.internshipHero.src}
        alt={imageUrls.internshipHero.alt}
      />
      <section className={styles.internshipDetails}>
        <Text className={styles.internshipText}>
          {'Blah blah logistics and details of the internship'}
        </Text>
        <Text className={styles.internshipText}>
          {
            'Join our mailing list to get notified about future opportunities like this!'
          }
        </Text>
        <Text className={styles.internshipTextHeader}>
          {' '}
          {'Check out their work:'}{' '}
        </Text>
      </section>
    </ContentPage>
  )
}
