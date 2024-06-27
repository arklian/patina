import { useHover } from '@mantine/hooks'
import { RefObject } from 'react'
import { Button } from '@mantine/core'
import styles from './Header.module.css'

export function HoverButton(props: any) {
  const {
    hovered,
    ref,
  }: { hovered: boolean; ref: RefObject<HTMLAnchorElement> } = useHover()
  return (
    <Button
      ref={ref}
      color={hovered ? 'white' : 'cyan'}
      className={styles.button}
      variant="transparent"
      component="a"
      href={props.buttonLink}
      size={'md'}
    >
      {props.buttonName}
    </Button>
  )
}
