import { NavLink, Space, Text } from '@mantine/core'
import { navItems } from './navData'

export function AdminNavbar() {
  return (
    <div>
      {navItems.map((item, index: number) => (
        <NavLink
          key={index}
          href={item.src}
          label={<Text size={'xl'}>{item.label}</Text>}
          leftSection={<Space w={10} />}
        />
      ))}
    </div>
  )
}
