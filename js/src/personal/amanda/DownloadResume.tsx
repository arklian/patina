import { Button } from '@mantine/core'
import { IoMdDownload } from 'react-icons/io'
import resume from './resume/Resume.pdf'

export function DownloadResume() {
  return (
    <Button
      rightSection={<IoMdDownload size={20} />}
      size="md"
      component="a"
      href={resume}
      download
    >
      {'Resume'}
    </Button>
  )
}
