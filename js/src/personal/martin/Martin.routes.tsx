import { MartinPage } from './Martin.page.tsx'
import { MartinAbout } from '@/personal/martin/about/About.page.tsx'
import { MartinContact } from '@/personal/martin/contact/Contact.page.tsx'
import { MartinMain } from '@/personal/martin/main/Main.page.tsx'
import { MartinProject } from '@/personal/martin/project/Projects.page.tsx'

export const MartinRoutes = {
  path: 'martin',
  description: "Martin's Page",
  element: <MartinPage />,
  children: [
    {
      index: true,
      description: 'Martin Main Page',
      element: <MartinMain />,
    },
    {
      path: 'about',
      description: 'Martin About Page',
      element: <MartinAbout />,
    },
    {
      path: 'contact',
      description: 'Martin Contact Page',
      element: <MartinContact />,
    },
    {
      path: 'project',
      description: 'Martin Project Page',
      element: <MartinProject />,
    },
  ],
}
