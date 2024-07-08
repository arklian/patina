import styles from '@/personal/haoking/Haoking.module.css'
import { Pages } from '@/personal/haoking/pages.ts'

/* Component for each individual link in Navbar */
export function NavLink({
  setActive,
  active,
  link,
  label,
}: {
  setActive: any
  active: Pages
  link: string
  label: Pages
}) {
  return (
    <a
      className={label === active ? styles.navlink_current : styles.navlink}
      href={link}
      onClick={setActive}
    >
      {label}
    </a>
  )
}
