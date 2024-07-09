import { RootRoutes } from './personal/PersonalRoutes.tsx'
import { WelcomePage } from '@/patina/Welcome.page.tsx'

export const Routes = [
  // This is the base path where we can host the patina website
  // To do so, simply change the element/children to the patina ones
  {
    path: '/',
    description: 'Home',
    element: <WelcomePage />,
    // children: RootRoutes,
  },
  // This is the secondary path where we can host our personal websites
  {
    path: '/personal',
    description: 'Personal Websites',
    children: RootRoutes,
  },
]
