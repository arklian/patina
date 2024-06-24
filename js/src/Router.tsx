import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home.page'
import { HenryPage } from './personal/_henry/Henry.page.tsx'
import { AmandaPage } from './personal/amanda/Amanda.page.tsx'
import { BryanPage } from './personal/bryan/Bryan.page.tsx'
import { KaziPage } from './personal/kazi/Kazi.page.tsx'
import { MannyPage } from './personal/Manny/Manny.page.tsx'
import { MalihaPage } from './personal/_maliha/Maliha.page.tsx'
import { JhPage } from './personal/jionghao/Jionghao.page.tsx'
import { HaokingPage } from './personal/Haoking/Haoking.page.tsx'
import { KellyPage } from './personal/kelly/Kelly.page.tsx'
import { RiyuanPage } from './personal/riyuan/Riyuan.page.tsx'
import { TonyPage } from './personal/tony/Tony.page.tsx';

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
    path: '/tony',
    element: <TonyPage />,
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
    element: <KaziPage />,
  },
  {
    path: '/manny',
    element: <MannyPage />,
  },
  {
    path: '/maliha',
    element: <MalihaPage />,
  },
  {
    path: '/jionghao',
    element: <JhPage />,
  },
  {
    path: '/haoking',
    element: <HaokingPage />,
  },
  {
    path: '/kelly',
    element: <KellyPage />,
  },
  {
    path: '/riyuan',
    element: <RiyuanPage />,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
