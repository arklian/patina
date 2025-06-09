import { BackgroundImage, Title } from '@mantine/core'
import { Initiatives } from './initiatives/Initiatives'
import { About } from './about/About.tsx'
import { GetInvolved } from '@/patina/pages/home/involved/GetInvolved.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Home.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

export function HomePage() {
  return (
    <ContentPage>
      <div>
        <BackgroundImage
          className={styles.homeSplash}
          src={imageUrls.homeHero.src}
        >
          <div className={styles.hero}>
            <Title className={styles.heroTitle}>
              {'Empowering AANHPI leaders to '}
              <span className={styles.titleTeal}>{'make their mark.'}</span>
            </Title>
          </div>
        </BackgroundImage>
      </div>
      <div className={styles.aboutInit}>
        <About />
        <Initiatives />
      </div>
      <GetInvolved />
    </ContentPage>
  )
}
