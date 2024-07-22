import { Title, Text, Image } from '@mantine/core'
import bitmojiImage from '../../assets/bitmoji_hero_circle.png'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <Title className={styles.title} size={72} order={1}>
            {'Hello World!'}
            <br />
            {'My name is Kazi'}
          </Title>
          <Text className={styles.description} size="lg">
            {
              "I am a current Software Engineer Intern at Patina Network Corporation and Lead Teaching Assistant at All Star Code. I am currently attending Hunter College and love to play video games, sing, and play sports. Can't wait to connect!"
            }
          </Text>
        </div>
        <Image
          className={styles.heroImg}
          src={bitmojiImage}
          alt="Animated Circular Hero Image of Kazi"
        />
      </section>
    </div>
  )
}
