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
  alt: string
  link?: string
}

/** Customizable card */
export function Cards({ title, details, img, alt, link }: CardsProps) {
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
          <div className={styles.textContainer}>
            <Title className={styles.title}>{title}</Title>
            <Text className={styles.text}>{details}</Text>
            <Space h={'md'} />
          </div>
        </div>
      </UnstyledButton>
    </div>
  )
}
