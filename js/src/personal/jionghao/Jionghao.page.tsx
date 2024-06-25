import {
  Title,
  Text,
  Button,
  useMantineColorScheme,
  MantineColorScheme,
} from '@mantine/core'
import { useToggle } from '@mantine/hooks'
import { IconSunHigh } from '@tabler/icons-react'
import styles from './Jionghao.module.css'
import { FooterSocial } from './FooterSocial.tsx'

export function JionghaoPage() {
  const { setColorScheme } = useMantineColorScheme()
  const [modeValue, toggle] = useToggle(['light', 'dark'])
  const changeMode = () => {
    toggle()
    setColorScheme(modeValue as MantineColorScheme)
  }
  return (
    <div>
      <div className={styles.pageContainer}>
        <Title
          className={styles.title}
          ta="center"
          mt={100}
        >
          {'Welcome to '}
          <Text
            inherit
            variant="gradient"
            gradient={{ from: 'green', to: 'blue' }}
          >
            {"Jionghao's Page"}
          </Text>
        </Title>

        <Text
          c="dimmed"
          ta="center"
          size="lg"
          maw={580}
          mx="auto"
          mt="xl"
        >
          {"Hey! I'm Jionghao."}
        </Text>
        <div className={styles.buttonWrapper}>
          <Button
            size={'sm'}
            onClick={changeMode}
          >
            <IconSunHigh size={25} />{' '}
          </Button>
        </div>
      </div>

      <FooterSocial />
    </div>
  )
}
