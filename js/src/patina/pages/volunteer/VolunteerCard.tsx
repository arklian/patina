import { Modal, Card, Title, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import styles from './VolunteerCard.module.css'

interface CardProps {
  title: string
  description: string
  type: string
  modalContent: string
}

export function VolunteerCard({
  title,
  description,
  type,
  modalContent,
}: CardProps) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Card
        onClick={open}
        className={styles.card}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.cardContent}>
          <Title order={4} className={styles.cardTitle}>
            {title}
          </Title>
          <Text size="sm" className={styles.cardRoleType}>
            {type}
          </Text>
          <Text size="sm" className={styles.cardDescription}>
            {description}
          </Text>
        </div>
        <Text size="sm" className={styles.moreInfo}>
          {'Click to see more info'}
        </Text>
      </Card>

      <Modal
        opened={opened}
        onClose={close}
        title={null}
        centered
        className={styles.modal}
      >
        <div className={styles.modalContentContainer}>
          <Title order={4} className={styles.cardTitle}>
            {title}
          </Title>
          <Text size="sm" className={styles.modalContent}>
            {modalContent}
          </Text>
        </div>
      </Modal>
    </>
  )
}
