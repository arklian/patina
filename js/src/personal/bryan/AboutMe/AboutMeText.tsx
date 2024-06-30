import { Text, Space, Title } from '@mantine/core'
import classes from './AboutMe.module.css'

export function AboutMeText() {
  return (
    <>
      <Title
        component="span"
        className={classes.title2}
        id={classes.position_school}
      >
        {'cs @ Princeton'}
        <Space h="s" />
        {'Class of 2026'}
      </Title>
      <Title
        component="span"
        className={classes.title2}
        id={classes.position_interest_title}
      >
        {'Interests'}
      </Title>
      <Text
        component="span"
        id={classes.position_interest_text}
      >
        {'Hi'}
        <Space />
        {'Hello'}
        <Space />
        {"It's a me"}
      </Text>
    </>
  )
}
