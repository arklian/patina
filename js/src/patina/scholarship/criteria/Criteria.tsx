import { Box, List, Text, Title, useMantineTheme } from '@mantine/core'
import { FaCheck } from 'react-icons/fa'
import styles from './Criteria.module.css'

/** Component to create stacks of information like steps */
export function Criteria() {
  const theme = useMantineTheme()

  return (
    <Box className={styles.criteria_container}>
      <div className={styles.criteria}>
        <div className={styles.selection}>
          <Title className={styles.selection_title}>
            {'Selection criteria'}
          </Title>
          <List
            className={styles.checklist}
            spacing="20"
            icon={<FaCheck color={theme.other.patinaGreenLight} />}
          >
            <List.Item>
              {'Must be currently enrolled in an undergraduate program'}
            </List.Item>
            <List.Item>
              {
                'Be able to describe your ethnicity, heritage, or ancestry in relation to the AANHPI communities'
              }
            </List.Item>
            <List.Item>
              {
                'Be a citizen, national, or legal permanent resident of the United States. DACA students are also eligible at this time'
              }
            </List.Item>
            <List.Item>
              {
                'Have applied for federal financial aid using the Free Application for Federal Student Aid (FAFSA) for the current academic year. It is not required to have received federal financial aid. '
              }
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
    </Box>
  )
}
