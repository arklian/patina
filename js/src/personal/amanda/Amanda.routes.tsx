import { AmandaPage } from './Amanda.page.tsx'
import { ResumePage } from './resume/Resume.page.tsx'
import { MainPage } from './main/Main.page.tsx'

export const AmandaRoutes = {
  path: 'amanda/',
  description: "Amanda's Page",
  element: <AmandaPage />,
  children: [
    {
      index: true,
      description: "Amanda's Main Page",
      element: <MainPage />,
    },
    {
      path: 'resume',
      description: "Amanda's Resume",
      element: <ResumePage />,
    },
  ],
}
