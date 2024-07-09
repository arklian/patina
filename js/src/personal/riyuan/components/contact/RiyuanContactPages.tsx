import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
} from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from '@tabler/icons-react'
import { ContactIconsList } from './ContactIcons'
import classes from './ContactUs.module.css'
import styles from '@/personal/riyuan/Riyuan.module.css'

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram]

/**
 * Function to render the Contact Pages ->
 * Provides visitors with information on how to get in touch with me
 */
export function RiyuanContactPages() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon
        size="1.4rem"
        stroke={1.5}
      />
    </ActionIcon>
  ))
  return (
    <div className={styles.container}>
      <Container>
        <Title
          className={styles.title}
          ta="left"
          mt={100}
        >
          {'Contact Page'}
        </Title>
        <div className={classes.wrapper}>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={50}
          >
            <div>
              <Title className={classes.title}>{'Contact us'}</Title>
              <Text
                className={classes.description}
                mt="sm"
                mb={30}
              >
                {'Leave your email and we will get back to you within 24 hours'}
              </Text>

              <ContactIconsList />

              <Group mt="xl">{icons}</Group>
            </div>
            <div className={classes.form}>
              <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <TextInput
                label="Name"
                placeholder="Riyuan Liu"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />
              <Textarea
                required
                label="Your message"
                placeholder="I want to connect"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              />

              <Group
                justify="flex-end"
                mt="md"
              >
                <Button className={classes.control}>{'Send message'}</Button>
              </Group>
            </div>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  )
}
