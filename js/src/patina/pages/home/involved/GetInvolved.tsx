import styles from './GetInvolved.module.css'
import { StaticCards } from '@/patina/pages/home/involved/StaticCards.tsx'
import { imageUrls } from '@/patina/assets/images.ts'

export function GetInvolved() {
  return (
    <div className={styles.involvedContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.header}>{'Want to get involved?'}</h2>
      </div>
      <div className={styles.cardsContainer}>
        <StaticCards
          title={'For Students'}
          imageUrl={imageUrls.learn.src}
          imageAlt={imageUrls.learn.alt}
          description={
            'Need career fair prep, help in choosing a major, interview practice, or scholarship info?'
          }
          href={'/mentorship'}
        />
        <StaticCards
          title={'For Mentors and Volunteers'}
          imageUrl={imageUrls.hands.src}
          imageAlt={imageUrls.hands.alt}
          description={
            'Want to mentor students, organize events, or learn about the many other ways to get involved?'
          }
          href={'/mentor'}
        />
        <StaticCards
          title={'Events'}
          imageUrl={imageUrls.heart.src}
          imageAlt={imageUrls.heart.alt}
          description={
            'Join us for events, where you can form new connections and maybe learn something new!'
          }
          href={'/community'}
        />
      </div>
    </div>
  )
}
