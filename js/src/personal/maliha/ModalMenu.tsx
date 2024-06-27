import { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal, UnstyledButton, Stack } from '@mantine/core'
import { Sandwich } from './Sandwich.tsx'
import styles from './Maliha.module.css'

const labels = [{ label: 'about' }, { label: 'projects' }, { label: 'gallery' }]

export function Menu() {
  const [opened, { open, close }] = useDisclosure(false)
  const [burgerOpened, setBurgerOpened] = useState(false)

  const items = labels.map((label) => (
    <UnstyledButton className={styles.menuItems}>{label.label}</UnstyledButton>
  ))

  const handleToggleMenu = () => {
    if (opened) {
      close()
    } else {
      open()
    }
    setBurgerOpened(!burgerOpened)
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
        size={400}
        zIndex={2}
        overlayProps={{
          backgroundOpacity: 0.1,
          blur: 0,
        }}
      >
        <Stack
          w={100}
          miw={100}
        >
          {items}
        </Stack>
      </Modal>

      <Sandwich
        onToggleMenu={handleToggleMenu}
        opened={burgerOpened}
      />
    </>
  )
}
