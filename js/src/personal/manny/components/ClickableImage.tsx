import styles from './ClickableImage.module.css'
import PersonalImage from '../assets/PicOfManny.jpg'

export function ClickableImage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={PersonalImage}
          alt="Manny"
          className={styles.personalImage}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.menu}>
          <div
            className={styles.menuItem}
            style={{ transform: 'rotate(-20deg) translateX(-50%)' }}
          >
            {'About Me'}
          </div>
          <div
            className={styles.menuItem}
            style={{ transform: 'rotate(-10deg) translateX(-30%)' }}
          >
            {'Resume'}
          </div>
          <div
            className={styles.menuItem}
            style={{ transform: 'rotate(0deg) translateX(-30%)' }}
          >
            {'Projects'}
          </div>
          <div
            className={styles.menuItem}
            style={{ transform: 'rotate(15deg) translateX(-73%)' }}
          >
            {'Blog'}
          </div>
          <div
            className={styles.menuItem}
            style={{ transform: 'rotate(20deg) translateX(-65%)' }}
          >
            {'Contact'}
          </div>
        </div>
      </div>
    </div>
  )
}
