import styles from './quotes.module.css'

export function Quotes() {
  return (
    <div className={styles.hitokoto}>
      <div className={styles.content}>
        <span className={styles.text}>
          {"Tomorrow's the last of my worries."}
        </span>
        <span className={styles.from}>{'-「Echo」'}</span>
      </div>
    </div>
  )
}
