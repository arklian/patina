import { PersonalRoutes } from './personal/PersonalRoutes.tsx'
import { PatinaPage } from '@/patina/Patina.page.tsx'
import { AmandaPage } from './personal/amanda/Amanda.page.tsx'
import { BryanRoutes } from './personal/bryan/BryanRoutes.tsx'
import { HaokingPage } from './personal/haoking/Haoking.page.tsx'
import { HenryPage } from './personal/_henry/Henry.page.tsx'
import { HomePage } from './pages/Home.page'
import { JionghaoPage } from './personal/jionghao/Jionghao.page.tsx'
import { KaziPage } from './personal/kazi/Kazi.page.tsx'
import { KellyPage } from './personal/kelly/Kelly.page.tsx'
import { MalihaPage } from './personal/maliha/Temp.tsx'
import { MannyPage } from './personal/manny/Manny.page.tsx'
import { ResumePage as MannyResume } from '@/personal/manny/pages/Resume.tsx'
import { About as MannyAboutMePage } from '@/personal/manny/pages/About.tsx'
import { Contact as MannyContactMePage } from '@/personal/manny/pages/Contact.tsx'
import { RiyuanPage } from './personal/riyuan/Riyuan.page.tsx'
import { TonyPage } from './personal/tony/Tony.page.tsx'

export const Routes = [
  // Base path for hosting the patina website
  {
    path: '/',
    description: 'Home',
    element: <PatinaPage />,
  },
  // Secondary path for hosting our personal websites
  {
    path: '/personal',
    description: 'Personal Websites',
    children: PersonalRoutes,
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
  BryanRoutes,
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
    path: '/manny/resume',
    description: "Manny's Resume Page",
    element: <MannyResume />,
  },
  {
    path: '/manny/aboutme',
    description: "Manny's About Me Page",
    element: <MannyAboutMePage />,
  },
  {
    path: '/manny/contact',
    description: "Manny's Contact Me Page",
    element: <MannyContactMePage />,
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
