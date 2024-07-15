import { PersonalRoutes } from './personal/PersonalRoutes.tsx'
import { PatinaPage } from '@/patina/Patina.page.tsx'
import { Volunteer } from '@/patina/involved/volunteer/Volunteer.page.tsx'

export const Routes = [
  // Base path for hosting the patina website
  {
    path: '/',
    description: 'Home',
    element: <PatinaPage />,
  },
  // Secondary path for hosting our personal websites
  {
    path: '/personal',
    description: 'Personal Websites',
    children: PersonalRoutes,
  },
  {
    path: '/volunteer',
    description: 'Volunteering Opportunities',
    element: <Volunteer />,
  },
]
