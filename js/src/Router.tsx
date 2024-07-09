import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes } from './Routes.tsx'

const patinaRouter = createBrowserRouter(Routes)

export function Router() {
  return <RouterProvider router={patinaRouter} />
}
