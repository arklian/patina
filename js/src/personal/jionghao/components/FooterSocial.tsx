import { Container, Group, ActionIcon, rem } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import classes from './FooterSocial.module.css'

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group
          gap={0}
          className={classes.links}
          justify="space-between"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  )
}
