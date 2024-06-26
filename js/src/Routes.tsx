import { RouteObject } from 'react-router-dom'
import { AmandaPage } from './personal/amanda/Amanda.page.tsx'
import { BryanPage } from './personal/bryan/Bryan.page.tsx'
import { HaokingPage } from './personal/haoking/Haoking.page.tsx'
import { HenryPage } from './personal/_henry/Henry.page.tsx'
import { HomePage } from './pages/Home.page'
import { JionghaoPage } from './personal/jionghao/Jionghao.page.tsx'
import { KaziPage } from './personal/kazi/Kazi.page.tsx'
import { KellyPage } from './personal/kelly/Kelly.page.tsx'
import { MalihaPage } from './personal/maliha/Maliha.page.tsx'
import { MannyPage } from './personal/Manny/Manny.page.tsx'
import { RiyuanPage } from './personal/riyuan/Riyuan.page.tsx'
import { TonyPage } from './personal/tony/Tony.page.tsx'

export const RootRoutes: RouteObject[] = [
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
    element: <JionghaoPage />,
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
]
