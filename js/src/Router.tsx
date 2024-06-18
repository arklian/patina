import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { HenryPage } from './personal/_henry/Henry.page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/henry',
    element: <HenryPage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
