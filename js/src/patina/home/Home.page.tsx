import { BackgroundImage, Container, Skeleton, Title } from '@mantine/core'
import { Initiatives } from './Initiatives'
import { About } from './About.tsx'
import { ImportantSection } from '@/patina/home/ImportantSection.tsx'
import styles from './Home.module.css'
import { GetInvolved } from '@/patina/home/GetInvolved.tsx'
import { imageUrls } from '@/patina/assets/images.ts'

export function HomePage() {
  return (
    <Container className={styles.homeContainer}>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>
      <BackgroundImage
        bgp={'right'}
        bgsz={'750px'}
        bgr={'no-repeat'}
        miw={'600px'}
        src={imageUrls.homeSplash.src}
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
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>
      {/*this double initiative thing will be replace by <About></About>*/}
      <div className={styles.aboutInit}>
        <About />
        <Initiatives />
      </div>

      <GetInvolved />

      <div className={styles.skeletonStyle}>
        <Title className={styles.importantSectionTitle}>
          {'Why is This Important?'}
        </Title>
      </div>

      <div className={styles.skeletonStyle}>
        <ImportantSection />
      </div>
    </Container>
  )
}