import { Image, Text, Group } from '@mantine/core'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import styles from './message.module.css'

export function Message() {
  return (
    <div className={styles.message}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          className={styles.logoImg}
          src={'https://placehold.co/500x500?text=Placeholder'}
          alt="logo"
          radius="xl"
        />
        <div className={styles.name}>
          <Text className={styles.bg}>{'Riyuanliu'}</Text>
          <Text className={styles.sm}>{'Weclome'}</Text>
        </div>
      </div>

      {/* Description */}
      <div className={`${styles.description} ${styles.cards}`}>
        <Group className={styles.content}>
          <FaQuoteLeft size={16} />
          <div className={styles.text}>
            <p>{'Hello World!'}</p>
            <p>{'A site build in 21st century'}</p>
          </div>
          <FaQuoteRight size={16} />
        </Group>
      </div>
    </div>
  )
}
