import { Title, Text, Box, Flex, Image, ActionIcon } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import styles from './Haoking.module.css'
import { theme } from './theme.ts'
import { Time } from './Time.tsx'

export function LeftAboutMe() {
  return (
    <Box
      ml={90}
      mt={45}
      maw={600}
    >
      <Title className={styles.title}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{
            from: theme.colors.black[0],
            to: theme.colors.black[1],
          }}
        >
          {'Haoking Luo'}
        </Text>
      </Title>
      <Flex gap={15}>
        <Title
          fz={40}
          c={theme.colors.white[2]}
        >
          {'swe guy'}
        </Title>
        <ActionIcon
          component="a"
          href="https://github.com/luoh00"
          target="_blank"
          mt={15}
          color={theme.colors.black[0]}
        >
          <IconBrandGithub size={16} />
        </ActionIcon>
        <ActionIcon
          component="a"
          href="https://github.com/luoh00"
          target="_blank"
          mt={15}
          color={theme.colors.black[0]}
        >
          <IconBrandLinkedin size={16} />
        </ActionIcon>
      </Flex>
      <Image
        pt={15}
        pb={15}
        maw={315}
        radius="xl"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/1200px-Raccoon_in_Central_Park_%2835264%29.jpg"
      />
      <Time />
    </Box>
  )
}
