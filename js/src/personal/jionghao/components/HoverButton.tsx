import { useHover } from '@mantine/hooks'
import { RefObject } from 'react'
import { Button } from '@mantine/core'
import styles from './Header.module.css'

export function HoverButton(props: any) {
  // @ts-ignore Bug in Mantine, can be removed in 7.15.2
  const {
    hovered,
    ref,
  }: { hovered: boolean; ref: RefObject<HTMLAnchorElement> } = useHover()

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault()
    const section = document.querySelector(props.buttonLink)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <Button
      ref={ref}
      color={hovered ? 'white' : '#74c0fc'}
      className={styles.button}
      variant="transparent"
      component="a"
      href={props.buttonLink}
      size={'md'}
      rightSection={props.right}
      onClick={handleClick}
    >
      {props.buttonName}
    </Button>
  )
}
