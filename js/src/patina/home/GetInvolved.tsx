import styles from '@/patina/home/GetInvolved.module.css'
import { StaticCards } from '@/patina/home/StaticCards.tsx'
import { imageUrls } from '@/patina/assets/images.ts'

export function GetInvolved() {
  return (
    <div className={styles.involvedContainer}>
      <div className={styles.sectionHeader}>
        <h2>{'Want to get involved?'}</h2>
      </div>

      <div className={styles.cardsContainer}>
        <StaticCards
          title={'For Students'}
          imageUrl={imageUrls.Learn.src}
          imageAlt={'Learn'}
          description={
            'Need career fair prep, help choosing a major, interview practice, or scholarship info?'
          }
        />
        <StaticCards
          title={'For Volunteers'}
          imageUrl={imageUrls.Hands.src}
          imageAlt={'Hands'}
          description={
            'Want to mentor students, organize events, or learn about other ways to get involved?'
          }
        />
        <StaticCards
          title={'For the Community'}
          imageUrl={imageUrls.Heart.src}
          imageAlt={'Heart'}
          description={
            'Join us for events to form new connections, and maybe learn something new!'
          }
        />
      </div>
    </div>
  )
}
