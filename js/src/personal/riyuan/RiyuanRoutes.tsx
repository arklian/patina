import { RiyuanPage } from '@/personal/riyuan/Riyuan.page.tsx'
import { MainPage } from '@/personal/riyuan/components/main/Main.page.tsx'
import { ProjectsPage } from '@/personal/riyuan/components/project/Projects.page.tsx'
import { ContactPage } from '@/personal/riyuan/components/contact/Contact.page.tsx'

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
      element: <MainPage />,
    },
    {
      path: 'projects',
      element: <ProjectsPage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
  ],
}
