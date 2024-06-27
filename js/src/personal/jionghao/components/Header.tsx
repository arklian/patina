import {
  Container,
  Group,
  Button,
  Flex,
  useMantineColorScheme,
  MantineColorScheme,
} from '@mantine/core'
import { IconSunHigh, IconMoon } from '@tabler/icons-react'
import { useToggle } from '@mantine/hooks'
import styles from './Header.module.css'

export function Header() {
  const { setColorScheme } = useMantineColorScheme()
  const [modeValue, toggle] = useToggle(['light', 'dark'])
  const changeMode = () => {
    toggle()
    setColorScheme(modeValue as MantineColorScheme)
  }
  const isDark = modeValue !== 'dark'
  return (
    <div className={styles.header}>
      <Container className={styles.mainContainer}>
        <Flex
          justify="right"
          align="center"
        >
          <div className={styles.logo}>{'PlaceHolderLogo'}</div>
        </Flex>
        <Flex
          justify="right"
          align="center"
        >
          <Group>
            <Button
              variant="subtle"
              component="a"
              href="#about"
              color={'cyan'}
            >
              {'About'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#experience"
              color={'cyan'}
            >
              {'Experience'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#work"
              color={'cyan'}
            >
              {'Work'}
            </Button>
            <Button
              variant="transparent"
              component="a"
              href="#contact"
              color={'cyan'}
            >
              {'Contact'}
            </Button>
            <Button
              className={styles.modeButton}
              size={'compact-md'}
              color={'gray'}
              variant={'outline'}
              onClick={changeMode}
              radius={'xl'}
            >
              {isDark ?
                <IconSunHigh size={24} />
              : <IconMoon size={24} />}
            </Button>
          </Group>
        </Flex>
      </Container>
    </div>
  )
}
