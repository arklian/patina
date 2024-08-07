import { Box } from '@mantine/core'
import { TaskEditor } from '@/lilac/components/task/taskeditor/TaskEditor.tsx'
import { SubIssues } from '@/lilac/components/task/subissues/SubIssues.tsx'
import { Activity } from '@/lilac/components/task/activity/Activity.tsx'
import { Comment } from '@/lilac/components/task/comment/Comment.tsx'

export function Tasks() {
  return (
    <Box>
      <TaskEditor />
      <SubIssues />
      <Activity />
      <Comment />
    </Box>
  )
}
