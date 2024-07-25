import { SimpleGrid, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Cards } from '@/patina/mentorship/gain/Cards.tsx'
import styles from './Gain.module.css'
// Defining the Gain component
export function Gain() {
  const largeScreen = useMediaQuery('(min-width: 40em)')
  return (
    <div>
      <Title className={styles.title}>{'What Will I Gain?'}</Title>
      <SimpleGrid cols={largeScreen ? 3 : 1}>
        <Cards />
        <Cards />
        <Cards />
      </SimpleGrid>
    </div>
  )
}
