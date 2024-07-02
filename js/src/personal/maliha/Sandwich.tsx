import { Burger } from '@mantine/core'
import styles from './Modal.module.css'

/* Burger Menu Toggle*/
interface SandwichProps {
  onToggleMenu: () => void
  opened: boolean
}

export function Sandwich({ onToggleMenu, opened }: SandwichProps) {
  const handleClick = () => {
    onToggleMenu()
  }

  return (
    <div className={styles.menuWrapper}>
      <Burger
        opened={opened}
        onClick={handleClick}
        aria-label="Toggle navigation"
        size={50}
        color="#a62020 "
        className={styles.burgerIcon}
      />
    </div>
  )
}
