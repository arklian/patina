import { SimpleGrid, Title, Text, Group, Button, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from '@/patina/mentor/hero/Hero.module.css'

/**
 * Hero component for the Patina Network Mentorship program.
 * Displays a title, description, application button, and an image.
 */
export function Hero() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <SimpleGrid cols={largeScreen ? 2 : 1} spacing="xl" mb={'7rem'} mt={'4rem'}>
      <div>
        <Title className={styles.title} ta={'left'}>
          {'Be a Patina Network Mentor'}
        </Title>
        <Text className={styles.description}>
          {
            'Make a difference in a student’s career by becoming a Patina Network mentor. '
          }
        </Text>
        <Group justify={'left'} pt={'md'}>
          <Button
            variant="filled"
            color="var(--mantine-color-patina-blue-light)"
            size={'md'}
            autoContrast
          >
            <Text className={styles.fonts}>{'Apply Now'}</Text>
          </Button>
        </Group>
      </div>
      <Image
        className={styles.mentorImage}
        src={imageUrls.mentorApplyHero.src}
        alt="Mentorship Image"
      />
    </SimpleGrid>
  )
}
