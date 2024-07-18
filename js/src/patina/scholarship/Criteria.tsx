import { List, Text, Title, useMantineTheme } from '@mantine/core'
import { FaCheck } from 'react-icons/fa'
import styles from './Criteria.module.css'

/** Component to create stacks of information like steps */
export function Criteria() {
  const theme = useMantineTheme()

  return (
    <div className={styles.criteria}>
      <div className={styles.selection}>
        <Title className={styles.selection_title}>{'Selection criteria'}</Title>
        <List
          className={styles.checklist}
          spacing="20"
          icon={<FaCheck color={theme.other.patinaGreenLight} />}
        >
          <List.Item>
            {'Must be currently enrolled in an undergraduate program'}
          </List.Item>
          <List.Item>
            {'Must be currently enrolled in an undergraduate program'}
          </List.Item>
          <List.Item>
            {'Must be currently enrolled in an undergraduate program'}
          </List.Item>
          <List.Item>
            {'Must be currently enrolled in an undergraduate program'}
          </List.Item>
          <List.Item>
            {'Must be currently enrolled in an undergraduate program '}
          </List.Item>
        </List>
      </div>
      <div className={styles.quote}>
        <Text className={styles.quote_text}>
          {
            'Anyone affected by issues impacting the AANHPI community is encouraged to apply!'
          }
        </Text>
      </div>
    </div>
  )
}
