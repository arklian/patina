import { Button, Title, Text, useMantineColorScheme } from '@mantine/core'
import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './Kazi.module.css'

export function KaziPage() {
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
    }
    if (!sun) {
      setColorScheme('light')
    } else {
      setColorScheme('dark')
    }
  }

  return (
    <>
      <Title
        className={styles.title}
        ta="center"
        mt={100}
      >
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'green', to: 'blue' }}
        >
          Kazi's Page
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
        Hey! I'm Kazi.
      </Text>

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
    </>
  )
}
