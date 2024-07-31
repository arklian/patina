import { Skeleton } from '@mantine/core'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

/**
 * Todo: Fill in
 */
export function MissionPage() {
  return (
    <ContentPage>
      {'Mission Page'}
      {/* Section 1 */}
      <Skeleton animate={false} height={70} width="100%" mb="xl" />
      {/* Section 2 */}
      <Skeleton animate={false} height={70} width="100%" mb="xl" />
      {/* Section 3 */}
      <Skeleton animate={false} height={70} width="100%" mb="xl" />
    </ContentPage>
  )
}
