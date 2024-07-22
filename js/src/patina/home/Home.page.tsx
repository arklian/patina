import { BackgroundImage, Container, Skeleton, Title } from '@mantine/core'
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
      <BackgroundImage
        bgp={'right'}
        bgsz={'750px'}
        bgr={'no-repeat'}
        miw={'600px'}
        src={
          'https://cdn.discordapp.com/attachments/1261068702171009085/1265003230472175649/Header_Images.png?ex=669fed90&is=669e9c10&hm=8faba7a06112503be1ca5c44f658e5877b3bfa8c8f679015cff2646a94b9262a&'
        }
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
        <Initiatives></Initiatives>
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

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mt="xl" />
      </div>
    </Container>
  )
}
