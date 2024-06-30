import { Title, Group } from '@mantine/core'
import classes from './AboutMe.module.css'
import { AboutMePictures } from './AboutMePictures.tsx'
import { AboutMeText } from './AboutMeText.tsx'

export function AboutMePage() {
  return (
    <>
      <Title
        className={classes.title}
        component="span"
        ml="5rem"
      >
        {'About Me'}
      </Title>
      <Group
        justify="flex-start"
        component="span"
      >
        <AboutMePictures />
        <AboutMeText />
      </Group>
    </>
  )
}
