import { BackgroundImage, Container, Title } from '@mantine/core'
import { Initiatives } from './Initiatives'
import { About } from './About.tsx'
import { ImportantSection } from '@/patina/home/ImportantSection.tsx'
import { GetInvolved } from '@/patina/home/GetInvolved.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Home.module.css'

export function HomePage() {
  return (
    <Container className={styles.homeContainer}>
      <BackgroundImage
        bgp={'right'}
        bgsz={'650px'}
        bgr={'no-repeat'}
        src={imageUrls.homeSplash.src}
      >
        <div className={styles.hero}>
          <Title className={styles.hero_title} w={'75%'}>
            {'Empowering AANHPI leaders to '}
            <span className={styles.title_teal}>{'make their mark.'}</span>
          </Title>
        </div>
      </BackgroundImage>
      {/*this double initiative thing will be replace by <About></About>*/}
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
    </Container>
  )
}
