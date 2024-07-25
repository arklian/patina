import { Box } from '@mantine/core'
import { Heading } from '@/lilac/components/task/heading/Heading.tsx'
import { SubIssues } from '@/lilac/components/task/subissues/SubIssues.tsx'
import { Activity } from '@/lilac/components/task/activity/Activity.tsx'
import { Comment } from '@/lilac/components/task/comment/Comment.tsx'

export function Tasks() {
  return (
    <Box>
      <Heading />
      <SubIssues />
      <Activity />
      <Comment />
    </Box>
  )
}
