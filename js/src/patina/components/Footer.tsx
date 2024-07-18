import { Text, Skeleton } from '@mantine/core'
import styles from './Footer.module.css'

/**
 * Footer component to display patina network logo, social media links
 */
export function Footer() {
  return (
    <div className={styles.footer}>
      <Skeleton animate={false} w={48} />
      <div className={styles.footerLinks}>
        <Text>{'link1'}</Text>
        <Text>{'link2'}</Text>
      </div>
    </div>
  )
}
