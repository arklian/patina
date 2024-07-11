import { Box, Container, NavLink, Space, Text, Title } from '@mantine/core'
import { useState } from 'react'
import { Contact } from './Contact.tsx'
import { NavbarSection } from './Types.tsx'
import data from './Data.json'
import styles from './Amanda.module.css'

export function Sidebar() {
  const navbar = data.navbar as NavbarSection[]
  const [active, setActive] = useState(0)

  return (
    <div>
      <Container mb="2rem" p="0">
        <Title size="5rem">{'Amanda Ruan'}</Title>
        <Text size="1.5rem">{'Software Engineer'}</Text>
        <Text size="1.5rem" mt="1rem">
          {'CS Student @ RPI'}
        </Text>
      </Container>
      <Contact />
      <Space h="xl" />
      <Box w="10rem">
        {navbar.map((section: NavbarSection, index) => (
          <NavLink
            key={index}
            label={section.section}
            href={section.link}
            active={index === active}
            onClick={() => setActive(index)}
            classNames={{ label: styles.navbar }}
          >
            {section.section === 'about' && (
              <NavLink
                label={section.subsection.section}
                href={section.subsection.link}
                classNames={{ label: styles.navbar }}
              />
            )}
          </NavLink>
        ))}
      </Box>
    </div>
  )
}
