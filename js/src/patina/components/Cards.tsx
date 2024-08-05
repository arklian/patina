import { Text, Title, Image, Anchor, AspectRatio, Space } from '@mantine/core'
import styles from './Cards.module.css'

export type CardsProps = {
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
  alt,
  underline,
}: CardsProps) {
  return (
    <div className={styles.card}>
      <div className={styles.border}>
        <Anchor
          className={underline ? styles.anchor : styles.anchorNoUnderline}
          href={link}
        >
          <AspectRatio>
            <Image className={styles.image} src={img} alt={alt} radius={5} />
          </AspectRatio>
        </Anchor>
        <div className={styles.text_container}>
          <Title className={styles.title}>{title}</Title>
          <Text className={styles.text}>{details}</Text>
          <Space h={'md'} />
        </div>
      </div>
    </div>
  )
}
