import { PatinaRoutes } from '@patina/Patina.routes.tsx'
import { PersonalRoutes } from './personal/Personal.routes.tsx'
import { PatinaPage } from '@/patina/Patina.page.tsx'

export const Routes = [
  // Base path for hosting the patina website
  {
    path: '/',
    description: 'Home',
    element: <PatinaPage />,
    children: PatinaRoutes,
  },
  // Secondary path for hosting our personal websites
  {
    path: '/personal',
    description: 'Personal Websites',
    children: PersonalRoutes,
  },
]
