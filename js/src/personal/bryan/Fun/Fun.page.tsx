import { Flex, Title, Text } from '@mantine/core'
import classes from './Fun.module.css'

export function FunPage() {
  return (
    <>
      <Title
        className={classes.title}
        component="span"
        ml="5rem"
      >
        {'Fun'}
      </Title>
      <Flex
        justify="flex-start"
        component="span"
      >
        <Title
          component="span"
          className={classes.position_websites_title}
        >
          {'Fun Websites'}
        </Title>
        <Text
          component="span"
          className={classes.position_websites_text}
        >
          {'boopity doopity'}
        </Text>
        <Title
          component="span"
          className={classes.position_boardgames_title}
        >
          {'Board Games!!'}
        </Title>
        <Text
          component="span"
          className={classes.position_boardgames_text}
        >
          {':)'}
        </Text>
        <Title
          component="span"
          className={classes.position_nyt_title}
        >
          {'NYT Games'}
        </Title>
        <Text
          component="span"
          className={classes.position_nyt_text}
        >
          {':)'}
        </Text>
      </Flex>
      <Text
        component="span"
        className={classes.position_gamertag_text}
      >
        {'Usually, I use this gamertag:'}
      </Text>
      <Title
        component="span"
        className={classes.position_gamertag}
      >
        {'Abstraction7'}
      </Title>
    </>
  )
}
