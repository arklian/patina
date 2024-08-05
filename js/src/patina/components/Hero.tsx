import { Button, Image, Text, Title } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './Hero.module.css'

export type HeroProps = {
  title: string
  details: string | ReactNode
  img: string
  link?: string
  alt: string
  description?: string
}

export function Hero({
  title,
  details,
  img,
  link,
  alt,
  description = 'none',
}: HeroProps) {
  return (
    <div className={styles.heroContainer}>
      <div>
        <Title className={styles.title}>{title}</Title>
        <div>{details}</div>
        {link && (
          <div className={styles.buttonContainer}>
            <Button
              component="a"
              variant="filled"
              color="var(--mantine-color-patina-green-light)"
              autoContrast
              target="_blank"
              href={link}
            >
              <Text c={'black'} size="20">
                {description === 'none' ? 'Click Me!' : description}
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
