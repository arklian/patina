import { Container, Group, Anchor } from '@mantine/core'
import { Settings } from '@/personal/bryan/settings/Settings.tsx'
import classes from '@/personal/bryan/Bryan.module.css'

/** component to create a navbar in the header */
export function NavBar() {
  const Category = (props: { link: string; text: string }) => (
    <Group
      gap={5}
      visibleFrom="xs"
    >
      <Anchor
        href={props.link}
        target="_self"
        underline="never"
      >
        {props.text}
      </Anchor>
    </Group>
  )
  const url_base = window.location.href.split('bryan')[0]
  return (
    <header className={classes.header}>
      <Container
        size="md"
        className={classes.inner}
      >
        <Category
          link={url_base.concat('bryan')}
          text="Home"
        />
        <Category
          link={url_base.concat('bryan/projects')}
          text="Projects"
        />
        <Category
          link={url_base.concat('bryan/fun')}
          text="Fun"
        />
        <Category
          link={url_base.concat('bryan/aboutme')}
          text="About Me"
        />
        <Settings />
      </Container>
    </header>
  )
}
