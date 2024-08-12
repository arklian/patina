import { RiyuanPage } from '@/personal/riyuan/Riyuan.page.tsx'
import { HomePage } from '@/personal/riyuan/pages/home/Home.page.tsx'
import { AboutPage } from '@/personal/riyuan/pages/about/Main.page.tsx'
import { ProjectsPage } from '@/personal/riyuan/pages/project/Projects.page.tsx'
import { ContactPage } from '@/personal/riyuan/pages/contact/Contact.page.tsx'

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
      label: 'home',
      element: <HomePage />,
    },
    {
      path: 'about',
      label: 'about',
      element: <AboutPage />,
    },
    {
      path: 'projects',
      label: 'projects',
      element: <ProjectsPage />,
    },
    {
      path: 'contact',
      label: 'contact',
      element: <ContactPage />,
    },
  ],
}
