import { Button, Image, Text, Title } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './Hero.module.css'

export type HeroProps = {
  title: string
  details: string | ReactNode
  img: string
  buttonLink?: string
  alt: string
  buttonText?: string
}

export function Hero({
  title,
  details,
  img,
  buttonLink,
  alt,
  buttonText,
}: HeroProps) {
  return (
    <div className={styles.heroContainer}>
      <div>
        <Title className={styles.title}>{title}</Title>
        <div>{details}</div>
        {buttonLink && (
          <div className={styles.buttonContainer}>
            <Button
              component="a"
              variant="filled"
              color="var(--mantine-color-patina-green-light)"
              autoContrast
              target="_blank"
              href={buttonLink}
            >
              <Text c={'black'} size="20">
                {buttonText || 'Click Me!'}
              </Text>
            </Button>
          </div>
        )}
      </div>
      <div className={styles.image}>
        <Image className={styles.scholarshipHero} src={img} alt={alt} />
      </div>
    </div>
  )
}
