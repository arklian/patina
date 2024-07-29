import {
  Title,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Anchor,
  Flex,
} from '@mantine/core'
import classes from '@/personal/bryan/Bryan.module.css'
import skiing from '@/personal/bryan/assets/images/bryan_skiing.png'
import mathey from '@/personal/bryan/assets/images/mathey.png'
import tower from '@/personal/bryan/assets/images/tower.png'

export function AboutMePage() {
  return (
    <>
      <Title className={classes.title} component="span" ml="5rem" mb="2rem">
        {'About Me'}
      </Title>
      <Flex
        justify="flex-start"
        component="span"
        ml="5rem"
        gap="2rem"
        direction={{ base: 'column', md: 'row', sm: 'row' }}
      >
        <Stack>
          <Image h={310} src={skiing} />
          <Title component="span">
            {'cs @ princeton'}
            <Space h="s" />
            {'Class of 2026'}
          </Title>
          <Group justify="center" mr="1.5rem">
            <Image h={100} w={100} src={mathey} />
            <Image h={120} w={120} src={tower} />
          </Group>
        </Stack>
        <Stack>
          <Text component="span">{'Hi, I’m Bryan!'}</Text>
          <Space />
          <Text component="span">
            {'I’m a head Copy editor for '}{' '}
            <Anchor href="https://www.dailyprincetonian.com/" target="_blank">
              {'The Daily Princetonian'}
            </Anchor>
          </Text>
          <Text component="span">
            {
              'I also lab TA for the Intro COS lab (specifically for COS 217/226)'
            }
          </Text>
          <Text component="span">
            {'Proud member of Mathey College and Tower Club'}
          </Text>
        </Stack>
        <Stack>
          <Title component="span" className={classes.title2}>
            {'Interests'}
          </Title>
          <Text component="span">
            {'I vibe with board games'}
            <Space />
            {'Also nature'}
            <Space />
            {'Also crosswords, but moreso making them'}
          </Text>
          <Anchor
            target="_blank"
            href="https://crossword.dailyprincetonian.com/"
          >
            {'Puzzles!'}
          </Anchor>
        </Stack>
      </Flex>
    </>
  )
}
