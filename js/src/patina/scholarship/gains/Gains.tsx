import { Title } from '@mantine/core'
import styles from './Gains.module.css'

/** Component to display the gains from the scholarship program */
export function Gains() {
  return (
    <>
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
