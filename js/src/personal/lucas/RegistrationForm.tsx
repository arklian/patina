import {
  Text,
  Paper,
  Container,
  TextInput,
  PasswordInput,
  Button,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { PropsWithChildren, useEffect, useState } from 'react'
import classes from '@/personal/lucas/Lucas.module.css'
import { useCookies } from 'react-cookie'

const kMinLength = 8
const kMinNumDigits = 4
const kDigitSum = 25
const hasAtLeastNLength = (password: string) =>
  (password?.length ?? 0) >= kMinLength
const hasAtLeastNDigits = (password: string) =>
  (password?.match(/(\d)/g)?.length ?? 0) >= kMinNumDigits
const hasDigitSumOf = (password: string) => {
  const digits = password?.match(/(\d)/g) ?? []
  return (
    digits
      .map((digit) => parseInt(digit) ?? 0)
      .reduce((runningSum, digit) => runningSum + digit, 0) == kDigitSum
  )
}
const hasMentorName = (password: string) =>
  /lucas|henry|cinthia|kevin|andrea|celina/i.test(password)

type PasswordRequirement = {
  name: string
  meetRequirementFn: (password: string) => boolean
  message: string
}

const passwordRequirements: PasswordRequirement[] = [
  {
    name: 'pwReqLength',
    meetRequirementFn: hasAtLeastNLength,
    message: `Has at least ${kMinLength} characters.`,
  },
  {
    name: 'pwReqNumDigits',
    meetRequirementFn: hasAtLeastNDigits,
    message: `Includes at least ${kMinNumDigits} digits.`,
  },
  {
    name: 'pwReqDigitsSum',
    meetRequirementFn: hasDigitSumOf,
    message: `The digits must sum to ${kDigitSum}`,
  },
  {
    name: 'pwReqIncludeMentorName',
    meetRequirementFn: hasMentorName,
    message: `Includes the name of one Patina Network mentor/board member.`,
  },
]

const usePasswordRequirementsGenerator = (): [
  PasswordRequirement[],
  () => void,
] => {
  const [cookies, setCookie] = useCookies(['seenPwReqsIndex'])

  const reqIndex = cookies?.seenPwReqsIndex ?? 1
  return [
    passwordRequirements.slice(0, reqIndex),
    () => {
      if (reqIndex < passwordRequirements.length) {
        setCookie('seenPwReqsIndex', reqIndex + 1, { domain: 'localhost' })
      }
    },
  ]
}

const RequirementMessage = ({
  meetsRequirement,
  children,
}: PropsWithChildren<{ meetsRequirement: boolean }>) => (
  <Text className={meetsRequirement ? classes.PwReqMet : classes.PwReqUnmet}>
    {children}
  </Text>
)

export const RegistrationForm = ({
  onRegister,
}: {
  onRegister: () => void
}) => {
  const [pwVisibility, { toggle: togglePwVisibility }] = useDisclosure(false)
  const [password, setPassword] = useState('')
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false)
  const [passwordRequirements, nextPwRequirement]: [
    PasswordRequirement[],
    () => void,
  ] = usePasswordRequirementsGenerator()
  const messages: ReturnType<typeof RequirementMessage>[] =
    passwordRequirements.map(({ name, meetRequirementFn, message }) => (
      <RequirementMessage
        key={name}
        meetsRequirement={meetRequirementFn(password)}
      >
        {message}
      </RequirementMessage>
    ))
  const meetsAllReqs = messages.reduce(
    (running, value) => running && value.props?.meetsRequirement,
    true,
  )
  if (messages[messages.length - 1]?.props.meetsRequirement) {
    nextPwRequirement()
  }
  return (
    <Container size={420}>
      <Paper
        withBorder
        p="sm"
      >
        <TextInput
          label="Email"
          placeholder=""
        />
        <PasswordInput
          label="Password"
          placeholder="Valid password"
          required
          visible={pwVisibility}
          onVisibilityChange={togglePwVisibility}
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          onFocus={() => setShowPasswordRequirements(true)}
        />
        {!showPasswordRequirements ? null : (
          <div>
            <Text>Password must meet the following requirements:</Text>
            {messages}
          </div>
        )}
        <Button
          disabled={!meetsAllReqs}
          onClick={onRegister}
        >
          Register
        </Button>
      </Paper>
    </Container>
  )
}
