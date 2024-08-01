import { SimpleGrid, Title, Text, Group, Button, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Hero.module.css'

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
          {'Patina Network Mentorship'}
        </Title>
        <Text className={styles.description}>
          {'The Patina Network mentorship program is open to students currently ' +
            'enrolled in any US college program or recently graduated who are ' +
            'interested in guidance with their workplace readiness.'}
        </Text>
        <Group justify={'left'} pt={'md'}>
          <Button
            variant={'filled'}
            color={'rgba(255, 255, 255, 1)'}
            size={'md'}
            autoContrast
          >
            {'Apply Now'}
          </Button>
        </Group>
      </div>
      <Group justify={'center'} pt={'lg'}>
        <Image
          className={styles.mentorImage}
          src={imageUrls.mentorshipHero.src}
          alt="Mentorship Image"
        />
      </Group>
    </SimpleGrid>
  )
}
