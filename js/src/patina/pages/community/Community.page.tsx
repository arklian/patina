import { Text } from '@mantine/core'
import { Hero } from '@/patina/components/Hero'
import { imageUrls } from '@/patina/assets/images'
import { MainSection } from '@/patina/pages/community/events/MainSection.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './Community.module.css'

export function CommunityPage() {
  const message = (
    <Text className={styles.description}>
      {
        'Patina Network’s community consists of the wider Asian American, Native Hawaiian, and Pacific people and their Allies. All the people who want to join to celebrate, empower and educate are welcome to come. Our events are designed to bring people together, foster meaningful connections, and create positive impact. Whether you’re passionate about our cause, looking to get involved, or simply seeking a way to meet people and have fun, we invite you to explore our upcoming events and join us.'
      }
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Community Events"
        details={message}
        img={imageUrls.communityHero.src}
        alt={imageUrls.communityHero.alt}
      />
      <MainSection />
    </ContentPage>
  )
}
