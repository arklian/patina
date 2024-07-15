import { Button, Card, Image } from '@mantine/core'
import styles from '@/patina/home/GetInvolved.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

export function GetInvolved() {
  return (
    <div className={styles.involvedContainer}>
      <div className={styles.sectionHeader}>
        <h1>{'Want to get involved?'}</h1>
      </div>

      <div className={styles.cardsContainer}>
        <Card className={styles.Card}>
          <h3>{'For Students'}</h3>
          <div className={styles.cardImageContainer}>
            <Image
              src={imageUrls.learn.src}
              alt={'Learn'}
              className={styles.cardImage}
            />
          </div>
          <p className={styles.cardText}>
            {
              'Need career fair prep, help choosing a major, interview practice, or scholarship info?'
            }
          </p>
          <Button variant="outline" className={styles.cardButton}>
            {'Check it out'}
          </Button>
        </Card>
        <Card className={styles.Card}>
          <h3>{'For Volunteers'}</h3>
          <div className={styles.cardImageContainer}>
            <Image
              src={imageUrls.hands.src}
              alt={'Hands'}
              className={styles.cardImage}
            />
          </div>
          <p className={styles.cardText}>
            {
              'Want to mentor students, organize events, or learn about other ways to get involved?'
            }
          </p>
          <Button variant="outline" className={styles.cardButton}>
            {'Check it out'}
          </Button>
        </Card>
        <Card className={styles.Card}>
          <h3>{'For the Community'}</h3>
          <div className={styles.cardImageContainer}>
            <Image
              src={imageUrls.heart.src}
              alt={'Heart'}
              className={styles.cardImage}
            />
          </div>
          <p className={styles.cardText}>
            {
              'Join us for events to form new connections,  and maybe learn something new!'
            }
          </p>
          <Button variant="outline" className={styles.cardButton}>
            {'Check it out'}
          </Button>
        </Card>
      </div>
    </div>
  )
}
