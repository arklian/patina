import {
  Text,
  Title,
  Image,
  AspectRatio,
  Space,
  UnstyledButton,
} from '@mantine/core'
import styles from './Cards.module.css'

export type CardsProps = {
  title: string
  details: string
  img: string
  link?: string
  bottom?: string
  alt: string
}

/** Customizable card */
export function Cards({ title, details, img, link, alt }: CardsProps) {
  return (
    <div className={styles.card}>
      <UnstyledButton
        className={styles.anchorNoUnderline}
        component={'a'}
        href={link}
      >
        <div className={styles.border}>
          <AspectRatio>
            <Image className={styles.image} src={img} alt={alt} radius={5} />
          </AspectRatio>
          <div className={styles.text_container}>
            <Title className={styles.title}>{title}</Title>
            <Text className={styles.text}>{details}</Text>
            <Space h={'md'} />
          </div>
        </div>
      </UnstyledButton>
    </div>
  )
}
