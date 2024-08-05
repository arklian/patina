import { Button, Image, Text, Title } from '@mantine/core'
import styles from './Hero.module.css'

export type HeroProps = {
  title: string
  details: string | React.ReactNode
  img: string
  button?: string
  alt: string
}

export function Hero({ title, details, img, button = 'none', alt }: HeroProps) {
  return (
    <div className={styles.heroContainer}>
      <div>
        <Title className={styles.title}>{title}</Title>
        <div>{details}</div>
        {button !== 'none' ?
          <div className={styles.buttonContainer}>
            <Button
              component="a"
              variant="filled"
              color="var(--mantine-color-patina-green-light)"
              autoContrast
              target="_blank"
              href={button}
            >
              <Text c={'black'} size="20" fw={600}>
                {'Apply Here'}
              </Text>
            </Button>
          </div>
        : <div></div>}
      </div>
      <div className={styles.image}>
        <Image className={styles.scholarshipHero} src={img} alt={alt} />
      </div>
    </div>
  )
}
