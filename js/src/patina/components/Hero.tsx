import { Button, Image, Text, Title } from '@mantine/core'
import styles from './Hero.module.css'

export type HeroProps = {
  title: string
  details: string | React.ReactNode
  img: string
  button: string
  alt: string
}

export function Hero({ title, details, img, button, alt }: HeroProps) {
  return (
    <div className={styles.hero_container}>
      <div>
        <Title className={styles.title} ta={'left'}>
          {title}
        </Title>
        <div>{details}</div>
        <div className={styles.buttonContainer}>
          <Button
            component="a"
            className={styles.appButton}
            variant="filled"
            color="var(--mantine-color-patina-green-light)"
            target="_blank"
            href={button}
          >
            <Text className={styles.appButtonText} size="20" fw={600}>
              {'Apply Here'}
            </Text>
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image className={styles.scholarshipHero} src={img} alt={alt} />
      </div>
    </div>
  )
}
