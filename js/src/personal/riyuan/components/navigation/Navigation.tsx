import React, { useState } from 'react'
import { Button, Image, List, Input, Stack, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faHouse,
  faCircle,
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

const CustomHeader = ({ data, toggleShell, isClosed }: CustomHeaderProps) => (
  <header>
    <div className={styles.ImageText}>
      <span className={styles.image}>
        <Image
          src={data.image}
          alt={'Profile pic'}
        />
      </span>
      {isClosed && (
        <div className={`${styles.text} ${styles.logoText}`}>
          <Text className={styles.text}>{`${data.name}'s`}</Text>
          <Text className={styles.text}>{'Web'}</Text>
        </div>
      )}
    </div>
    <Button
      className={styles.toggle}
      onClick={toggleShell}
    >
      <FontAwesomeIcon icon={faCircle} />
    </Button>
  </header>
)

const NavItem = ({
  title,
  icon,
  isOpen,
}: {
  title: string
  icon: IconDefinition
  isOpen: boolean
}) => (
  <div className={styles.navLink}>
    <Link
      to={`#${title}`}
      className={styles.navItem}
    >
      <FontAwesomeIcon
        icon={icon}
        className={styles.icon}
      />
      {isOpen && <span className={`${styles.text}`}>{title}</span>}
    </Link>
  </div>
)
const NavList = ({
  items,
  isOpen,
}: {
  items: { title: string; icon: IconDefinition }[]
  isOpen: boolean
}) => (
  <Stack className={styles.navList}>
    {items.map((item, index) => (
      <NavItem
        key={index}
        title={item.title}
        icon={item.icon}
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
    <Input
      type={'text'}
      placeholder={'Search..'}
    />
  </List>
)

const MenuBar = ({
  items,
  isOpen,
}: {
  items: { title: string; icon: IconDefinition }[]
  isOpen: boolean
}) => (
  <div className={styles.MenuBar}>
    <div className={styles.Menu}>
      <SearchBox />
      <NavList
        items={items}
        isOpen={isOpen}
      />
    </div>
  </div>
)

export function Nav() {
  const headerData = {
    name: 'Riyuan',
    image: pfpImage,
  }
  const navItems = [{ title: 'Home', icon: faHouse }]
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
        <MenuBar
          items={navItems}
          isOpen={!isClosed}
        />
      </div>
    </nav>
  )
}
