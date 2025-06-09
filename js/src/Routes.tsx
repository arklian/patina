import { PatinaRoutes } from '@/patina/Patina.routes.tsx'
import { PatinaPage } from '@/patina/Patina.page.tsx'
import { LilacPage } from '@/lilac/Lilac.page.tsx'
import { LilacRoutes } from '@/lilac/Lilac.routes.tsx'
import { AdminMainPage } from '@/patina/admin/AdminMain.page.tsx'
import { AdminRoutes } from '@/patina/admin/Admin.routes.tsx'

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
  {
    path: '/admin',
    description: 'admin',
    element: <AdminMainPage />,
    children: AdminRoutes,
  },
  {
    path: '*',
    description: ' 404 Not Found',
    element: <div>{'404!!!'}</div>,
  },
]
