import { Container, Group, Anchor } from '@mantine/core'
import { Settings } from './Settings.tsx'
import classes from './Bryan.module.css'

/** component to create a navbar in the header */
export function NavBar() {
  const Category = (props: { link: string; text: string }) => (
    <Group
      gap={5}
      visibleFrom="xs"
    >
      <Anchor
        href={props.link}
        target="_blank"
        underline="never"
      >
        {props.text}
      </Anchor>
    </Group>
  )
  return (
    <header className={classes.header}>
      <Container
        size="md"
        className={classes.inner}
      >
        <Category
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Home"
        />
        <Category
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Projects"
        />
        <Category
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="Fun"
        />
        <Category
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          text="About Me"
        />
        <Settings />
      </Container>
    </header>
  )
}
