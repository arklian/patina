import { AmandaPage } from './personal/amanda/Amanda.page.tsx'
import { BryanPage } from './personal/bryan/Bryan.page.tsx'
import { HaokingPage } from './personal/haoking/Haoking.page.tsx'
import { HenryPage } from './personal/_henry/Henry.page.tsx'
import { HomePage } from './pages/Home.page'
import { JionghaoPage } from './personal/jionghao/Jionghao.page.tsx'
import { KaziPage } from './personal/kazi/Kazi.page.tsx'
import { KellyPage } from './personal/kelly/Kelly.page.tsx'
import { MalihaPage } from './personal/maliha/Maliha.page.tsx'
import { MannyPage } from './personal/manny/Manny.page.tsx'
import { RiyuanPage } from './personal/riyuan/Riyuan.page.tsx'
import { TonyPage } from './personal/tony/Tony.page.tsx'

export const RootRoutes = [
  {
    path: '/',
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: '/henry',
    description: "Henry's Page",
    element: <HenryPage />,
  },
  {
    path: '/amanda',
    description: "Amanda's Page",
    element: <AmandaPage />,
  },
  {
    path: '/bryan',
    description: "Bryan's Page",
    element: <BryanPage />,
  },
  {
    path: '/haoking',
    description: "Haoking's Page",
    element: <HaokingPage />,
  },
  {
    path: '/jionghao',
    description: "Jionghao's Page",
    element: <JionghaoPage />,
  },
  {
    path: '/kazi',
    description: "Kazi's Page",
    element: <KaziPage />,
  },
  {
    path: '/kelly',
    description: "Kelly's Page",
    element: <KellyPage />,
  },
  {
    path: '/maliha',
    description: "Maliha's Page",
    element: <MalihaPage />,
  },
  {
    path: '/manny',
    description: "Manny's Page",
    element: <MannyPage />,
  },
  {
    path: '/riyuan',
    description: "Riyuan's Page",
    element: <RiyuanPage />,
  },
  {
    path: '/tony',
    description: "Tony's Page",
    element: <TonyPage />,
  },
]
