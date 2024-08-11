import { Card, Space, Text, Title } from '@mantine/core'
import styles from './PillarsSection.module.css'

export function PillarSection() {
  return (
    <div className={styles.pillarsSection}>
      <div className={styles.headingContainer}>
        <Title order={4}>{'Our pillars'}</Title>
        <Text>
          {'We organize our programming around three central pillars. '}
        </Text>
      </div>
      <Space h={'lg'} />
      <div className={styles.cardContainer}>
        <Card className={styles.cards}>
          <Space h={'sm'} />
          <Title order={4}>{'Education'}</Title>
          <Space h={'sm'} />
          <Text className={styles.textContainer}>
            {'We create safe spaces to teach and learn from each other on the diverse history ' +
              'and culture of AANHPI people, so that we can better advocate for each other.'}
          </Text>
        </Card>
        <Card className={styles.cards}>
          <Title order={4}>{'Community'}</Title>
          <Space h={'sm'} />
          <Text>
            {'We celebrate each other’s unique experiences and aim to foster strong, genuine ' +
              'bonds within our community.'}
          </Text>
        </Card>
        <Card className={styles.cards}>
          <Title order={4}>{'Philanthropy'}</Title>
          <Space h={'sm'} />
          <Text>
            {'We use our time and resources to give back to the communities that raised us' +
              ' and uplift our under-resourced brothers and sisters.'}
          </Text>
        </Card>
      </div>
    </div>
  )
}
