import { Burger } from '@mantine/core'
import styles from './Maliha.module.css'

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
        color="#b87171"
      />
    </div>
  )
}
