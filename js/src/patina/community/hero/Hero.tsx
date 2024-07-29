import { SimpleGrid, Title, Text, Button, Stack, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { imageUrls } from '@/patina/assets/images'
import styles from './Hero.module.css'

export function Hero() {
  const largeScreen = useMediaQuery('(min-width: 60em)')

  return (
    <SimpleGrid cols={largeScreen ? 2 : 1} spacing={'xl'}>
      <Stack>
        <Title size={64}>{'Patina Network Community Events'}</Title>
        <Text className={styles.text}>
          {
            "Patina Network's community events include ...  aslkfjlsafjas;f jasl;fj dslgh lhgd odsfh idsgid iuasfoi2iurhiu2hs saoifjsoai"
          }
        </Text>
        <div>
          <Button className={styles.button}>{'Sign Up'}</Button>
        </div>
      </Stack>
      <div>
        <Image src={imageUrls.communityHero.src} alt={'placeholder'} />
      </div>
    </SimpleGrid>
  )
}
