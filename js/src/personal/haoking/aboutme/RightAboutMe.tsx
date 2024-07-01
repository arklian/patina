import { Title, Text, Box, AspectRatio, Divider } from '@mantine/core'
import styles from '../Haoking.module.css'
import { theme } from '../theme.ts'

/* Component for basic info and spotify embed on right side of about me page */
export function RightAboutMe() {
  const text: string[] = [
    'b.s. in cs @ rpi | class of 2027',
    "bronx high school of science '23",
    'i like eating food, playing videogames, skating',
    'cats and raccoons',
  ]
  return (
    <Box
      ml={90}
      mr={350}
      mt={45}
      maw={400}
      className={styles.animate_fade_in_delay}
    >
      <Divider
        mt={120}
        pt={20}
        maw={350}
        color={theme.colors.white[6]}
      />
      <Title c={theme.colors.white[2]}>{'Info'}</Title>
      {text.map((info) => (
        <Text
          c={theme.colors.white[2]}
          pt={16}
        >
          {info}
        </Text>
      ))}
      <AspectRatio
        maw={400}
        m={15}
      >
        <iframe
          title={'spotify_embed'}
          className={styles.spotify}
          src="https://open.spotify.com/embed/track/5Gt9bxniM1SxN61yRzRhXL?utm_source=generator"
        />
      </AspectRatio>
    </Box>
  )
}
