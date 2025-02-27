import {
  AspectRatio,
  Image,
  Space,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core'
import { Link } from 'react-router-dom'
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
      <UnstyledButton component={Link} to={link ?? ''}>
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
