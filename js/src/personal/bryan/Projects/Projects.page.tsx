import { Text, Title, Grid, Anchor } from '@mantine/core'
import classes from './Projects.module.css'

export function ProjectsPage() {
  return (
    <>
      <Title
        className={classes.title}
        component="span"
        ml="5rem"
      >
        {'Projects'}
      </Title>
      <Grid
        ml="5rem"
        component="span"
        justify="center"
        grow
      >
        <Grid.Col span={12}>
          <Text>{'Currently done projects'}</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'This site'}
          </Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>{'Boop'}</Text>
          <Anchor href="https://github.com/arklian/patina/tree/main/js/src/personal/bryan">
            {'Github'}
          </Anchor>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'COS 429'}
          </Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>{'Boop'}</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text>{'Future projects'}</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'COS 333'}
          </Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>{'Boop'}</Text>
        </Grid.Col>
        <Grid.Col span={2}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'COS 397'}
          </Title>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>{'Boop'}</Text>
        </Grid.Col>
      </Grid>
    </>
  )
}
