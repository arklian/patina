import { Flex, Text, Title, Grid, Anchor } from '@mantine/core'
import classes from './Projects.module.css'

export function ProjectsPage() {
  return (
    <Flex
      mr="2rem"
      direction={{ base: 'column', sm: 'row' }}
    >
      <Title
        ml="5rem"
        className={classes.title}
        component="span"
      >
        {'Projects'}
      </Title>
      <Grid
        ml="5rem"
        component="span"
        justify="center"
      >
        <Grid.Col span={12}>
          <Text>{'Currently done projects'}</Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 2 }}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'This site'}
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, lg: 4 }}>
          <Anchor href="https://github.com/arklian/patina/tree/main/js/src/personal/bryan">
            {'Github'}
          </Anchor>
          <Text>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?'
            }
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 2 }}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'COS 429'}
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, lg: 4 }}>
          <Text>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?'
            }
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text>{'Future projects'}</Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 2 }}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'COS 333'}
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, lg: 4 }}>
          <Text>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?'
            }
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 2 }}>
          <Title
            component="span"
            className={classes.title2}
          >
            {'COS 397'}
          </Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, lg: 4 }}>
          <Text>
            {
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur non repudiandae enim adipisci?'
            }
          </Text>
        </Grid.Col>
      </Grid>
    </Flex>
  )
}
