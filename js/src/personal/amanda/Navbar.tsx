import { NavLink } from '@mantine/core'

export function Navbar() {
  return (
    <>
      <NavLink
        label="about"
        href="#about"
      />
      <NavLink
        label="projects"
        href="#projects"
      />
      <NavLink
        label="misc"
        href="#misc"
      />
      <NavLink
        label="contact"
        href="#contact"
      />
    </>
  )
}
