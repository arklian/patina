import {
  Title,
  Text,
  Box,
  AspectRatio,
  Divider,
  useComputedColorScheme,
} from '@mantine/core'
import styles from '../Haoking.module.css'

/* Component for basic info and spotify embed on right side of about me page */
export function RightAboutMe() {
  const data = [
    {
      title: 'education',
      subtitle: [
        'b.s. in cs @ rpi | class of 2027',
        "bronx high school of science '23",
      ],
    },
    {
      title: 'bio',
      subtitle: [
        'i like eating food, playing videogames, skating',
        'cats and raccoons',
        'fav song:',
      ],
    },
  ]
  const colorScheme = useComputedColorScheme()

  return (
    <Box
      ml={90}
      mr={350}
      mt={45}
      maw={400}
      className={styles.animate_fade_in_delay}
    >
      <Divider
        color={colorScheme === 'light' ? '#000' : '#fff'}
        mt={120}
        pt={20}
        maw={350}
      />
      {data.map((text) => (
        <div>
          <Title pt={16}>{text.title}</Title>
          {text.subtitle.map((sub) => (
            <Text pt={16}>{sub}</Text>
          ))}
        </div>
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
