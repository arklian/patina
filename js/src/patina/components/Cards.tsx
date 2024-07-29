import {
  Text,
  Title,
  Image,
  Anchor,
  AspectRatio,
  SimpleGrid,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
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
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <div className={styles.card}>
      <SimpleGrid cols={largeScreen ? 2 : 1} className={styles.border}>
        <AspectRatio>
          <Image className={styles.image} src={img} alt={alt} radius={5} />
        </AspectRatio>
        <div className={styles.text_container}>
          <Title className={styles.title}>{title}</Title>
          <Text className={styles.text}>{details}</Text>
          <Anchor className={styles.anchor} href={link}>
            <Text>{'Learn more\u2192'}</Text>
          </Anchor>
        </div>
      </SimpleGrid>
    </div>
  )
}
