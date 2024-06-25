import { useState } from 'react'
import { Button, useMantineColorScheme } from '@mantine/core'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './DarkModeToggle.module.css'

/* Allows for website to be able to switch from light to dark mode */
export function DarkModeToggle() {
  const [sun, setSun] = useState(true)
  const [animate, setAnimate] = useState('')
  const { setColorScheme } = useMantineColorScheme()

  const changeIcon = () => {
    if (animate === '') {
      setAnimate(sun ? 'exitSun' : 'exitMoon')
      setTimeout(() => {
        setSun(!sun)
        setAnimate(sun ? 'enterMoon' : 'enterSun')
        setTimeout(() => {
          setAnimate('')
        }, 750)
      }, 750)
      setColorScheme(sun ? 'dark' : 'light')
    }
  }
  return (
    <Button
      className={styles.sunToMoonButton}
      onClick={changeIcon}
    >
      {sun ?
        <FaSun
          className={
            animate === 'exitSun' ? styles.animationExit
            : animate === 'enterSun' ?
              styles.animationEnter
            : ''
          }
          color="#FDB813"
          size={30}
        />
      : <FaMoon
          className={
            animate === 'exitMoon' ? styles.animationExit
            : animate === 'enterMoon' ?
              styles.animationEnter
            : ''
          }
          color="#8a7f8d"
          size={30}
        />
      }
    </Button>
  )
}
