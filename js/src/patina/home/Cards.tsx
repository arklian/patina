import { Text, Title, Image, Anchor, AspectRatio } from '@mantine/core'
import styles from './Cards.module.css'

type CardsProps = {
  title: string
  details: string
  img: string
  link: string
  alt: string
}

/** Customizable card */
export function Cards({ title, details, img, link, alt }: CardsProps) {
  return (
    <div className={styles.card}>
      <AspectRatio ratio={82 / 111}>
        <Image className={styles.image} src={img} alt={alt} radius={10}></Image>
      </AspectRatio>
      <div className={styles.text_container}>
        <Title className={styles.title}>{title}</Title>
        <Text className={styles.text}>{details}</Text>
        <Anchor className={styles.anchor} href={link}>
          <Text>{'Learn more\u2192'}</Text>
        </Anchor>
      </div>
    </div>
  )
}
