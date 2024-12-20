import {
  Center,
  Container,
  NavLink,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'
import classes from './Welcome.module.css'
import { PersonalRoutes } from '@/personal/Personal.routes.tsx'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle.tsx'

/** Temporary landing page for the root route */
export function Welcome() {
  const theme = useMantineTheme()

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{
            from: theme.colors.patina[4],
            to: theme.colors.patina[9],
          }}
        >
          {'Welcome to Patina'}
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
        {'This is a temporary landing page for the Patina project.'}
      </Text>
      <Container mb={40}>
        <ColorSchemeToggle />
      </Container>
      <Center>
        <Stack align={'flex-start'} gap={0}>
          <Title order={2}>
            <Text inherit component="span" c={theme.colors.patina[7]}>
              {'Personal Portfolio Websites'}
            </Text>
          </Title>
          {PersonalRoutes.map((routeObj, i) => (
            <NavLink
              key={routeObj.path || i}
              href={`/personal/${routeObj.path ?? ''}`}
              label={routeObj.description ?? '/'}
              leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            />
          ))}
        </Stack>
      </Center>
    </>
  )
}
