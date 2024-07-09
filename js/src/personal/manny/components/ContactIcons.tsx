import { Text, Box, Stack, rem } from '@mantine/core'
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react'
import classes from './ContactIcons.module.css'

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun
  title: React.ReactNode
  description: React.ReactNode
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div
      className={classes.wrapper}
      {...others}
    >
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text
          size="xs"
          className={classes.title}
        >
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  )
}

const MOCKDATA = [
  { title: 'Email', description: 'Manuelreyes1241@outlook.com', icon: IconAt },
  { title: 'Phone', description: '+1 (347) 317 3990', icon: IconPhone },
  { title: 'Address', description: 'New York City', icon: IconMapPin },
  { title: 'Working hours', description: '12 a.m. – 6 p.m.', icon: IconSun },
]

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon
      key={index}
      {...item}
    />
  ))
  return <Stack>{items}</Stack>
}
