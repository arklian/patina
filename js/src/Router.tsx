import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootRoutes } from './Routes.tsx'

const router = createBrowserRouter(RootRoutes)

export function Router() {
  return <RouterProvider router={router} />
}
