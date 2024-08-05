import { Image } from '@mantine/core'
import patinabadge from '@/patina/assets/patinabadge.png'
import styles from '@/patina/components/PatinaBadge.module.css'

/**
 * Patina Badge that is used to link to the home page in the header and footer.
 */
export function PatinaBadge() {
  return (
    <Image
      src={patinabadge}
      alt="Patina Network Home"
      className={styles.logo}
    />
  )
}
