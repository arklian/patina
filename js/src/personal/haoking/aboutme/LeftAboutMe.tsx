import {
  Title,
  Text,
  Box,
  Flex,
  Image,
  ActionIcon,
  useComputedColorScheme,
} from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { theme } from '@/personal/haoking/theme.ts'
import styles from '@/personal/haoking/Haoking.module.css'
import { Time } from '@/personal/haoking/components/Time.tsx'

/** Component containing image, time, contact info on left side of about me page */
export function LeftAboutMe() {
  const colorScheme = useComputedColorScheme()
  return (
    <Box
      ml={90}
      mt={45}
      className={styles.animate_fade_in}
    >
      <Title className={styles.title}>
        <Text
          inherit
          variant="gradient"
          gradient={
            colorScheme === 'light' ?
              { from: theme.colors.accent[2], to: theme.colors.accent[1] }
            : { from: theme.colors.black[0], to: theme.colors.black[1] }
          }
        >
          {'Haoking Luo'}
        </Text>
      </Title>
      <Flex gap={15}>
        <Title fz={40}>{'swe guy'}</Title>
        <ActionIcon
          className={styles.action}
          component="a"
          href="https://github.com/luoh00"
          target="_blank"
          mt={15}
          variant="transparent"
          color={colorScheme === 'light' ? theme.colors.accent[9] : 'gray'}
        >
          <IconBrandGithub size={24} />
        </ActionIcon>
        <ActionIcon
          className={styles.action}
          component="a"
          href="https://linkedin.com/in/haoking-l-0a5ab61b3"
          target="_blank"
          mt={15}
          variant="transparent"
          color={colorScheme === 'light' ? theme.colors.accent[9] : 'gray'}
        >
          <IconBrandLinkedin size={24} />
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
