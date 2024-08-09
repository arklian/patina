import { Text, Button, Space } from '@mantine/core'
import { Stacks } from '@/patina/components/Stacks'
import styles from './Application.module.css'

const applyStack = [
  {
    title: 'Add Prerequisite Documents',
    description: (
      <Text>
        {'FAFSA Financial Aid'}
        <Space h="xs" />
        {'Academic Transcripts'}
      </Text>
    ),
  },
  {
    title: 'Personal Statement',
    description: (
      <Text>
        {'Please answer these two questions (500 words each max).'}
        <Space h="xs" />
        {
          'How did your AANHPI heritage or ancestry affect your personal, educational, and professional journey?'
        }
        <Space h="xs" />
        {'How do you plan to use this scholarship?'}
      </Text>
    ),
  },
  {
    title: 'Letter of Recommendation',
    description:
      'Please select a recommender who knows you in an educational or professional manner. They should not be family members nor distant relatives.',
  },
  {
    title: 'Extracurriculars',
    description:
      'Describe your commitment to your extracurriculars and any leadership roles you may have held. (100 words max)',
  },
]

/** Displays steps to apply to the scholarship */
export function Application() {
  return (
    <div className={styles.container}>
      <Text className={styles.title}>{'How to Apply'}</Text>
      <Stacks items={applyStack} />
      <div className={styles.buttonContainer}>
        <Button
          component="a"
          className={styles.appButton}
          variant="filled"
          color="var(--mantine-color-patina-green-light)"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfE93_PaX8Eynv_6zdMQnYHiljFq7Ci_E0_9hzRs2z3aSE3-g/viewform?fbzx=-2135089361293927732"
        >
          <Text className={styles.appButtonText} size="20" fw={600}>
            {'Apply Here'}
          </Text>
        </Button>
      </div>
    </div>
  )
}
