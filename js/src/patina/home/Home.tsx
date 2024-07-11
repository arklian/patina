import { Initiatives } from '@/patina/home/Initiatives'
import styles from '@/patina/home/Home.module.css'

/** Home Page Component */
export function Home() {
  return (
    <>
      <div className={styles.description}>
        <Initiatives></Initiatives>
      </div>
    </>
  )
}
