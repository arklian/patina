import { Text } from '@mantine/core'
import { Hero } from '@/patina/components/Hero'
import { imageUrls } from '@/patina/assets/images'
import { MainSection } from '@/patina/pages/community/events/MainSection.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './Community.module.css'

export function CommunityPage() {
  const message = (
    <Text className={styles.description}>
      {"Patina Network's community events include ..."}
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Community Events"
        details={message}
        alt="idk"
        img={imageUrls.communityHero.src}
      />
      <MainSection />
    </ContentPage>
  )
}
