import { Button } from '@mantine/core'
import { IoMdDownload } from 'react-icons/io'

export function DownloadResume() {
  return (
    <Button
      rightSection={<IoMdDownload size={20} />}
      size="md"
      component="a"
      href="https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/amanda/Resume%2020240724%20(v5).pdf"
      download
    >
      {'Resume'}
    </Button>
  )
}
