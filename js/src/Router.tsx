import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { HenryPage } from './personal/_henry/Henry.page.tsx'
import { AmandaPage } from './personal/amanda/Amanda.page.tsx'
import { BryanPage } from './personal/bryan/Bryan.page.tsx'
import { KaziPage } from './personal/kazi/Kazi.page.tsx'

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
    path: '/amanda',
    element: <AmandaPage />,
  },
  {
    path: '/bryan',
    element: <BryanPage />,
  },
  {
    path: '/kazi',
    element: <KaziPage />
  }
])

export function Router() {
  return <RouterProvider router={router} />
}
