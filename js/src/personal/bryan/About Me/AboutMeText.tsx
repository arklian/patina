import { Text, Space } from '@mantine/core'
import classes from '../Bryan.module.css'

export function AboutMeText() {
  return (
    <Text
      inherit
      component="span"
      className={classes.title2}
      id={classes.position1}
    >
      {'cs @ Princeton'}
      <Space h="s" />
      {'Class of 2026'}
    </Text>
  )
}
