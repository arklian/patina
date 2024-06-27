import {
  Button,
  MantineColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconSunHigh } from '@tabler/icons-react'
import { useToggle } from '@mantine/hooks'
import styles from '@/personal/jionghao/Jionghao.module.css'

/** Button to toggle between light and dark mode */
export function DarkModeToggle() {
  const { setColorScheme } = useMantineColorScheme()
  const [modeValue, toggle] = useToggle(['light', 'dark'])
  const changeMode = () => {
    toggle()
    setColorScheme(modeValue as MantineColorScheme)
  }

  return (
    <div className={styles.buttonWrapper}>
      <Button
        size={'sm'}
        onClick={changeMode}
      >
        <IconSunHigh size={25} />{' '}
      </Button>
    </div>
  )
}
