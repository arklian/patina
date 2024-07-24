import { HomePage } from '@/lilac/home/Home.page.tsx'
import { Tasks } from '@/lilac/components/Task/tasks.tsx'

/**
 * Routes for the Lilac Website
 */
export const LilacRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: 'taskTesting',
    description: 'taskTesting',
    element: <Tasks />,
  },
]
