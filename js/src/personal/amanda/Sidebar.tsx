import { Box, Container, NavLink, Space, Text, Title } from '@mantine/core'
import { useState } from 'react'
import data from './Data.json'
import { Section } from './Types.tsx'
import styles from './Amanda.module.css'
import { Contact } from './Contact.tsx'

export function Sidebar() {
  const info = data.info as Section[]
  const [active, setActive] = useState(0)

  return (
    <div>
      <Container
        mb="2rem"
        p="0"
      >
        <Title size="5rem">{'Amanda Ruan'}</Title>
        <Text size="1.5rem">{'Software Engineer'}</Text>
        <Text
          size="1.5rem"
          mt="1rem"
        >
          {'CS Student @ RPI'}
        </Text>
      </Container>
      <Contact />
      <Space h="xl" />
      <Box w="10rem">
        {info.map((section: Section, index) => (
          <NavLink
            key={index}
            label={section.title}
            href={section.link}
            active={index === active}
            onClick={() => setActive(index)}
            classNames={{ label: styles.navbar }}
          />
        ))}
      </Box>
    </div>
  )
}
