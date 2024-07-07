import { Anchor } from '@mantine/core'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiMailSendLine } from 'react-icons/ri'

export function Contact() {
  return (
    <>
      <Anchor
        href="https://github.com/aruan20"
        target="_blank"
        mr="sm"
      >
        <FaGithub size={35} />
      </Anchor>
      <Anchor
        href="https://linkedin.com/in/amandaruan"
        target="_blank"
        mr="sm"
      >
        <FaLinkedin size={35} />
      </Anchor>
      <Anchor
        href="mailto:amandaruan262@gmail.com"
        target="_blank"
        mr="sm"
      >
        <RiMailSendLine size={35} />
      </Anchor>
    </>
  )
}
