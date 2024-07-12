import { Text, Title, Card, Image, Anchor, AspectRatio } from '@mantine/core'
import styles from './Cards.module.css'

/** Cards For Initiatives Component */
type CardsProps = {
  title: string
  details: string
  img: string
  link: string
}

export function Cards({ title, details, img, link }: CardsProps) {
  return (
    <>
      <Card className={styles.card}>
        <AspectRatio>
          <Image className={styles.image} src={img}></Image>
        </AspectRatio>
        <div className={styles.text_container}>
          <Title className={styles.title}>{title}</Title>
          <Text className={styles.text}>{details}</Text>
          <Anchor className={styles.anchor} href={link}>
            <Text>{'Learn more->'}</Text>
          </Anchor>
        </div>
      </Card>
    </>
  )
}
