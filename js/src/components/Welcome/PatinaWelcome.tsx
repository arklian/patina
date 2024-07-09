import {
  Title,
  Text,
  NavLink,
  Stack,
  Center,
  Container,
  useMantineTheme,
} from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'
import classes from './Welcome.module.css'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle.tsx'

/** Temporary landing page for the root route */
export function PatinaWelcome() {
  const theme = useMantineTheme()

  return (
    <>
      <Title
        className={classes.title}
        ta="center"
        mt={100}
      >
        <Text
          inherit
          variant="gradient"
          component="span"
          // gradient={{ from: 'teal.4', to: 'teal.9' }}
          gradient={{
            from: theme.colors.patina[4],
            to: theme.colors.patina[9],
          }}
        >
          {'Welcome to Patina'}
        </Text>
      </Title>
      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
      >
        {'This is a temporary landing page for the Patina project.'}
      </Text>
      <Container mb={40}>
        <ColorSchemeToggle />
      </Container>
      <Center>
        <Stack
          align={'flex-start'}
          gap={0}
        >
          <Title order={2}>
            <Text
              inherit
              component="span"
              c={theme.colors.patina[7]}
            >
              {'Personal Portfolio Websites'}
            </Text>
          </Title>
          <NavLink
            href={'personal/'}
            label={'Personal Websites Homepage'}
            leftSection={
              <IconHome2
                size="1rem"
                stroke={1.5}
              />
            }
          />
        </Stack>
      </Center>
    </>
  )
}
