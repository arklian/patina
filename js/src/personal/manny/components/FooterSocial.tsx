import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterSocial.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <a href={'https://www.instagram.com/born_reyes'} target={'_blank'} rel={'noopener noreferrer'}>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(35), height: rem(35) }} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href={'https://github.com/MReyes1241'} target={'_blank'} rel={'noopener noreferrer'}>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandGithub style={{ width: rem(35), height: rem(35) }} stroke={1.5} />
            </ActionIcon>
          </a>
          <a href={'https://www.linkedin.com/in/manuel-reyes-jr-swe/'} target={'_blank'} rel={'noopener noreferrer'}>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin style={{ width: rem(35), height: rem(35) }} stroke={1.5} />
            </ActionIcon>
          </a>
        </Group>
      </Container>
    </div>
  );
}
