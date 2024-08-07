import {
  Text,
  Title,
  Box,
  Flex,
  Image,
  useComputedColorScheme,
} from '@mantine/core'
import styles from '@/personal/haoking/Haoking.module.css'
import { theme } from '@/personal/haoking/theme.ts'

/* Component for left side of Projects page */
export function LeftProjects({
  displayedImageSrc,
}: {
  displayedImageSrc: string
}) {
  const colorScheme = useComputedColorScheme()

  return (
    <Box ml={90} mt={45} className={styles.animate_fade_in}>
      <Flex direction="column">
        <Title className={styles.title}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={
              colorScheme === 'light' ?
                { from: theme.colors.accent[2], to: theme.colors.accent[1] }
              : { from: theme.colors.black[0], to: theme.colors.black[1] }
            }
          >
            {'Projects'}
          </Text>
        </Title>
        {displayedImageSrc === '' ? null : (
          <Image
            className={styles.animate_fade_in_projectimg}
            h={200}
            src={displayedImageSrc}
          />
        )}
      </Flex>
    </Box>
  )
}
