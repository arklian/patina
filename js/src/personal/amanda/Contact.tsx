import { Anchor } from '@mantine/core'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function Contact() {
  return (
    <>
      <Anchor
        href="https://google.com"
        target="_blank"
      >
        <FaGithub size={35} />
      </Anchor>
      <Anchor
        href="https://google.com"
        target="_blank"
      >
        <FaLinkedin size={35} />
      </Anchor>
      <Anchor
        href="https://google.com"
        target="_blank"
      >
        <MdEmail size={35} />
      </Anchor>
    </>
  )
}
