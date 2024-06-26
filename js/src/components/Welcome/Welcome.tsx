import { Title, Text, Anchor } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import classes from './Welcome.module.css'
import { RootRoutes } from '../../Routes'

export function Welcome() {
  return (
    <>
      <Title
        className={classes.title}
        ta="center"
        mt={100}
      >
        {'Welcome to '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          {'Mantine'}
        </Text>
      </Title>
      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
      >
        {
          'This starter Vite project includes a minimal setup, if you want to learn'
        }
        {'more on Mantine + Vite integration follow '}
        <Anchor
          href="https://mantine.dev/guides/vite/"
          size="lg"
        >
          {'this guide'}
        </Anchor>
        {'. To get started edit pages/Home.page.tsx file.'}
      </Text>
      <ul>
        <Text>{'Personal pages'}</Text>
        {RootRoutes.map((routeObj) => (
          <li>
            <NavLink to={routeObj.path ?? '/'}>{routeObj.path ?? '/'}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}
