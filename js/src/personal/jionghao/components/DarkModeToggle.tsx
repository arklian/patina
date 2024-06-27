import {
  Button,
  MantineColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSunHigh } from '@tabler/icons-react'
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
  const isDark = modeValue !== 'dark'

  return (
    <div>
      <Button
        className={styles.modeButton}
        size={'compact-md'}
        color={'cyan'}
        variant={'outline'}
        onClick={changeMode}
        radius={'xl'}
      >
        {isDark ?
          <IconSunHigh size={24} />
        : <IconMoon size={24} />}
      </Button>
    </div>
  )
}
