import { MannyPage } from '@/personal/manny/Manny.page.tsx'
import { ResumePage } from '@/personal/manny/sections/Resume.page.tsx'
import { MainPage } from '@/personal/manny/sections/MannyMain.page.tsx'

export const MannyRoutes = {
  path: 'manny',
  description: "Manny's Page",
  element: <MannyPage />,
  children: [
    {
      index: true,
      description: "Manny's Home Page",
      element: <MainPage />,
    },
    {
      path: 'resume',
      description: "Manny's Resume Page",
      element: <ResumePage />,
    },
  ],
}
