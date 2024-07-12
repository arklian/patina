import { RiyuanPage } from '@/personal/riyuan/Riyuan.page.tsx'
import { RiyuanMainPage } from '@/personal/riyuan/components/main/RiyuanMain.page.tsx'
import { RiyuanProjectsPage } from '@/personal/riyuan/components/project/RiyuanProjectsPage.tsx'
import { RiyuanContactPages } from '@/personal/riyuan/components/contact/RiyuanContactPages.tsx'

/**
 * This component provide a routes in my page ->
 * Exports routes to different pages in my website
 * Defines the navigation structure for the Riyuan's section
 */
export const RiyuanRoutes = {
  path: 'riyuan',
  element: <RiyuanPage />,
  description: "Riyuan's Page",
  children: [
    {
      index: true,
      element: <RiyuanMainPage />,
    },
    {
      path: 'projects',
      element: <RiyuanProjectsPage />,
    },
    {
      path: 'contact',
      element: <RiyuanContactPages />,
    },
  ],
}
