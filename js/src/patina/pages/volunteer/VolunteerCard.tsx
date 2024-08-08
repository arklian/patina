import { Modal, Card, Title, Text, Button, Space } from '@mantine/core'
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

  // This function is responsible for making the subheading bold, by searching for a specific identifier and placing
  // styling onto it
  const renderModalContent = (content: string) =>
    content.split('\n').map((line, index) => {
      const parts = line.split('**')
      return (
        <Text key={index} size="sm">
          {parts.map((part, i) =>
            i % 2 === 1 ?
              <Text key={i} component="span" fw={900} size="lg">
                {part}
              </Text>
            : <span key={i}>{part}</span>,
          )}
        </Text>
      )
    })

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
        <Space h="xs" />
        <Text size="sm" className={styles.moreInfo}>
          {'Click to see more info'}
        </Text>
      </Card>

      <Modal
        opened={opened}
        onClose={close}
        title={<Title className={styles.modalTitle}>{title}</Title>}
        withCloseButton
        size={'auto'}
      >
        <div className={styles.modalContent}>
          <div>{renderModalContent(modalContent)}</div>
          <Space h="md" />
          <div className={styles.buttonContainer}>
            <Button
              component="a"
              variant="filled"
              color={'var(--mantine-color-patina-green-light)'}
              autoContrast
              target="_blank"
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSeToUXtesptLJSurn4Zt0WEL2giQrrXPPYaTsh71c_Cf9WSZg/viewform'
              }
            >
              <Text c={'black'} size="20">
                {'Apply Now'}
              </Text>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
