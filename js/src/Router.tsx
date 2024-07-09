import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Patina_Routes } from './Patina_Routes.tsx'

const patina_router = createBrowserRouter(Patina_Routes)

export function Router() {
  return <RouterProvider router={patina_router} />
}
