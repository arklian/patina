import { Skeleton, Title } from '@mantine/core'
import styles from './Home.module.css'

export function HomePage() {
  return (
    <>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      />
      <div className={styles.hero}>
        <div>
          <img
            className={styles.hero_image}
            alt={'hero'}
            src={
              'https://cdn.discordapp.com/attachments/1261068702171009085/1262442743255269487/hero.png?ex=66969ced&is=66954b6d&hm=ac8fedf35fd1f662e9051863056f2cc1879d4962453600d7455d874b5d23516e&'
            }
          />
        </div>
        <Title className={styles.hero_title}>
          {'Empowering AANHPI leaders to '}
          <span className={styles.title_teal}>{'make their mark.'}</span>
        </Title>
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={900} width="80%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={500} width="80%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={400} width="60%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mt="xl" />
      </div>
    </>
  )
}
