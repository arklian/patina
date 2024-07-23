import { PatinaRoutes } from '@/patina/Patina.routes.tsx'
import { PersonalRoutes } from './personal/Personal.routes.tsx'
import { PatinaPage } from '@/patina/Patina.page.tsx'
import { LilacPage } from '@/lilac/Lilac.page.tsx'
import { LilacRoutes } from '@/lilac/Lilac.routes.tsx'

export const Routes = [
  // Base path for hosting the patina website
  {
    path: '/',
    description: 'Home',
    element: <PatinaPage />,
    children: PatinaRoutes,
  },
  {
    path: '/lilac',
    description: 'lilac',
    element: <LilacPage />,
    children: LilacRoutes,
  },
  // Secondary path for hosting our personal websites
  {
    path: '/personal',
    description: 'Personal Websites',
    children: PersonalRoutes,
  },
  {
    path: '*',
    description: ' 404 Not Found',
    element: <div>{'404!!!'}</div>,
  },
]
