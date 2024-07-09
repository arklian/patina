import { PersonalRoutes } from './personal/PersonalRoutes.tsx'
import { PatinaPage } from '@/patina/Patina.page.tsx'

export const Routes = [
  // This is the base path where we can host the patina website
  // To do so, simply change the element/children to the patina ones
  {
    path: '/',
    description: 'Home',
    element: <PatinaPage />,
    // children: RootRoutes,
  },
  // This is the secondary path where we can host our personal websites
  {
    path: '/personal',
    description: 'Personal Websites',
    children: PersonalRoutes,
  },
]
