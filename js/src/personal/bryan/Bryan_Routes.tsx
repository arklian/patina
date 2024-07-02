import { BryanPage } from '@/personal/bryan/Bryan.page.tsx'
import { MainPage as BryanMainPage } from '@/personal/bryan/Main/Main.page.tsx'
import { ProjectsPage as BryanProjectsPage } from '@/personal/bryan/Projects/Projects.page.tsx'
import { FunPage as BryanFunPage } from '@/personal/bryan/Fun/Fun.page.tsx'
import { AboutMePage as BryanAboutMePage } from '@/personal/bryan/AboutMe/AboutMe.page.tsx'

export const BryanRoutes = {
  path: '/bryan',
  description: "Bryan's Page",
  element: <BryanPage />,
  children: [
    {
      index: true,
      description: "Bryan's Main Page",
      element: <BryanMainPage />,
    },
    {
      path: '/bryan/projects',
      description: "Bryan's Projects Page",
      element: <BryanProjectsPage />,
    },
    {
      path: '/bryan/fun',
      description: "Bryan's Fun Page",
      element: <BryanFunPage />,
    },
    {
      path: '/bryan/aboutme',
      description: "Bryan's About Me Page",
      element: <BryanAboutMePage />,
    },
  ],
}
