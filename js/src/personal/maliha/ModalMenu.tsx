import { useDisclosure } from '@mantine/hooks'
import { Modal, UnstyledButton, Stack } from '@mantine/core'
import { Sandwich } from './Sandwich.tsx'
import styles from './Modal.module.css'

/** Menu Component */
const labels = [
  { label: 'About' },
  { label: 'Resume' },
  { label: 'Projects' },
  { label: 'Notes' },
  { label: 'Gallery' },
]

export function Menu() {
  const [opened, { open, close }] = useDisclosure(false)

  const items = labels.map((label) => (
    <UnstyledButton
      key={label.label}
      className={styles.menuItems}
    >
      {label.label}
    </UnstyledButton>
  ))

  const handleToggleMenu = () => {
    opened ? close() : open()
  }

  return (
    <>
      <Modal
        className={styles.modal}
        closeButtonProps={{
          size: 0,
        }}
        opened={opened}
        onClose={handleToggleMenu}
        title="Menu"
        size={450}
        zIndex={2}
        pl={20}
        overlayProps={{
          backgroundOpacity: 0.1,
          blur: 0,
        }}
      >
        <Stack>{items}</Stack>
      </Modal>

      <Sandwich
        onToggleMenu={handleToggleMenu}
        opened={opened}
      />
    </>
  )
}
