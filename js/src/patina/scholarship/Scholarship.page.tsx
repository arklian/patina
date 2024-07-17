import { Title, List } from '@mantine/core'
import { FaCheck } from 'react-icons/fa'
import styles from './Scholarship.module.css'

export function ScholarshipPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_title}>
            {'Patina Network Scholarship Fund'}
            <div className={styles.hero_description}>
              {
                'The Patina Network Scholarship fund is... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </div>
          </div>
          <div>
            <img
              className={styles.hero_image}
              alt={'scholarship hero'}
              src={
                'https://cdn.discordapp.com/attachments/1261068702171009085/1262480237615124571/Group_297559.png?ex=6696bfd8&is=66956e58&hm=2506faf9caa9b3d56c06b7f228d89b3c1fe6137c605e1732b3f2bf80ae694531&'
              }
            />
          </div>
        </div>
      </div>
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
              {'Must be currently enrolled in an undergraduate program'}{' '}
            </List.Item>
            <List.Item>
              {'Must be currently enrolled in an undergraduate program'}{' '}
            </List.Item>
            <List.Item>
              {'Must be currently enrolled in an undergraduate program'}{' '}
            </List.Item>
            <List.Item>
              {'Must be currently enrolled in an undergraduate program'}{' '}
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
      <Title className={styles.gains_title}>{'What Will I Gain?'}</Title>
      <div className={styles.gains}>
        <div className={styles.gains_item}>
          <p className={styles.gains_header}>{'Financial Need'}</p>
          <p className={styles.gains_text}>
            {
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
            }
          </p>
        </div>
        <div className={styles.gains_item}>
          <p className={styles.gains_header}>{'Scholastic Excellence'}</p>
          <p className={styles.gains_text}>
            {
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
            }
          </p>
        </div>
        <div className={styles.gains_item}>
          <p className={styles.gains_header}>{'Career Aspiration'}</p>
          <p className={styles.gains_text}>
            {
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '
            }
          </p>
        </div>
      </div>
    </>
  )
}
