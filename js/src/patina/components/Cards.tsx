import { Text, Title, Image, Anchor, AspectRatio } from '@mantine/core'
import styles from './Cards.module.css'

type CardsProps = {
  title: string
  details: string
  img: string
  link?: string
  bottom?: string
  alt: string
  underline: boolean
}

/** Customizable card */
export function Cards({
  title,
  details,
  img,
  link,
  bottom,
  alt,
  underline,
}: CardsProps) {
  return (
    <div className={styles.card}>
      <div className={styles.border}>
        <AspectRatio>
          <Image className={styles.image} src={img} alt={alt} radius={5} />
        </AspectRatio>
        <div className={styles.text_container}>
          <Title className={styles.title}>{title}</Title>
          <Text className={styles.text}>{details}</Text>
          <Anchor
            className={underline ? styles.anchor : styles.anchorNoUnderline}
            href={link}
          >
            <Text>{bottom}</Text>
          </Anchor>
        </div>
      </div>
    </div>
  )
}
