import { BackgroundImage, Title } from '@mantine/core'
import { Initiatives } from './initiatives/Initiatives'
import { About } from './about/About.tsx'
import { ImportantSection } from '@/patina/pages/home/important/ImportantSection.tsx'
import { GetInvolved } from '@/patina/pages/home/involved/GetInvolved.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Home.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

export function HomePage() {
  return (
    <ContentPage>
      <div>
        <BackgroundImage
          bgp={'right'}
          bgsz={'700px'}
          bgr={'no-repeat'}
          miw={'500px'}
          src={imageUrls.homeHero.src}
        >
          <div className={styles.hero}>
            <div>
              <Title className={styles.hero_title} w={'75%'}>
                {'Empowering AANHPI leaders to '}
                <span className={styles.title_teal}>{'make their mark.'}</span>
              </Title>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <div className={styles.aboutInit}>
        <About />
        <Initiatives />
      </div>
      <GetInvolved />
      <div className={styles.containers}>
        <Title className={styles.importantSectionTitle}>
          {'Why is This Important?'}
        </Title>
      </div>
      <div className={styles.containers}>
        <ImportantSection />
      </div>
    </ContentPage>
  )
}
