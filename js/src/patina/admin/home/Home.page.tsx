import { Container, Skeleton, Stack } from '@mantine/core'

export function HomePage() {
  return (
    <Container>
      <Stack>
        {'Home Page'}
        {/* Section 1 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
        {/* Section 2 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
        {/* Section 3 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </Stack>
    </Container>
  )
}
