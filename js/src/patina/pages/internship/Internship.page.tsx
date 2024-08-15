import { Text } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { InternCard } from './InternCard.tsx'
import { internData } from '@/patina/pages/internship/internData.ts'
import styles from './Internship.module.css'
import { FractalBadge } from '@/patina/pages/internship/FractalBadge.tsx'

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
        img={imageUrls.mentorshipHome.src}
        alt={imageUrls.mentorshipHome.alt}
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
        <FractalBadge />
      </section>
      <Text className={styles.internshipTextHeader}>
        {'Check out our interns and their sites:'}
      </Text>
      <div className={styles.internshipCards}>
        <ul className={styles.grid}>
          {internData.map((intern) => (
            <li className={styles.listItem} key={intern.name}>
              <InternCard
                name={intern.name}
                role={intern.role}
                school={intern.school}
                graduation={intern.graduation}
                linkedInURL={intern.linkedInURL}
                webURL={intern.websiteUrl}
                githubURL={intern.githubUrl}
                imageSRC={intern.imageSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </ContentPage>
  )
}
