import { Text, Title, Card, Image, Anchor, AspectRatio } from '@mantine/core'
import styles from './Cards.module.css'

type CardsProps = {
  title: string
  details: string
  img: string
  link: string
  alt: string
}

/** Cards For Initiatives Component */
export function Cards({ title, details, img, link, alt }: CardsProps) {
  return (
    <Card className={styles.card}>
      <AspectRatio>
        <Image className={styles.image} src={img} alt={alt}></Image>
      </AspectRatio>
      <div className={styles.text_container}>
        <Title className={styles.title}>{title}</Title>
        <Text className={styles.text}>{details}</Text>
        <Anchor className={styles.anchor} href={link}>
          <Text>{'Learn more\u2192'}</Text>
        </Anchor>
      </div>
    </Card>
  )
}
