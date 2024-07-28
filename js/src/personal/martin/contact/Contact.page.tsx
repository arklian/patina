import {
  Button,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import classes from '@/personal/martin/Martin.module.css'

interface contactProps {
  title: string
  desc: string
}
const contactData = [
  { title: 'Email', desc: 'm2msquared47@gmail.com' },
  { title: 'Phone', desc: '(123)-456-6789' },
  { title: 'Location', desc: 'Seattle, WA' },
  { title: 'Common Hours', desc: 'Weekdays 10am-8pm PST' },
]

function ContactLine({ title, desc }: contactProps) {
  return (
    <div>
      <Title order={3}>{title}</Title>
      <Text>{desc}</Text>
    </div>
  )
}

export function MartinContact() {
  const details = contactData.map((item) => (
    <ContactLine title={item.title} desc={item.desc} />
  ))
  return (
    <>
      <div className={classes.contactWrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title>{'Contact'}</Title>
            <Text>
              {'You can get a hold of me using my contact info here.'}
            </Text>
            <Stack mt="lg">{details}</Stack>
          </div>
          <div>
            <TextInput
              required
              label="Email"
              placeholder="jsmith@gmail.com"
              mt="sm"
            />
            <TextInput required label="Name" placeholder="John Smith" mt="sm" />
            <Textarea
              required
              label="Message"
              placeholder="Type your message here..."
              minRows={4}
              mt="sm"
            />
            <Group justify="flex-end" mt="sm">
              <Button data-disabled>{'Send'}</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </>
  )
}
