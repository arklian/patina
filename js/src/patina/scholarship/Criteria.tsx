import { List, Title } from '@mantine/core'
import { FaCheck } from 'react-icons/fa'
import styles from './Criteria.module.css'

/** Component to create stacks of information like steps */
export function Criteria() {
  return (
    <>
      <div className={styles.criteria}>
        <div className={styles.selection}>
          <Title className={styles.selection_title}>
            {'Selection criteria'}
          </Title>
          <List
            className={styles.checklist}
            spacing="20"
            icon={<FaCheck color={'#4DFFB0'} />}
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
          <p className={styles.quote_text}>
            {
              'Anyone strongly impacted by the AANHPI community is encouraged to apply- no matter what race'
            }
          </p>
        </div>
      </div>
    </>
  )
}
