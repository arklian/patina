import { Group, Flex, ActionIcon, Burger, Drawer, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconHexagonLetterJ, IconArrowRight } from '@tabler/icons-react'
import styles from './Header.module.css'
import { DarkModeToggle } from './DarkModeToggle.tsx'
import { HoverButton } from './HoverButton.tsx'

export function Header() {
  const [opened, { toggle }] = useDisclosure()
  const title = opened ? 'Close navigation' : 'Open navigation'
  return (
    <div className={styles.mainContainer}>
      <Flex justify="right" align="center">
        <ActionIcon
          className={styles.icons}
          component={'a'}
          href={'#'}
          variant={'transparent'}
          size={'xl'}
        >
          <IconHexagonLetterJ size={60} stroke={1.25} />
        </ActionIcon>
      </Flex>
      <Flex justify={'left'} align={'center'} pr={20}>
        <Burger
          opened={opened}
          onClick={toggle}
          title={title}
          aria-label="Toggle navigation"
          className={styles.burger}
        />
      </Flex>
      {/* Drawer for mobile menu */}
      <Drawer
        opened={opened}
        onClose={toggle}
        padding="md"
        pt={'lg'}
        size="100%"
        position={'right'}
        className={styles.drawer}
        closeButtonProps={{ size: 'xl', mr: 24, mt: 10 }}
        transitionProps={{
          transition: 'fade-left',
          duration: 250,
          timingFunction: 'linear',
        }}
      >
        <Stack align={'flex-start'} gap={'lg'}>
          <HoverButton
            buttonName="About"
            buttonLink="#about"
            onClick={toggle}
            right={<IconArrowRight size={28} />}
          />
          <HoverButton
            buttonName="Experience"
            buttonLink="#experience"
            onClick={toggle}
            right={<IconArrowRight size={28} />}
          />
          <HoverButton
            buttonName="Work"
            buttonLink="#work"
            onClick={toggle}
            right={<IconArrowRight size={28} />}
          />
          <HoverButton
            buttonName="Contact"
            buttonLink="#contact"
            onClick={toggle}
            right={<IconArrowRight size={28} />}
          />
        </Stack>
        <DarkModeToggle />
      </Drawer>
      <Flex justify="space-between" className={styles.desktopMenu}>
        <Group>
          <HoverButton buttonName="About" buttonLink="#about" />
          <HoverButton buttonName="Experience" buttonLink="#experience" />
          <HoverButton buttonName="Work" buttonLink="#work" />
          <HoverButton buttonName="Contact" buttonLink="#contact" />
          <DarkModeToggle />
        </Group>
      </Flex>
    </div>
  )
}
