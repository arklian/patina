import { Button } from '@mantine/core'
import { IoMdDownload } from 'react-icons/io'

export function DownloadResume() {
  return (
    <Button
      rightSection={<IoMdDownload size={20} />}
      size="md"
      component="a"
      href="https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/amanda/AmandaRuanResume.pdf"
      download
    >
      {'Resume'}
    </Button>
  )
}
