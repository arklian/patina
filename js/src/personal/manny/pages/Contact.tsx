import {
  Container,
  Title,
  Text,
  Anchor,
  MantineProvider,
  Card,
} from '@mantine/core'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <MantineProvider>
      <Container className={styles.contactWrapper}>
        <Title className={styles.title}>{'Contact Information'}</Title>
        <Card
          className={styles.contactCard}
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
        >
          <div className={styles.contactInfo}>
            <Text>
              {'Email: '}
              <Anchor href="mailto:manuelreyes1241@outlook.com">
                {'manuelreyes1241@outlook.com'}
              </Anchor>
            </Text>
            <Text>
              {'Phone: '}
              <Anchor href="tel:+13473173990">{'+1 (347) 317-3990'}</Anchor>
            </Text>
            <Text>{'Address: New York City'}</Text>
            <Text>{'Working hours: 9 a.m. – 6 p.m.'}</Text>
          </div>
        </Card>
      </Container>
    </MantineProvider>
  )
}
