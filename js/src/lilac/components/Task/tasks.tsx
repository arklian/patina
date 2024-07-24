import { Container } from '@mantine/core'
import { Heading } from '@/lilac/components/Task/heading/Heading.tsx'
import { SubIssues } from '@/lilac/components/Task/subissues/SubIssues.tsx'
import { Activity } from '@/lilac/components/Task/activity/Activity.tsx'
import { Comment } from '@/lilac/components/Task/comment/Comment.tsx'

export function Tasks() {
  return (
    <Container>
      <Heading />
      <SubIssues />
      <Activity />
      <Comment />
    </Container>
  )
}
