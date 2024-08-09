import { Button, Image, Text, Title } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './Hero.module.css'

export type HeroProps = {
  title: string
  details: string | ReactNode
  img: string
  alt: string
  buttonLink?: string
  buttonText?: string
  buttonColor?: string
}

export function Hero({
  title,
  details,
  img,
  alt,
  buttonLink,
  buttonText,
  buttonColor,
}: HeroProps) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSection}>
        <Title className={styles.title}>{title}</Title>
        <div>{details}</div>
        {buttonLink && (
          <div className={styles.buttonContainer}>
            <Button
              component="a"
              variant="filled"
              color={buttonColor || 'var(--mantine-color-patina-green-light)'}
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
      <Image className={styles.hero} src={img} alt={alt} />
    </div>
  )
}
