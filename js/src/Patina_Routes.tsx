import { RootRoutes } from './Routes.tsx'
import { HomePage } from '@/pages/Home.page.tsx'

export const Patina_Routes = [
  // This is the base path where we can host the patina website
  // To do so, simply change the element/children to the patina ones
  {
    path: '/',
    description: 'Home',
    element: <HomePage />,
    // children: RootRoutes,
  },
  // This is the secondary path where we can host our personal websites
  {
    path: '/private',
    description: 'Test path',
    children: RootRoutes,
  },
]
