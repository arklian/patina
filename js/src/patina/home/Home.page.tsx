import { Container, Skeleton, Title } from '@mantine/core'
import { Initiatives } from './Initiatives'
import { About } from './About.tsx'
import { ImportantSection } from '@/patina/home/ImportantSection.tsx'
import styles from './Home.module.css'
import { GetInvolved } from '@/patina/home/GetInvolved.tsx'
/*import { imageUrls } from '@/patina/assets/images.ts'*/

export function HomePage() {
  return (
    <Container className={styles.homeContainer}>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>
      <img
        className={styles.hero_image}
        alt={'stock for home page'}
        src={
          'https://cdn.discordapp.com/attachments/1261068702171009085/1263557244205797407/Untitled114_20240718140508.png?ex=669f4822&is=669df6a2&hm=739bb58889c5bd0061af65ae1b7e0c62f8d482e7c970364a5725d8b21ccd31d3&'
        }
      />
      <div className={styles.hero}>
        <div>
          <Title className={styles.hero_title}>
            {'Empowering AANHPI leaders to '}
            <span className={styles.title_teal}>{'make their mark.'}</span>
          </Title>
        </div>
      </div>
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
