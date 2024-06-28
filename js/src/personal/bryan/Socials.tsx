import { Container, Group, ActionIcon } from '@mantine/core'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import classes from './Bryan.module.css'

/** Component to store social media footer items */
export function Socials() {
  const Icon = (props: { link: string; icon: any }) => (
    <ActionIcon
      component="a"
      size="xl"
      color="gray"
      variant="subtle"
      href={props.link}
    >
      {props.icon}
    </ActionIcon>
  )
  return (
    <div className={classes.footer}>
      <Container fluid>
        <Group
          gap={0}
          justify="flex-start"
          align="start"
          wrap="nowrap"
        >
          <Icon
            link="https://github.com/bz5989"
            icon={<SiGithub />}
          />
          <Icon
            link="mailto:bryan14916@gmail.com"
            icon={<SiGmail />}
          />
          <Icon
            link="https://www.linkedin.com/in/bryanzhang14916/"
            icon={<SiLinkedin />}
          />
        </Group>
      </Container>
    </div>
  )
}
