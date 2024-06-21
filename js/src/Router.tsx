import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { HenryPage } from './personal/_henry/Henry.page.tsx'
import { MalihaPage } from './personal/_maliha/Maliha.page.tsx'
import { AmandaPage } from './personal/amanda/Amanda.page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/henry',
    element: <HenryPage />,
  },
  {
    path: '/maliha',
    element: <MalihaPage />,
  },
  {
    path: '/amanda',
    element: <AmandaPage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
