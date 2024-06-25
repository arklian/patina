import {
  MantineProvider,
  createTheme,
  Title,
  Text,
  Button,
  Box,
  Flex,
  Image,
  em,
  rem,
} from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { useState } from 'react'
import styles from './Haoking.module.css'

const darkTheme = createTheme({
  colors: {
    white: [
      '#f2f2f2',
      '#e0e0e0',
      '#c9c9c9',
      '#f5fefd',
      '#fcfbfc',
      '#fdf6e4',
      '#fafafa',
      '#fbfcfa',
      '#fffefc',
      '#faf9f6',
    ],
    black: [
      '#6b6b6b',
      '#545454',
      '#363636',
      '#262626',
      '#212121',
      '#202020',
      '#101010',
      '#303030',
      '#1f1f1f',
      '#1a1a1a',
    ],
    blue: [
      '#7472db',
      '#4536f7',
      '#483fa1',
      '#202378',
      '#0e2159',
      '#6484e3',
      '#786dfc',
      '#0b2f9c',
      '#051440',
      '#1b2540',
    ],
  },
  fontFamily: 'Helvetica, sans-serif',
})

export function HaokingPage() {
  return (
    <>
      <Box
        bg={darkTheme.colors.black[4]}
        h={rem('100vh')}
        w={rem('100vw')}
      >
        <Flex
          justify="flex-start"
          direction="row"
        >
          <Box
            ml={90}
            mt={75}
            maw={600}
          >
            <Title
              ff="Helvetica, sans-serif"
              className={styles.title}
            >
              <Text
                inherit
                variant="gradient"
                component="span"
                gradient={{
                  from: darkTheme.colors.black[0],
                  to: darkTheme.colors.black[1],
                }}
              >
                {'Haoking Luo'}
              </Text>
            </Title>
            <Title
              fz={40}
              c={darkTheme.colors.white[2]}
            >
              {'swe guy'}
            </Title>
            <Flex gap={15}>
              <Button
                leftSection={<IconBrandGithub size={16} />}
                mt={15}
                component="a"
                href="https://github.com/luoh00"
                target="_blank"
                color={darkTheme.colors.black[0]}
              >
                {'GitHub'}
              </Button>
              <Button
                leftSection={<IconBrandLinkedin size={16} />}
                mt={15}
                component="a"
                href="https://github.com/luoh00"
                target="_blank"
                color={darkTheme.colors.black[0]}
              >
                {'LinkedIn'}
              </Button>
            </Flex>
            <Image
              p={15}
              maw={375}
              radius="xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/1200px-Raccoon_in_Central_Park_%2835264%29.jpg"
            />
          </Box>
          <Box
            ml={90}
            mt={75}
            maw={400}
          >
            <Title
              ff="Helvetica, sans-serif"
              className={styles.title}
              c={darkTheme.colors.white[1]}
            >
              {'...'}
            </Title>
            <Title c={darkTheme.colors.white[2]}>{'Info'}</Title>
            <Text
              c={darkTheme.colors.white[2]}
              pt={16}
            >
              {'b.s. in cs @ rpi | class of 2027'}
            </Text>
            <Text
              c={darkTheme.colors.white[2]}
              pt={16}
            >
              {"bronx high school of science '23"}
            </Text>
            <Text
              c={darkTheme.colors.white[2]}
              pt={16}
            >
              {'i like eating food, playing videogames, skating'}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
