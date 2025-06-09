import { Container, Text, Title } from '@mantine/core'
import classes from './Welcome.module.css'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle.tsx'

/** Temporary landing page for the root route */
export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          {'Welcome to Patina'}
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
        {'This is a temporary landing page for the Patina project.'}
      </Text>
      <Container mb={40}>
        <ColorSchemeToggle />
      </Container>
    </>
  )
}
