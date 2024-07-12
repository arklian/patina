import { BryanPage } from '@/personal/bryan/Bryan.page.tsx'
import { MainPage as BryanMainPage } from '@/personal/bryan/main/Main.page.tsx'
import { ProjectsPage as BryanProjectsPage } from '@/personal/bryan/projects/Projects.page.tsx'
import { FunPage as BryanFunPage } from '@/personal/bryan/fun/Fun.page.tsx'
import { AboutMePage as BryanAboutMePage } from '@/personal/bryan/aboutme/AboutMe.page.tsx'

export const BryanRoutes = {
  path: '/personal/bryan',
  description: "Bryan's Page",
  element: <BryanPage />,
  children: [
    {
      index: true,
      description: "Bryan's Main Page",
      element: <BryanMainPage />,
    },
    {
      path: 'projects',
      description: "Bryan's Projects Page",
      element: <BryanProjectsPage />,
    },
    {
      path: 'fun',
      description: "Bryan's Fun Page",
      element: <BryanFunPage />,
    },
    {
      path: 'aboutme',
      description: "Bryan's About Me Page",
      element: <BryanAboutMePage />,
    },
  ],
}
