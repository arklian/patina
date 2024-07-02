import { Flex, Grid, Title, Text, Space, Anchor } from '@mantine/core'
import classes from './Fun.module.css'

export function FunPage() {
  return (
    <Flex
      mr="2rem"
      direction="column"
    >
      <Title
        className={classes.title}
        component="span"
        ml="5rem"
      >
        {'Fun'}
      </Title>
      <Grid
        ml="5rem"
        justify="flex-start"
        component="span"
      >
        <Grid.Col
          span={{ base: 12, md: 6, lg: 3 }}
          order={{ base: 4, lg: 1 }}
        >
          <Title
            component="span"
            className={classes.title2}
          >
            {'Spotify'}
          </Title>
          <Space />
          <iframe
            className={classes.playlist}
            title="playlist"
            src="https://open.spotify.com/embed/playlist/3ffIenWiy0XmHvnamjA3qT?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          >
            {'Hello :)'}
          </iframe>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 6, lg: 3 }}
          order={{ base: 1, lg: 2 }}
        >
          <Title
            component="span"
            className={classes.title2}
          >
            {'Fun Websites'}
          </Title>
          <Space />
          <Anchor href="https://scratch.mit.edu/projects/10128407">
            {'Minecraft Nostalgia'}
          </Anchor>
          <Space />
          <Anchor href="https://www.coolmathgames.com/0-fireboy-and-water-girl-in-the-forest-temple">
            {'Fireboy and Watergirl'}
          </Anchor>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 6, lg: 3 }}
          order={{ base: 2, lg: 3 }}
        >
          <Title
            component="span"
            className={classes.title2}
          >
            {'Board Games'}
          </Title>
          <Space />
          <Text component="span">{'Board Games I vibe with:'}</Text>
          <Space />
          <Text component="span">{'Dominion'}</Text>
          <Space />
          <Text component="span">{'Terraforming Mars'}</Text>
          <Space />
          <Text component="span">{'Root'}</Text>
          <Space />
          <Text component="span">{'Wingspan'}</Text>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 6, lg: 3 }}
          order={{ base: 3, lg: 4 }}
        >
          <Title
            component="span"
            className={classes.title2}
            ta="center"
          >
            {'Wordle'}
          </Title>
          <Space />
          <iframe
            src="https://www.nytimes.com/games/wordle"
            title="Wordle"
            height="450"
            width="350"
            style={{ color: 'red', border: '2px solid gray' }}
          />
        </Grid.Col>
        <Grid.Col
          span={12}
          order={{ base: 5, lg: 5 }}
        >
          <Text component="span">{'Usually, I use this gamertag:'}</Text>
          <Space />
          <Title
            component="span"
            className={classes.title2}
          >
            {'Abstraction7'}
          </Title>
        </Grid.Col>
      </Grid>
    </Flex>
  )
}
