import { NavLink } from '@mantine/core'
import { useState } from 'react'
import data from './Data.json'
import { Section } from './Section.tsx'

export function Navbar() {
  const info = data.info as Section[]
  const [active, setActive] = useState(0)

  return (
    <>
      {info.map((section: Section, index) => (
        <NavLink
          key={index}
          label={section.title}
          href={section.link}
          active={index === active}
          onClick={() => setActive(index)}
        />
      ))}
    </>
  )
}
