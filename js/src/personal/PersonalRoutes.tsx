import { AmandaRoutes } from './amanda/AmandaRoutes.tsx'
import { BryanRoutes } from './bryan/BryanRoutes.tsx'
import { HaokingPage } from './haoking/Haoking.page.tsx'
import { HenryPage } from './_henry/Henry.page.tsx'
import { HomePage } from '../pages/Home.page.tsx'
import { JionghaoPage } from './jionghao/Jionghao.page.tsx'
import { KaziPage } from './kazi/Kazi.page.tsx'
import { KellyPage } from './kelly/Kelly.page.tsx'
import { MalihaPage } from './maliha/Temp.tsx'
import { MannyPage } from './manny/Manny.page.tsx'
import { ResumePage as MannyResume } from '@/personal/manny/pages/Resume.tsx'
import { About as MannyAboutMePage } from '@/personal/manny/pages/About.tsx'
import { RiyuanPage } from './riyuan/Riyuan.page.tsx'
import { TonyPage } from './tony/Tony.page.tsx'
import { Contact as MannyContactMePage } from '@/personal/manny/pages/Contact.tsx'

/** When adding new routes, please follow the following paradigm:
 * path: 'bryan',
 * description: "XYZ",
 * element: <homepage element />,
 * -----------------------------------------------------------------
 * If you have multiple sites on your homepage, please put them all as children
 * of a single element (check personal/bryan/BryanRoutes.tsx for reference)
 * *simply remove the 'element: <BryanPage />' line if you have no global page framework
 */
export const PersonalRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: '/personal/henry',
    description: "Henry's Page",
    element: <HenryPage />,
  },
  AmandaRoutes,
  BryanRoutes,
  {
    path: '/personal/haoking',
    description: "Haoking's Page",
    element: <HaokingPage />,
  },
  {
    path: '/personal/jionghao',
    description: "Jionghao's Page",
    element: <JionghaoPage />,
  },
  {
    path: '/personal/kazi',
    description: "Kazi's Page",
    element: <KaziPage />,
  },
  {
    path: '/personal/kelly',
    description: "Kelly's Page",
    element: <KellyPage />,
  },
  {
    path: '/personal/maliha',
    description: "Maliha's Page",
    element: <MalihaPage />,
  },
  {
    path: '/personal/manny',
    description: "Manny's Page",
    element: <MannyPage />,
  },
  {
    path: '/personal/manny/resume',
    description: "Manny's Resume Page",
    element: <MannyResume />,
  },
  {
    path: '/personal/manny/aboutme',
    description: "Manny's About Me Page",
    element: <MannyAboutMePage />,
  },
  {
    path: '/personal/manny/contact',
    description: "Manny's Contact Me Page",
    element: <MannyContactMePage />,
  },
  {
    path: '/personal/riyuan',
    description: "Riyuan's Page",
    element: <RiyuanPage />,
  },
  {
    path: '/personal/tony',
    description: "Tony's Page",
    element: <TonyPage />,
  },
]
