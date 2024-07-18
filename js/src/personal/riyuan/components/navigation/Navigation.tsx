import React, { useState } from 'react'
import { Button, Image, List, Input, Stack, Text } from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faHouse,
  faPerson,
  faFolder,
  faIdCard,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import pfpImage from '@/personal/riyuan/assets/images/pfp.jpg'
import styles from '@/personal/riyuan/components/navigation/Navigation.module.css'

interface CustomHeaderProps {
  data: {
    image: string
    name: string
  }
  toggleShell: () => void
  isClosed: boolean
}

/**
 *  Renders a header on top of the navigation bar
 *  Provides a visual branding element and toggle functionality for the navigation menu
 */
const CustomHeader = ({ data, toggleShell, isClosed }: CustomHeaderProps) => (
  <header className={styles.header}>
    <div className={styles.ImageText}>
      <span className={styles.image}>
        <Image src={data.image} alt={'Profile pic'} />
      </span>
      {isClosed && (
        <div className={`${styles.text} ${styles.logoText}`}>
          <Text className={styles.text}>{`${data.name}'s`}</Text>
          <Text className={styles.text}>{'Web'}</Text>
        </div>
      )}
    </div>
    <Button className={styles.toggle} onClick={toggleShell}>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  </header>
)

/**
 * Renders an individual navigation item
 * Allows users to navigate to different sections of the site
 */
const NavItem = ({
  title,
  icon,
  link,
  isOpen,
}: {
  title: string
  icon: IconDefinition
  link: string
  isOpen: boolean
}) => (
  <div className={styles.navLink}>
    <a href={link} className={styles.navItem}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {isOpen && <span className={`${styles.text}`}>{title}</span>}
    </a>
  </div>
)

/**
 * Renders a list of navigation items
 * Groups navigations items together for the navigation bar
 */
const NavList = ({
  items,
  isOpen,
}: {
  items: { title: string; icon: IconDefinition; link: string }[]
  isOpen: boolean
}) => (
  <Stack className={styles.navList}>
    {items.map((item, index) => (
      <NavItem
        key={index}
        title={item.title}
        icon={item.icon}
        link={item.link}
        isOpen={isOpen}
      />
    ))}
  </Stack>
)

const SearchBox: React.FC = () => (
  <List className={styles.searchBox}>
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
    <Input type={'text'} placeholder={'Search..'} />
  </List>
)

/** Renders the menu bar inside the navigation bar
 *   Provides a structured layout for the search box and navigation list */
const MenuBar = ({
  items,
  isOpen,
}: {
  items: { title: string; icon: IconDefinition; link: string }[]
  isOpen: boolean
}) => (
  <div className={styles.MenuBar}>
    <div className={styles.Menu}>
      <SearchBox />
      <NavList items={items} isOpen={isOpen} />
    </div>
  </div>
)

/**
 * This component renders the NavBar ->
 * Provides a structured layout for the navigation menu
 */

export function Nav() {
  const headerData = {
    name: 'Riyuan',
    image: pfpImage,
  }
  const navItems = [
    { title: 'Home', icon: faHouse, link: '/personal/riyuan' },
    { title: 'About', icon: faPerson, link: '/personal/riyuan#About' },
    { title: 'Project', icon: faFolder, link: '/personal/riyuan/projects' },
    { title: 'Contact', icon: faIdCard, link: '/personal/riyuan/contact' },
  ]
  const [isClosed, setIsClosed] = useState(true)
  const toggleShell = () => {
    setIsClosed(!isClosed)
  }

  return (
    <nav className={`${styles.nav} ${styles.dark}`}>
      <div className={`${styles.shell} ${isClosed ? styles.close : ''}`}>
        <CustomHeader
          data={headerData}
          toggleShell={toggleShell}
          isClosed={!isClosed}
        />
        <MenuBar items={navItems} isOpen={!isClosed} />
      </div>
    </nav>
  )
}
